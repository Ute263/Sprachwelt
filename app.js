const THEMES = [
  { name: "Tiere", route: "animals", emoji: "🐾", ready: true },
  { name: "Schule", route: "school", emoji: "🎒", ready: true },
  { name: "Sommer und Ferien", route: "summer", emoji: "☀️", ready: true },
  { name: "Essen", route: "food", emoji: "🍎", ready: true },
  { name: "Gefühle", route: "feelings", emoji: "😊", ready: true },
  { name: "Spielzeug", route: "toys", emoji: "🎲", ready: true },
  { name: "Familie und Menschen", route: "people", emoji: "👨‍👩‍👧", ready: true },
  { name: "Zuhause", route: "homePlace", emoji: "🏠", ready: true },
  { name: "Verben", route: "verbs", emoji: "🏃", ready: true },
  { name: "Adjektive", route: "adjectives", emoji: "🌈", ready: true }
];

const BANDS = {
  animals: {
    thema: "Tiere",
    title: "Band Tiere",
    allCategory: "Alle Tiere",
    categories: ["Alle Tiere", "Haustiere", "Bauernhoftiere", "Wilde Tiere", "Kleine Tiere", "Wassertiere"]
  },
  school: {
    thema: "Schule",
    title: "Band Schule",
    allCategory: "Alle Schulwörter",
    categories: ["Alle Schulwörter", "Im Klassenraum", "Schreiben und Basteln", "Zahlen und Formen", "Sport und Pause"]
  },
  summer: {
    thema: "Sommer",
    title: "Band Sommer und Ferien",
    allCategory: "Alle Sommerwörter",
    categories: ["Alle Sommerwörter", "Sommerwetter", "Draußen", "Ferien", "Meer und Schwimmbad"]
  },
  food: {
    thema: "Essen",
    title: "Band Essen und Trinken",
    allCategory: "Alle Essenswörter",
    categories: ["Alle Essenswörter", "Obst", "Gemüse", "Frühstück und Brotzeit", "Getränke und Süßes"]
  },
  feelings: {
    thema: "Gefühle",
    title: "Band Gefühle",
    allCategory: "Alle Gefühlswörter",
    categories: ["Alle Gefühlswörter", "Gute Gefühle", "Schlechte Gefühle", "Miteinander", "Mut und Angst"]
  },
  toys: {
    thema: "Spielzeug",
    title: "Band Spielzeug",
    allCategory: "Alle Spielzeugwörter",
    categories: ["Alle Spielzeugwörter", "Spielsachen", "Bauen", "Draußen spielen", "Kuscheln"]
  },
  people: {
    thema: "Familie und Menschen",
    title: "Band Familie und Menschen",
    allCategory: "Alle Menschenwörter",
    categories: ["Alle Menschenwörter", "Familie", "Freunde", "Körper", "Kleidung"]
  },
  homePlace: {
    thema: "Zuhause",
    title: "Band Zuhause",
    allCategory: "Alle Zuhausewörter",
    categories: ["Alle Zuhausewörter", "Zimmer", "Möbel", "Küche", "Bad"]
  },
  verbs: {
    thema: "Verben",
    title: "Band Verben",
    allCategory: "Alle Verben",
    categories: ["Alle Verben", "Bewegung", "Schule", "Spielen", "Gefühle zeigen"]
  },
  adjectives: {
    thema: "Adjektive",
    title: "Band Adjektive",
    allCategory: "Alle Adjektive",
    categories: ["Alle Adjektive", "Aussehen", "Größe", "Gefühl", "Bewegung"]
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
const WRITING_AREAS = [
  { name: "Sätze schreiben", emoji: "📝", sourceAreas: ["Schreibaufgaben"] },
  { name: "Geschichten schreiben", emoji: "📖", sourceAreas: ["Mini-Bücher"] },
  { name: "Zufallsgeschichten", emoji: "🎲", sourceAreas: ["Geschichtenideen"] },
  { name: "Geschichtenbilder", emoji: "🖼️", kind: "image" },
  { name: "Starke Schreiber", emoji: "⭐", sourceAreas: ["Starke Schreiber"] },
  { name: "Schreibtipps", emoji: "💡", kind: "tips" }
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
const STORY_IMAGE_PROMPTS = [
  "Wer ist auf dem Bild?",
  "Was passiert gerade?",
  "Was könnte als Nächstes passieren?",
  "Welches Problem gibt es?",
  "Wer hilft?",
  "Wie endet die Geschichte?"
];
const WRITING_TIP_CARDS = [
  {
    nummer: 1,
    titel: "Ganze Sätze",
    auftrag: "Schreibe ganze Sätze in dein Heft.",
    fragen: ["Hat jeder Satz einen Anfang?", "Steht am Ende ein Punkt?", "Kann man deinen Satz verstehen?"],
    satzanfaenge: ["Heute ...", "Dann ...", "Am Ende ..."],
    worthelfer: ["Satz", "Punkt", "Anfang", "Ende"],
    schreibtipps: ["Lies jeden Satz noch einmal.", "Achte auf Fingerabstände.", "Setze am Satzende einen Punkt."],
    toniTipp: "Ein ganzer Satz erzählt etwas vollständig."
  },
  {
    nummer: 2,
    titel: "Starker Anfang",
    auftrag: "Übe spannende Satzanfänge.",
    fragen: ["Wie beginnt deine Geschichte?", "Macht der Anfang neugierig?", "Wer kommt vor?"],
    satzanfaenge: ["Heute ...", "Plötzlich ...", "Auf einmal ..."],
    worthelfer: ["Anfang", "plötzlich", "leise", "schnell"],
    schreibtipps: ["Beginne nicht jeden Satz gleich.", "Lies den Anfang laut.", "Wähle einen passenden Satzanfang."],
    toniTipp: "Ein guter Anfang macht Lust aufs Weiterlesen."
  },
  {
    nummer: 3,
    titel: "Adjektive nutzen",
    auftrag: "Mache deinen Text genauer.",
    fragen: ["Wie sieht die Figur aus?", "Wie fühlt sie sich?", "Wie ist der Ort?"],
    satzanfaenge: ["Der ... ist ...", "Die ... wirkt ...", "Es ist ..."],
    worthelfer: ["klein", "groß", "fröhlich", "leise", "bunt"],
    schreibtipps: ["Nutze Adjektive.", "Übertreibe nicht.", "Prüfe, ob das Adjektiv passt."],
    toniTipp: "Adjektive machen ein Bild im Kopf."
  },
  {
    nummer: 4,
    titel: "Verben nutzen",
    auftrag: "Mache deine Geschichte lebendig.",
    fragen: ["Was macht die Figur?", "Was passiert zuerst?", "Was passiert danach?"],
    satzanfaenge: ["Toni rennt ...", "Lina sucht ...", "Der Ball rollt ..."],
    worthelfer: ["rennen", "suchen", "rufen", "finden", "lachen"],
    schreibtipps: ["Nutze Verben.", "Wähle genaue Verben.", "Lies den Satz danach noch einmal."],
    toniTipp: "Verben zeigen, was passiert."
  },
  {
    nummer: 5,
    titel: "Reihenfolge",
    auftrag: "Schreibe deine Geschichte in der richtigen Reihenfolge.",
    fragen: ["Was passiert zuerst?", "Was passiert danach?", "Wie endet es?"],
    satzanfaenge: ["Zuerst ...", "Dann ...", "Danach ...", "Am Ende ..."],
    worthelfer: ["zuerst", "dann", "danach", "später"],
    schreibtipps: ["Ordne deine Ideen.", "Nutze Reihenfolgewörter.", "Prüfe, ob alles zusammenpasst."],
    toniTipp: "Eine gute Reihenfolge hilft beim Verstehen."
  },
  {
    nummer: 6,
    titel: "Problem und Lösung",
    auftrag: "Baue ein Problem und eine Lösung ein.",
    fragen: ["Was ist das Problem?", "Wer hilft?", "Wie wird es gelöst?"],
    satzanfaenge: ["Plötzlich ...", "Zum Glück ...", "Am Ende ..."],
    worthelfer: ["Problem", "Hilfe", "lösen", "mutig"],
    schreibtipps: ["Schreibe das Problem deutlich.", "Erzähle die Lösung.", "Lass die Figur etwas tun."],
    toniTipp: "Viele Geschichten brauchen ein Problem."
  },
  {
    nummer: 7,
    titel: "Gefühle zeigen",
    auftrag: "Schreibe, wie sich eine Figur fühlt.",
    fragen: ["Ist die Figur froh?", "Ist sie traurig?", "Warum fühlt sie so?"],
    satzanfaenge: ["Toni freut sich, weil ...", "Lina ist traurig, weil ...", "Er hat Angst, weil ..."],
    worthelfer: ["froh", "traurig", "mutig", "ängstlich", "stolz"],
    schreibtipps: ["Nutze Gefühlswörter.", "Begründe das Gefühl.", "Lies den Gefühlssatz noch einmal."],
    toniTipp: "Gefühle machen Figuren lebendig."
  },
  {
    nummer: 8,
    titel: "Ort beschreiben",
    auftrag: "Beschreibe den Ort deiner Geschichte.",
    fragen: ["Wo spielt die Geschichte?", "Was sieht man dort?", "Wie fühlt sich der Ort an?"],
    satzanfaenge: ["Im Wald ...", "Auf dem Spielplatz ...", "In der Schule ..."],
    worthelfer: ["Ort", "hell", "dunkel", "ruhig", "laut"],
    schreibtipps: ["Schreibe, wo die Geschichte spielt.", "Nutze genaue Wörter.", "Male den Ort im Kopf."],
    toniTipp: "Ein genauer Ort macht die Geschichte klar."
  },
  {
    nummer: 9,
    titel: "Überarbeiten",
    auftrag: "Lies deine Geschichte noch einmal.",
    fragen: ["Fehlt ein Punkt?", "Ist ein Wort schwer zu lesen?", "Kannst du einen Satz besser machen?"],
    satzanfaenge: ["Ich prüfe ...", "Ich verbessere ...", "Ich lese ..."],
    worthelfer: ["prüfen", "verbessern", "lesen", "ordentlich"],
    schreibtipps: ["Lies langsam.", "Kontrolliere Punkte.", "Verbessere ein Wort."],
    toniTipp: "Gute Schreiber überarbeiten."
  },
  {
    nummer: 10,
    titel: "Vorlesen",
    auftrag: "Lies deine Geschichte einem Partner vor.",
    fragen: ["Kann dein Partner folgen?", "Wo musst du eine Pause machen?", "Klingt deine Geschichte fertig?"],
    satzanfaenge: ["Ich lese ...", "Mein Partner hört ...", "Danach verbessere ich ..."],
    worthelfer: ["vorlesen", "Pause", "deutlich", "ruhig"],
    schreibtipps: ["Lies deutlich.", "Mache Pausen.", "Frage nach einem Tipp."],
    toniTipp: "Beim Vorlesen hörst du, ob dein Text passt."
  }
];

const state = {
  route: "portal",
  categories: Object.fromEntries(Object.entries(BANDS).map(([route, band]) => [route, band.allCategory])),
  query: "",
  favorites: loadFavorites(),
  writingArea: "",
  writingCardIndex: null,
  readingArea: "",
  readingCardIndex: null
};

const views = {
  portal: document.querySelector("#view-portal"),
  dictionary: document.querySelector("#view-dictionary"),
  band: document.querySelector("#view-band"),
  favorites: document.querySelector("#view-favorites"),
  writing: document.querySelector("#view-writing"),
  story: document.querySelector("#view-story"),
  reading: document.querySelector("#view-reading")
};

const dictionaryNav = document.querySelector("#dictionary-nav");
const dictionaryTools = document.querySelector("#dictionary-tools");
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
const navButtons = document.querySelectorAll("[data-route]");
const scrollTopButton = document.querySelector("#scroll-top-button");
const rollStoryButton = document.querySelector("#roll-story-button");
const storyWho = document.querySelector("#story-who");
const storyWhere = document.querySelector("#story-where");
const storyWhat = document.querySelector("#story-what");

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
  renderWordCards(favoriteGrid, getFavoriteWords(), "Tippe auf einen Stern. Dann findest du dein Wort hier wieder.");
}

function updateVisibleView() {
  views.portal.classList.toggle("is-visible", state.route === "portal");
  views.dictionary.classList.toggle("is-visible", state.route === "dictionary");
  views.favorites.classList.toggle("is-visible", state.route === "favorites");
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
  dictionaryNav.hidden = !dictionaryVisible;
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

  return WORDS.filter((word) => {
    if (state.query) {
      return matchesSearch(word);
    }

    const matchesTheme = word.thema === band.thema;
    const matchesCategory = selectedCategory === band.allCategory || word.kategorie === selectedCategory;
    return matchesTheme && matchesCategory && matchesSearch(word);
  });
}

function getSearchWords() {
  return WORDS.filter((word) => matchesSearch(word));
}

function getFavoriteWords() {
  return WORDS.filter((word) => state.favorites.includes(word.id) && matchesSearch(word));
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
    word.thema
  ].join(" ").toLowerCase();

  return searchableText.includes(state.query);
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
        <span class="category-label">${word.kategorie}</span>
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
  const taskSection = card.kind === "image"
    ? ""
    : renderCardSection("✏️", "Auftrag", `<p>${card.auftrag}</p>`);
  const questionTitle = card.kind === "image" ? "Schreibideen" : "Denkfragen";
  const questionIcon = card.kind === "image" ? "✏️" : "❓";
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
      ${taskSection}
      ${renderCardSection(questionIcon, questionTitle, renderCardList(card.fragen))}
      ${renderCardSection("🟨", "So kannst du anfangen", renderCardList(card.satzanfaenge))}
      ${helperSection}
      ${renderCardSection("⭐", "Schreibtipps", renderCardList(card.schreibtipps))}
      ${renderCardSection("🐥", "Toni-Tipp", `<p>${card.toniTipp}</p>`)}
      <div class="writing-card-actions">
        <button class="big-action-button writing-action-button is-light" type="button" data-writing-action="home">🏠 Home</button>
        <button class="big-action-button writing-action-button is-light" type="button" data-writing-action="back">⬅ Zurück zur Übersicht</button>
        <button class="big-action-button writing-action-button" type="button" data-writing-action="random">🎲 Zufallsaufgabe</button>
        <button class="big-action-button writing-action-button" type="button" data-writing-action="next">➡ Nächste Aufgabe</button>
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

  if (config.kind === "tips") {
    return WRITING_TIP_CARDS.map((card) => ({ ...card, bereich: "Schreibtipps", displayBereich: area }));
  }

  return SCHREIBKARTEN
    .filter((card) => config.sourceAreas.includes(card.bereich))
    .map((card) => ({ ...card, displayBereich: area }));
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
    bild: `images/geschichtenbilder/${toImageSlug(title)}.png`,
    auftrag: "Sieh dir das Bild genau an. Schreibe dazu eine Geschichte in dein Heft.",
    fragen: STORY_IMAGE_PROMPTS,
    satzanfaenge: ["Heute ...", "Plötzlich ...", "Auf einmal ...", "Dann ...", "Am Ende ..."],
    worthelfer: [],
    schreibtipps: ["Nutze Adjektive.", "Nutze Verben.", "Schreibe ganze Sätze.", "Lies deine Geschichte noch einmal."],
    toniTipp: "Schau zuerst genau. Schreibe dann, was auf dem Bild passieren könnte."
  }));
}

function toImageSlug(title) {
  return title
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getReadingCards(area) {
  return LESETEXTE.filter((card) => card.bereich === area);
}

function getReadingAreaEmoji(areaName) {
  return READING_AREAS.find((area) => area.name === areaName)?.emoji || "📖";
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
  }

  if (route === "writing" && state.route !== "writing") {
    state.writingArea = "";
    state.writingCardIndex = null;
  }

  if (route === "reading" && state.route !== "reading") {
    state.readingArea = "";
    state.readingCardIndex = null;
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
  const word = WORDS.find((entry) => entry.id === id);
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
