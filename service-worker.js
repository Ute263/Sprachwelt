const CACHE_NAME = "tonis-sprachwelt-v23";
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
  "assets/icons/app-icon.png",
  "assets/icons/app-icon-512.png",
  "assets/icons/app-icon-192.png",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/favicon-32.png",
  "assets/icons/favicon-16.png",
  "favicon.ico",
  "assets/icons/toni-sprachwelt.png",
  "assets/icons/icon-woerterbuch.png",
  "assets/icons/icon-schreibwerkstatt.png",
  "assets/icons/icon-schreibheft.png",
  "assets/icons/icon-buecher.png",
  "assets/icons/icon-wortforscher.png",
  "assets/icons/icon-geschichtenwelt.png",
  "assets/icons/icon-lesewelt.png",
  "assets/icons/icon-lesen-malen.png",
  "assets/icons/icon-lesedetektiv.png",
  "assets/icons/icon-texte-verstehen.png",
  "assets/icons/icon-vorlesen.png",
  "assets/icons/icon-wort-des-tages.png",
  "assets/icons/icon-starke-schreiber.png",
  "assets/icons/icon-geschichtenbilder.png",
  "assets/geschichtenbilder/01-spielplatz.png",
  "assets/geschichtenbilder/02-bauernhof.png",
  "assets/geschichtenbilder/03-wald.png",
  "assets/geschichtenbilder/04-meer.png",
  "assets/geschichtenbilder/05-geburtstag.png",
  "assets/geschichtenbilder/06-klassenzimmer.png",
  "assets/geschichtenbilder/07-kinderzimmer.png",
  "assets/geschichtenbilder/08-zoo.png",
  "assets/geschichtenbilder/09-herbst.png",
  "assets/geschichtenbilder/10-winter.png",
  "assets/geschichtenbilder/11-fruehling.png",
  "assets/geschichtenbilder/12-sommer.png",
  "assets/geschichtenbilder/13-drachenland.png",
  "assets/geschichtenbilder/14-ritterburg.png",
  "assets/geschichtenbilder/15-weltraum.png",
  "assets/geschichtenbilder/16-zirkus.png",
  "assets/geschichtenbilder/17-schatzinsel.png",
  "assets/geschichtenbilder/18-regenbogenland.png",
  "assets/geschichtenbilder/19-fantasiewelt.png",
  "assets/geschichtenbilder/20-wimmelstadt.png",
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
