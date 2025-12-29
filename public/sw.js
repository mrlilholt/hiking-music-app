/* Hiking Music simple service worker */
const CACHE = "hiking-music-v2";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
  "/assets/splash/splash-portrait.png",
  "/assets/splash/splash-landscape.png",
  "/assets/stations/station-trail-guitar.png",
  "/assets/stations/station-lofi-woods.png",
  "/assets/stations/station-ultra-ambient.png",
  "/assets/stations/station-chill-psy-india.png",
  "/assets/stations/station-forest-drift.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Don't try to cache cross-origin streams.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((resp) => {
      const copy = resp.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
      return resp;
    }).catch(() => cached))
  );
});
