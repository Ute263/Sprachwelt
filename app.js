const THEMES = [
  { name: "Tiere", route: "animals", emoji: "🐾", ready: true },
  { name: "Schule", route: "school", emoji: "🎒", ready: true },
  { name: "Sommer und Ferien", route: "summer", emoji: "☀️", ready: true },
  { name: "Essen", route: "food", emoji: "🍎", ready: true },
  { name: "Gefühle", route: "", emoji: "😊", ready: false },
  { name: "Spielzeug", route: "toys", emoji: "🎲", ready: true },
  { name: "Familie und Menschen", route: "people", emoji: "👨‍👩‍👧", ready: true },
  { name: "Zuhause", route: "homePlace", emoji: "🏠", ready: true },
  { name: "Tunwörter", route: "verbs", emoji: "🏃", ready: true },
  { name: "Wiewörter", route: "adjectives", emoji: "🌈", ready: true }
];

const BANDS = {
  animals: {
    thema: "Tiere",
    title: "Band Tiere",
    allCategory: "Alle Tiere",
    categories: [
      "Alle Tiere",
      "Haustiere",
      "Bauernhoftiere",
      "Wilde Tiere",
      "Kleine Tiere",
      "Wassertiere"
    ]
  },
  school: {
    thema: "Schule",
    title: "Band Schule",
    allCategory: "Alle Schulwörter",
    categories: [
      "Alle Schulwörter",
      "Im Klassenraum",
      "Schreiben und Basteln",
      "Zahlen und Formen",
      "Sport und Pause"
    ]
  },
  summer: {
    thema: "Sommer",
    title: "Band Sommer und Ferien",
    allCategory: "Alle Sommerwörter",
    categories: [
      "Alle Sommerwörter",
      "Sommerwetter",
      "Draußen",
      "Ferien",
      "Meer und Schwimmbad"
    ]
  },
  food: {
    thema: "Essen",
    title: "Band Essen und Trinken",
    allCategory: "Alle Essenswörter",
    categories: [
      "Alle Essenswörter",
      "Obst",
      "Gemüse",
      "Frühstück und Brotzeit",
      "Getränke und Süßes"
    ]
  },
  toys: {
    thema: "Spielzeug",
    title: "Band Spielzeug",
    allCategory: "Alle Spielzeugwörter",
    categories: [
      "Alle Spielzeugwörter",
      "Spielsachen",
      "Bauen",
      "Draußen spielen",
      "Kuscheln"
    ]
  },
  people: {
    thema: "Familie und Menschen",
    title: "Band Familie und Menschen",
    allCategory: "Alle Menschenwörter",
    categories: [
      "Alle Menschenwörter",
      "Familie",
      "Freunde",
      "Körper",
      "Kleidung"
    ]
  },
  homePlace: {
    thema: "Zuhause",
    title: "Band Zuhause",
    allCategory: "Alle Zuhausewörter",
    categories: [
      "Alle Zuhausewörter",
      "Zimmer",
      "Möbel",
      "Küche",
      "Bad"
    ]
  },
  verbs: {
    thema: "Tunwörter",
    title: "Band Tunwörter",
    allCategory: "Alle Tunwörter",
    categories: [
      "Alle Tunwörter",
      "Bewegung",
      "Schule",
      "Spielen",
      "Gefühle zeigen"
    ]
  },
  adjectives: {
    thema: "Wiewörter",
    title: "Band Wiewörter",
    allCategory: "Alle Wiewörter",
    categories: [
      "Alle Wiewörter",
      "Aussehen",
      "Größe",
      "Gefühl",
      "Bewegung"
    ]
  }
};

const FAVORITE_KEY = "toni-woerterbuch-favoriten";
const OLD_FAVORITE_KEY = "mina-igel-favoriten";

const state = {
  route: "home",
  categories: {
    animals: BANDS.animals.allCategory,
    school: BANDS.school.allCategory,
    summer: BANDS.summer.allCategory,
    food: BANDS.food.allCategory,
    toys: BANDS.toys.allCategory,
    people: BANDS.people.allCategory,
    homePlace: BANDS.homePlace.allCategory,
    verbs: BANDS.verbs.allCategory,
    adjectives: BANDS.adjectives.allCategory
  },
  query: "",
  favorites: loadFavorites()
};

const views = {
  home: document.querySelector("#view-home"),
  band: document.querySelector("#view-band"),
  favorites: document.querySelector("#view-favorites")
};

const themeGrid = document.querySelector("#theme-grid");
const homeSearch = document.querySelector("#home-search");
const homeSearchGrid = document.querySelector("#home-search-grid");
const bandTitle = document.querySelector("#band-title");
const categoryTabs = document.querySelector("#category-tabs");
const wordGrid = document.querySelector("#word-grid");
const favoriteGrid = document.querySelector("#favorite-grid");
const searchInput = document.querySelector("#search-input");
const navButtons = document.querySelectorAll("[data-route]");

renderThemes();
render();

navButtons.forEach((button) => {
  button.addEventListener("click", () => setRoute(button.dataset.route));
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => setRoute("home"));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

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
  renderHomeSearch();
  renderBandView();
  renderWordCards(favoriteGrid, getFavoriteWords(), "Tippe auf einen Stern. Dann findest du dein Wort hier wieder.");
}

function updateVisibleView() {
  views.home.classList.toggle("is-visible", state.route === "home");
  views.favorites.classList.toggle("is-visible", state.route === "favorites");
  views.band.classList.toggle("is-visible", Boolean(getCurrentBand()));
}

function updateNavigation() {
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === state.route);
  });
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

  // Suche über die wichtigsten Felder, damit Kinder auch nach Artikel, Kategorie oder Band suchen können.
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
    return `
      <article class="word-card">
        <div class="word-top">
          <div class="word-emoji" aria-hidden="true">${word.emoji}</div>
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

function setRoute(route) {
  if (!route) {
    return;
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
