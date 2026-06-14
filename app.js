const THEMES = [
  { name: "Tiere", emoji: "🐾", ready: true },
  { name: "Schule", emoji: "🎒", ready: false },
  { name: "Sommer", emoji: "☀️", ready: false },
  { name: "Essen", emoji: "🍎", ready: false },
  { name: "Gefühle", emoji: "😊", ready: false },
  { name: "Tunwörter", emoji: "🏃", ready: false },
  { name: "Wiewörter", emoji: "🌈", ready: false }
];

const CATEGORIES = [
  "Alle Tiere",
  "Haustiere",
  "Bauernhoftiere",
  "Wilde Tiere",
  "Kleine Tiere",
  "Wassertiere"
];

const FAVORITE_KEY = "mina-igel-favoriten";

const state = {
  route: "home",
  category: "Alle Tiere",
  query: "",
  favorites: loadFavorites()
};

const views = {
  home: document.querySelector("#view-home"),
  animals: document.querySelector("#view-animals"),
  favorites: document.querySelector("#view-favorites")
};

const themeGrid = document.querySelector("#theme-grid");
const categoryTabs = document.querySelector("#category-tabs");
const wordGrid = document.querySelector("#word-grid");
const favoriteGrid = document.querySelector("#favorite-grid");
const searchInput = document.querySelector("#search-input");
const navButtons = document.querySelectorAll("[data-route]");

renderThemes();
renderCategories();
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
      <button class="theme-tile" type="button" data-theme="${theme.name}" data-ready="${theme.ready}">
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
        setRoute("animals");
      }
    });
  });
}

function renderCategories() {
  categoryTabs.innerHTML = CATEGORIES.map((category) => `
    <button class="category-tab" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");

  categoryTabs.querySelectorAll(".category-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });
}

function render() {
  updateVisibleView();
  updateNavigation();
  updateCategories();
  renderWordCards(wordGrid, getAnimalWords(), "Hier ist noch kein Wort zu sehen.");
  renderWordCards(favoriteGrid, getFavoriteWords(), "Tippe auf einen Stern. Dann findest du dein Wort hier wieder.");
}

function updateVisibleView() {
  Object.entries(views).forEach(([route, view]) => {
    view.classList.toggle("is-visible", route === state.route);
  });
}

function updateNavigation() {
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === state.route);
  });
}

function updateCategories() {
  categoryTabs.querySelectorAll(".category-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.category);
  });
}

function getAnimalWords() {
  return WORDS.filter((word) => {
    const matchesTheme = word.thema === "Tiere";
    const matchesCategory = state.category === "Alle Tiere" || word.kategorie === state.category;
    return matchesTheme && matchesCategory && matchesSearch(word);
  });
}

function getFavoriteWords() {
  return WORDS.filter((word) => state.favorites.includes(word.id) && matchesSearch(word));
}

function matchesSearch(word) {
  if (!state.query) {
    return true;
  }

  // Suche über die wichtigsten Felder, damit Kinder auch nach Artikel oder Kategorie suchen können.
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
    return `
      <article class="word-card">
        <div class="word-top">
          <div class="word-emoji" aria-hidden="true">${word.emoji}</div>
          <button
            class="favorite-button"
            type="button"
            aria-label="${word.artikel} ${word.wort} merken"
            aria-pressed="${isFavorite}"
            data-favorite="${word.id}"
          >${isFavorite ? "★" : "☆"}</button>
        </div>
        <div class="word-main">
          <span class="article">${word.artikel}</span>
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

  const utterance = new SpeechSynthesisUtterance(`${word.artikel} ${word.wort}`);
  utterance.lang = "de-DE";
  utterance.rate = 0.82;
  utterance.pitch = 1.08;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(state.favorites));
}
