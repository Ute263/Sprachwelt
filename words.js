const WORDS = [
  {
    id: "hund",
    wort: "Hund",
    artikel: "der",
    silben: "Hund",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐶"
  },
  {
    id: "katze",
    wort: "Katze",
    artikel: "die",
    silben: "Kat-ze",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐱"
  },
  {
    id: "hase",
    wort: "Hase",
    artikel: "der",
    silben: "Ha-se",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐰"
  },
  {
    id: "hamster",
    wort: "Hamster",
    artikel: "der",
    silben: "Hams-ter",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐹"
  },
  {
    id: "maus",
    wort: "Maus",
    artikel: "die",
    silben: "Maus",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐭"
  },
  {
    id: "vogel",
    wort: "Vogel",
    artikel: "der",
    silben: "Vo-gel",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐦"
  },
  {
    id: "fisch",
    wort: "Fisch",
    artikel: "der",
    silben: "Fisch",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐟"
  },
  {
    id: "schildkroete",
    wort: "Schildkröte",
    artikel: "die",
    silben: "Schild-krö-te",
    kategorie: "Haustiere",
    thema: "Tiere",
    emoji: "🐢"
  },
  {
    id: "kuh",
    wort: "Kuh",
    artikel: "die",
    silben: "Kuh",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🐄"
  },
  {
    id: "schwein",
    wort: "Schwein",
    artikel: "das",
    silben: "Schwein",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🐷"
  },
  {
    id: "pferd",
    wort: "Pferd",
    artikel: "das",
    silben: "Pferd",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🐴"
  },
  {
    id: "schaf",
    wort: "Schaf",
    artikel: "das",
    silben: "Schaf",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🐑"
  },
  {
    id: "ziege",
    wort: "Ziege",
    artikel: "die",
    silben: "Zie-ge",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🐐"
  },
  {
    id: "huhn",
    wort: "Huhn",
    artikel: "das",
    silben: "Huhn",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🐔"
  },
  {
    id: "hahn",
    wort: "Hahn",
    artikel: "der",
    silben: "Hahn",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🐓"
  },
  {
    id: "ente",
    wort: "Ente",
    artikel: "die",
    silben: "En-te",
    kategorie: "Bauernhoftiere",
    thema: "Tiere",
    emoji: "🦆"
  },
  {
    id: "loewe",
    wort: "Löwe",
    artikel: "der",
    silben: "Lö-we",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🦁"
  },
  {
    id: "tiger",
    wort: "Tiger",
    artikel: "der",
    silben: "Ti-ger",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🐯"
  },
  {
    id: "elefant",
    wort: "Elefant",
    artikel: "der",
    silben: "E-le-fant",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🐘"
  },
  {
    id: "giraffe",
    wort: "Giraffe",
    artikel: "die",
    silben: "Gi-raf-fe",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🦒"
  },
  {
    id: "zebra",
    wort: "Zebra",
    artikel: "das",
    silben: "Ze-bra",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🦓"
  },
  {
    id: "affe",
    wort: "Affe",
    artikel: "der",
    silben: "Af-fe",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🐒"
  },
  {
    id: "baer",
    wort: "Bär",
    artikel: "der",
    silben: "Bär",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🐻"
  },
  {
    id: "wolf",
    wort: "Wolf",
    artikel: "der",
    silben: "Wolf",
    kategorie: "Wilde Tiere",
    thema: "Tiere",
    emoji: "🐺"
  },
  {
    id: "biene",
    wort: "Biene",
    artikel: "die",
    silben: "Bie-ne",
    kategorie: "Kleine Tiere",
    thema: "Tiere",
    emoji: "🐝"
  },
  {
    id: "schmetterling",
    wort: "Schmetterling",
    artikel: "der",
    silben: "Schmet-ter-ling",
    kategorie: "Kleine Tiere",
    thema: "Tiere",
    emoji: "🦋"
  },
  {
    id: "marienkaefer",
    wort: "Marienkäfer",
    artikel: "der",
    silben: "Ma-ri-en-kä-fer",
    kategorie: "Kleine Tiere",
    thema: "Tiere",
    emoji: "🐞"
  },
  {
    id: "kaefer",
    wort: "Käfer",
    artikel: "der",
    silben: "Kä-fer",
    kategorie: "Kleine Tiere",
    thema: "Tiere",
    emoji: "🪲"
  },
  {
    id: "delfin",
    wort: "Delfin",
    artikel: "der",
    silben: "Del-fin",
    kategorie: "Wassertiere",
    thema: "Tiere",
    emoji: "🐬"
  },
  {
    id: "wal",
    wort: "Wal",
    artikel: "der",
    silben: "Wal",
    kategorie: "Wassertiere",
    thema: "Tiere",
    emoji: "🐳"
  },
  {
    id: "krabbe",
    wort: "Krabbe",
    artikel: "die",
    silben: "Krab-be",
    kategorie: "Wassertiere",
    thema: "Tiere",
    emoji: "🦀"
  },
  {
    id: "seestern",
    wort: "Seestern",
    artikel: "der",
    silben: "See-stern",
    kategorie: "Wassertiere",
    thema: "Tiere",
    emoji: "⭐"
  },
  {
    id: "qualle",
    wort: "Qualle",
    artikel: "die",
    silben: "Qual-le",
    kategorie: "Wassertiere",
    thema: "Tiere",
    emoji: "🪼"
  },
  {
    id: "oktopus",
    wort: "Oktopus",
    artikel: "der",
    silben: "Ok-to-pus",
    kategorie: "Wassertiere",
    thema: "Tiere",
    emoji: "🐙"
  }
];
