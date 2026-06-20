const THEMES = [
  { name: "Tiere", route: "animals", emoji: "🐶", ready: true },
  { name: "Schule und Lernen", route: "school", emoji: "🏫", ready: true },
  { name: "Sommer und Freizeit", route: "summer", emoji: "☀️", ready: true },
  { name: "Essen und Trinken", route: "food", emoji: "🍎", ready: true },
  { name: "Haus und Wohnen", route: "homePlace", emoji: "🏠", ready: true },
  { name: "Zum Kuscheln", route: "toys", emoji: "🛏️", ready: true },
  { name: "Familie und Menschen", route: "people", emoji: "👨‍👩‍👧", ready: true },
  { name: "Gefühle", route: "feelings", emoji: "😊", ready: true },
  { name: "Verben", route: "verbs", emoji: "🟩", ready: true },
  { name: "Adjektive", route: "adjectives", emoji: "🟫", ready: true },
  { name: "Natur und Jahreszeiten", route: "nature", emoji: "🌳", ready: true },
  { name: "Fahrzeuge", route: "vehicles", emoji: "🚗", ready: true },
  { name: "Feste und Feiern", route: "celebrations", emoji: "🎉", ready: true },
  { name: "Tiere im Meer", route: "seaAnimals", emoji: "🐠", ready: true },
  { name: "Sport und Bewegung", route: "sports", emoji: "⚽", ready: true },
  { name: "Kunst und Musik", route: "arts", emoji: "🎨", ready: true },
  { name: "Technik und Medien", route: "tech", emoji: "🔧", ready: true },
  { name: "Lieblingswörter", route: "favorites", emoji: "⭐", ready: true }
];

const BANDS = {
  animals: {
    thema: "Tiere",
    title: "Tiere",
    allCategory: "Alle Tiere",
    categories: ["Alle Tiere", "Haustiere", "Bauernhoftiere", "Wilde Tiere", "Kleine Tiere", "Wassertiere"]
  },
  school: {
    thema: "Schule",
    title: "Schule und Lernen",
    allCategory: "Alle Schulwörter",
    categories: ["Alle Schulwörter", "Im Klassenraum", "Schreiben und Basteln", "Zahlen und Formen", "Sport und Pause"]
  },
  summer: {
    thema: "Sommer",
    title: "Sommer und Freizeit",
    allCategory: "Alle Sommerwörter",
    categories: ["Alle Sommerwörter", "Sommerwetter", "Draußen", "Ferien", "Meer und Schwimmbad"]
  },
  food: {
    thema: "Essen",
    title: "Essen und Trinken",
    allCategory: "Alle Essenswörter",
    categories: ["Alle Essenswörter", "Obst", "Gemüse", "Frühstück und Brotzeit", "Getränke und Süßes"]
  },
  feelings: {
    thema: "Gefühle",
    title: "Gefühle",
    allCategory: "Alle Gefühlswörter",
    categories: ["Alle Gefühlswörter", "Gute Gefühle", "Schlechte Gefühle", "Miteinander", "Mut und Angst"]
  },
  toys: {
    thema: "Spielzeug",
    title: "Zum Kuscheln",
    allCategory: "Alle Spielzeugwörter",
    categories: ["Alle Spielzeugwörter", "Spielsachen", "Bauen", "Draußen spielen", "Kuscheln"]
  },
  people: {
    thema: "Familie und Menschen",
    title: "Familie und Menschen",
    allCategory: "Alle Menschenwörter",
    categories: ["Alle Menschenwörter", "Familie", "Freunde", "Körper", "Kleidung"]
  },
  homePlace: {
    thema: "Zuhause",
    title: "Haus und Wohnen",
    allCategory: "Alle Zuhausewörter",
    categories: ["Alle Zuhausewörter", "Zimmer", "Möbel", "Küche", "Bad"]
  },
  verbs: {
    thema: "Verben",
    title: "Verben",
    allCategory: "Alle Verben",
    categories: ["Alle Verben", "Bewegung", "Schule", "Spielen", "Gefühle zeigen"]
  },
  adjectives: {
    thema: "Adjektive",
    title: "Adjektive",
    allCategory: "Alle Adjektive",
    categories: ["Alle Adjektive", "Aussehen", "Größe", "Gefühl", "Bewegung"]
  },
  nature: {
    thema: "Natur und Jahreszeiten",
    title: "Natur und Jahreszeiten",
    allCategory: "Alle Naturwörter",
    categories: ["Alle Naturwörter"]
  },
  vehicles: {
    thema: "Fahrzeuge",
    title: "Fahrzeuge",
    allCategory: "Alle Fahrzeuge",
    categories: ["Alle Fahrzeuge"]
  },
  celebrations: {
    thema: "Feste und Feiern",
    title: "Feste und Feiern",
    allCategory: "Alle Festwörter",
    categories: ["Alle Festwörter"]
  },
  seaAnimals: {
    thema: "Tiere im Meer",
    title: "Tiere im Meer",
    allCategory: "Alle Meerestiere",
    categories: ["Alle Meerestiere"]
  },
  sports: {
    thema: "Sport und Bewegung",
    title: "Sport und Bewegung",
    allCategory: "Alle Sportwörter",
    categories: ["Alle Sportwörter"]
  },
  arts: {
    thema: "Kunst und Musik",
    title: "Kunst und Musik",
    allCategory: "Alle Kunst- und Musikwörter",
    categories: ["Alle Kunst- und Musikwörter"]
  },
  tech: {
    thema: "Technik und Medien",
    title: "Technik und Medien",
    allCategory: "Alle Technikwörter",
    categories: ["Alle Technikwörter"]
  }
};

const STORY_OPTIONS = {
  who: ["Toni", "ein Hund", "eine Katze", "ein Drache", "ein Kind", "ein Freund", "eine Lehrerin", "ein Monster"],
  where: ["in der Schule", "im Wald", "am Strand", "im Garten", "im Schloss", "auf dem Spielplatz", "im Schwimmbad", "in einer Höhle"],
  what: ["findet einen Schatz", "verliert den Ball", "trifft einen Freund", "hört ein Geräusch", "braucht Hilfe", "fliegt davon", "findet eine Tür", "bekommt eine Idee"]
};

