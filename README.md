# Hiking Music (React PWA)

A simple Android-friendly PWA for hike-ready radio streams.

## Run locally
1. Install Node.js (LTS)
2. In this folder:
   - `npm install`
   - `npm run dev`
3. Open the URL shown in the terminal.

## Build
- `npm run build`
- `npm run preview -- --host`

## Install on Android
Open in Chrome -> menu -> **Install app**

## Notes
- Streams are cross-origin and are NOT cached by the service worker.
- The visualizer tries the Web Audio analyser first; if blocked by CORS, it falls back to an animated visualizer.
