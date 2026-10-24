import http.server
import socketserver
import urllib.parse
import json
import os
import re
import sys
import threading
import mimetypes
import yt_dlp

PORT = int(os.environ.get('PORT', 8080))
CACHE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'cache')
os.makedirs(CACHE_DIR, exist_ok=True)

# In-memory metadata cache to avoid re-extracting
meta_cache = {}

def sanitize_filename(name):
    return re.sub(r'[^\w\-_.]', '_', name)

def get_full_audio(query, track_id=None):
    safe_id = sanitize_filename(track_id) if track_id else sanitize_filename(query)
    
    # Check if any matching audio file exists in cache
    for ext in ['m4a', 'mp3', 'webm', 'ogg']:
        cached_path = os.path.join(CACHE_DIR, f"{safe_id}.{ext}")
        if os.path.exists(cached_path) and os.path.getsize(cached_path) > 10000:
            cached_dur = meta_cache.get(safe_id, {}).get('duration', 0)
            return {
                'success': True,
                'cached': True,
                'src': f"cache/{safe_id}.{ext}",
                'duration': cached_dur or 180
            }

    # Not cached, use yt_dlp to search and download
    out_tmpl = os.path.join(CACHE_DIR, f"{safe_id}.%(ext)s")
    ydl_opts = {
        'format': 'bestaudio[ext=m4a]/bestaudio/best',
        'outtmpl': out_tmpl,
        'quiet': True,
        'no_warnings': True,
        'noplaylist': True,
    }

    try:
        search_target = f"ytsearch1:{query} audio"
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(search_target, download=True)
            if 'entries' in info and len(info['entries']) > 0:
                first = info['entries'][0]
                duration = first.get('duration', 180)
                title = first.get('title', query)
                ext = first.get('ext', 'm4a')
            else:
                duration = info.get('duration', 180)
                title = info.get('title', query)
                ext = info.get('ext', 'm4a')

            actual_file = f"{safe_id}.{ext}"
            meta_cache[safe_id] = {'duration': duration, 'title': title}

            return {
                'success': True,
                'cached': False,
                'src': f"cache/{actual_file}",
                'duration': duration,
                'title': title
            }
    except Exception as e:
        print(f"yt_dlp error for '{query}': {e}", file=sys.stderr)
        return {'success': False, 'error': str(e)}

class MusicAppHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def copyfile_range(self, infile, outfile, byte_range):
        start, end = byte_range
        infile.seek(start)
        remaining = end - start + 1
        buffer_size = 64 * 1024
        while remaining > 0:
            chunk = infile.read(min(remaining, buffer_size))
            if not chunk:
                break
            try:
                outfile.write(chunk)
            except (ConnectionResetError, BrokenPipeError):
                break
            remaining -= len(chunk)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)

        # 1. API: /api/full-track
        if parsed.path == '/api/full-track':
            params = urllib.parse.parse_qs(parsed.query)
            query = params.get('q', [''])[0]
            track_id = params.get('id', [''])[0]

            if not query:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Missing query parameter q'}).encode('utf-8'))
                return

            result = get_full_audio(query, track_id)
            self.send_response(200 if result.get('success') else 500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))
            return

        # 2. File serving with Full HTTP 206 Partial Content (Byte Range Support)
        # Required for browsers to scrub, seek, and stream audio smoothly
        path = self.translate_path(self.path)
        if os.path.isfile(path):
            file_size = os.path.getsize(path)
            content_type, _ = mimetypes.guess_type(path)
            if not content_type:
                content_type = 'application/octet-stream'

            range_header = self.headers.get('Range')
            if range_header and range_header.startswith('bytes='):
                try:
                    ranges = range_header[6:].split('-')
                    start = int(ranges[0]) if ranges[0] else 0
                    end = int(ranges[1]) if len(ranges) > 1 and ranges[1] else file_size - 1
                    end = min(end, file_size - 1)

                    if start > end or start >= file_size:
                        self.send_response(416)
                        self.send_header('Content-Range', f'bytes */{file_size}')
                        self.end_headers()
                        return

                    self.send_response(206)
                    self.send_header('Content-Type', content_type)
                    self.send_header('Accept-Ranges', 'bytes')
                    self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
                    self.send_header('Content-Length', str(end - start + 1))
                    self.end_headers()

                    with open(path, 'rb') as f:
                        self.copyfile_range(f, self.wfile, (start, end))
                    return
                except Exception as e:
                    pass

            self.send_response(200)
            self.send_header('Content-Type', content_type)
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Content-Length', str(file_size))
            self.end_headers()
            with open(path, 'rb') as f:
                self.copyfile(f, self.wfile)
            return

        return super().do_GET()

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

def run():
    server_address = ('', PORT)
    httpd = ThreadedHTTPServer(server_address, MusicAppHandler)
    print(f"Music Player Server running with Full Audio API on http://localhost:{PORT}")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