const FAVORITE_KEY = "toni-woerterbuch-favoriten";
const OLD_FAVORITE_KEY = "mina-igel-favoriten";
const DICTIONARY_ROUTES = ["dictionary", "favorites", ...Object.keys(BANDS)];
const APP_TITLE = "Tonis Sprachwelt";
const ICONS = {
  wortforscher: "assets/icons/icon-wortforscher.png",
  woerterbuch: "assets/icons/icon-woerterbuch.png",
  rechtschreibung: "assets/icons/icon-rechtschreibung.png",
  schreibwerkstatt: "assets/icons/icon-schreibwerkstatt.png",
  schreibheft: "assets/icons/icon-schreibheft.png",
  buecher: "assets/icons/icon-buecher.png",
  wortforscherLupe: "assets/icons/icon-wortforscher.png",
  wortDesTages: "assets/icons/icon-wort-des-tages.png",
  geschichten: "assets/icons/icon-geschichtenwelt.png",
  starkeSchreiber: "assets/icons/icon-starke-schreiber.png",
  geschichtenbilder: "assets/icons/icon-geschichtenbilder.png",
  lesewelt: "assets/icons/icon-lesewelt.png",
  lesenMalen: "assets/icons/icon-lesen-malen.png",
  lesedetektiv: "assets/icons/icon-lesedetektiv.png",
  texteVerstehen: "assets/icons/icon-texte-verstehen.png",
  vorlesen: "assets/icons/icon-vorlesen.png"
};
const NRW_WORDS = typeof GRUNDWORTSCHATZ_NRW !== "undefined" ? GRUNDWORTSCHATZ_NRW : [];
const NRW_WORD_LOOKUP = new Map(NRW_WORDS.map((entry) => [normalizeWord(entry.wort), entry]));
const DICTIONARY_WORDS = buildDictionaryWords();
const WRITING_AREAS = [
  { name: "Schreibaufgaben", icon: ICONS.schreibheft, emoji: "✏️", sourceAreas: ["Schreibaufgaben"] },
  { name: "Mini-Bücher", icon: ICONS.buecher, emoji: "📖", sourceAreas: ["Mini-Bücher"] },
  { name: "Geschichtenideen", icon: ICONS.geschichten, emoji: "🎲", sourceAreas: ["Geschichtenideen"] },
  { name: "Starke Schreiber", icon: ICONS.starkeSchreiber, emoji: "⭐", sourceAreas: ["Starke Schreiber"] },
  { name: "Geschichtenbilder", icon: ICONS.geschichtenbilder, emoji: "🖼️", kind: "image" }
];
const READING_AREAS = [
  { name: "Lies und male", icon: ICONS.lesenMalen, emoji: "🎨" },
  { name: "Lesedetektiv", icon: ICONS.lesedetektiv, emoji: "🔎" },
  { name: "Texte verstehen", icon: ICONS.texteVerstehen, emoji: "🧠" },
  { name: "Vorlesen", icon: ICONS.vorlesen, emoji: "🎭" }
];
const STORY_IMAGE_TITLES = [
  "Spielplatz",
  "Bauernhof",
  "Wald",
  "Meer",
  "Geburtstag",
  "Klassenzimmer",
  "Kinderzimmer",
  "Zoo",
  "Herbst",
  "Winter",
  "Frühling",
  "Sommer",
  "Drachenland",
  "Ritterburg",
  "Weltraum",
  "Zirkus",
  "Schatzinsel",
  "Regenbogenland",
  "Fantasiewelt",
  "Wimmelstadt"
];
const STORY_IMAGE_FILES = [
  "01_spielplatz.jpg",
  "02_bauernhof.jpg",
  "03_wald.jpg",
  "04_meer.jpg",
  "05_geburtstag.jpg",
  "06_klassenzimmer.jpg",
  "07_kinderzimmer.jpg",
  "08_zoo.jpg",
  "09_herbst.jpg",
  "10_winter.jpg",
  "11_fruehling.jpg",
  "12_sommer.jpg",
  "13_drachenland.jpg",
  "14_ritterburg.jpg",
  "15_weltraum.jpg",
  "16_zirkus.jpg",
  "17_schatzinsel.jpg",
  "18_regenbogenland.jpg",
  "19_fantasiewelt.jpg",
  "20_wimmelstadt.jpg"
];
const STORY_IMAGE_PROMPTS = [
  "Wer ist auf dem Bild?",
  "Wo spielt die Geschichte?",
  "Was passiert gerade?",
  "Was könnte als Nächstes passieren?",
  "Gibt es ein Problem?",
  "Wie endet die Geschichte?"
];
const WORD_EXPLORER_AREAS = [
  { name: "Wörterbuch", icon: ICONS.woerterbuch, emoji: "📖", route: "dictionary", symbolName: "Nachschlagen" },
  { name: "Rechtschreibung", icon: ICONS.rechtschreibung, emoji: "✏️", route: "orthography" },
  { name: "Wort des Tages", icon: ICONS.wortDesTages, emoji: "⭐", route: "dailyWord" }
];
const FRESCH_SYMBOLS = {
  "Schwingen": "assets/fresch/schwingen.svg",
  "Verlängern": "assets/fresch/verlaengern.svg",
  "Ableiten": "assets/fresch/ableiten.svg",
  "Merken": "assets/fresch/merken.svg",
  "Wortbausteine": "assets/fresch/wortbausteine.svg",
  "Groß oder klein?": "assets/fresch/gross-klein.svg",
  "Groß- und Kleinschreibung": "assets/fresch/gross-klein.svg",
  "Nachschlagen": "assets/fresch/nachschlagen.svg"
};
const FRESCH_AREAS = [
  {
    name: "Schwingen",
    symbol: FRESCH_SYMBOLS["Schwingen"],
    explanation: "Sprich das Wort deutlich und schwinge die Silben.",
    examples: ["Regenbogen", "Vollmond", "Tomate"],
    task: "Schwinge die Wörter. Male die Silbenbögen. Markiere die Silbenkönige."
  },
  {
    name: "Verlängern",
    symbol: FRESCH_SYMBOLS["Verlängern"],
    explanation: "Verlängere das Wort, damit du den letzten Buchstaben besser hören kannst.",
    examples: ["Hund → Hunde", "Berg → Berge", "fragen → fragte", "klug → klüger"],
    task: "Sprich beide Wörter. Markiere die hörbare Stelle."
  },
  {
    name: "Ableiten",
    symbol: FRESCH_SYMBOLS["Ableiten"],
    explanation: "Verwandte Wörter helfen dir beim Schreiben.",
    examples: ["Traum → Träume", "klar → klären", "Baum → Bäume"],
    task: "Sprich beide Wörter. Markiere die veränderte Stelle."
  },
  {
    name: "Merken",
    symbol: FRESCH_SYMBOLS["Merken"],
    explanation: "Für manche Wörter gibt es keine Strategie. Diese Wörter musst du dir merken.",
    examples: ["Vater", "Straße", "Tiger"],
    task: "Markiere die schwierige Stelle. Schreibe das Wort."
  },
  {
    name: "Wortbausteine",
    symbol: FRESCH_SYMBOLS["Wortbausteine"],
    explanation: "Viele Wörter bestehen aus mehreren Bausteinen.",
    examples: ["Hängematte", "Spielzeug", "Wortspiel"],
    task: "Trenne die Wörter in ihre Wortbausteine. Markiere die Bausteine in verschiedenen Farben."
  },
  {
    name: "Groß- und Kleinschreibung",
    symbol: FRESCH_SYMBOLS["Groß- und Kleinschreibung"],
    explanation: "Nomen und Satzanfänge werden groß geschrieben.",
    examples: ["Sonne", "Glück", "Zucker"],
    task: "Markiere den ersten Buchstaben."
  },
  {
    name: "Nachschlagen",
    symbol: FRESCH_SYMBOLS["Nachschlagen"],
    explanation: "Schwierige Wörter kannst du im Wörterbuch nachschlagen.",
    examples: ["Fuß", "vielleicht", "Ärztin"],
    task: "Suche die Wörter im Wörterbuch. Lies die Silben."
  }
];
const ORTHOGRAPHY_SECTIONS = [
  {
    title: "Laute und Buchstaben",
    intro: "Übe schwierige Laute und Buchstaben.",
    cards: [
      { titel: "ei", hinweis: "Ich höre ei.", beispiele: ["Ei", "Seil", "heiß"] },
      { titel: "au", hinweis: "Ich höre au.", beispiele: ["Haus", "Maus", "Baum"] },
      { titel: "eu", hinweis: "Ich höre eu.", beispiele: ["Feuer", "heute", "Leute"] },
      { titel: "äu", hinweis: "Manche Wörter schreibt man mit äu, wenn es ein verwandtes Wort mit au gibt.", beispiele: ["Bäume – Baum", "Häuser – Haus"] },
      { titel: "ie", hinweis: "ie klingt lang.", beispiele: ["Biene", "lieben", "Spiel"] },
      { titel: "sch", hinweis: "Ich höre sch.", beispiele: ["Schule", "Tasche", "Fisch"] },
      { titel: "ch", hinweis: "Ich höre ch.", beispiele: ["ich", "Buch", "lachen"] },
      { titel: "sp / st", hinweis: "Am Wortanfang hört man oft schp oder scht, aber man schreibt sp oder st.", beispiele: ["spielen", "Stein", "Straße"] },
      { titel: "pf", hinweis: "Ich höre genau: p und f gehören zusammen.", beispiele: ["Pferd", "Apfel", "Pfeife"] },
      { titel: "ng / nk", hinweis: "Ich höre genau, ob ich ng oder nk brauche.", beispiele: ["singen", "Ring", "Bank", "trinken"] },
      { titel: "v", hinweis: "Manche Wörter schreibt man mit v. Diese Wörter muss man sich gut merken.", beispiele: ["Vogel", "Vater", "viel"] },
      { titel: "qu", hinweis: "Nach q steht fast immer u.", beispiele: ["Quelle", "Quark", "Quadrat"] },
      { titel: "ä / e", hinweis: "Finde ein verwandtes Wort.", beispiele: ["Hände – Hand", "Bälle – Ball", "Bäume – Baum"] },
      { titel: "b / p", hinweis: "Am Wortende klingen b und p oft ähnlich. Verlängere das Wort.", beispiele: ["Dieb – Diebe", "halb – halbe"] },
      { titel: "d / t", hinweis: "Am Wortende klingen d und t oft ähnlich. Verlängere das Wort.", beispiele: ["Rad – Räder", "Hund – Hunde"] },
      { titel: "g / k", hinweis: "Am Wortende klingen g und k oft ähnlich. Verlängere das Wort.", beispiele: ["Berg – Berge", "Tag – Tage"] },
      {
        titel: "s, ss, ß",
        hinweis: "Achte darauf, ob der Vokal davor kurz oder lang klingt.",
        merke: ["Nach kurzem Vokal schreibt man oft ss.", "Nach langem Vokal schreibt man oft ß."],
        beispiele: ["müssen", "Straße", "Sonne"]
      },
      { titel: "mm", hinweis: "Sprich deutlich und achte auf den kurzen Vokal davor.", beispiele: ["kommen", "schwimmen", "Sommer"] },
      { titel: "nn", hinweis: "Sprich deutlich und achte auf den kurzen Vokal davor.", beispiele: ["rennen", "Sonne", "Tanne"] },
      { titel: "h", hinweis: "Das h kann einen Vokal verlängern. Man hört es oft nicht deutlich.", beispiele: ["fahren", "Zahn", "wohnen"] }
    ]
  },
  {
    title: "Rechtschreib-Tricks",
    intro: "Entdecke, wie Wörter richtig geschrieben werden.",
    cards: [
      { titel: "Ich höre genau", hinweis: "Sprich langsam, klatsche Silben oder schwinge mit.", beispiele: ["Ro-se", "Ha-se", "Fe-der"] },
      { titel: "Verwandte Wörter", hinweis: "Suche Wörter aus derselben Wortfamilie.", beispiele: ["Hand – Hände", "fahren – Fahrer", "Baum – Bäume"] },
      { titel: "Zusammengesetzte Wörter", hinweis: "Ein langes Wort besteht oft aus zwei Wörtern.", beispiele: ["Haus + Tür = Haustür", "Sonne + Blume = Sonnenblume"] },
      { titel: "Wortbausteine", hinweis: "Achte auf Vorsilben und Endungen.", beispiele: ["vor-", "ver-", "-lich", "-heit"] },
      { titel: "Groß- und Kleinschreibung", hinweis: "Nomen schreibt man groß. Du erkennst sie oft an einem Artikel.", beispiele: ["der Hund", "die Schule", "das Haus"] },
      { titel: "Merkwörter", hinweis: "Diese Wörter musst du dir gut merken.", beispiele: ["nämlich", "vielleicht", "wieder"] }
    ]
  }
];
const DAILY_WORDS = NRW_WORDS.slice(0, 20);

