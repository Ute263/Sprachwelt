const CACHE_NAME = "tonis-sprachwelt-v33";
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
  "assets/icons/icon-rechtschreibung.png",
  "assets/icons/icon-schreibwerkstatt.png",
  "assets/icons/icon-schreibheft.png",
  "assets/icons/icon-buecher.png",
  "assets/icons/icon-wortforscher.png",
  "assets/icons/icon-geschichtenwelt.png",
  "assets/icons/icon-geschichtenwuerfel.png",
  "assets/icons/icon-lesewelt.png",
  "assets/icons/icon-lesen-malen.png",
  "assets/icons/icon-lesedetektiv.png",
  "assets/icons/icon-texte-verstehen.png",
  "assets/icons/icon-vorlesen.png",
  "assets/icons/icon-wort-des-tages.png",
  "assets/icons/icon-starke-schreiber.png",
  "assets/icons/icon-geschichtenbilder.png",
  "assets/geschichtenbilder/01_spielplatz.jpg",
  "assets/geschichtenbilder/02_bauernhof.jpg",
  "assets/geschichtenbilder/03_wald.jpg",
  "assets/geschichtenbilder/04_meer.jpg",
  "assets/geschichtenbilder/05_geburtstag.jpg",
  "assets/geschichtenbilder/06_klassenzimmer.jpg",
  "assets/geschichtenbilder/07_kinderzimmer.jpg",
  "assets/geschichtenbilder/08_zoo.jpg",
  "assets/geschichtenbilder/09_herbst.jpg",
  "assets/geschichtenbilder/10_winter.jpg",
  "assets/geschichtenbilder/11_fruehling.jpg",
  "assets/geschichtenbilder/12_sommer.jpg",
  "assets/geschichtenbilder/13_drachenland.jpg",
  "assets/geschichtenbilder/14_ritterburg.jpg",
  "assets/geschichtenbilder/15_weltraum.jpg",
  "assets/geschichtenbilder/16_zirkus.jpg",
  "assets/geschichtenbilder/17_schatzinsel.jpg",
  "assets/geschichtenbilder/18_regenbogenland.jpg",
  "assets/geschichtenbilder/19_fantasiewelt.jpg",
  "assets/geschichtenbilder/20_wimmelstadt.jpg",
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
