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
const NRW_WORDS = typeof GRUNDWORTSCHATZ_NRW !== "undefined" ? GRUNDWORTSCHATZ_NRW : [];
const NRW_WORD_LOOKUP = new Map(NRW_WORDS.map((entry) => [normalizeWord(entry.wort), entry]));
const DICTIONARY_WORDS = buildDictionaryWords();
const WRITING_AREAS = [
  { name: "Schreibaufgaben", emoji: "✏️", sourceAreas: ["Schreibaufgaben"] },
  { name: "Mini-Bücher", emoji: "📖", sourceAreas: ["Mini-Bücher"] },
  { name: "Geschichtenideen", emoji: "🎲", sourceAreas: ["Geschichtenideen"] },
  { name: "Starke Schreiber", emoji: "⭐", sourceAreas: ["Starke Schreiber"] },
  { name: "Geschichtenbilder", emoji: "🖼️", kind: "image" }
];
const READING_AREAS = [
  { name: "Lies und male", emoji: "🎨" },
  { name: "Lesedetektiv", emoji: "🔎" },
  { name: "Texte verstehen", emoji: "🧠" },
  { name: "Vorlesen", emoji: "🎭" }
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
  "01-spielplatz.png",
  "02-bauernhof.png",
  "03-wald.png",
  "04-meer.png",
  "05-geburtstag.png",
  "06-klassenzimmer.png",
  "07-kinderzimmer.png",
  "08-zoo.png",
  "09-herbst.png",
  "10-winter.png",
  "11-fruehling.png",
  "12-sommer.png",
  "13-drachenland.png",
  "14-ritterburg.png",
  "15-weltraum.png",
  "16-zirkus.png",
  "17-schatzinsel.png",
  "18-regenbogenland.png",
  "19-fantasiewelt.png",
  "20-wimmelstadt.png"
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
  { name: "Wörterbuch", emoji: "📖", route: "dictionary" },
  { name: "FRESCH", emoji: "🌳", route: "fresch" },
  { name: "Rechtschreibung", emoji: "✏️", route: "orthography" },
  { name: "Wort des Tages", emoji: "⭐", route: "dailyWord" }
];
const FRESCH_SYMBOLS = {
  "Schwingen": "assets/fresch/schwingen.png",
  "Verlängern": "assets/fresch/verlaengern.png",
  "Ableiten": "assets/fresch/ableiten.png",
  "Merken": "assets/fresch/merken.png",
  "Wortbausteine": "assets/fresch/wortbausteine.png",
  "Groß oder klein?": "assets/fresch/gross-oder-klein.png"
};
const FRESCH_AREAS = [
  {
    name: "Schwingen",
    symbol: FRESCH_SYMBOLS["Schwingen"],
    titles: ["Silben schwingen", "Zwei Silben", "Drei Silben", "Silbenbögen", "Silbenkönig", "Robotersprache", "Wörter klatschen", "Wörter gehen", "Vokale hören", "Silben zählen", "Langsame Wörter", "Schnelle Wörter", "Namen schwingen", "Tierwörter schwingen", "Schulwörter schwingen", "Sommerwörter schwingen", "Schwierige Wörter", "Partner-Schwingen", "Kontroll-Schwingen", "Silbenprofi"],
    explanation: "Sprich das Wort langsam in Silben. Jede Silbe bekommt einen Schwung.",
    examples: ["To-ni", "Blu-me", "Schu-le"],
    exercise: "Schwinge fünf Wörter aus deinem Heft und zeichne Silbenbögen darunter.",
    tip: "Wenn du ein Wort schwingst, hörst du oft jeden Teil besser."
  },
  {
    name: "Verlängern",
    symbol: FRESCH_SYMBOLS["Verlängern"],
    titles: ["Wort verlängern", "Hund oder Hunt?", "Berg oder Berk?", "Tag oder Tak?", "Rad oder Rat?", "Kind oder Kint?", "Einzahl und Mehrzahl", "Ende hörbar machen", "Nomen verlängern", "Adjektive verlängern", "Verben verlängern", "Partnerwörter", "Endlaut prüfen", "Schwere Enden", "Genau hinhören", "Wörter sammeln", "Verlängerungsprobe", "Satzprobe", "Kontrollprobe", "Verlängerungsprofi"],
    explanation: "Verlängere ein Wort, damit du den letzten Laut besser hörst.",
    examples: ["Hund - Hunde", "Berg - Berge", "gelb - gelbe"],
    exercise: "Suche drei Wörter mit einem schwierigen Ende. Verlängere sie auf Papier.",
    tip: "Verlängern hilft besonders am Wortende."
  },
  {
    name: "Ableiten",
    symbol: FRESCH_SYMBOLS["Ableiten"],
    titles: ["Wortfamilie finden", "ä kommt von a", "äu kommt von au", "Bäume und Baum", "Häuser und Haus", "Räuber und rauben", "Wörter verwandeln", "Grundwort suchen", "Familienwörter", "Ableitungsprobe", "ä-Wörter", "äu-Wörter", "Wörter vergleichen", "Wortstamm finden", "Passende Wörter", "Sätze prüfen", "Schwere Ableitungen", "Partnerprobe", "Kontrollprobe", "Ableitungsprofi"],
    explanation: "Suche ein verwandtes Wort. So findest du heraus, ob du ä oder äu schreibst.",
    examples: ["Bäume - Baum", "Häuser - Haus", "träumen - Traum"],
    exercise: "Schreibe drei Wörter mit ä oder äu auf und suche das verwandte Wort.",
    tip: "Wörter aus einer Familie helfen einander."
  },
  {
    name: "Merken",
    symbol: FRESCH_SYMBOLS["Merken"],
    titles: ["Merkwort ansehen", "Wortbild merken", "Schwierige Stelle", "Wort abdecken", "Wort schreiben", "Wort prüfen", "Merkwörter sammeln", "ie merken", "h merken", "doppelte Buchstaben", "Fremde Wörter", "Lieblings-Merkwort", "Wortkarte bauen", "Partner-Abfrage", "Satz mit Merkwort", "Drei Merkwörter", "Wörter vergleichen", "Schwierige Stelle markieren", "Kontrollblick", "Merkwortprofi"],
    explanation: "Manche Wörter musst du dir genau merken. Schau auf die schwierige Stelle.",
    examples: ["Vogel", "Tiger", "nämlich"],
    exercise: "Wähle drei Merkwörter. Schreibe sie ab und markiere die schwierige Stelle.",
    tip: "Merkwörter brauchen einen ruhigen Kontrollblick."
  },
  {
    name: "Wortbausteine",
    symbol: FRESCH_SYMBOLS["Wortbausteine"],
    titles: ["Wortbausteine entdecken", "Vorsilben", "Nachsilben", "Wortstamm", "Endungen", "ge-Wörter", "ver-Wörter", "un-Wörter", "Wörter bauen", "Wörter umbauen", "Familienwörter", "Baustein -er", "Baustein -en", "Baustein -lich", "Baustein -ig", "Lange Wörter", "Kurze Wörter", "Bausteine markieren", "Partnerprobe", "Wortbausteinprofi"],
    explanation: "Viele Wörter bestehen aus Bausteinen. Suche den Teil, der in verwandten Wörtern gleich bleibt.",
    examples: ["spielen - Spiel - Spielplatz", "freundlich - Freund", "fahren - Fahrer"],
    exercise: "Suche drei Wörter aus einer Wortfamilie und markiere den gleichen Baustein.",
    tip: "Wortbausteine helfen dir bei langen Wörtern."
  },
  {
    name: "Groß oder klein?",
    symbol: FRESCH_SYMBOLS["Groß oder klein?"],
    titles: ["Nomen erkennen", "Menschen", "Tiere", "Pflanzen", "Dinge", "Artikelprobe", "Verben erkennen", "Adjektive erkennen", "Satzanfang", "Namen", "Wörter sortieren", "Nomen gelb", "Verben grün", "Adjektive braun", "Große Anfangsbuchstaben", "Kleine Anfangsbuchstaben", "Wörter im Satz", "Partnerkontrolle", "Sortierprobe", "Groß-klein-Profi"],
    explanation: "Nomen schreibst du groß. Verben und Adjektive schreibst du meistens klein.",
    examples: ["der Hund", "laufen", "klein"],
    exercise: "Sortiere fünf Wörter in Nomen, Verben und Adjektive. Markiere den ersten Buchstaben.",
    tip: "Frage: Kann ich der, die oder das davor setzen?"
  }
];
const ORTHOGRAPHY_TITLES = [
  "Groß oder klein?",
  "Wörter mit sch",
  "Wörter mit ch",
  "Wörter mit ei",
  "Wörter mit au",
  "Wörter mit eu",
  "Wörter mit ie",
  "Wörter mit sp",
  "Wörter mit st",
  "Umlaute",
  "Doppelkonsonanten",
  "ck",
  "tz",
  "Wörter trennen",
  "Wortfamilien",
  "Zusammengesetzte Wörter",
  "Verben",
  "Adjektive",
  "Nomen",
  "Wörter genau abschreiben"
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
  freschArea: "",
  freschCardIndex: null,
  orthographyCardIndex: null,
  dailyWordIndex: null
};

