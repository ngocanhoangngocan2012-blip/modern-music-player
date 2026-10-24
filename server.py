import http.server
import socketserver
import urllib.parse
import json
import os
import re
import sys
import threading
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

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
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

        # Serve static files (including byte-range support from SimpleHTTPRequestHandler in Python 3)
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