const state = {
  route: "portal",
  categories: Object.fromEntries(Object.entries(BANDS).map(([route, band]) => [route, band.allCategory])),
  query: "",
  favorites: loadFavorites(),
  writingArea: "",
  writingCardIndex: null,
  readingArea: "",
  readingCardIndex: null,
  orthographyCardIndex: null,
  dailyWord: null
};
let storyZoomLevel = 1.35;
let storyZoomModal = null;

const views = {
  portal: document.querySelector("#view-portal"),
  wordExplorer: document.querySelector("#view-word-explorer"),
  dictionary: document.querySelector("#view-dictionary"),
  band: document.querySelector("#view-band"),
  favorites: document.querySelector("#view-favorites"),
  orthography: document.querySelector("#view-orthography"),
  dailyWord: document.querySelector("#view-daily-word"),
  writing: document.querySelector("#view-writing"),
  story: document.querySelector("#view-story"),
  reading: document.querySelector("#view-reading")
};

const dictionaryNav = document.querySelector("#dictionary-nav");
const dictionaryTools = document.querySelector("#dictionary-tools");
const wordExplorerGrid = document.querySelector("#word-explorer-grid");
const themeGrid = document.querySelector("#theme-grid");
const homeSearch = document.querySelector("#home-search");
const homeSearchGrid = document.querySelector("#home-search-grid");
const bandTitle = document.querySelector("#band-title");
const categoryTabs = document.querySelector("#category-tabs");
const wordGrid = document.querySelector("#word-grid");
const favoriteGrid = document.querySelector("#favorite-grid");
const searchInput = document.querySelector("#search-input");
const writingAreaGrid = document.querySelector("#writing-area-grid");
const writingCardView = document.querySelector("#writing-card-view");
const writingView = document.querySelector("#view-writing");
const readingAreaGrid = document.querySelector("#reading-area-grid");
const readingCardView = document.querySelector("#reading-card-view");
const readingView = document.querySelector("#view-reading");
const orthographyCardView = document.querySelector("#orthography-card-view");
const orthographyView = document.querySelector("#view-orthography");
const dailyWordCardView = document.querySelector("#daily-word-card-view");
const dailyWordView = document.querySelector("#view-daily-word");
const navButtons = document.querySelectorAll("[data-route]");
const scrollTopButton = document.querySelector("#scroll-top-button");
const rollStoryButton = document.querySelector("#roll-story-button");
const storyWho = document.querySelector("#story-who");
const storyWhere = document.querySelector("#story-where");
const storyWhat = document.querySelector("#story-what");

renderWordExplorer();
renderThemes();
rollStory();
document.title = APP_TITLE;
render();

navButtons.forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

rollStoryButton.addEventListener("click", rollStory);
writingView.addEventListener("click", handleWritingClick);
readingView.addEventListener("click", handleReadingClick);
orthographyView.addEventListener("click", handleOrthographyClick);
dailyWordView.addEventListener("click", handleDailyWordClick);
window.addEventListener("scroll", updateScrollTopButton, { passive: true });
window.addEventListener("keydown", handleStoryZoomKeydown);
setInterval(updateScrollTopButton, 250);
scrollTopButton.addEventListener("click", scrollToTop);
scrollTopButton.addEventListener("pointerdown", scrollToTop);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    if (window.scrollY > 8) {
      window.scrollTo({ top: 0 });
    }
  }, 650);
}

function renderWordExplorer() {
  wordExplorerGrid.innerHTML = WORD_EXPLORER_AREAS.map((area) => `
    <button class="learning-area-tile" type="button" data-route="${area.route}">
      ${renderAppIcon(area.icon, area.name)}
      <span>${area.name}</span>
    </button>
  `).join("");

  wordExplorerGrid.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });
}

function renderThemes() {
  themeGrid.innerHTML = THEMES.map((theme) => {
    const note = theme.ready ? "Jetzt öffnen" : "kommt bald";
    return `
      <button
        class="theme-tile"
        type="button"
        data-theme="${theme.name}"
        data-route-target="${theme.route}"
        data-ready="${theme.ready}"
      >
        <span class="tile-emoji" aria-hidden="true">${theme.emoji}</span>
        <span>
          <span class="tile-title">${theme.name}</span>
          <span class="tile-note">${note}</span>
        </span>
      </button>
    `;
  }).join("");

  themeGrid.querySelectorAll(".theme-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      if (tile.dataset.ready === "true") {
        setRoute(tile.dataset.routeTarget);
      }
    });
  });
}

function render() {
  updateVisibleView();
  updateNavigation();
  updateScrollTopButton();
  updateDictionaryTools();
  renderHomeSearch();
  renderBandView();
  renderWritingView();
  renderReadingView();
  renderOrthographyView();
  renderDailyWordView();
  renderWordCards(favoriteGrid, getFavoriteWords(), "Tippe auf einen Stern. Dann findest du dein Wort hier wieder.");
}

function updateVisibleView() {
  views.portal.classList.toggle("is-visible", state.route === "portal");
  views.wordExplorer.classList.toggle("is-visible", state.route === "wordExplorer");
  views.dictionary.classList.toggle("is-visible", state.route === "dictionary");
  views.favorites.classList.toggle("is-visible", state.route === "favorites");
  views.orthography.classList.toggle("is-visible", state.route === "orthography");
  views.dailyWord.classList.toggle("is-visible", state.route === "dailyWord");
  views.writing.classList.toggle("is-visible", state.route === "writing");
  views.story.classList.toggle("is-visible", state.route === "story");
  views.reading.classList.toggle("is-visible", state.route === "reading");
  views.band.classList.toggle("is-visible", Boolean(getCurrentBand()));
}

function updateNavigation() {
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === state.route);
  });
}

function updateDictionaryTools() {
  const dictionaryVisible = DICTIONARY_ROUTES.includes(state.route);
  dictionaryNav.hidden = true;
  dictionaryTools.hidden = !dictionaryVisible;

  if (!dictionaryVisible && state.query) {
    state.query = "";
    searchInput.value = "";
  }
}

function updateScrollTopButton() {
  scrollTopButton.hidden = window.scrollY < 260;
}

function renderBandView() {
  const band = getCurrentBand();

  if (!band) {
    return;
  }

  bandTitle.textContent = state.query ? "Suchergebnisse" : band.title;
  renderCategories(band);
  renderWordCards(wordGrid, getBandWords(band), "Hier ist noch kein Wort zu sehen.");
}