const views = {
  portal: document.querySelector("#view-portal"),
  wordExplorer: document.querySelector("#view-word-explorer"),
  dictionary: document.querySelector("#view-dictionary"),
  band: document.querySelector("#view-band"),
  favorites: document.querySelector("#view-favorites"),
  fresch: document.querySelector("#view-fresch"),
  orthography: document.querySelector("#view-orthography"),
  dailyWord: document.querySelector("#view-daily-word"),
  writing: document.querySelector("#view-writing"),
  story: document.querySelector("#view-story"),
  reading: document.querySelector("#view-reading"),
  journal: document.querySelector("#view-journal")
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
const freschAreaGrid = document.querySelector("#fresch-area-grid");
const freschCardView = document.querySelector("#fresch-card-view");
const freschView = document.querySelector("#view-fresch");
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
freschView.addEventListener("click", handleFreschClick);
orthographyView.addEventListener("click", handleOrthographyClick);
dailyWordView.addEventListener("click", handleDailyWordClick);
window.addEventListener("scroll", updateScrollTopButton, { passive: true });
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
      <span class="portal-emoji" aria-hidden="true">${area.emoji}</span>
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
  renderFreschView();
  renderOrthographyView();
  renderDailyWordView();
  renderWordCards(favoriteGrid, getFavoriteWords(), "Tippe auf einen Stern. Dann findest du dein Wort hier wieder.");
}

