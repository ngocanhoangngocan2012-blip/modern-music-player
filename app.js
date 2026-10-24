/**
 * MUSIC PLAYER APPLICATION
 * - Pixel-perfect UI matching user designs (ROAR & Temporary)
 * - DM Sans typography
 * - Dynamic blurred background with intelligent brightness adaptation
 * - Cascading staggered lyrics animation with spring scale effect & real-time sync
 * - Progressive edge-fade crop & ping-pong marquee for long song titles
 * - Top & bottom linear gradient opacity masks for lyrics
 * - Fullscreen expand/collapse toggle
 * - Interactive volume button with mute toggle, white thumb handle & floating capsule slider
 * - Enhanced dashed upload button with ID3 & LRC parsing + Drag & Drop
 * - Real audio files & real synced lyrics
 */


  // ==========================================================================
  // PLAYLIST DATA (Real audio & Synced lyrics)
  // ==========================================================================
  const playlist = [
    {
      id: 'roar',
      title: "I can't handle change",
      fullTitle: "I can't handle change",
      artist: 'ROAR',
      cover: 'assets/roar.png',
      src: 'assets/roar.mp3', // Real audio
      duration: 198, // 3:18
      lrcFile: 'assets/roar.lrc',
      lyrics: [
        { time: 31.22, text: "Hangin' out where I don't belong is nothin' new to me" },
        { time: 38.63, text: "I get tired and I get sick" },
        { time: 41.94, text: "And then I lose the strength to leave" },
        { time: 46.14, text: "I can't handle change" },
        { time: 50.21, text: "I can't handle change" },
        { time: 54.06, text: "Nothin' I do is ever good" },
        { time: 58.18, text: "Nothin' I do is ever good enough" },
        { time: 61.76, text: "Nothin' I do is ever good" },
        { time: 69.59, text: "Nothin' I do is ever good" },
        { time: 73.48, text: "Nothin' I do is ever good enough" },
        { time: 77.05, text: "Nothin' I do is ever good" },
        { time: 85.18, text: "Leave me alone, leave me alone" },
        { time: 96.44, text: "(I wanna go home now)" },
        { time: 99.02, text: "Leave me alone, leave me alone" },
        { time: 109.52, text: "(I wanna go home now)" },
        { time: 115.98, text: "I can't help but repeat myself" },
        { time: 119.77, text: '"I know it\'s not your fault"' },
        { time: 123.44, text: "Still lately, I begin to shake" },
        { time: 127.36, text: "For no reason at all" },
        { time: 134.95, text: "For no reason at all" },
        { time: 142.44, text: "For no reason at all" },
        { time: 150.30, text: "For no reason at all" },
        { time: 158.06, text: "For no reason at all" }
      ]
    },
    {
      id: 'temporary',
      title: 'Temporary',
      fullTitle: 'Temporary',
      artist: 'Shiftyz',
      cover: 'assets/temporary.png',
      src: 'assets/temporary.mp3', // Real audio
      duration: 167, // 2:48
      lyrics: null // Instrumental track -> "sorry, this song doesn't have lyrics"
    }
  ,
    {
    "id": "renee",
    "title": "Renee",
    "fullTitle": "Renee",
    "artist": "SALES",
    "cover": "assets/renee.png",
    "src": "assets/renee.mp3",
    "duration": 179,
    "lrcFile": "assets/renee.lrc",
    "lyrics": [
        {
            "time": 8.51,
            "text": "All the words I had to say"
        },
        {
            "time": 10.68,
            "text": "They don't mean nothing to you"
        },
        {
            "time": 12.97,
            "text": "What the hell, we're on the way"
        },
        {
            "time": 15.06,
            "text": "There is no nothing better"
        },
        {
            "time": 17.35,
            "text": "All we had to do was touch"
        },
        {
            "time": 19.64,
            "text": "That was the best chance"
        },
        {
            "time": 21.25,
            "text": "I could have ever and all of us"
        },
        {
            "time": 25.94,
            "text": "All day long we looked to fall"
        },
        {
            "time": 28.49,
            "text": "Looking into the sun"
        },
        {
            "time": 30.55,
            "text": "And found a way to get along"
        },
        {
            "time": 32.93,
            "text": "To be waiting for you"
        },
        {
            "time": 35.24,
            "text": "In the day, oh, in the day"
        },
        {
            "time": 37.53,
            "text": "There is nights between us"
        },
        {
            "time": 39.6,
            "text": "Looking for another way"
        },
        {
            "time": 52.62,
            "text": "All the words I said were wrong"
        },
        {
            "time": 54.83,
            "text": "They don't mean nothing to you"
        },
        {
            "time": 57.02,
            "text": "All we had to do was touch"
        },
        {
            "time": 59.41,
            "text": "And there's no nothing better"
        },
        {
            "time": 61.46,
            "text": "In the day, oh, in the day"
        },
        {
            "time": 63.82,
            "text": "I've been reaching for you"
        },
        {
            "time": 65.85,
            "text": "Nights between us all the way"
        },
        {
            "time": 69.96,
            "text": "It's all the way"
        },
        {
            "time": 77.07,
            "text": "You got it, it took so long to bare"
        },
        {
            "time": 83.26,
            "text": "It's all the way"
        },
        {
            "time": 90.36,
            "text": "You got it, it took so long to bare"
        },
        {
            "time": 95.0,
            "text": "And we've been waiting for it"
        },
        {
            "time": 105.68,
            "text": "All the words I said were wrong"
        },
        {
            "time": 107.87,
            "text": "They don't mean nothing to you"
        },
        {
            "time": 109.94,
            "text": "All we had to do was touch"
        },
        {
            "time": 112.36,
            "text": "And there's no nothing better"
        },
        {
            "time": 114.3,
            "text": "What the hell are beds for, man?"
        },
        {
            "time": 116.69,
            "text": "They go waiting for you"
        },
        {
            "time": 118.71,
            "text": "Waste away, don't find the time"
        },
        {
            "time": 121.11,
            "text": "It's all by your side"
        },
        {
            "time": 123.11,
            "text": "Hey, you got it"
        },
        {
            "time": 125.11,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 127.57,
            "text": "Hey, you got it"
        },
        {
            "time": 129.39,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 131.82,
            "text": "Hey, you got it"
        },
        {
            "time": 133.94,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 136.34,
            "text": "Hey, you got it"
        },
        {
            "time": 138.29,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 140.64,
            "text": "Hey, you got it"
        },
        {
            "time": 142.67,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 145.12,
            "text": "Hey, you got it"
        },
        {
            "time": 147.19,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 149.51,
            "text": "Hey, you got it"
        },
        {
            "time": 151.48,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 153.89,
            "text": "Hey, you got it"
        },
        {
            "time": 155.91,
            "text": "Took too long to get it (you got it)"
        }
    ]
},
    {
    "id": "renee_sped_up",
    "title": "Renee (Sped Up)",
    "fullTitle": "Renee (Sped Up)",
    "artist": "SALES",
    "cover": "assets/renee_sped_up.png",
    "src": "assets/renee_sped_up.mp3",
    "duration": 145,
    "lrcFile": "assets/renee_sped_up.lrc",
    "lyrics": [
        {
            "time": 6.88,
            "text": "All the words I had to say"
        },
        {
            "time": 8.63,
            "text": "They don't mean nothing to you"
        },
        {
            "time": 10.48,
            "text": "What the hell, we're on the way"
        },
        {
            "time": 12.17,
            "text": "There is no nothing better"
        },
        {
            "time": 14.02,
            "text": "All we had to do was touch"
        },
        {
            "time": 15.87,
            "text": "That was the best chance"
        },
        {
            "time": 17.17,
            "text": "I could have ever and all of us"
        },
        {
            "time": 20.97,
            "text": "All day long we looked to fall"
        },
        {
            "time": 23.03,
            "text": "Looking into the sun"
        },
        {
            "time": 24.69,
            "text": "And found a way to get along"
        },
        {
            "time": 26.62,
            "text": "To be waiting for you"
        },
        {
            "time": 28.48,
            "text": "In the day, oh, in the day"
        },
        {
            "time": 30.33,
            "text": "There is nights between us"
        },
        {
            "time": 32.01,
            "text": "Looking for another way"
        },
        {
            "time": 42.53,
            "text": "All the words I said were wrong"
        },
        {
            "time": 44.32,
            "text": "They don't mean nothing to you"
        },
        {
            "time": 46.09,
            "text": "All we had to do was touch"
        },
        {
            "time": 48.02,
            "text": "And there's no nothing better"
        },
        {
            "time": 49.67,
            "text": "In the day, oh, in the day"
        },
        {
            "time": 51.58,
            "text": "I've been reaching for you"
        },
        {
            "time": 53.22,
            "text": "Nights between us all the way"
        },
        {
            "time": 56.54,
            "text": "It's all the way"
        },
        {
            "time": 62.29,
            "text": "You got it, it took so long to bare"
        },
        {
            "time": 67.29,
            "text": "It's all the way"
        },
        {
            "time": 73.03,
            "text": "You got it, it took so long to bare"
        },
        {
            "time": 76.78,
            "text": "And we've been waiting for it"
        },
        {
            "time": 85.41,
            "text": "All the words I said were wrong"
        },
        {
            "time": 87.18,
            "text": "They don't mean nothing to you"
        },
        {
            "time": 88.86,
            "text": "All we had to do was touch"
        },
        {
            "time": 90.81,
            "text": "And there's no nothing better"
        },
        {
            "time": 92.38,
            "text": "What the hell are beds for, man?"
        },
        {
            "time": 94.31,
            "text": "They go waiting for you"
        },
        {
            "time": 95.95,
            "text": "Waste away, don't find the time"
        },
        {
            "time": 97.88,
            "text": "It's all by your side"
        },
        {
            "time": 99.5,
            "text": "Hey, you got it"
        },
        {
            "time": 101.12,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 103.11,
            "text": "Hey, you got it"
        },
        {
            "time": 104.58,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 106.54,
            "text": "Hey, you got it"
        },
        {
            "time": 108.25,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 110.19,
            "text": "Hey, you got it"
        },
        {
            "time": 111.77,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 113.67,
            "text": "Hey, you got it"
        },
        {
            "time": 115.31,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 117.29,
            "text": "Hey, you got it"
        },
        {
            "time": 118.96,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 120.84,
            "text": "Hey, you got it"
        },
        {
            "time": 122.43,
            "text": "Took too long to get it (you got it)"
        },
        {
            "time": 124.38,
            "text": "Hey, you got it"
        },
        {
            "time": 126.01,
            "text": "Took too long to get it (you got it)"
        }
    ]
},
    {
      "id": "renee_tiktok",
      "title": "Renee (TikTok Version)",
      "fullTitle": "Renee (TikTok Version)",
      "artist": "SALES",
      "cover": "assets/renee_tiktok.png",
      "src": "assets/renee_tiktok.mp3",
      "duration": 189,
      "lrcFile": "assets/renee_tiktok.lrc",
      "lyrics": [
        {
          "time": 8.63,
          "text": "All the words I had to say"
        },
        {
          "time": 10.8,
          "text": "They don't mean nothing to you"
        },
        {
          "time": 13.09,
          "text": "What the hell, we're on the way"
        },
        {
          "time": 15.18,
          "text": "There is no nothing better"
        },
        {
          "time": 17.47,
          "text": "All we had to do was touch"
        },
        {
          "time": 19.76,
          "text": "That was the best chance"
        },
        {
          "time": 21.37,
          "text": "I could have ever and all of us"
        },
        {
          "time": 26.06,
          "text": "All day long we looked to fall"
        },
        {
          "time": 28.61,
          "text": "Looking into the sun"
        },
        {
          "time": 30.67,
          "text": "And found a way to get along"
        },
        {
          "time": 33.05,
          "text": "To be waiting for you"
        },
        {
          "time": 35.36,
          "text": "In the day, oh, in the day"
        },
        {
          "time": 37.65,
          "text": "There is nights between us"
        },
        {
          "time": 39.72,
          "text": "Looking for another way"
        },
        {
          "time": 52.74,
          "text": "All the words I said were wrong"
        },
        {
          "time": 54.95,
          "text": "They don't mean nothing to you"
        },
        {
          "time": 57.14,
          "text": "All we had to do was touch"
        },
        {
          "time": 59.53,
          "text": "And there's no nothing better"
        },
        {
          "time": 61.58,
          "text": "In the day, oh, in the day"
        },
        {
          "time": 63.94,
          "text": "I've been reaching for you"
        },
        {
          "time": 65.97,
          "text": "Nights between us all the way"
        },
        {
          "time": 70.08,
          "text": "It's all the way"
        },
        {
          "time": 77.19,
          "text": "You got it, it took so long to bare"
        },
        {
          "time": 83.38,
          "text": "It's all the way"
        },
        {
          "time": 90.48,
          "text": "You got it, it took so long to bare"
        },
        {
          "time": 95.12,
          "text": "And we've been waiting for it"
        },
        {
          "time": 105.8,
          "text": "All the words I said were wrong"
        },
        {
          "time": 107.99,
          "text": "They don't mean nothing to you"
        },
        {
          "time": 110.06,
          "text": "All we had to do was touch"
        },
        {
          "time": 112.48,
          "text": "And there's no nothing better"
        },
        {
          "time": 114.42,
          "text": "What the hell are beds for, man?"
        },
        {
          "time": 116.81,
          "text": "They go waiting for you"
        },
        {
          "time": 118.83,
          "text": "Waste away, don't find the time"
        },
        {
          "time": 121.23,
          "text": "It's all by your side"
        },
        {
          "time": 123.23,
          "text": "Hey, you got it"
        },
        {
          "time": 125.23,
          "text": "Took too long to get it (you got it)"
        },
        {
          "time": 127.69,
          "text": "Hey, you got it"
        },
        {
          "time": 129.51,
          "text": "Took too long to get it (you got it)"
        },
        {
          "time": 131.94,
          "text": "Hey, you got it"
        },
        {
          "time": 134.06,
          "text": "Took too long to get it (you got it)"
        },
        {
          "time": 136.46,
          "text": "Hey, you got it"
        },
        {
          "time": 138.41,
          "text": "Took too long to get it (you got it)"
        },
        {
          "time": 140.76,
          "text": "Hey, you got it"
        },
        {
          "time": 142.79,
          "text": "Took too long to get it (you got it)"
        },
        {
          "time": 145.24,
          "text": "Hey, you got it"
        },
        {
          "time": 147.31,
          "text": "Took too long to get it (you got it)"
        },
        {
          "time": 149.63,
          "text": "Hey, you got it"
        },
        {
          "time": 151.6,
          "text": "Took too long to get it (you got it)"
        },
        {
          "time": 154.01,
          "text": "Hey, you got it"
        },
        {
          "time": 156.03,
          "text": "Took too long to get it (you got it)"
        }
      ]
    }
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;
  let activeLyricIndex = -1;

  // ==========================================================================
  // VIETNAMESE TYPOGRAPHY & FONT ADAPTATION ENGINE
  // (Tự động chuyển đổi font sang Be Vietnam Pro / Plus Jakarta Sans khi phát nhạc tiếng Việt)
  // ==========================================================================
  const VIETNAMESE_REGEX = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;

  function isVietnameseText(str) {
    if (!str) return false;
    return VIETNAMESE_REGEX.test(str);
  }

  function isVietnameseTrack(track) {
    if (!track) return false;
    if (isVietnameseText(track.title) || isVietnameseText(track.fullTitle) || isVietnameseText(track.artist)) {
      return true;
    }
    if (track.lyrics && Array.isArray(track.lyrics)) {
      for (let i = 0; i < track.lyrics.length; i++) {
        if (isVietnameseText(track.lyrics[i].text)) {
          return true;
        }
      }
    }
    return false;
  }

  function updateTrackFontTheme(track) {
    if (isVietnameseTrack(track)) {
      document.body.classList.add('is-vietnamese');
    } else {
      document.body.classList.remove('is-vietnamese');
    }
  }


  // Volume state
  let currentVolume = 0.8;
  let previousVolume = 0.8;
  let isMuted = false;

  // ==========================================================================
  // DOM ELEMENTS
  // ==========================================================================
  const audio = document.getElementById('audioPlayer');
  const bgBlur = document.getElementById('bgBlur');
  const bgOverlay = document.getElementById('bgOverlay');
  const luminanceCanvas = document.getElementById('luminanceCanvas');
  const playerWrapper = document.getElementById('playerWrapper');

  const albumArt = document.getElementById('albumArt');
  const trackTitleWrapper = document.getElementById('trackTitleWrapper');
  const trackTitleInner = document.getElementById('trackTitleInner');
  const trackTitle = document.getElementById('trackTitle');
  const trackArtist = document.getElementById('trackArtist');
  const trackInfoEl = document.querySelector('.track-info');

  const currentTimeEl = document.getElementById('currentTime');
  const totalDurationEl = document.getElementById('totalDuration');
  const progressBarContainer = document.getElementById('progressBarContainer');
  const progressTrack = document.getElementById('progressTrack');
  const progressHoverFill = document.getElementById('progressHoverFill');
  const progressFill = document.getElementById('progressFill');
  const progressThumb = document.getElementById('progressThumb');
  const progressTooltip = document.getElementById('progressTooltip');

  const seekHud = document.getElementById('seekHud');
  const seekHudText = document.getElementById('seekHudText');
  let seekHudTimer = null;
  function showSeekHud(time, label = 'Tua đến') {
    if (!seekHud || !seekHudText) return;
    seekHudText.textContent = `${label} ${formatTime(time)}`;
    seekHud.classList.add('is-visible');
    clearTimeout(seekHudTimer);
    seekHudTimer = setTimeout(() => {
      seekHud.classList.remove('is-visible');
    }, 1400);
  }

  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Volume elements
  const volumeControlWrapper = document.getElementById('volumeControlWrapper');
  const volumeBtn = document.getElementById('volumeBtn');
  const volumeHighIcon = document.getElementById('volumeHighIcon');
  const volumeLowIcon = document.getElementById('volumeLowIcon');
  const volumeMuteIcon = document.getElementById('volumeMuteIcon');
  const volumeSliderBox = document.getElementById('volumeSliderBox');
  const volumeTrackHitarea = document.getElementById('volumeTrackHitarea');
  const volumeTrack = document.getElementById('volumeTrack');
  const volumeFill = document.getElementById('volumeFill');
  const volumeThumb = document.getElementById('volumeThumb');
  const volumePercentage = document.getElementById('volumePercentage');

  const uploadBox = document.getElementById('uploadBox');
  const fileInput = document.getElementById('fileInput');

  const lyricsCard = document.getElementById('lyricsCard');
  const lyricsMaskedContainer = document.getElementById('lyricsMaskedContainer');
  const lyricsTrack = document.getElementById('lyricsTrack');
  const noLyricsState = document.getElementById('noLyricsState');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const fsExpandIcon = document.getElementById('fsExpandIcon');
  const fsCollapseIcon = document.getElementById('fsCollapseIcon');

  const toastEl = document.getElementById('toast');

  // ==========================================================================
  // HELPER: FORMAT TIME (M:SS)
  // ==========================================================================
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // ==========================================================================
  // TOAST NOTIFICATION
  // ==========================================================================
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  // ==========================================================================
  // VOLUME CONTROL ENGINE
  // ==========================================================================
  function setVolume(val, updateMuteState = true) {
    val = Math.max(0, Math.min(1, val));
    currentVolume = val;
    audio.volume = currentVolume;

    if (updateMuteState) {
      isMuted = (currentVolume === 0);
      if (!isMuted) {
        previousVolume = currentVolume;
      }
    }

    const pct = Math.round(currentVolume * 100);
    volumeFill.style.width = `${pct}%`;
    if (volumeThumb) {
      volumeThumb.style.left = `${pct}%`;
    }
    if (volumePercentage) {
      volumePercentage.textContent = `${pct}%`;
    }

    // Update Icons
    if (currentVolume === 0 || isMuted) {
      volumeHighIcon.style.display = 'none';
      volumeLowIcon.style.display = 'none';
      volumeMuteIcon.style.display = 'block';
    } else if (currentVolume < 0.5) {
      volumeHighIcon.style.display = 'none';
      volumeLowIcon.style.display = 'block';
      volumeMuteIcon.style.display = 'none';
    } else {
      volumeHighIcon.style.display = 'block';
      volumeLowIcon.style.display = 'none';
      volumeMuteIcon.style.display = 'none';
    }
  }

  function toggleMute() {
    if (isMuted || currentVolume === 0) {
      isMuted = false;
      const targetVol = previousVolume > 0.05 ? previousVolume : 0.8;
      setVolume(targetVol, false);
      showToast(`Volume: ${Math.round(targetVol * 100)}%`);
    } else {
      previousVolume = currentVolume;
      isMuted = true;
      setVolume(0, false);
      showToast('Muted');
    }
  }

  volumeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMute();
  });

  // Slider drag and click interaction
  let isVolumeDragging = false;
  function handleVolumeSeek(e) {
    const rect = volumeTrack.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setVolume(pos);
  }

  volumeTrackHitarea.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    isVolumeDragging = true;
    volumeControlWrapper.classList.add('is-dragging');
    handleVolumeSeek(e);
  });

  window.addEventListener('mousemove', (e) => {
    if (isVolumeDragging) {
      e.preventDefault();
      handleVolumeSeek(e);
    }
  });

  window.addEventListener('mouseup', () => {
    if (isVolumeDragging) {
      isVolumeDragging = false;
      volumeControlWrapper.classList.remove('is-dragging');
    }
  });

  // Mouse wheel over volume button to quickly change volume
  volumeControlWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.05 : -0.05;
    setVolume(currentVolume + delta);
  }, { passive: false });

  // Initialize volume to 80%
  setVolume(0.8);

  // ==========================================================================
  // TITLE OVERFLOW DETECTION & PING-PONG MARQUEE ANIMATION WITH EDGE FADING
  // ==========================================================================
  function setupTitleMarquee(titleText) {
    trackTitle.textContent = titleText;
    trackTitleWrapper.classList.remove('is-overflowing', 'is-marquee');
    trackTitleInner.classList.remove('is-marquee');
    trackTitleInner.style.transform = 'none';

    setTimeout(() => {
      const wrapperWidth = trackTitleWrapper.clientWidth || 204;
      const titleWidth = trackTitle.scrollWidth;
      const overflowDist = titleWidth - wrapperWidth;

      if (overflowDist > 4) {
        trackTitleWrapper.style.setProperty('--overflow-dist', `${overflowDist}px`);
        const duration = Math.max(7.5, Math.min(12, 6.5 + overflowDist / 18));
        trackTitleWrapper.style.setProperty('--marquee-duration', `${duration}s`);

        trackTitleWrapper.classList.add('is-overflowing', 'is-marquee');
        trackTitleInner.classList.add('is-marquee');
      }
    }, 50);
  }

  // ==========================================================================
  // ADAPTIVE LUMINANCE BACKGROUND ALGORITHM
  // ==========================================================================
  function analyzeAndApplyLuminance(imageSrc) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      const ctx = luminanceCanvas.getContext('2d', { willReadFrequently: true });
      ctx.clearRect(0, 0, 64, 64);
      ctx.drawImage(img, 0, 0, 64, 64);

      try {
        const imgData = ctx.getImageData(0, 0, 64, 64).data;
        let totalLuminance = 0;
        let pixelCount = 0;

        for (let i = 0; i < imgData.length; i += 4) {
          const r = imgData[i];
          const g = imgData[i + 1];
          const b = imgData[i + 2];
          const a = imgData[i + 3];
          if (a > 100) {
            const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            totalLuminance += lum;
            pixelCount++;
          }
        }

        const avgLuminance = pixelCount > 0 ? totalLuminance / pixelCount : 128;

        let brightness;
        let overlayAlpha;

        if (avgLuminance > 110) {
          const excess = (avgLuminance - 110) / (255 - 110);
          brightness = Math.max(0.38, 0.58 - excess * 0.16);
          overlayAlpha = Math.min(0.55, 0.40 + excess * 0.12);
        } else {
          const ratio = avgLuminance / 110;
          brightness = 0.65 + ratio * 0.15;
          overlayAlpha = 0.35;
        }

        document.documentElement.style.setProperty('--bg-brightness', brightness.toFixed(3));
        document.documentElement.style.setProperty('--bg-overlay-alpha', overlayAlpha.toFixed(3));
        bgBlur.style.backgroundImage = `url('${imageSrc}')`;

      } catch (err) {
        console.warn('Luminance calculation fallback:', err);
        document.documentElement.style.setProperty('--bg-brightness', '0.50');
        document.documentElement.style.setProperty('--bg-overlay-alpha', '0.45');
        bgBlur.style.backgroundImage = `url('${imageSrc}')`;
      }
    };
    img.src = imageSrc;
  }

  // ==========================================================================
  // RENDER LYRICS
  // ==========================================================================
  let isUserScrollingLyrics = false;
  let userLyricScrollTimeout = null;
  let currentLyricScrollY = 0;

  function renderLyrics(track) {
    lyricsTrack.innerHTML = '';
    activeLyricIndex = -1;
    currentLyricScrollY = 0;
    isUserScrollingLyrics = false;
    clearTimeout(userLyricScrollTimeout);
    lyricsTrack.style.transform = 'translate3d(0, 0, 0)';

    if (!track.lyrics || track.lyrics.length === 0) {
      lyricsTrack.style.display = 'none';
      noLyricsState.style.display = 'flex';
      return;
    }

    lyricsTrack.style.display = 'flex';
    noLyricsState.style.display = 'none';

    updateTrackFontTheme(track);

    track.lyrics.forEach((item, index) => {
      const lineDiv = document.createElement('div');
      const isVnLine = isVietnameseText(item.text);
      lineDiv.className = isVnLine ? 'lyric-line is-vietnamese' : 'lyric-line';
      lineDiv.textContent = item.text;
      lineDiv.dataset.index = index;
      lineDiv.dataset.time = item.time;
      lineDiv.dataset.dist = index === 0 ? '0' : (index === 1 ? '1' : (index === 2 ? '2' : 'distant'));

      // Click on any lyric line to seek directly to it with silky smooth transition!
      lineDiv.addEventListener('click', () => {
        isUserScrollingLyrics = false;
        clearTimeout(userLyricScrollTimeout);
        audio.currentTime = item.time;
        updateProgress();
        updateLyrics(item.time, true);
        if (!isPlaying) {
          togglePlay();
        }
        showSeekHud(item.time, 'Tua tới câu');
      });

      lyricsTrack.appendChild(lineDiv);
    });

    updateLyrics(audio.currentTime || 0, false, true);
  }

  // ==========================================================================
  // ULTRA-SMOOTH LYRICS ANIMATION ENGINE WITH DYNAMIC SCALE & ACCORDION ("CHẬP LẠI VỪA ĐỦ")
  // ==========================================================================
  function updateLyrics(time, userSeek = false, immediate = false) {
    const track = playlist[currentTrackIndex];
    if (!track.lyrics || track.lyrics.length === 0) return;

    // Natural perceptual vocal anticipation offset (80ms):
    // ensures the line highlights exactly as the vocal starts articulating
    const effectiveTime = userSeek ? time : (time + 0.08);

    let foundIndex = -1;
    for (let i = 0; i < track.lyrics.length; i++) {
      if (effectiveTime >= track.lyrics[i].time) {
        foundIndex = i;
      } else {
        break;
      }
    }

    if (foundIndex === -1 && track.lyrics.length > 0) {
      foundIndex = 0;
    }

    if (foundIndex === activeLyricIndex && !userSeek && !immediate) {
      return;
    }

    activeLyricIndex = foundIndex;
    const lines = lyricsTrack.children;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const dist = i - activeLyricIndex;

      // Reset transitionDelay to 0s: start moving instantly without artificial lag
      line.style.transitionDelay = '0s';

      // Assign distance attribute for CSS hierarchy & accordion compression
      if (dist === 0) {
        line.dataset.dist = '0';
        line.classList.add('active');
      } else if (dist === 1) {
        line.dataset.dist = '1';
        line.classList.remove('active');
      } else if (dist === -1) {
        line.dataset.dist = '-1';
        line.classList.remove('active');
      } else if (dist === 2) {
        line.dataset.dist = '2';
        line.classList.remove('active');
      } else if (dist === -2) {
        line.dataset.dist = '-2';
        line.classList.remove('active');
      } else {
        line.dataset.dist = 'distant';
        line.classList.remove('active');
      }
    }

    // Ultra-smooth GPU translation positioning active line at ~44% height
    if (!isUserScrollingLyrics && lines[activeLyricIndex]) {
      const activeLineEl = lines[activeLyricIndex];
      const containerHeight = lyricsMaskedContainer.clientHeight || 585;
      const focalPoint = containerHeight * 0.44;
      const lineCenter = activeLineEl.offsetTop + (activeLineEl.clientHeight / 2);
      const targetScroll = Math.max(0, lineCenter - focalPoint);

      currentLyricScrollY = targetScroll;

      if (immediate) {
        lyricsTrack.style.transition = 'none';
        lyricsTrack.style.transform = `translate3d(0, ${-targetScroll}px, 0)`;
        void lyricsTrack.offsetWidth; // flush layout
        lyricsTrack.style.transition = '';
      } else {
        lyricsTrack.style.transform = `translate3d(0, ${-targetScroll}px, 0)`;
      }
    }
  }

  // User wheel interaction for lyric card
  lyricsMaskedContainer.addEventListener('wheel', (e) => {
    if (!playlist[currentTrackIndex].lyrics) return;
    e.preventDefault();
    isUserScrollingLyrics = true;
    clearTimeout(userLyricScrollTimeout);

    const maxScroll = Math.max(0, lyricsTrack.scrollHeight - lyricsMaskedContainer.clientHeight + 120);
    currentLyricScrollY = Math.max(0, Math.min(maxScroll, currentLyricScrollY + e.deltaY));
    lyricsTrack.style.transition = 'transform 0.1s ease-out';
    lyricsTrack.style.transform = `translate3d(0, ${-currentLyricScrollY}px, 0)`;

    userLyricScrollTimeout = setTimeout(() => {
      isUserScrollingLyrics = false;
      lyricsTrack.style.transition = '';
      updateLyrics(audio.currentTime || 0, true, false);
    }, 2800);
  }, { passive: false });

  // ==========================================================================
  // LOAD SONG INTO PLAYER WITH ULTRA-SMOOTH SUBTLE UI TRANSITION
  // ==========================================================================
  let trackSwitchTimer = null;

  function loadTrack(index, animate = true) {
    currentTrackIndex = (index + playlist.length) % playlist.length;
    const track = playlist[currentTrackIndex];

    if (animate) {
      // Trigger subtle exit transition (slight scale down, fade, and soft blur)
      if (albumArt) albumArt.classList.add('is-switching');
      if (trackInfoEl) trackInfoEl.classList.add('is-switching');
      if (lyricsMaskedContainer) lyricsMaskedContainer.classList.add('is-switching');

      clearTimeout(trackSwitchTimer);
      trackSwitchTimer = setTimeout(() => {
        applyTrackData(track);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (albumArt) albumArt.classList.remove('is-switching');
            if (trackInfoEl) trackInfoEl.classList.remove('is-switching');
            if (lyricsMaskedContainer) lyricsMaskedContainer.classList.remove('is-switching');
          });
        });
      }, 95);
    } else {
      applyTrackData(track);
    }
  }

  function applyTrackData(track) {
    // Automatically adapt typography font for Vietnamese tracks
    updateTrackFontTheme(track);

    albumArt.src = track.cover;
    trackArtist.textContent = track.artist;

    // Setup title with marquee & edge fading
    setupTitleMarquee(track.fullTitle || track.title);

    // Apply adaptive background luminance
    analyzeAndApplyLuminance(track.cover);

    audio.src = track.src;

    if (track.lrcFile && (!track.lyrics || track.lyrics.length === 0)) {
      fetch(track.lrcFile)
        .then(res => res.text())
        .then(lrcText => {
          const parsed = parseLRC(lrcText);
          if (parsed) {
            track.lyrics = parsed;
            renderLyrics(track);
            if (!isNaN(timeParam)) {
              audio.currentTime = timeParam;
              updateProgress();
              updateLyrics(timeParam, true, true);
            }
          }
        })
        .catch(() => {
          renderLyrics(track);
        });
    } else if ((!track.lyrics || track.lyrics.length === 0) && track.src && track.src.endsWith('.mp3')) {
      // Automatically attempt to extract embedded ID3v2 lyrics from MP3 file!
      fetch(track.src, { headers: { Range: 'bytes=0-131071' } })
        .then(res => res.arrayBuffer())
        .then(buf => {
          const meta = parseID3v2(buf);
          if (meta && meta.lyrics && meta.lyrics.length > 0) {
            track.lyrics = meta.lyrics;
            renderLyrics(track);
            showToast(`Tự động đồng bộ ${meta.lyrics.length} câu lyric từ file MP3!`);
          } else {
            renderLyrics(track);
          }
          if (!isNaN(timeParam)) {
            audio.currentTime = timeParam;
            updateProgress();
            updateLyrics(timeParam, true, true);
          }
        })
        .catch(() => {
          renderLyrics(track);
        });
    } else {
      renderLyrics(track);
      if (!isNaN(timeParam)) {
        audio.currentTime = timeParam;
        updateProgress();
        updateLyrics(timeParam, true, true);
      }
    }

    currentTimeEl.textContent = '0:00';
    totalDurationEl.textContent = formatTime(track.duration);
    progressFill.style.width = '0%';

    audio.onloadedmetadata = () => {
      const dur = (track.isPendingFullAudio && track.fullDuration)
        ? track.fullDuration
        : ((!isNaN(audio.duration) && audio.duration > 0) ? audio.duration : track.duration);
      totalDurationEl.textContent = formatTime(dur);
      if (isPlaying) {
        updateProgress();
      }
    };

    if (isPlaying) {
      audio.play().catch(e => console.log('Autoplay:', e));
    }
  }

  // ==========================================================================
  // PLAYBACK CONTROL LOGIC WITH 60FPS/120FPS SYNC LOOP (REQUESTANIMATIONFRAME)
  // ==========================================================================
  let syncRafId = null;
  function startPlaybackSync() {
    if (syncRafId) cancelAnimationFrame(syncRafId);
    function tick() {
      if (isPlaying && !isSeeking) {
        updateProgress();
      }
      if (isPlaying) {
        syncRafId = requestAnimationFrame(tick);
      }
    }
    syncRafId = requestAnimationFrame(tick);
  }

  function stopPlaybackSync() {
    if (syncRafId) {
      cancelAnimationFrame(syncRafId);
      syncRafId = null;
    }
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play().then(() => {
        isPlaying = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        playBtn.setAttribute('aria-label', 'Pause');
        startPlaybackSync();
      }).catch(err => {
        console.warn('Play error:', err);
      });
    } else {
      audio.pause();
      isPlaying = false;
      stopPlaybackSync();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      playBtn.setAttribute('aria-label', 'Play');
    }
  }

  audio.addEventListener('play', () => {
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    startPlaybackSync();
  });

  audio.addEventListener('pause', () => {
    isPlaying = false;
    stopPlaybackSync();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  });

  function getCurrentTrackDuration() {
    const track = playlist[currentTrackIndex];
    if (track && track.isPendingFullAudio && track.fullDuration) {
      return track.fullDuration;
    }
    if (!isNaN(audio.duration) && audio.duration > 0) {
      return audio.duration;
    }
    return (track && (track.fullDuration || track.duration)) || 1;
  }

  function updateProgress() {
    const cur = audio.currentTime || 0;
    const dur = getCurrentTrackDuration();
    currentTimeEl.textContent = formatTime(cur);
    totalDurationEl.textContent = formatTime(dur);

    const percent = Math.min(100, Math.max(0, (cur / dur) * 100));
    progressFill.style.width = `${percent}%`;
    if (progressThumb) {
      progressThumb.style.left = `${percent}%`;
    }
    progressBarContainer.setAttribute('aria-valuenow', Math.round(percent));

    updateLyrics(cur);
  }

  // ==========================================================================
  // HIGH-PRECISION AUDIO SCRUBBER & TIME PREVIEW (TÍNH NĂNG TUA NHẠC)
  // ==========================================================================
  let isSeeking = false;
  let seekTargetTime = 0;

  function handleScrub(e, isCommit = false) {
    const rect = progressTrack.getBoundingClientRect();
    const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const dur = getCurrentTrackDuration();
    const targetTime = pos * dur;
    seekTargetTime = targetTime;

    const percent = pos * 100;
    progressFill.style.width = `${percent}%`;
    if (progressThumb) progressThumb.style.left = `${percent}%`;
    currentTimeEl.textContent = formatTime(targetTime);
    progressBarContainer.setAttribute('aria-valuenow', Math.round(percent));

    if (progressTooltip) {
      progressTooltip.textContent = formatTime(targetTime);
      progressTooltip.style.left = `${percent}%`;
    }

    updateLyrics(targetTime, true);

    if (isCommit) {
      audio.currentTime = targetTime;
      showSeekHud(targetTime);
    }
  }

  // Scrubber hover effects (Ghost fill & floating tooltip)
  progressBarContainer.addEventListener('mousemove', (e) => {
    if (isSeeking) return;
    const rect = progressTrack.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const dur = getCurrentTrackDuration();
    const hoverTime = pos * dur;
    const percent = pos * 100;

    if (progressHoverFill) {
      progressHoverFill.style.width = `${percent}%`;
    }
    if (progressTooltip) {
      progressTooltip.textContent = formatTime(hoverTime);
      progressTooltip.style.left = `${percent}%`;
    }
  });

  progressBarContainer.addEventListener('mouseleave', () => {
    if (!isSeeking && progressHoverFill) {
      progressHoverFill.style.width = '0%';
    }
  });

  // Scrubber drag & click
  progressBarContainer.addEventListener('mousedown', (e) => {
    isSeeking = true;
    progressBarContainer.classList.add('is-dragging');
    handleScrub(e, false);
  });

  progressBarContainer.addEventListener('touchstart', (e) => {
    isSeeking = true;
    progressBarContainer.classList.add('is-dragging');
    handleScrub(e, false);
  }, { passive: true });

  window.addEventListener('mousemove', (e) => {
    if (isSeeking) {
      e.preventDefault();
      handleScrub(e, false);
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (isSeeking) {
      handleScrub(e, false);
    }
  }, { passive: true });

  window.addEventListener('mouseup', (e) => {
    if (isSeeking) {
      isSeeking = false;
      progressBarContainer.classList.remove('is-dragging');
      handleScrub(e, true);
    }
  });

  window.addEventListener('touchend', (e) => {
    if (isSeeking) {
      isSeeking = false;
      progressBarContainer.classList.remove('is-dragging');
      if (e.changedTouches && e.changedTouches.length > 0) {
        handleScrub(e.changedTouches[0], true);
      } else {
        audio.currentTime = seekTargetTime;
        showSeekHud(seekTargetTime);
      }
    }
  });

  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', () => {
    loadTrack(currentTrackIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    loadTrack(currentTrackIndex + 1);
  });

  audio.addEventListener('timeupdate', () => {
    if (isPlaying && !isSeeking) {
      updateProgress();
    }
  });

  audio.addEventListener('ended', () => {
    const track = playlist[currentTrackIndex];
    if (track && track.isPendingFullAudio) {
      showToast('Đang kết nối bản FULL đầy đủ...');
      return;
    }
    loadTrack(currentTrackIndex + 1);
    if (isPlaying) audio.play();
  });

  // ==========================================================================
  // FULLSCREEN TOGGLE
  // ==========================================================================
  function toggleFullscreen() {
    const isFs = document.fullscreenElement || document.webkitFullscreenElement;
    if (!isFs) {
      if (playerWrapper.requestFullscreen) {
        playerWrapper.requestFullscreen().catch(() => {});
      } else if (playerWrapper.webkitRequestFullscreen) {
        playerWrapper.webkitRequestFullscreen();
      }
      playerWrapper.classList.add('is-fullscreen');
      fsExpandIcon.style.display = 'none';
      fsCollapseIcon.style.display = 'block';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      playerWrapper.classList.remove('is-fullscreen');
      fsExpandIcon.style.display = 'block';
      fsCollapseIcon.style.display = 'none';
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullscreen);

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      playerWrapper.classList.remove('is-fullscreen');
      fsExpandIcon.style.display = 'block';
      fsCollapseIcon.style.display = 'none';
    } else {
      playerWrapper.classList.add('is-fullscreen');
      fsExpandIcon.style.display = 'none';
      fsCollapseIcon.style.display = 'block';
    }
  });

  // ==========================================================================
  // LRC PARSER
  // ==========================================================================
  function parseLRC(lrcText) {
    const lines = lrcText.split(/\r?\n/);
    const lyrics = [];
    const timeRegex = /\[(\d{2}):(\d{2}(?:\.\d+)?)\]/;

    for (const line of lines) {
      const match = timeRegex.exec(line);
      if (match) {
        const mins = parseFloat(match[1]);
        const secs = parseFloat(match[2]);
        const text = line.replace(match[0], '').trim();
        if (text) {
          lyrics.push({
            time: mins * 60 + secs,
            text: text
          });
        }
      }
    }
    lyrics.sort((a, b) => a.time - b.time);
    return lyrics.length > 0 ? lyrics : null;
  }

  // ==========================================================================
  // PURE JS ID3v2 METADATA & EMBEDDED LYRICS PARSER (SYLT / USLT / TXXX / COMM / APIC)
  // "file mp3 có lyric ở trong không? nếu có thì cho nó tự lấy lyric và đồng bộ luôn ấy"
  // ==========================================================================
  function decodeID3Text(buffer, offset, length, encoding) {
    if (length <= 0) return '';
    const bytes = new Uint8Array(buffer, offset, length);
    try {
      if (encoding === 0) {
        // ISO-8859-1
        let str = '';
        for (let i = 0; i < bytes.length; i++) {
          if (bytes[i] === 0) break;
          str += String.fromCharCode(bytes[i]);
        }
        return str;
      } else if (encoding === 1) {
        // UTF-16 with BOM
        return new TextDecoder('utf-16').decode(bytes).replace(/\0.*$/, '');
      } else if (encoding === 2) {
        // UTF-16BE
        return new TextDecoder('utf-16be').decode(bytes).replace(/\0.*$/, '');
      } else {
        // UTF-8
        return new TextDecoder('utf-8').decode(bytes).replace(/\0.*$/, '');
      }
    } catch (e) {
      return '';
    }
  }

  function parseID3v2(buffer) {
    const view = new DataView(buffer);
    if (view.byteLength < 10) return null;

    // Check 'ID3' magic bytes
    if (view.getUint8(0) !== 0x49 || view.getUint8(1) !== 0x44 || view.getUint8(2) !== 0x33) {
      return null;
    }

    const version = view.getUint8(3);
    const tagSize = ((view.getUint8(6) & 0x7f) << 21) |
                    ((view.getUint8(7) & 0x7f) << 14) |
                    ((view.getUint8(8) & 0x7f) << 7) |
                    (view.getUint8(9) & 0x7f);

    let offset = 10;
    const meta = { title: null, artist: null, coverUrl: null, lyrics: null, rawLyricsText: null };

    while (offset < tagSize + 10 && offset + 10 < view.byteLength) {
      const frameId = String.fromCharCode(
        view.getUint8(offset),
        view.getUint8(offset + 1),
        view.getUint8(offset + 2),
        view.getUint8(offset + 3)
      );

      let frameSize;
      if (version === 4) {
        frameSize = ((view.getUint8(offset + 4) & 0x7f) << 21) |
                    ((view.getUint8(offset + 5) & 0x7f) << 14) |
                    ((view.getUint8(offset + 6) & 0x7f) << 7) |
                    (view.getUint8(offset + 7) & 0x7f);
      } else {
        frameSize = view.getUint32(offset + 4);
      }

      if (frameSize <= 0 || offset + 10 + frameSize > view.byteLength) break;
      const contentOffset = offset + 10;

      if (frameId === 'TIT2') {
        const enc = view.getUint8(contentOffset);
        meta.title = decodeID3Text(buffer, contentOffset + 1, frameSize - 1, enc).trim();
      } else if (frameId === 'TPE1') {
        const enc = view.getUint8(contentOffset);
        meta.artist = decodeID3Text(buffer, contentOffset + 1, frameSize - 1, enc).trim();
      } else if (frameId === 'USLT' || frameId === 'COMM') {
        // Unsynchronised Lyrics / Text (contains [mm:ss.xx] timestamped LRC or plain text)
        const enc = view.getUint8(contentOffset);
        let pos = contentOffset + 4; // skip encoding (1 byte) + language (3 bytes)
        // Skip null-terminated descriptor
        if (enc === 1 || enc === 2) {
          while (pos + 1 < contentOffset + frameSize && !(view.getUint8(pos) === 0 && view.getUint8(pos + 1) === 0)) pos += 2;
          pos += 2;
        } else {
          while (pos < contentOffset + frameSize && view.getUint8(pos) !== 0) pos++;
          pos++;
        }
        if (pos < contentOffset + frameSize) {
          const text = decodeID3Text(buffer, pos, contentOffset + frameSize - pos, enc).trim();
          meta.rawLyricsText = text;
          const parsed = parseLRC(text);
          if (parsed && parsed.length > 0) {
            meta.lyrics = parsed;
          }
        }
      } else if (frameId === 'TXXX') {
        // User Defined Text (often contains lyrics written by MusicBee/Foobar/Mp3tag)
        const enc = view.getUint8(contentOffset);
        let pos = contentOffset + 1;
        const descStart = pos;
        if (enc === 1 || enc === 2) {
          while (pos + 1 < contentOffset + frameSize && !(view.getUint8(pos) === 0 && view.getUint8(pos + 1) === 0)) pos += 2;
          pos += 2;
        } else {
          while (pos < contentOffset + frameSize && view.getUint8(pos) !== 0) pos++;
          pos++;
        }
        const desc = decodeID3Text(buffer, descStart, pos - descStart - 1, enc).toUpperCase();
        if (pos < contentOffset + frameSize) {
          const text = decodeID3Text(buffer, pos, contentOffset + frameSize - pos, enc).trim();
          if (desc.includes('LYRIC') || desc.includes('USLT') || /\[\d{1,2}:\d{2}/.test(text)) {
            meta.rawLyricsText = text;
            const parsed = parseLRC(text);
            if (parsed && parsed.length > 0) {
              meta.lyrics = parsed;
            }
          }
        }
      } else if (frameId === 'SYLT') {
        // Synchronised lyrics / text
        const enc = view.getUint8(contentOffset);
        const timeFormat = view.getUint8(contentOffset + 4); // 1 = MPEG frames, 2 = milliseconds
        let pos = contentOffset + 6;
        if (enc === 1 || enc === 2) {
          while (pos + 1 < contentOffset + frameSize && !(view.getUint8(pos) === 0 && view.getUint8(pos + 1) === 0)) pos += 2;
          pos += 2;
        } else {
          while (pos < contentOffset + frameSize && view.getUint8(pos) !== 0) pos++;
          pos++;
        }

        const syltLyrics = [];
        while (pos + 4 <= contentOffset + frameSize) {
          const textStart = pos;
          if (enc === 1 || enc === 2) {
            while (pos + 1 < contentOffset + frameSize - 4 && !(view.getUint8(pos) === 0 && view.getUint8(pos + 1) === 0)) pos += 2;
            const text = decodeID3Text(buffer, textStart, pos - textStart, enc).trim();
            pos += 2;
            const timeVal = view.getUint32(pos);
            pos += 4;
            const timeSec = timeFormat === 2 ? (timeVal / 1000) : (timeVal * 1152 / 44100);
            if (text) syltLyrics.push({ time: Math.round(timeSec * 100) / 100, text });
          } else {
            while (pos < contentOffset + frameSize - 4 && view.getUint8(pos) !== 0) pos++;
            const text = decodeID3Text(buffer, textStart, pos - textStart, enc).trim();
            pos++;
            const timeVal = view.getUint32(pos);
            pos += 4;
            const timeSec = timeFormat === 2 ? (timeVal / 1000) : (timeVal * 1152 / 44100);
            if (text) syltLyrics.push({ time: Math.round(timeSec * 100) / 100, text });
          }
        }
        if (syltLyrics.length > 0) {
          meta.lyrics = syltLyrics;
        }
      } else if (frameId === 'APIC') {
        // Embedded Album Art
        try {
          let pos = contentOffset + 1;
          let mime = '';
          while (pos < contentOffset + frameSize && view.getUint8(pos) !== 0) {
            mime += String.fromCharCode(view.getUint8(pos));
            pos++;
          }
          pos++; // null
          pos++; // picture type
          while (pos < contentOffset + frameSize && view.getUint8(pos) !== 0) {
            pos++;
          }
          pos++; // null descriptor

          const imgData = buffer.slice(pos, contentOffset + frameSize);
          const blob = new Blob([imgData], { type: mime || 'image/jpeg' });
          meta.coverUrl = URL.createObjectURL(blob);
        } catch (e) {
          console.warn('APIC parsing error:', e);
        }
      }

      offset += 10 + frameSize;
    }

    return meta;
  }

  // ==========================================================================
  // ENHANCED MUSIC UPLOAD (DASHED BOX)
  // ==========================================================================
  uploadBox.addEventListener('click', () => {
    fileInput.click();
  });

  ['dragenter', 'dragover'].forEach(name => {
    uploadBox.addEventListener(name, (e) => {
      e.preventDefault();
      e.stopPropagation();
      uploadBox.classList.add('drag-over');
    });
    window.addEventListener(name, (e) => {
      e.preventDefault();
      uploadBox.classList.add('drag-over');
    });
  });

  ['dragleave', 'dragend', 'drop'].forEach(name => {
    uploadBox.addEventListener(name, (e) => {
      e.preventDefault();
      e.stopPropagation();
      uploadBox.classList.remove('drag-over');
    });
    window.addEventListener(name, (e) => {
      e.preventDefault();
      uploadBox.classList.remove('drag-over');
    });
  });

  uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadBox.classList.remove('drag-over');
    if (e.dataTransfer && e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  });

  function handleFiles(files) {
    if (!files || files.length === 0) return;

    let audioFile = null;
    let lrcFile = null;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.name.endsWith('.lrc')) {
        lrcFile = file;
      } else if (file.type.startsWith('audio/') || file.name.match(/\.(mp3|wav|ogg|flac|m4a|aac)$/i)) {
        audioFile = file;
      }
    }

    if (lrcFile && !audioFile) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        const parsed = parseLRC(evt.target.result);
        if (parsed) {
          playlist[currentTrackIndex].lyrics = parsed;
          renderLyrics(playlist[currentTrackIndex]);
          showToast(`Lyrics loaded from ${lrcFile.name}`);
        } else {
          showToast('No timestamped lyrics found in file');
        }
      };
      reader.readAsText(lrcFile);
      return;
    }

    if (!audioFile) {
      showToast('Please select a valid audio file (.mp3, .wav, .flac)');
      return;
    }

    const audioUrl = URL.createObjectURL(audioFile);
    const fileName = audioFile.name.replace(/\.[^/.]+$/, '');

    let songTitle = fileName;
    let songArtist = 'Local Artist';

    if (fileName.includes(' - ')) {
      const parts = fileName.split(' - ');
      songArtist = parts[0].trim();
      songTitle = parts.slice(1).join(' - ').trim();
    }

    const reader = new FileReader();
    reader.onload = function (evt) {
      const meta = parseID3v2(evt.target.result);
      let coverUrl = 'assets/roar.png';

      if (meta) {
        if (meta.title) songTitle = meta.title;
        if (meta.artist) songArtist = meta.artist;
        if (meta.coverUrl) coverUrl = meta.coverUrl;
      }

      if (lrcFile) {
        const lrcReader = new FileReader();
        lrcReader.onload = function (lrcEvt) {
          const lyrics = parseLRC(lrcEvt.target.result);
          addUploadedTrack(songTitle, songArtist, coverUrl, audioUrl, lyrics);
          showToast(`Đã tải lyric từ file ${lrcFile.name}`);
        };
        lrcReader.readAsText(lrcFile);
      } else if (meta && meta.lyrics && meta.lyrics.length > 0) {
        // AUTOMATICALLY USE EMBEDDED LYRICS FROM THE MP3 FILE!
        addUploadedTrack(songTitle, songArtist, coverUrl, audioUrl, meta.lyrics);
        showToast(`Tự động đồng bộ ${meta.lyrics.length} câu lyric từ file MP3!`);
      } else {
        addUploadedTrack(songTitle, songArtist, coverUrl, audioUrl, null);
      }
    };
    reader.readAsArrayBuffer(audioFile);
  }

  function addUploadedTrack(title, artist, cover, src, lyrics) {
    const tempAudio = new Audio(src);
    tempAudio.onloadedmetadata = function () {
      const duration = Math.round(tempAudio.duration) || 180;
      const newTrack = {
        id: 'upload_' + Date.now(),
        title: title,
        fullTitle: title,
        artist: artist,
        cover: cover,
        src: src,
        duration: duration,
        lyrics: lyrics
      };

      playlist.push(newTrack);
      loadTrack(playlist.length - 1);
      audio.play().then(() => {
        isPlaying = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
      }).catch(() => {});

      showToast(`Uploaded: ${title} - ${artist}`);
    };
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    // Shift + S toggles global search modal
    if (e.shiftKey && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      toggleSearchModal();
      return;
    }

    if (isSearchModalOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSearchModal();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentSearchResults.length > 0) {
          selectedResultIndex = (selectedResultIndex + 1) % currentSearchResults.length;
          updateSelectedResultUi();
        }
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentSearchResults.length > 0) {
          selectedResultIndex = (selectedResultIndex - 1 + currentSearchResults.length) % currentSearchResults.length;
          updateSelectedResultUi();
        }
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedResultIndex >= 0 && selectedResultIndex < currentSearchResults.length) {
          playSearchResultItem(selectedResultIndex);
        }
        return;
      }
      // When modal is open and user types in input, do not trigger player hotkeys
      if (e.target.tagName === 'INPUT') return;
    }

    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      const dur = getCurrentTrackDuration();
      audio.currentTime = Math.min(dur, audio.currentTime + 5);
      updateProgress();
      showSeekHud(audio.currentTime, 'Tua +5s');
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - 5);
      updateProgress();
      showSeekHud(audio.currentTime, 'Tua -5s');
    } else if (e.key === 'l' || e.key === 'L') {
      e.preventDefault();
      const dur = getCurrentTrackDuration();
      audio.currentTime = Math.min(dur, audio.currentTime + 10);
      updateProgress();
      showSeekHud(audio.currentTime, 'Tua +10s');
    } else if (e.key === 'j' || e.key === 'J') {
      e.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - 10);
      updateProgress();
      showSeekHud(audio.currentTime, 'Tua -10s');
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      setVolume(currentVolume + 0.05);
      showToast(`Volume: ${Math.round(currentVolume * 100)}%`);
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      setVolume(currentVolume - 0.05);
      showToast(`Volume: ${Math.round(currentVolume * 100)}%`);
    } else if (e.key === 'm' || e.key === 'M') {
      toggleMute();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
  });

  // URL query param ?track=0 or ?track=1 or ?time=120
  const urlParams = new URLSearchParams(window.location.search);
  const trackParam = parseInt(urlParams.get('track'), 10);
  const initialTrack = !isNaN(trackParam) && trackParam >= 0 && trackParam < playlist.length ? trackParam : 0;
  const timeParam = parseFloat(urlParams.get('time'));

  if (urlParams.get('volume_open') === '1') {
    volumeControlWrapper.classList.add('is-dragging');
  }
  if (urlParams.get('playing') === '1') {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  }
  if (urlParams.get('seek_hover') === '1' || urlParams.get('seek_drag') === '1') {
    progressBarContainer.classList.add('is-dragging');
    if (progressTooltip) {
      progressTooltip.textContent = '1:34';
      progressTooltip.style.left = '48%';
    }
    if (progressThumb) progressThumb.style.left = '48%';
    if (progressFill) progressFill.style.width = '48%';
  }


  // ==========================================================================
  // GLOBAL MUSIC & SYNCED LYRICS SEARCH CONTROLLER (FROSTED GLASS)
  // ==========================================================================
  const searchTriggerPill = document.getElementById('searchTriggerPill');
  const searchModalBackdrop = document.getElementById('searchModalBackdrop');
  const searchModalCard = document.getElementById('searchModalCard');
  const searchModalHeader = document.getElementById('searchModalHeader');
  const searchInputPill = document.getElementById('searchInputPill');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const escBadge = document.getElementById('escBadge');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const searchChips = document.querySelectorAll('.search-chip');
  const searchResultsContainer = document.getElementById('searchResultsContainer');

  let isSearchModalOpen = false;
  let currentSearchResults = [];
  let selectedResultIndex = -1;
  let searchDebounceTimer = null;
  let currentSearchFilter = 'all';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function openSearchModal() {
    if (!searchModalBackdrop || isSearchModalOpen) return;
    isSearchModalOpen = true;
    searchModalBackdrop.style.display = 'flex';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        searchModalBackdrop.classList.add('is-open');
      });
    });

    if (globalSearchInput) {
      setTimeout(() => {
        globalSearchInput.focus();
        if (!globalSearchInput.value.trim()) {
          renderSearchSuggestions();
        }
      }, 50);
    }
  }

  function closeSearchModal() {
    if (!searchModalBackdrop || !isSearchModalOpen) return;
    isSearchModalOpen = false;
    searchModalBackdrop.classList.remove('is-open');

    setTimeout(() => {
      if (!isSearchModalOpen) {
        searchModalBackdrop.style.display = 'none';
      }
    }, 280);
  }

  function toggleSearchModal() {
    if (isSearchModalOpen) {
      closeSearchModal();
    } else {
      openSearchModal();
    }
  }

  function updateSelectedResultUi() {
    if (!searchResultsContainer) return;
    const items = searchResultsContainer.querySelectorAll('.search-result-item');
    items.forEach((item, idx) => {
      if (idx === selectedResultIndex) {
        item.classList.add('is-selected');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('is-selected');
      }
    });
  }

  function renderSearchSuggestions() {
    const suggestions = [
      {
        id: 'sugg_renee',
        trackName: 'Renee',
        artistName: 'SALES',
        artworkUrl: 'assets/renee.png',
        previewUrl: 'assets/renee.mp3',
        duration: 179,
        isLocal: true,
        hasSyncedLyrics: true,
        rawTrack: playlist.find(t => t.id === 'renee')
      },
      {
        id: 'sugg_roar',
        trackName: "I can't handle change",
        artistName: 'ROAR',
        artworkUrl: 'assets/roar.png',
        previewUrl: 'assets/roar.mp3',
        duration: 198,
        isLocal: true,
        hasSyncedLyrics: true,
        rawTrack: playlist.find(t => t.id === 'roar')
      },
      {
        id: 'sugg_temporary',
        trackName: 'Temporary',
        artistName: 'Shiftyz',
        artworkUrl: 'assets/temporary.png',
        previewUrl: 'assets/temporary.mp3',
        duration: 167,
        isLocal: true,
        hasSyncedLyrics: false,
        rawTrack: playlist.find(t => t.id === 'temporary')
      },
      {
        id: 'sugg_golden',
        trackName: 'golden hour',
        artistName: 'JVKE',
        artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/1a/7b/8d1a7b44-316f-7c7f-4380-935673fb697a/5056167175650.jpg/600x600bb.jpg',
        previewUrl: 'cache/sugg_golden.m4a',
        duration: 209,
        isLocal: false,
        hasSyncedLyrics: true
      },
      {
        id: 'sugg_asitwas',
        trackName: 'As It Was',
        artistName: 'Harry Styles',
        artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg',
        previewUrl: 'cache/sugg_asitwas.m4a',
        duration: 167,
        isLocal: false,
        hasSyncedLyrics: true
      },
      {
        id: 'sugg_until',
        trackName: 'Until I Found You',
        artistName: 'Stephen Sanchez',
        artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/64/d2/c5/64d2c511-67f4-ae09-5153-d39c3da413a3/21UMGIM75467.rgb.jpg/600x600bb.jpg',
        previewUrl: 'cache/sugg_until.m4a',
        duration: 177,
        isLocal: false,
        hasSyncedLyrics: true
      }
    ];

    let filtered = suggestions;
    if (currentSearchFilter === 'synced') {
      filtered = filtered.filter(s => s.hasSyncedLyrics);
    } else if (currentSearchFilter === 'local') {
      filtered = filtered.filter(s => s.isLocal);
    }

    currentSearchResults = filtered;
    selectedResultIndex = 0;
    renderSearchResults(filtered);
  }

  async function executeGlobalSearch(query) {
    if (!query || !query.trim()) {
      renderSearchSuggestions();
      return;
    }

    const q = query.trim().toLowerCase();
    if (searchResultsContainer) {
      searchResultsContainer.innerHTML = '<div class="search-spinner"></div>';
    }

    try {
      // 1. Search local playlist
      const localMatches = playlist.filter(t => 
        (t.title && t.title.toLowerCase().includes(q)) || 
        (t.artist && t.artist.toLowerCase().includes(q))
      ).map(t => ({
        id: t.id,
        trackName: t.title,
        artistName: t.artist,
        artworkUrl: t.cover,
        previewUrl: t.src,
        duration: t.duration,
        isLocal: true,
        hasSyncedLyrics: !!(t.lyrics && t.lyrics.length > 0) || !!t.lrcFile,
        rawTrack: t
      }));

      // 2. Search online iTunes global catalogue
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=18`;
      let itunesResults = [];
      try {
        const itRes = await fetch(itunesUrl);
        if (itRes.ok) {
          const itData = await itRes.json();
          if (itData && itData.results) {
            itunesResults = itData.results.map(item => ({
              id: 'itunes_' + item.trackId,
              trackName: item.trackName,
              artistName: item.artistName,
              artworkUrl: item.artworkUrl100 ? item.artworkUrl100.replace('100x100bb', '600x600bb') : 'assets/roar.png',
              previewUrl: item.previewUrl,
              duration: Math.round((item.trackTimeMillis || 30000) / 1000),
              isLocal: false,
              hasSyncedLyrics: true,
              itunesItem: item
            }));
          }
        }
      } catch (itErr) {
        console.warn('iTunes search error:', itErr);
      }

      let combined = [...localMatches, ...itunesResults];

      if (currentSearchFilter === 'synced') {
        combined = combined.filter(item => item.hasSyncedLyrics);
      } else if (currentSearchFilter === 'local') {
        combined = combined.filter(item => item.isLocal);
      } else if (currentSearchFilter === 'trending') {
        combined = combined.slice(0, 8);
      }

      currentSearchResults = combined;
      selectedResultIndex = combined.length > 0 ? 0 : -1;
      renderSearchResults(combined);
    } catch (err) {
      console.error('Search error:', err);
      if (searchResultsContainer) {
        searchResultsContainer.innerHTML = `
          <div class="search-empty-state">
            <p class="search-empty-title">Không thể tải kết quả</p>
            <p class="search-empty-desc">Vui lòng thử lại sau giây lát.</p>
          </div>
        `;
      }
    }
  }

  function renderSearchResults(results) {
    if (!searchResultsContainer) return;

    if (results.length === 0) {
      searchResultsContainer.innerHTML = `
        <div class="search-empty-state">
          <svg class="search-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p class="search-empty-title">Không tìm thấy bài hát phù hợp</p>
          <p class="search-empty-desc">Thử tìm kiếm với tên bài hát, nghệ sĩ hoặc thể loại nhạc khác xem sao nhé.</p>
        </div>
      `;
      return;
    }

    let html = '';
    results.forEach((item, idx) => {
      const isSel = idx === selectedResultIndex ? ' is-selected' : '';
      const isVnItem = isVietnameseText(item.trackName) || isVietnameseText(item.artistName);
      const vnClass = isVnItem ? ' is-vietnamese' : '';
      const syncedBadge = item.hasSyncedLyrics
        ? `<span class="synced-lyrics-badge"><svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.4h7.6z"/></svg> Synced LRC</span>`
        : '';
      const localBadge = item.isLocal
        ? `<span class="synced-lyrics-badge" style="background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.25); color: #fff;">Đã tải</span>`
        : '';

      html += `
        <div class="search-result-item${isSel}${vnClass}" data-index="${idx}">
          <img class="result-cover" src="${item.artworkUrl}" alt="${escapeHtml(item.trackName)}" loading="lazy" onerror="this.onerror=null;this.src='assets/roar.png';" />
          <div class="result-info">
            <div class="result-title">${escapeHtml(item.trackName)}</div>
            <div class="result-meta">
              <span class="result-artist">${escapeHtml(item.artistName)}</span>
              <span>•</span>
              <span class="result-dur">${formatTime(item.duration)}</span>
            </div>
          </div>
          <div class="result-badge-col">
            ${localBadge}
            ${syncedBadge}
            <button class="result-play-btn" title="Phát bài này" aria-label="Phát bài này">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            </button>
          </div>
        </div>
      `;
    });

    searchResultsContainer.innerHTML = html;

    const itemEls = searchResultsContainer.querySelectorAll('.search-result-item');
    itemEls.forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.index, 10);
        playSearchResultItem(idx);
      });
      el.addEventListener('mouseenter', () => {
        itemEls.forEach(i => i.classList.remove('is-selected'));
        el.classList.add('is-selected');
        selectedResultIndex = parseInt(el.dataset.index, 10);
      });
    });
  }

  async function fetchSyncedLyricsForTrack(newTrack, item) {
    try {
      const lrcUrl = `https://lrclib.net/api/get?track_name=${encodeURIComponent(item.trackName)}&artist_name=${encodeURIComponent(item.artistName)}`;
      const lrcRes = await fetch(lrcUrl, {
        headers: { 'User-Agent': 'MusicPlayerApp/1.0' }
      });
      if (lrcRes.ok) {
        const lrcData = await lrcRes.json();
        if (lrcData && lrcData.syncedLyrics) {
          newTrack.lyrics = parseLRC(lrcData.syncedLyrics);
          updateTrackFontTheme(newTrack);
          if (playlist[currentTrackIndex] === newTrack) {
            renderLyrics(newTrack);
            updateLyrics(audio.currentTime, true, true);
          }
          showToast(`Đồng bộ thành công ${newTrack.lyrics.length} câu lyric từ LRCLIB!`);
        } else if (lrcData && lrcData.plainLyrics) {
          const lines = lrcData.plainLyrics.split('\n').map(l => l.trim()).filter(Boolean);
          const step = (newTrack.duration || 180) / Math.max(1, lines.length);
          newTrack.lyrics = lines.map((t, i) => ({ time: +(i * step).toFixed(2), text: t }));
          if (playlist[currentTrackIndex] === newTrack) {
            renderLyrics(newTrack);
            updateLyrics(audio.currentTime, true, true);
          }
        }
      } else {
        const searchLrcUrl = `https://lrclib.net/api/search?q=${encodeURIComponent(item.trackName + ' ' + item.artistName)}`;
        const sRes = await fetch(searchLrcUrl);
        if (sRes.ok) {
          const sData = await sRes.json();
          if (Array.isArray(sData) && sData.length > 0 && sData[0].syncedLyrics) {
            newTrack.lyrics = parseLRC(sData[0].syncedLyrics);
            if (playlist[currentTrackIndex] === newTrack) {
              renderLyrics(newTrack);
              updateLyrics(audio.currentTime, true, true);
            }
            showToast(`Đồng bộ thành công ${newTrack.lyrics.length} câu lyric từ LRCLIB!`);
          }
        }
      }
    } catch (lrcErr) {
      console.warn('LRCLIB fetch error:', lrcErr);
    }
  }

  function fetchFullAudioForTrack(newTrack, item) {
    const q = `${item.trackName} ${item.artistName}`;
    const id = item.id || ('online_' + Date.now());

    fetch(`/api/full-track?q=${encodeURIComponent(q)}&id=${encodeURIComponent(id)}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.success && data.src) {
          newTrack.src = data.src;
          const fullDur = data.duration || newTrack.fullDuration || newTrack.duration;
          newTrack.duration = fullDur;
          newTrack.fullDuration = fullDur;
          newTrack.isPendingFullAudio = false;

          // If this track is currently active:
          if (playlist[currentTrackIndex] === newTrack) {
            const wasPlaying = !audio.paused;
            const currentPos = audio.currentTime;
            audio.src = data.src;
            audio.currentTime = currentPos;
            if (wasPlaying) {
              audio.play().then(() => {
                isPlaying = true;
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
              }).catch(() => {});
            }
            totalDurationEl.textContent = formatTime(fullDur);
            updateProgress();
            showToast(`✦ Đã mở khóa bản FULL đầy đủ (${formatTime(fullDur)})!`);
          }
        }
      })
      .catch(err => {
        console.warn('Full track load error:', err);
      });
  }

  async function playSearchResultItem(index) {
    if (index < 0 || index >= currentSearchResults.length) return;
    const item = currentSearchResults[index];

    if (item.isLocal && item.rawTrack) {
      const plIndex = playlist.findIndex(t => t.id === item.rawTrack.id);
      if (plIndex !== -1) {
        loadTrack(plIndex);
        audio.play().then(() => {
          isPlaying = true;
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'block';
        }).catch(() => {});
        closeSearchModal();
        showToast(`Đang phát: ${item.trackName} - ${item.artistName}`);
        return;
      }
    }

    // Online song: Start immediately with preview / cached version, then hot-swap full track
    const isAlreadyCached = item.previewUrl && item.previewUrl.startsWith('cache/');
    showToast(isAlreadyCached 
      ? `Đang phát bản FULL: ${item.trackName} - ${item.artistName}` 
      : `Đang phát & Tải bản FULL: ${item.trackName}...`
    );

    const newTrack = {
      id: item.id || ('online_' + Date.now()),
      title: item.trackName,
      fullTitle: item.trackName,
      artist: item.artistName,
      cover: item.artworkUrl,
      src: item.previewUrl,
      duration: item.duration || 180,
      fullDuration: item.duration || 180,
      isPendingFullAudio: !isAlreadyCached,
      lyrics: null
    };

    playlist.push(newTrack);
    const newIndex = playlist.length - 1;
    loadTrack(newIndex);

    audio.play().then(() => {
      isPlaying = true;
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    }).catch(() => {});

    closeSearchModal();

    // 1. Fetch Synced Lyrics
    fetchSyncedLyricsForTrack(newTrack, item);

    // 2. Fetch Full Audio if not already local
    if (!isAlreadyCached) {
      fetchFullAudioForTrack(newTrack, item);
    }
  }

  // Search input events
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = val ? 'flex' : 'none';
      }
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        executeGlobalSearch(val);
      }, 260);
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (globalSearchInput) {
        globalSearchInput.value = '';
        searchClearBtn.style.display = 'none';
        globalSearchInput.focus();
        renderSearchSuggestions();
      }
    });
  }

  // Filter chips
  if (searchChips) {
    searchChips.forEach(chip => {
      chip.addEventListener('click', () => {
        searchChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentSearchFilter = chip.dataset.filter || 'all';
        executeGlobalSearch(globalSearchInput ? globalSearchInput.value : '');
      });
    });
  }

  // Trigger pill and close button
  if (searchTriggerPill) {
    searchTriggerPill.addEventListener('click', () => {
      openSearchModal();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      closeSearchModal();
    });
  }

  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener('click', (e) => {
      if (e.target === searchModalBackdrop) {
        closeSearchModal();
      }
    });
  }


  if (urlParams.get('test_vn') === '1') {
    const testVnTrack = {
      id: 'test_vn',
      title: 'Không Khóc Không Cười',
      fullTitle: 'Không Khóc Không Cười',
      artist: 'Vũ',
      cover: 'assets/roar.png',
      src: 'assets/roar.mp3',
      duration: 210,
      lyrics: [
        { time: 0, text: 'Không khóc không cười chi' },
        { time: 4, text: 'Cuốn theo chiều gió đưa' },
        { time: 8, text: 'Dễ như nuốt thật nhanh ngụm cà phê cuối' },
        { time: 12, text: 'Dễ như cách em xua bàn tay để che tiếc nuối' },
        { time: 16, text: 'Dễ như cách em quay lại quay lại quay lại' },
        { time: 20, text: 'Chỉ để buông lời tha thứ nhân từ' },
        { time: 24, text: 'Vậy là lần cuối đi bên nhau' },
        { time: 28, text: 'Cay đắng nhưng không đau' },
        { time: 32, text: 'Nếu ai cũng mang tội thì người mong đợi gì nơi tôi?' }
      ]
    };
    playlist.unshift(testVnTrack);
    loadTrack(0);
    updateLyrics(13, true, true);
  } else {
    loadTrack(initialTrack);

    if (!isNaN(timeParam)) {
      audio.currentTime = timeParam;
      updateProgress();
      updateLyrics(timeParam, true, true);
    }
  }

  const searchQueryParam = urlParams.get('search_query');
  if (searchQueryParam) {
    openSearchModal();
    if (globalSearchInput) {
      globalSearchInput.value = searchQueryParam;
      if (searchClearBtn) searchClearBtn.style.display = 'flex';
      executeGlobalSearch(searchQueryParam);
    }
  } else if (urlParams.get('search_open') === '1') {
    openSearchModal();
  }