function renderHomeSearch() {
  const hasQuery = Boolean(state.query);
  homeSearch.hidden = !hasQuery;

  if (hasQuery) {
    renderWordCards(homeSearchGrid, getSearchWords(), "Zu deiner Suche gibt es noch kein Wort.");
  } else {
    homeSearchGrid.innerHTML = "";
  }
}

function renderCategories(band) {
  categoryTabs.hidden = Boolean(state.query);

  if (state.query) {
    categoryTabs.innerHTML = "";
    return;
  }

  categoryTabs.innerHTML = band.categories.map((category) => `
    <button class="category-tab" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");

  categoryTabs.querySelectorAll(".category-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.categories[state.route]);
    button.addEventListener("click", () => {
      state.categories[state.route] = button.dataset.category;
      render();
    });
  });
}

function getCurrentBand() {
  return BANDS[state.route] || null;
}

function getBandWords(band) {
  const selectedCategory = state.categories[state.route];

  return DICTIONARY_WORDS.filter((word) => {
    if (state.query) {
      return matchesSearch(word);
    }

    const wordThemes = getWordThemes(word);
    const matchesTheme = wordThemes.includes(band.thema) || wordThemes.includes(band.title);
    const matchesCategory = selectedCategory === band.allCategory || word.kategorie === selectedCategory;
    return matchesTheme && matchesCategory && matchesSearch(word);
  });
}

function getSearchWords() {
  return DICTIONARY_WORDS.filter((word) => matchesSearch(word));
}

function getFavoriteWords() {
  return DICTIONARY_WORDS.filter((word) => state.favorites.includes(word.id) && matchesSearch(word));
}

function matchesSearch(word) {
  if (!state.query) {
    return true;
  }

  const searchableText = [
    word.wort,
    word.artikel,
    word.silben,
    word.kategorie,
    getWordThemes(word).join(" "),
    word.wortart,
    word.fresch?.join(" ")
  ].join(" ").toLowerCase();

  return searchableText.includes(state.query);
}

function getWordThemes(word) {
  return Array.isArray(word.thema) ? word.thema : [word.thema].filter(Boolean);
}

function renderWordCards(container, words, emptyText) {
  if (!words.length) {
    container.innerHTML = `<p class="empty-state">${emptyText}</p>`;
    return;
  }

  container.innerHTML = words.map((word) => {
    const isFavorite = state.favorites.includes(word.id);
    const articleLabel = word.artikel ? `${word.artikel} ` : "";
    const articleLine = word.artikel ? `<span class="article">${word.artikel}</span>` : "";
    const visual = word.bild
      ? `<img class="word-picture" src="${word.bild}" alt="" loading="lazy">`
      : word.emoji;
    const visualClass = word.bild ? "word-emoji has-picture" : "word-emoji";
    const grundLabel = word.grundwortschatz ? `<span class="grundwortschatz-label">⭐ Grundwortschatz NRW</span>` : "";
    const freschLabels = word.fresch?.length
      ? `<div class="word-fresch-tags">${word.fresch.map((strategy) => `
          <span>
            ${renderFreschSymbol(strategy, "fresch-symbol-small")}
            ${strategy}
          </span>
        `).join("")}</div>`
      : "";
    return `
      <article class="word-card">
        <div class="word-top">
          <div class="${visualClass}" aria-hidden="true">${visual}</div>
          <button
            class="favorite-button"
            type="button"
            aria-label="${articleLabel}${word.wort} merken"
            aria-pressed="${isFavorite}"
            data-favorite="${word.id}"
          >${isFavorite ? "★" : "☆"}</button>
        </div>
        <div class="word-main">
          ${articleLine}
          <h3 class="word">${word.wort}</h3>
          <p class="syllables">${word.silben}</p>
        </div>
        <div class="word-label-row">
          <span class="category-label">${word.kategorie}</span>
          ${grundLabel}
        </div>
        ${freschLabels}
        <button class="read-button" type="button" data-speak="${word.id}">Vorlesen</button>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favorite));
  });

  container.querySelectorAll("[data-speak]").forEach((button) => {
    button.addEventListener("click", () => speakWord(button.dataset.speak));
  });
}

function buildDictionaryWords() {
  const existing = WORDS.map((word) => {
    const grundwort = NRW_WORD_LOOKUP.get(normalizeWord(word.wort));
    if (!grundwort) {
      return word;
    }

    return {
      ...word,
      wortart: word.wortart || grundwort.wortart,
      fresch: word.fresch || grundwort.fresch,
      besonderheit: word.besonderheit || grundwort.besonderheit,
      grundwortschatz: true
    };
  });

  const existingWords = new Set(existing.map((word) => normalizeWord(word.wort)));
  const additions = NRW_WORDS
    .filter((word) => !existingWords.has(normalizeWord(word.wort)))
    .map((word) => ({
      id: `nrw-${makeWordId(word.wort)}`,
      wort: word.wort,
      artikel: word.artikel,
      silben: word.silben,
      kategorie: word.kategorie || getDefaultCategory(word),
      thema: word.thema,
      emoji: word.emoji || "⭐",
      wortart: word.wortart,
      fresch: word.fresch,
      besonderheit: word.besonderheit,
      grundwortschatz: true
    }));

  return [...existing, ...additions];
}

function getDefaultCategory(word) {
  if (word.thema?.includes("Verben")) return "Alle Verben";
  if (word.thema?.includes("Adjektive")) return "Alle Adjektive";
  return "Alle Wörter";
}