function updateVisibleView() {
  views.portal.classList.toggle("is-visible", state.route === "portal");
  views.wordExplorer.classList.toggle("is-visible", state.route === "wordExplorer");
  views.dictionary.classList.toggle("is-visible", state.route === "dictionary");
  views.favorites.classList.toggle("is-visible", state.route === "favorites");
  views.fresch.classList.toggle("is-visible", state.route === "fresch");
  views.orthography.classList.toggle("is-visible", state.route === "orthography");
  views.dailyWord.classList.toggle("is-visible", state.route === "dailyWord");
  views.writing.classList.toggle("is-visible", state.route === "writing");
  views.story.classList.toggle("is-visible", state.route === "story");
  views.reading.classList.toggle("is-visible", state.route === "reading");
  views.journal.classList.toggle("is-visible", state.route === "journal");
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
      ? `<div class="word-fresch-tags">${word.fresch.map((strategy) => `<span>${strategy}</span>`).join("")}</div>`
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
        <span class="portal-emoji" aria-hidden="true">${area.emoji}</span>
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
        <h3 id="reading-overview-title">${getReadingAreaEmoji(state.readingArea)} ${state.readingArea}</h3>
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

function renderFreschView() {
  if (state.route !== "fresch") {
    return;
  }

  if (!state.freschArea) {
    freschAreaGrid.hidden = false;
    freschCardView.hidden = true;
    freschCardView.innerHTML = "";
    freschAreaGrid.innerHTML = FRESCH_AREAS.map((area) => `
      <button class="learning-area-tile" type="button" data-fresch-area="${area.name}">
        ${renderFreschSymbol(area.name)}
        <span>${area.name}</span>
      </button>
    `).join("");
    return;
  }

  const cards = getFreschCards(state.freschArea);
  freschAreaGrid.hidden = true;
  freschCardView.hidden = false;

  if (state.freschCardIndex === null) {
    renderLearningOverview(freschCardView, {
      title: state.freschArea,
      symbolName: state.freschArea,
      backAction: "back",
      homeAction: "home",
      cardAttribute: "data-fresch-card",
      actionAttribute: "data-fresch-action",
      cards
    });
    return;
  }

  state.freschCardIndex = Math.min(state.freschCardIndex, cards.length - 1);
  renderLearningCard(freschCardView, cards[state.freschCardIndex], cards.length, "data-fresch-action");
}

function renderOrthographyView() {
  if (state.route !== "orthography") {
    return;
  }

  const cards = getOrthographyCards();
  if (state.orthographyCardIndex === null) {
    renderLearningOverview(orthographyCardView, {
      title: "✏️ Rechtschreibung",
      backAction: "wordExplorer",
      homeAction: "home",
      cardAttribute: "data-orthography-card",
      actionAttribute: "data-orthography-action",
      cards
    });
    return;
  }

  state.orthographyCardIndex = Math.min(state.orthographyCardIndex, cards.length - 1);
  renderLearningCard(orthographyCardView, cards[state.orthographyCardIndex], cards.length, "data-orthography-action");
}

function renderDailyWordView() {
  if (state.route !== "dailyWord") {
    return;
  }

  const cards = getDailyWordCards();
  if (state.dailyWordIndex === null) {
    renderLearningOverview(dailyWordCardView, {
      title: "⭐ Wort des Tages",
      backAction: "wordExplorer",
      homeAction: "home",
      cardAttribute: "data-daily-word-card",
      actionAttribute: "data-daily-word-action",
      cards
    });
    return;
  }

  state.dailyWordIndex = Math.min(state.dailyWordIndex, cards.length - 1);
  renderLearningCard(dailyWordCardView, cards[state.dailyWordIndex], cards.length, "data-daily-word-action");
}

function renderLearningOverview(container, config) {
  const symbol = config.symbolName ? renderFreschSymbol(config.symbolName, "fresch-symbol-large") : "";
  container.innerHTML = `
    <section class="reading-overview-card">
      <div class="reading-overview-heading">
        ${symbol}
        <h3>${config.title}</h3>
        <p>Wähle eine Aufgabe.</p>
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
        <span class="portal-emoji" aria-hidden="true">${area.emoji}</span>
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
        <h3 id="writing-overview-title">${getWritingAreaEmoji(state.writingArea)} ${state.writingArea}</h3>
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
  return `
    <figure class="story-image-frame">
      <img src="${card.bild}" alt="${card.titel}" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
      <div class="story-image-placeholder" hidden>Dieses Geschichtenbild wird bald ergänzt.</div>
    </figure>
  `;
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

function getFreschCards(areaName) {
  const area = FRESCH_AREAS.find((entry) => entry.name === areaName);
  if (!area) {
    return [];
  }

  return area.titles.map((title, index) => ({
    bereich: area.name,
    nummer: index + 1,
    titel: title,
    symbolName: area.name,
    erklaerung: area.explanation,
    beispiele: area.examples,
    uebung: area.exercise,
    toniTipp: area.tip
  }));
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

function getOrthographyCards() {
  return ORTHOGRAPHY_TITLES.map((title, index) => ({
    bereich: "Rechtschreibung",
    nummer: index + 1,
    titel: title,
    ...getOrthographyCardConfig(title)
  }));
}

function getOrthographyCardConfig(title) {
  const special = {
    "Wörter mit sch": ["sch", ["Schule", "Tasche", "Fisch"]],
    "Wörter mit ch": ["ch", ["Buch", "Milch", "Kuchen"]],
    "Wörter mit ei": ["ei", ["Eis", "klein", "schreiben"]],
    "Wörter mit au": ["au", ["Haus", "Maus", "Baum"]],
    "Wörter mit eu": ["eu", ["Freund", "Freude", "heute"]],
    "Wörter mit ie": ["ie", ["spielen", "Wiese", "Biene"]],
    "Wörter mit sp": ["sp", ["spielen", "Sport", "Spielplatz"]],
    "Wörter mit st": ["st", ["Stift", "Fest", "Angst"]],
    "Umlaute": ["ä, ö oder ü", ["Tür", "fröhlich", "Bäume"]]
  };

  if (special[title]) {
    const [mark, examples] = special[title];
    return {
      symbolName: "Merken",
      erklaerung: `In diesen Wörtern gibt es eine besondere Stelle: ${mark}. Lies die Wörter genau.`,
      beispiele: examples,
      uebungTitel: "Aufgabe",
      uebung: "Finde fünf weitere Wörter.",
      markierauftrag: `Schreibe sie auf. Markiere nur die besondere Stelle: ${mark}.`,
      zusatzaufgabe: "Lies deine Wörter einem Partner vor.",
      toniTipp: "Markiere nur das, worum es auf dieser Karte geht."
    };
  }

  const configs = {
    "Groß oder klein?": {
      symbolName: "Groß oder klein?",
      erklaerung: "Nomen schreibst du groß. Verben und Adjektive schreibst du meistens klein.",
      beispiele: ["der Hund", "laufen", "klein"],
      uebung: "Finde fünf weitere Wörter.",
      markierauftrag: "Sortiere die Wörter: Nomen gelb, Verben grün, Adjektive braun.",
      zusatzaufgabe: "Schreibe mit einem Wort einen Satz.",
      toniTipp: "Bei Nomen helfen dir der, die oder das."
    },
    "Doppelkonsonanten": {
      symbolName: "Merken",
      erklaerung: "Nach einem kurzen Vokal stehen manchmal zwei gleiche Konsonanten.",
      beispiele: ["Sonne", "Bett", "kommen"],
      markierauftrag: "Markiere die doppelten Konsonanten.",
      zusatzaufgabe: "Sprich die Wörter langsam und klatsche die Silben.",
      toniTipp: "Schau auf die Mitte des Wortes."
    },
    "ck": {
      symbolName: "Merken",
      erklaerung: "Nach einem kurzen Vokal steht oft ck.",
      beispiele: ["Decke", "Ecke", "backen"],
      markierauftrag: "Markiere ck.",
      zusatzaufgabe: "Schreibe ein ck-Wort in einem Satz.",
      toniTipp: "ck bleibt zusammen."
    },
    "tz": {
      symbolName: "Merken",
      erklaerung: "Nach einem kurzen Vokal steht oft tz.",
      beispiele: ["Katze", "Sitz", "plötzlich"],
      markierauftrag: "Markiere tz.",
      zusatzaufgabe: "Lies deine Wörter deutlich vor.",
      toniTipp: "tz bleibt zusammen."
    },
    "Wörter trennen": {
      symbolName: "Schwingen",
      erklaerung: "Du kannst Wörter in Silben trennen. Sprich das Wort langsam.",
      beispiele: ["To-ni", "Blu-me", "Schu-le"],
      markierauftrag: "Zeichne Silbenbögen unter deine Wörter.",
      zusatzaufgabe: "Kreise in jeder Silbe den Silbenkönig ein.",
      toniTipp: "Schwingen hilft beim Trennen."
    },
    "Wortfamilien": {
      symbolName: "Ableiten",
      erklaerung: "Wörter aus einer Familie haben einen gemeinsamen Wortstamm.",
      beispiele: ["fahren, Fahrrad, Fahrer", "spielen, Spiel, Spielplatz", "Freund, Freunde, freundlich"],
      markierauftrag: "Markiere den gleichen Wortbaustein.",
      zusatzaufgabe: "Schreibe zu einem Wort zwei Familienwörter.",
      toniTipp: "Verwandte Wörter helfen beim Schreiben."
    },
    "Zusammengesetzte Wörter": {
      symbolName: "Wortbausteine",
      erklaerung: "Zwei Wörter können zusammen ein neues langes Wort bilden.",
      beispiele: ["Schultasche", "Baumhaus", "Fußball"],
      markierauftrag: "Male zwischen die zwei Wortteile einen Strich.",
      zusatzaufgabe: "Baue selbst zwei neue lange Wörter.",
      toniTipp: "Lange Wörter werden leichter, wenn du die Teile findest."
    },
    "Verben": {
      symbolName: "Groß oder klein?",
      farbe: { label: "🟩 Grün: Verb", className: "is-verb" },
      erklaerung: "Verben werden klein geschrieben. Verben beschreiben alles, was man tun kann.",
      beispiele: ["laufen", "spielen", "malen"],
      markierauftrag: "Markiere den ersten Buchstaben. Markiere die Silbenkönige.",
      zusatzaufgabe: "Schreibe mit einem Verb einen Satz.",
      toniTipp: "Frage: Was kann ich tun?"
    },
    "Adjektive": {
      symbolName: "Groß oder klein?",
      farbe: { label: "🟫 Braun: Adjektiv", className: "is-adjective" },
      erklaerung: "Adjektive werden klein geschrieben. Adjektive beschreiben, wie etwas ist.",
      beispiele: ["groß", "klein", "fröhlich"],
      markierauftrag: "Markiere den ersten Buchstaben. Markiere die Silbenkönige.",
      zusatzaufgabe: "Schreibe mit einem Adjektiv einen Satz.",
      toniTipp: "Frage: Wie ist etwas?"
    },
    "Nomen": {
      symbolName: "Groß oder klein?",
      farbe: { label: "🟨 Gelb: Nomen", className: "is-noun" },
      erklaerung: "Nomen werden groß geschrieben. Nomen sind Wörter für Menschen, Tiere, Pflanzen und Dinge.",
      beispiele: ["Hund", "Blume", "Sonne"],
      markierauftrag: "Markiere den ersten Buchstaben. Markiere die Silbenkönige.",
      zusatzaufgabe: "Suche ein Wort im Wörterbuch oder schreibe mit einem Wort einen Satz.",
      toniTipp: "Nomen haben oft einen Artikel: der, die oder das."
    },
    "Wörter genau abschreiben": {
      symbolName: "Merken",
      erklaerung: "Schau zuerst genau hin. Schreibe dann langsam ab und kontrolliere Buchstabe für Buchstabe.",
      beispiele: ["Schultasche", "Geburtstag", "Freundschaft"],
      markierauftrag: "Markiere die Stelle, die für dich schwierig ist.",
      zusatzaufgabe: "Decke das Wort ab und schreibe es noch einmal.",
      toniTipp: "Ein Kontrollblick am Ende ist wichtig."
    }
  };

  const config = configs[title] || {
    symbolName: "Merken",
    erklaerung: `Achte bei ${title} auf die besondere Schreibstelle. Lies das Wort langsam und genau.`,
    beispiele: ["Toni", "Schule", "lesen"],
    markierauftrag: "Markiere die besondere Stelle.",
    zusatzaufgabe: "Schreibe mit einem Wort einen Satz.",
    toniTipp: "Schau langsam auf jede schwierige Stelle im Wort."
  };

  return {
    uebungTitel: "Aufgabe",
    uebung: "Finde fünf weitere Wörter.",
    ...config
  };
}

function getDailyWordCards() {
  return DAILY_WORDS.map((entry, index) => ({
    bereich: "Wort des Tages",
    nummer: index + 1,
    titel: `Wort des Tages ${index + 1}`,
    symbolName: entry.fresch?.[0] || "Schwingen",
    erklaerung: "Lies das Wort genau. Sprich es langsam und bearbeite die Aufgaben auf Papier.",
    beispiele: [],
    uebung: "Lies. Schwinge die Silben. Schreibe das Wort ab. Lies den Satz. Schreibe einen eigenen Satz.",
    toniTipp: "Bearbeite alles ruhig auf Papier.",
    wordInfo: `
      <span class="grundwortschatz-label is-large">⭐ Grundwortschatz NRW</span>
      <section class="writing-card-section">
        <h4>⭐ Wort</h4>
        <p>${entry.wort}</p>
      </section>
      <section class="writing-card-section">
        <h4>🔤 Silben</h4>
        <p>${entry.silben}</p>
      </section>
      <section class="writing-card-section">
        <h4>📌 Wortart</h4>
        <p>${entry.wortart}</p>
      </section>
      <section class="writing-card-section">
        <h4>📖 Beispielsatz</h4>
        <p>${entry.beispielsatz}</p>
      </section>
      <section class="writing-card-section">
        <h4>🌱 Wortfamilie</h4>
        <p>${entry.wortfamilie}</p>
      </section>
      <section class="writing-card-section">
        <h4>🌳 FRESCH-Strategie</h4>
        <p>${entry.fresch.join(", ")}</p>
      </section>
      <section class="writing-card-section">
        <h4>✏️ Aufgaben</h4>
        <ul>
          <li>lesen</li>
          <li>Silben schwingen</li>
          <li>Wort abschreiben</li>
          <li>Satz lesen</li>
          <li>eigenen Satz schreiben</li>
        </ul>
      </section>
    `
  }));
}

function formatTaskNumber(number) {
  return String(number).padStart(2, "0");
}

function handleWritingClick(event) {
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

function handleFreschClick(event) {
  const areaButton = event.target.closest("[data-fresch-area]");
  if (areaButton) {
    state.freschArea = areaButton.dataset.freschArea;
    state.freschCardIndex = null;
    render();
    scrollToTop();
    return;
  }

  const cardButton = event.target.closest("[data-fresch-card]");
  if (cardButton) {
    state.freschCardIndex = Number(cardButton.dataset.freschCard);
    render();
    scrollToTop();
    return;
  }

  const actionButton = event.target.closest("[data-fresch-action]");
  if (!actionButton) return;
  handleLearningAction(actionButton.dataset.freschAction, "fresch");
}

function handleOrthographyClick(event) {
  const cardButton = event.target.closest("[data-orthography-card]");
  if (cardButton) {
    state.orthographyCardIndex = Number(cardButton.dataset.orthographyCard);
    render();
    scrollToTop();
    return;
  }

  const actionButton = event.target.closest("[data-orthography-action]");
  if (!actionButton) return;
  handleLearningAction(actionButton.dataset.orthographyAction, "orthography");
}

function handleDailyWordClick(event) {
  const cardButton = event.target.closest("[data-daily-word-card]");
  if (cardButton) {
    state.dailyWordIndex = Number(cardButton.dataset.dailyWordCard);
    render();
    scrollToTop();
    return;
  }

  const actionButton = event.target.closest("[data-daily-word-action]");
  if (!actionButton) return;
  handleLearningAction(actionButton.dataset.dailyWordAction, "dailyWord");
}

function handleLearningAction(action, kind) {
  const config = {
    fresch: {
      get cards() { return getFreschCards(state.freschArea); },
      get index() { return state.freschCardIndex; },
      set index(value) { state.freschCardIndex = value; },
      resetArea() { state.freschArea = ""; }
    },
    orthography: {
      get cards() { return getOrthographyCards(); },
      get index() { return state.orthographyCardIndex; },
      set index(value) { state.orthographyCardIndex = value; },
      resetArea() {}
    },
    dailyWord: {
      get cards() { return getDailyWordCards(); },
      get index() { return state.dailyWordIndex; },
      set index(value) { state.dailyWordIndex = value; },
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
    state.freschArea = "";
    state.freschCardIndex = null;
    state.orthographyCardIndex = null;
    state.dailyWordIndex = null;
  }

  if (route === "writing" && state.route !== "writing") {
    state.writingArea = "";
    state.writingCardIndex = null;
  }

  if (route === "reading" && state.route !== "reading") {
    state.readingArea = "";
    state.readingCardIndex = null;
  }

  if (route === "fresch" && state.route !== "fresch") {
    state.freschArea = "";
    state.freschCardIndex = null;
  }

  if (route === "orthography" && state.route !== "orthography") {
    state.orthographyCardIndex = null;
  }

  if (route === "dailyWord" && state.route !== "dailyWord") {
    state.dailyWordIndex = null;
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
