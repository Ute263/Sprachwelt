const CACHE_NAME = "tonis-sprachwelt-v15";
const ASSETS = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "grundwortschatz-nrw.js",
  "words.js",
  "schreibkarten.js",
  "lesetexte.js",
  "manifest.json",
  "assets/toni.png",
  "assets/fresch/schwingen.svg",
  "assets/fresch/verlaengern.svg",
  "assets/fresch/ableiten.svg",
  "assets/fresch/merken.svg",
  "assets/fresch/wortbausteine.svg",
  "assets/fresch/gross-klein.svg",
  "assets/fresch/nachschlagen.svg",
  "icon.png",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key.startsWith("tonis-sprachwelt-") && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