function normalizeWord(word) {
  return String(word || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .trim();
}

function makeWordId(word) {
  return normalizeWord(word)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function renderWritingView() {
  if (state.route !== "writing") {
    return;
  }

  if (!state.writingArea) {
    renderWritingSelection();
    return;
  }

  const cards = getWritingCards(state.writingArea);
  if (!cards.length) {
    state.writingArea = "";
    renderWritingSelection();
    return;
  }

  if (state.writingCardIndex === null) {
    renderWritingOverview(cards);
    return;
  }

  state.writingCardIndex = Math.min(state.writingCardIndex, cards.length - 1);
  renderWritingCard(cards[state.writingCardIndex], cards.length);
}

function renderReadingView() {
  if (state.route !== "reading") {
    return;
  }

  if (!state.readingArea) {
    renderReadingSelection();
    return;
  }

  const cards = getReadingCards(state.readingArea);
  if (!cards.length) {
    state.readingArea = "";
    renderReadingSelection();
    return;
  }

  if (state.readingCardIndex === null) {
    renderReadingOverview(cards);
    return;
  }

  state.readingCardIndex = Math.min(state.readingCardIndex, cards.length - 1);
  renderReadingCard(cards[state.readingCardIndex], cards.length);
}

function renderReadingSelection() {
  readingAreaGrid.hidden = false;
  readingCardView.hidden = true;
  readingCardView.innerHTML = "";
  readingAreaGrid.innerHTML = READING_AREAS.map((area) => {
    const count = getReadingCards(area.name).length;
    return `
      <button class="reading-area-tile" type="button" data-reading-area="${area.name}">
        ${renderAppIcon(area.icon, area.name)}
        <span>
          <span class="tile-title">${area.name}</span>
          <span class="tile-note">${count} Karten</span>
        </span>
      </button>
    `;
  }).join("");
}

function renderReadingOverview(cards) {
  readingAreaGrid.hidden = true;
  readingCardView.hidden = false;
  readingCardView.innerHTML = `
    <section class="reading-overview-card" aria-labelledby="reading-overview-title">
      <div class="reading-overview-heading">
        ${renderAppIcon(getReadingAreaIcon(state.readingArea), state.readingArea, "overview-icon-frame")}
        <h3 id="reading-overview-title">${state.readingArea}</h3>
        <p>Wähle eine Aufgabe.</p>
      </div>
      <div class="task-list">
        ${cards.map((card, index) => `
          <button class="task-list-button" type="button" data-reading-card="${index}">
            <span class="task-number">${formatTaskNumber(card.nummer)}</span>
            <span>${card.titel}</span>
          </button>
        `).join("")}
      </div>
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-reading-action="back">⬅ Zurück zur Lesewelt</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-reading-action="home">🏠 Home</button>
      </div>
    </section>
  `;
}

function renderReadingCard(card, totalCards) {
  readingAreaGrid.hidden = true;
  readingCardView.hidden = false;
  const textSection = card.text
    ? renderCardSection("📖", "Lesetext", `<p class="reading-text">${card.text}</p>`)
    : "";

  readingCardView.innerHTML = `
    <article class="writing-task-card reading-task-card">
      <div class="writing-card-topline">
        <span class="card-number">Karte ${formatTaskNumber(card.nummer)} von ${formatTaskNumber(totalCards)}</span>
        <span class="card-area">${card.bereich}</span>
        <span class="card-area">Level: ${card.level}</span>
      </div>
      ${renderAppIcon(getReadingAreaIcon(card.bereich), card.bereich, "overview-icon-frame")}
      <h3>${card.titel}</h3>
      ${textSection}
      ${renderCardSection("✏️", "Aufgaben", renderCardList(card.aufgaben))}
      ${renderCardSection("❓", "Fragen", renderCardList(card.fragen))}
      ${renderCardSection("💡", "Lesetipps", renderCardList(card.lesetipps))}
      ${renderCardSection("🐥", "Toni-Tipp", `<p>${card.toniTipp}</p>`)}
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-reading-action="home">🏠 Home</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-reading-action="overview">⬅ Zurück zur Übersicht</button>
        <button class="big-action-button writing-action-button" type="button" data-reading-action="random">🎲 Zufallsaufgabe</button>
        <button class="big-action-button writing-action-button" type="button" data-reading-action="next">➡ Nächste Aufgabe</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-reading-action="top">⬆ Nach oben</button>
      </div>
    </article>
  `;
}

function renderOrthographyView() {
  if (state.route !== "orthography") {
    return;
  }

  const cards = getOrthographyCards();
  if (state.orthographyCardIndex === null) {
    renderOrthographyOverview(orthographyCardView);
    return;
  }

  state.orthographyCardIndex = Math.min(state.orthographyCardIndex, cards.length - 1);
  renderOrthographyCard(orthographyCardView, cards[state.orthographyCardIndex], cards.length);
}

function renderDailyWordView() {
  if (state.route !== "dailyWord") {
    return;
  }

  if (!state.dailyWord) {
    state.dailyWord = generateDailyWord();
  }

  dailyWordCardView.innerHTML = `
    <section class="daily-ritual">
      <button class="daily-new-button" type="button" data-daily-word-action="new">🎲 Neues Wort</button>
      ${renderDailyWordCard(state.dailyWord)}
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-daily-word-action="wordExplorer">⬅ Wortforscher</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-daily-word-action="home">🏠 Home</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-daily-word-action="top">⬆ Nach oben</button>
      </div>
    </section>
  `;
}

function renderDailyWordCard(card) {
  const image = card.bild
    ? `<img class="daily-word-image" src="${card.bild}" alt="">`
    : `<span class="daily-word-emoji" aria-hidden="true">${card.emoji}</span>`;

  return `
    <article class="daily-word-card">
      <div class="daily-word-hero">
        <div class="daily-word-picture">${image}</div>
        <div>
          <p class="daily-word-label">Wort des Tages</p>
          <h3>${card.wort}</h3>
        </div>
      </div>
      <div class="daily-task-grid">
        <section class="daily-task-card">
          ${renderDailyFreschMethods()}
          <h4>🔍 Untersuche das Wort</h4>
          ${renderCardList([
            "Welche Methode wendest du an und warum?",
            "Welche Wortart ist es?"
          ])}
        </section>
        <section class="daily-task-card">
          <h4>✏️ Arbeite mit dem Wort</h4>
          ${renderCardList([
            "Markiere die schwierige Stelle.",
            "Schreibe das Wort drei Mal auf."
          ])}
        </section>
        <section class="daily-task-card">
          <h4>🌱 Denke weiter</h4>
          ${renderCardList([
            "Finde verwandte Wörter."
          ])}
        </section>
      </div>
    </article>
  `;
}

function renderDailyFreschMethods() {
  const methods = [
    { label: "schwingen", symbol: "Schwingen" },
    { label: "verlängern", symbol: "Verlängern" },
    { label: "ableiten", symbol: "Ableiten" },
    { label: "merken", symbol: "Merken" }
  ];

  return `
    <div class="daily-fresch-methods" aria-label="FRESCH-Methoden">
      ${methods.map((method) => `
        <span class="daily-fresch-method">
          ${renderFreschSymbol(method.symbol, "fresch-symbol-daily")}
          <span>${method.label}</span>
        </span>
      `).join("")}
    </div>
  `;
}

function renderLearningOverview(container, config) {
  const symbol = config.symbolName ? renderFreschSymbol(config.symbolName, "fresch-symbol-large") : "";
  container.innerHTML = `
    <section class="reading-overview-card">
      <div class="reading-overview-heading">
        ${symbol}
        <h3>${config.title}</h3>
        <p>${config.intro || "Wähle eine Aufgabe."}</p>
      </div>
      <div class="task-list">
        ${config.cards.map((card, index) => `
          <button class="task-list-button" type="button" ${config.cardAttribute}="${index}">
            <span class="task-number">${formatTaskNumber(card.nummer)}</span>
            <span>${card.titel}</span>
          </button>
        `).join("")}
      </div>
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" ${config.actionAttribute}="${config.backAction}">⬅ Zur Übersicht</button>
        <button class="big-action-button writing-action-button is-light" type="button" ${config.actionAttribute}="${config.homeAction}">🏠 Home</button>
      </div>
    </section>
  `;
}

function renderOrthographyOverview(container) {
  let cardNumber = 0;
  container.innerHTML = `
    <section class="orthography-overview-card" aria-labelledby="orthography-overview-title">
      <div class="reading-overview-heading">
        ${renderAppIcon(ICONS.rechtschreibung, "Rechtschreibung", "overview-icon-frame")}
        <h3 id="orthography-overview-title">Rechtschreibung</h3>
        <p>Übe ruhig und der Reihe nach. Die Nummern laufen von 1 bis 26.</p>
      </div>
      <div class="orthography-section-list">
        ${ORTHOGRAPHY_SECTIONS.map((section) => `
          <section class="orthography-section">
            <div class="orthography-section-heading">
              <h4>${section.title}</h4>
              <p>${section.intro}</p>
            </div>
            <div class="orthography-learning-list">
              ${section.cards.map((card) => renderOrthographyLearningCard(card, ++cardNumber)).join("")}
            </div>
          </section>
        `).join("")}
      </div>
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-orthography-action="wordExplorer">⬅ Wortforscher</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-orthography-action="home">🏠 Home</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-orthography-action="top">⬆ Nach oben</button>
      </div>
    </section>
  `;
}

function renderOrthographyLearningCard(card, number) {
  const memoryLines = card.merke?.length
    ? `<p class="orthography-memory"><strong>Merke:</strong> ${card.merke.join(" ")}</p>`
    : "";

  return `
    <article class="orthography-learning-card">
      <span class="orthography-number" aria-label="Nummer ${number}">${number}</span>
      <div class="orthography-learning-text">
        <h5>${card.titel}</h5>
        <p>${card.hinweis}</p>
        ${memoryLines}
        <p class="orthography-examples"><strong>Beispiele:</strong> ${card.beispiele.join(", ")}</p>
      </div>
    </article>
  `;
}

function renderOrthographyCard(container, card, totalCards) {
  const examples = card.beispiele?.length
    ? renderCardSection("🔤", "Beispiele", renderCardList(card.beispiele))
    : "";
  const hintSection = card.hinweise?.length
    ? renderCardSection("👀", "Achte auf", renderOrthographyHints(card.hinweise))
    : "";

  container.innerHTML = `
    <article class="writing-task-card">
      <div class="writing-card-topline">
        <span class="card-number">Karte ${formatTaskNumber(card.nummer)} von ${formatTaskNumber(totalCards)}</span>
        <span class="card-area">${card.gruppe}</span>
      </div>
      ${renderAppIcon(ICONS.rechtschreibung, "Rechtschreibung", "overview-icon-frame")}
      <h3>${card.titel}</h3>
      ${hintSection}
      ${examples}
      ${renderCardSection("✏️", "Aufgabe", renderCardList(card.aufgaben))}
      ${renderCardSection("🐥", "Toni-Tipp", `<p>${card.toniTipp}</p>`)}
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-orthography-action="overview">⬅ Zur Übersicht</button>
        <button class="big-action-button writing-action-button" type="button" data-orthography-action="next">➡ Nächste Aufgabe</button>
        <button class="big-action-button writing-action-button" type="button" data-orthography-action="random">🎲 Zufallsaufgabe</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-orthography-action="home">🏠 Home</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-orthography-action="top">⬆ Nach oben</button>
      </div>
    </article>
  `;
}

function renderOrthographyHints(hints = []) {
  return `<p class="orthography-detail-note">${hints.join(", ")}</p>`;
}

function renderLearningCard(container, card, totalCards, actionAttribute) {
  const examples = card.beispiele?.length
    ? renderCardSection("🔤", "Beispiele", renderCardList(card.beispiele))
    : "";
  const wordInfo = card.wordInfo || "";
  const symbol = card.symbolName ? renderFreschSymbol(card.symbolName, "fresch-symbol-large") : "";
  const colorSignal = card.farbe ? `<span class="word-class-color ${card.farbe.className}">${card.farbe.label}</span>` : "";
  const markerSection = card.markierauftrag
    ? renderCardSection("🖍️", "Markierauftrag", `<p>${card.markierauftrag}</p>`)
    : "";
  const extraSection = card.zusatzaufgabe
    ? renderCardSection("➕", "Zusatzaufgabe", `<p>${card.zusatzaufgabe}</p>`)
    : "";

  container.innerHTML = `
    <article class="writing-task-card">
      <div class="writing-card-topline">
        <span class="card-number">Karte ${formatTaskNumber(card.nummer)} von ${formatTaskNumber(totalCards)}</span>
        <span class="card-area">${card.bereich}</span>
      </div>
      ${symbol}
      <h3>${card.titel}</h3>
      ${colorSignal}
      ${wordInfo}
      ${renderCardSection("💡", "Erklärung", `<p>${card.erklaerung}</p>`)}
      ${examples}
      ${renderCardSection("✏️", card.uebungTitel || "Kleine Übung", `<p>${card.uebung}</p>`)}
      ${markerSection}
      ${extraSection}
      ${renderCardSection("🐥", "Toni-Tipp", `<p>${card.toniTipp}</p>`)}
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" ${actionAttribute}="overview">⬅ Zur Übersicht</button>
        <button class="big-action-button writing-action-button" type="button" ${actionAttribute}="next">➡ Nächste Aufgabe</button>
        <button class="big-action-button writing-action-button" type="button" ${actionAttribute}="random">🎲 Zufallsaufgabe</button>
        <button class="big-action-button writing-action-button is-light" type="button" ${actionAttribute}="home">🏠 Home</button>
        <button class="big-action-button writing-action-button is-light" type="button" ${actionAttribute}="top">⬆ Nach oben</button>
      </div>
    </article>
  `;
}

function renderWritingSelection() {
  writingAreaGrid.hidden = false;
  writingCardView.hidden = true;
  writingCardView.innerHTML = "";
  writingAreaGrid.innerHTML = WRITING_AREAS.map((area) => {
    const count = getWritingCards(area.name).length;
    return `
      <button class="writing-area-tile" type="button" data-writing-area="${area.name}">
        ${renderAppIcon(area.icon, area.name)}
        <span>
          <span class="tile-title">${area.name}</span>
          <span class="tile-note">${count} Karten</span>
        </span>
      </button>
    `;
  }).join("");
}

function renderWritingOverview(cards) {
  writingAreaGrid.hidden = true;
  writingCardView.hidden = false;
  writingCardView.innerHTML = `
    <section class="reading-overview-card" aria-labelledby="writing-overview-title">
      <div class="reading-overview-heading">
        ${renderAppIcon(getWritingAreaIcon(state.writingArea), state.writingArea, "overview-icon-frame")}
        <h3 id="writing-overview-title">${state.writingArea}</h3>
        <p>Wähle eine Aufgabe.</p>
      </div>
      <div class="task-list">
        ${cards.map((card, index) => `
          <button class="task-list-button" type="button" data-writing-card="${index}">
            <span class="task-number">${formatTaskNumber(card.nummer)}</span>
            <span>${card.titel}</span>
          </button>
        `).join("")}
      </div>
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-writing-action="back">⬅ Zur Schreibwerkstatt</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-writing-action="home">🏠 Home</button>
      </div>
    </section>
  `;
}

function renderWritingCard(card, totalCards) {
  writingAreaGrid.hidden = true;
  writingCardView.hidden = false;
  const imageSection = card.kind === "image" ? renderStoryImageSection(card) : "";
  const helperSection = card.worthelfer?.length
    ? renderCardSection("📝", "Worthelfer", renderWordChips(card.worthelfer))
    : "";
  writingCardView.innerHTML = `
    <article class="writing-task-card">
      <div class="writing-card-topline">
        <span class="card-number">Karte ${formatTaskNumber(card.nummer)} von ${formatTaskNumber(totalCards)}</span>
        <span class="card-area">${card.displayBereich || card.bereich}</span>
      </div>
      ${renderAppIcon(getWritingAreaIcon(state.writingArea), state.writingArea, "overview-icon-frame")}
      <h3>${card.titel}</h3>
      ${imageSection}
      ${renderCardSection("✏️", "Auftrag", `<p>${card.auftrag}</p>`)}
      ${renderCardSection("❓", "Denkfragen", renderCardList(card.fragen))}
      ${renderCardSection("🟨", "So kannst du anfangen", renderCardList(card.satzanfaenge))}
      ${helperSection}
      ${renderCardSection("⭐", "Schreibtipps", renderCardList(card.schreibtipps))}
      ${renderCardSection("🐥", "Toni-Tipp", `<p>${card.toniTipp}</p>`)}
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-writing-action="back">⬅ Zurück zur Übersicht</button>
        <button class="big-action-button writing-action-button" type="button" data-writing-action="next">➡ Nächste Aufgabe</button>
        <button class="big-action-button writing-action-button" type="button" data-writing-action="random">🎲 Zufallsaufgabe</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-writing-action="home">🏠 Home</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-writing-action="top">⬆ Nach oben</button>
      </div>
    </article>
  `;
}

function renderStoryImageSection(card) {
  const imageSrc = escapeAttribute(card.bild);
  const imageTitle = escapeAttribute(card.titel);
  return `
    <figure class="story-image-frame">
      <img src="${imageSrc}" alt="${imageTitle}" data-story-zoom-src="${imageSrc}" data-story-zoom-title="${imageTitle}" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
      <div class="story-image-placeholder" hidden>Dieses Geschichtenbild wird bald ergänzt.</div>
      <button class="story-image-zoom-button" type="button" data-story-zoom-src="${imageSrc}" data-story-zoom-title="${imageTitle}">
        🔍 Bild vergrößern
      </button>
    </figure>
  `;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderCardSection(icon, title, content) {
  return `
    <section class="writing-card-section">
      <h4><span aria-hidden="true">${icon}</span> ${title}</h4>
      ${content}
    </section>
  `;
}

function renderCardList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderWordChips(words) {
  return `
    <div class="word-chip-list">
      ${words.map((word) => `
        <button class="word-chip" type="button" data-writing-word="${word}">
          ${word}
        </button>
      `).join("")}
    </div>
  `;
}

function getWritingCards(area) {
  const config = getWritingAreaConfig(area);

  if (!config) {
    return [];
  }

  if (config.kind === "image") {
    return getStoryImageCards();
  }

  return SCHREIBKARTEN
    .filter((card) => config.sourceAreas.includes(card.bereich));
}

function getWritingAreaConfig(areaName) {
  return WRITING_AREAS.find((area) => area.name === areaName);
}

function getWritingAreaEmoji(areaName) {
  return getWritingAreaConfig(areaName)?.emoji || "✏️";
}

function getWritingAreaIcon(areaName) {
  return getWritingAreaConfig(areaName)?.icon || ICONS.schreibwerkstatt;
}

function getStoryImageCards() {
  return STORY_IMAGE_TITLES.map((title, index) => ({
    kind: "image",
    bereich: "Geschichtenbilder",
    displayBereich: "Geschichtenbilder",
    nummer: index + 1,
    titel: title,
    bild: `assets/geschichtenbilder/${STORY_IMAGE_FILES[index]}`,
    auftrag: "Schau dir das Bild genau an. Schreibe eine Geschichte in dein Heft oder in dein Mini-Buch.",
    fragen: STORY_IMAGE_PROMPTS,
    satzanfaenge: ["Heute ...", "Plötzlich ...", "Auf einmal ...", "Dann ...", "Am Ende ..."],
    worthelfer: ["sehen", "gehen", "finden", "helfen", "spielen", "lachen", "traurig", "mutig", "plötzlich", "zusammen"],
    schreibtipps: [
      "Schreibe mit Bleistift ins Heft.",
      "Schreibe mindestens drei Sätze.",
      "Beginne jeden Satz groß.",
      "Setze am Satzende einen Punkt.",
      "Lies deine Geschichte noch einmal."
    ],
    toniTipp: "Suche passende Wörter im Wörterbuch, bevor du sie abschreibst."
  }));
}

function getReadingCards(area) {
  return LESETEXTE.filter((card) => card.bereich === area);
}

function getReadingAreaEmoji(areaName) {
  return READING_AREAS.find((area) => area.name === areaName)?.emoji || "📖";
}

function getReadingAreaIcon(areaName) {
  return READING_AREAS.find((area) => area.name === areaName)?.icon || ICONS.lesewelt;
}

function getWordData(word) {
  return DICTIONARY_WORDS.find((entry) => normalizeWord(entry.wort) === normalizeWord(word))
    || NRW_WORDS.find((entry) => normalizeWord(entry.wort) === normalizeWord(word))
    || null;
}

function renderFreschSymbol(name, extraClass = "") {
  const symbol = FRESCH_SYMBOLS[name];
  const className = `fresch-symbol ${extraClass}`.trim();
  return `
    <span class="${className}" aria-label="FRESCH: ${name}">
      <img src="${symbol}" alt="" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
      <span class="fresch-symbol-fallback" hidden>FRESCH</span>
    </span>
  `;
}

function renderAppIcon(src, label, extraClass = "") {
  const className = `icon-frame ${extraClass}`.trim();
  return `
    <span class="${className}" aria-hidden="true">
      <img class="app-icon" src="${src}" alt="">
    </span>
  `;
}

function getOrthographyCards() {
  let number = 0;
  return ORTHOGRAPHY_SECTIONS.flatMap((section) => section.cards.map((card) => ({
    bereich: "Rechtschreibung",
    gruppe: section.title,
    nummer: ++number,
    titel: card.titel,
    hinweise: card.hinweise || [card.hinweis].filter(Boolean),
    beispiele: card.beispiele,
    aufgaben: getOrthographyTasks(card, section.title),
    toniTipp: getOrthographyToniTip(card.titel)
  })));
}

function getOrthographyTasks(card, sectionTitle) {
  if (sectionTitle === "Laute und Buchstaben") {
    return [
      "Lies die Beispiele deutlich.",
      "Schreibe fünf passende Wörter in dein Heft.",
      "Markiere die besondere Stelle farbig.",
      "Lies deine Wörter noch einmal."
    ];
  }

  return [
    "Schau dir die Beispiele genau an.",
    "Schreibe drei eigene Wörter oder Sätze in dein Heft.",
    "Markiere die wichtige Stelle farbig.",
    "Kontrolliere ein Wort im Wörterbuch."
  ];
}

function getOrthographyToniTip(title) {
  const tips = {
    "Ich höre genau": "Sprich langsam. Manchmal hörst du dann die wichtige Stelle.",
    "b / p": "Verlängern hilft: Dieb wird Diebe.",
    "d / t": "Verlängern hilft: Hund wird Hunde.",
    "g / k": "Verlängern hilft: Berg wird Berge.",
    "s, ss, ß": "Lies das Wort langsam und achte auf den Vokal davor.",
    "mm": "Achte auf den kurzen Klang vor mm.",
    "nn": "Achte auf den kurzen Klang vor nn.",
    "ie": "Höre, ob der Laut lang klingt.",
    "h": "Manchmal verlängert h den Vokal.",
    "Verwandte Wörter": "Ein verwandtes Wort kann dir beim Schreiben helfen.",
    "Zusammengesetzte Wörter": "Trenne lange Wörter in zwei Teile.",
    "Wortbausteine": "Suche den kleinen Baustein im Wort.",
    "Groß- und Kleinschreibung": "Bei Nomen helfen dir der, die oder das.",
    "Merkwörter": "Merkwörter darfst du besonders oft üben."
  };

  return tips[title] || "Schreibe langsam und kontrolliere die schwierige Stelle.";
}

const DAILY_STRATEGIES = {
  "Schwingen": {
    name: "Schwingen",
    shortExplanation: "Sprich das Wort deutlich und schwinge die Silben.",
    example: "Regenbogen",
    assignment: "Schwinge das Wort."
  },
  "Verlängern": {
    name: "Verlängern",
    shortExplanation: "Verlängere das Wort.",
    example: "Hund → Hunde",
    assignment: "Verlängere das Wort."
  },
  "Ableiten": {
    name: "Ableiten",
    shortExplanation: "Finde ein verwandtes Wort.",
    example: "Baum → Bäume",
    assignment: "Finde ein verwandtes Wort."
  },
  "Merken": {
    name: "Merken",
    shortExplanation: "Merke dir die schwierige Stelle.",
    example: "Vater",
    assignment: "Markiere die schwierige Stelle."
  },
  "Groß- und Kleinschreibung": {
    name: "Groß- und Kleinschreibung",
    shortExplanation: "Achte auf den ersten Buchstaben.",
    example: "Sonne",
    assignment: "Achte auf den ersten Buchstaben."
  },
  "Wortbausteine": {
    name: "Wortbausteine",
    shortExplanation: "Trenne das Wort in seine Bausteine.",
    example: "Spielplatz → Spiel + Platz",
    assignment: "Trenne das Wort in seine Bausteine."
  },
  "Nachschlagen": {
    name: "Nachschlagen",
    shortExplanation: "Suche das Wort im Wörterbuch.",
    example: "vielleicht",
    assignment: "Suche das Wort im Wörterbuch."
  }
};

function generateDailyWord() {
  const candidates = state.dailyWord
    ? NRW_WORDS.filter((entry) => entry.wort !== state.dailyWord.wort)
    : NRW_WORDS;
  const entry = pickRandom(candidates.length ? candidates : NRW_WORDS);
  const wordData = getWordData(entry.wort);
  const strategyName = normalizeDailyStrategy(entry);

  return {
    wort: entry.wort,
    bild: wordData?.bild || "",
    emoji: entry.emoji || wordData?.emoji || "⭐",
    strategy: DAILY_STRATEGIES[strategyName] || DAILY_STRATEGIES["Schwingen"]
  };
}

function normalizeDailyStrategy(entry) {
  const primary = entry.fresch?.[0] || "Schwingen";
  if (primary === "Groß oder klein?") return "Groß- und Kleinschreibung";
  if (entry.wortart === "Nomen" && primary === "Schwingen") return "Groß- und Kleinschreibung";
  if (primary in DAILY_STRATEGIES) return primary;
  return "Schwingen";
}

function formatTaskNumber(number) {
  return String(number).padStart(2, "0");
}

function openStoryImageZoom(src, title) {
  const modal = getStoryZoomModal();
  const image = modal.querySelector(".story-zoom-image");
  const heading = modal.querySelector(".story-zoom-title");

  storyZoomLevel = 1.35;
  image.src = src;
  image.alt = title;
  heading.textContent = title;
  modal.hidden = false;
  document.body.classList.add("has-story-zoom");
  applyStoryZoom();

  requestAnimationFrame(() => {
    const viewer = modal.querySelector(".story-zoom-viewer");
    viewer.scrollLeft = Math.max(0, (viewer.scrollWidth - viewer.clientWidth) / 2);
    viewer.scrollTop = Math.max(0, (viewer.scrollHeight - viewer.clientHeight) / 2);
  });
}

function getStoryZoomModal() {
  if (storyZoomModal) {
    return storyZoomModal;
  }

  storyZoomModal = document.createElement("div");
  storyZoomModal.className = "story-zoom-modal";
  storyZoomModal.hidden = true;
  storyZoomModal.innerHTML = `
    <div class="story-zoom-backdrop" data-story-zoom-control="close"></div>
    <section class="story-zoom-panel" aria-modal="true" role="dialog" aria-labelledby="story-zoom-title">
      <header class="story-zoom-header">
        <h2 id="story-zoom-title" class="story-zoom-title">Geschichtenbild</h2>
        <button class="story-zoom-close" type="button" data-story-zoom-control="close" aria-label="Schließen">×</button>
      </header>
      <div class="story-zoom-controls" aria-label="Bildlupe">
        <button type="button" data-story-zoom-control="out">−</button>
        <button type="button" data-story-zoom-control="reset">100%</button>
        <button type="button" data-story-zoom-control="in">+</button>
      </div>
      <div class="story-zoom-viewer">
        <img class="story-zoom-image" src="" alt="">
      </div>
    </section>
  `;
  storyZoomModal.addEventListener("click", handleStoryZoomControl);
  document.body.append(storyZoomModal);
  return storyZoomModal;
}

function handleStoryZoomControl(event) {
  const controlButton = event.target.closest("[data-story-zoom-control]");

  if (!controlButton) {
    return;
  }

  const action = controlButton.dataset.storyZoomControl;

  if (action === "close") {
    closeStoryImageZoom();
    return;
  }

  if (action === "in") {
    storyZoomLevel = Math.min(2.6, storyZoomLevel + 0.25);
  }

  if (action === "out") {
    storyZoomLevel = Math.max(1, storyZoomLevel - 0.25);
  }

  if (action === "reset") {
    storyZoomLevel = 1;
  }

  applyStoryZoom();
}

function applyStoryZoom() {
  if (!storyZoomModal) {
    return;
  }

  const image = storyZoomModal.querySelector(".story-zoom-image");
  image.style.width = `${Math.round(storyZoomLevel * 100)}%`;
}

function closeStoryImageZoom() {
  if (!storyZoomModal) {
    return;
  }

  storyZoomModal.hidden = true;
  storyZoomModal.querySelector(".story-zoom-image").removeAttribute("src");
  document.body.classList.remove("has-story-zoom");
}

function handleStoryZoomKeydown(event) {
  if (event.key === "Escape" && storyZoomModal && !storyZoomModal.hidden) {
    closeStoryImageZoom();
  }
}

function handleWritingClick(event) {
  const zoomButton = event.target.closest("[data-story-zoom-src]");
  if (zoomButton) {
    openStoryImageZoom(zoomButton.dataset.storyZoomSrc, zoomButton.dataset.storyZoomTitle || "Geschichtenbild");
    return;
  }

  const areaButton = event.target.closest("[data-writing-area]");
  if (areaButton) {
    state.writingArea = areaButton.dataset.writingArea;
    state.writingCardIndex = null;
    render();
    scrollToTop();
    return;
  }

  const cardButton = event.target.closest("[data-writing-card]");
  if (cardButton) {
    state.writingCardIndex = Number(cardButton.dataset.writingCard);
    render();
    scrollToTop();
    return;
  }

  const wordButton = event.target.closest("[data-writing-word]");
  if (wordButton) {
    searchDictionaryForWritingWord(wordButton.dataset.writingWord);
    return;
  }

  const actionButton = event.target.closest("[data-writing-action]");
  if (!actionButton) {
    return;
  }

  handleWritingAction(actionButton.dataset.writingAction);
}

function handleReadingClick(event) {
  const areaButton = event.target.closest("[data-reading-area]");
  if (areaButton) {
    state.readingArea = areaButton.dataset.readingArea;
    state.readingCardIndex = null;
    render();
    scrollToTop();
    return;
  }

  const cardButton = event.target.closest("[data-reading-card]");
  if (cardButton) {
    state.readingCardIndex = Number(cardButton.dataset.readingCard);
    render();
    scrollToTop();
    return;
  }

  const actionButton = event.target.closest("[data-reading-action]");
  if (!actionButton) {
    return;
  }

  handleReadingAction(actionButton.dataset.readingAction);
}

function handleOrthographyClick(event) {
  const actionButton = event.target.closest("[data-orthography-action]");
  if (!actionButton) return;
  handleLearningAction(actionButton.dataset.orthographyAction, "orthography");
}

function handleDailyWordClick(event) {
  const actionButton = event.target.closest("[data-daily-word-action]");
  if (!actionButton) return;
  handleDailyWordAction(actionButton.dataset.dailyWordAction);
}

function handleDailyWordAction(action) {
  if (action === "new") {
    state.dailyWord = generateDailyWord();
    render();
    scrollToTop();
    return;
  }

  if (action === "home") {
    setRoute("portal");
    return;
  }

  if (action === "wordExplorer") {
    setRoute("wordExplorer");
    return;
  }

  if (action === "top") {
    scrollToTop();
  }
}

function handleLearningAction(action, kind) {
  const config = {
    orthography: {
      get cards() { return getOrthographyCards(); },
      get index() { return state.orthographyCardIndex; },
      set index(value) { state.orthographyCardIndex = value; },
      resetArea() {}
    }
  }[kind];

  if (!config) return;

  if (action === "home") {
    setRoute("portal");
    return;
  }

  if (action === "wordExplorer") {
    setRoute("wordExplorer");
    return;
  }

  if (action === "overview") {
    config.index = null;
    render();
    scrollToTop();
    return;
  }

  if (action === "back") {
    config.resetArea();
    config.index = null;
    render();
    scrollToTop();
    return;
  }

  if (action === "top") {
    scrollToTop();
    return;
  }

  const cards = config.cards;
  if (!cards.length || config.index === null) return;

  if (action === "next") {
    config.index = (config.index + 1) % cards.length;
  }

  if (action === "random") {
    const nextIndex = pickRandomIndex(cards.length);
    config.index = cards.length > 1 && nextIndex === config.index
      ? (nextIndex + 1) % cards.length
      : nextIndex;
  }

  render();
  scrollToTop();
}

function handleWritingAction(action) {
  const cards = getWritingCards(state.writingArea);

  if (action === "home") {
    setRoute("portal");
    return;
  }

  if (action === "back") {
    if (state.writingCardIndex === null) {
      state.writingArea = "";
    } else {
      state.writingCardIndex = null;
    }
    render();
    scrollToTop();
    return;
  }

  if (action === "top") {
    scrollToTop();
    return;
  }

  if (!cards.length || state.writingCardIndex === null) {
    return;
  }

  if (action === "next") {
    state.writingCardIndex = (state.writingCardIndex + 1) % cards.length;
  }

  if (action === "random") {
    const nextIndex = pickRandomIndex(cards.length);
    state.writingCardIndex = cards.length > 1 && nextIndex === state.writingCardIndex
      ? (nextIndex + 1) % cards.length
      : nextIndex;
  }

  render();
  scrollToTop();
}

function handleReadingAction(action) {
  const cards = getReadingCards(state.readingArea);

  if (action === "home") {
    setRoute("portal");
    return;
  }

  if (action === "back") {
    state.readingArea = "";
    state.readingCardIndex = null;
    render();
    scrollToTop();
    return;
  }

  if (action === "overview") {
    state.readingCardIndex = null;
    render();
    scrollToTop();
    return;
  }

  if (action === "top") {
    scrollToTop();
    return;
  }

  if (!cards.length || state.readingCardIndex === null) {
    return;
  }

  if (action === "next") {
    state.readingCardIndex = (state.readingCardIndex + 1) % cards.length;
  }

  if (action === "random") {
    const nextIndex = pickRandomIndex(cards.length);
    state.readingCardIndex = cards.length > 1 && nextIndex === state.readingCardIndex
      ? (nextIndex + 1) % cards.length
      : nextIndex;
  }

  render();
  scrollToTop();
}

function searchDictionaryForWritingWord(word) {
  state.query = word.trim().toLowerCase();
  searchInput.value = word.trim();
  state.route = "dictionary";
  render();
  scrollToTop();
}

function setRoute(route) {
  if (!route) {
    return;
  }

  if (route === "portal") {
    state.query = "";
    searchInput.value = "";
    state.writingArea = "";
    state.writingCardIndex = null;
    state.readingArea = "";
    state.readingCardIndex = null;
    state.orthographyCardIndex = null;
    state.dailyWord = null;
  }

  if (route === "writing" && state.route !== "writing") {
    state.writingArea = "";
    state.writingCardIndex = null;
  }

  if (route === "reading" && state.route !== "reading") {
    state.readingArea = "";
    state.readingCardIndex = null;
  }

  if (route === "orthography" && state.route !== "orthography") {
    state.orthographyCardIndex = null;
  }

  if (route === "dailyWord" && state.route !== "dailyWord") {
    state.dailyWord = null;
  }

  state.route = route;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((favoriteId) => favoriteId !== id);
  } else {
    state.favorites = [...state.favorites, id];
  }

  saveFavorites();
  render();
}

function speakWord(id) {
  const word = DICTIONARY_WORDS.find((entry) => entry.id === id);
  if (!word || !("speechSynthesis" in window)) {
    return;
  }

  const text = word.artikel ? `${word.artikel} ${word.wort}` : word.wort;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.82;
  utterance.pitch = 1.08;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function rollStory() {
  storyWho.textContent = pickRandom(STORY_OPTIONS.who);
  storyWhere.textContent = pickRandom(STORY_OPTIONS.where);
  storyWhat.textContent = pickRandom(STORY_OPTIONS.what);
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITE_KEY) || localStorage.getItem(OLD_FAVORITE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(state.favorites));
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  clearLegacyAppCaches();
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

function clearLegacyAppCaches() {
  if (!("caches" in window)) {
    return;
  }

  caches.keys()
    .then((keys) => Promise.all(
      keys
        .filter((key) => key.startsWith("hilfe-"))
        .map((key) => caches.delete(key))
    ))
    .catch(() => {});
}
