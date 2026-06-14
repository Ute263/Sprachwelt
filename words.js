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
  },
  {
    id: "tisch",
    wort: "Tisch",
    artikel: "der",
    silben: "Tisch",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "▭"
  },
  {
    id: "stuhl",
    wort: "Stuhl",
    artikel: "der",
    silben: "Stuhl",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "🪑"
  },
  {
    id: "tafel",
    wort: "Tafel",
    artikel: "die",
    silben: "Ta-fel",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "🟩"
  },
  {
    id: "fenster",
    wort: "Fenster",
    artikel: "das",
    silben: "Fens-ter",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "🪟"
  },
  {
    id: "tuer",
    wort: "Tür",
    artikel: "die",
    silben: "Tür",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "🚪"
  },
  {
    id: "uhr",
    wort: "Uhr",
    artikel: "die",
    silben: "Uhr",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "🕒"
  },
  {
    id: "lampe",
    wort: "Lampe",
    artikel: "die",
    silben: "Lam-pe",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "💡"
  },
  {
    id: "schrank",
    wort: "Schrank",
    artikel: "der",
    silben: "Schrank",
    kategorie: "Im Klassenraum",
    thema: "Schule",
    emoji: "🗄️"
  },
  {
    id: "stift",
    wort: "Stift",
    artikel: "der",
    silben: "Stift",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "✏️"
  },
  {
    id: "buntstift",
    wort: "Buntstift",
    artikel: "der",
    silben: "Bunt-stift",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "🖍️"
  },
  {
    id: "heft",
    wort: "Heft",
    artikel: "das",
    silben: "Heft",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "📒"
  },
  {
    id: "buch",
    wort: "Buch",
    artikel: "das",
    silben: "Buch",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "📚"
  },
  {
    id: "schere",
    wort: "Schere",
    artikel: "die",
    silben: "Sche-re",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "✂️"
  },
  {
    id: "kleber",
    wort: "Kleber",
    artikel: "der",
    silben: "Kle-ber",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "🧴"
  },
  {
    id: "lineal",
    wort: "Lineal",
    artikel: "das",
    silben: "Li-ne-al",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "📏"
  },
  {
    id: "radiergummi",
    wort: "Radiergummi",
    artikel: "der",
    silben: "Ra-dier-gum-mi",
    kategorie: "Schreiben und Basteln",
    thema: "Schule",
    emoji: "⬜"
  },
  {
    id: "kreis",
    wort: "Kreis",
    artikel: "der",
    silben: "Kreis",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "⚪"
  },
  {
    id: "quadrat",
    wort: "Quadrat",
    artikel: "das",
    silben: "Qua-drat",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "◼️"
  },
  {
    id: "dreieck",
    wort: "Dreieck",
    artikel: "das",
    silben: "Drei-eck",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "🔺"
  },
  {
    id: "rechteck",
    wort: "Rechteck",
    artikel: "das",
    silben: "Recht-eck",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "▭"
  },
  {
    id: "zahl",
    wort: "Zahl",
    artikel: "die",
    silben: "Zahl",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "🔢"
  },
  {
    id: "eins",
    wort: "Eins",
    artikel: "die",
    silben: "Eins",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "1️⃣"
  },
  {
    id: "zwei",
    wort: "Zwei",
    artikel: "die",
    silben: "Zwei",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "2️⃣"
  },
  {
    id: "drei",
    wort: "Drei",
    artikel: "die",
    silben: "Drei",
    kategorie: "Zahlen und Formen",
    thema: "Schule",
    emoji: "3️⃣"
  },
  {
    id: "ball",
    wort: "Ball",
    artikel: "der",
    silben: "Ball",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "⚽"
  },
  {
    id: "seil",
    wort: "Seil",
    artikel: "das",
    silben: "Seil",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "🪢"
  },
  {
    id: "tor",
    wort: "Tor",
    artikel: "das",
    silben: "Tor",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "🥅"
  },
  {
    id: "schaukel",
    wort: "Schaukel",
    artikel: "die",
    silben: "Schau-kel",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "🖼️"
  },
  {
    id: "rutsche",
    wort: "Rutsche",
    artikel: "die",
    silben: "Rut-sche",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "🛝"
  },
  {
    id: "pausenbrot",
    wort: "Pausenbrot",
    artikel: "das",
    silben: "Pau-sen-brot",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "🥪"
  },
  {
    id: "trinkflasche",
    wort: "Trinkflasche",
    artikel: "die",
    silben: "Trink-fla-sche",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "💧"
  },
  {
    id: "schulhof",
    wort: "Schulhof",
    artikel: "der",
    silben: "Schul-hof",
    kategorie: "Sport und Pause",
    thema: "Schule",
    emoji: "🏫"
  },
  {
    id: "sonne",
    wort: "Sonne",
    artikel: "die",
    silben: "Son-ne",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "☀️"
  },
  {
    id: "wolke",
    wort: "Wolke",
    artikel: "die",
    silben: "Wol-ke",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "☁️"
  },
  {
    id: "regen",
    wort: "Regen",
    artikel: "der",
    silben: "Re-gen",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "🌧️"
  },
  {
    id: "wind",
    wort: "Wind",
    artikel: "der",
    silben: "Wind",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "🌬️"
  },
  {
    id: "hitze",
    wort: "Hitze",
    artikel: "die",
    silben: "Hit-ze",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "🔥"
  },
  {
    id: "schatten",
    wort: "Schatten",
    artikel: "der",
    silben: "Schat-ten",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "◼️"
  },
  {
    id: "himmel",
    wort: "Himmel",
    artikel: "der",
    silben: "Him-mel",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "🌤️"
  },
  {
    id: "regenbogen",
    wort: "Regenbogen",
    artikel: "der",
    silben: "Re-gen-bo-gen",
    kategorie: "Sommerwetter",
    thema: "Sommer",
    emoji: "🌈"
  },
  {
    id: "blume",
    wort: "Blume",
    artikel: "die",
    silben: "Blu-me",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "🌸"
  },
  {
    id: "baum",
    wort: "Baum",
    artikel: "der",
    silben: "Baum",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "🌳"
  },
  {
    id: "wiese",
    wort: "Wiese",
    artikel: "die",
    silben: "Wie-se",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "🌿"
  },
  {
    id: "garten",
    wort: "Garten",
    artikel: "der",
    silben: "Gar-ten",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "🌼"
  },
  {
    id: "sommer-schmetterling",
    wort: "Schmetterling",
    artikel: "der",
    silben: "Schmet-ter-ling",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "🦋"
  },
  {
    id: "fahrrad",
    wort: "Fahrrad",
    artikel: "das",
    silben: "Fahr-rad",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "🚲"
  },
  {
    id: "sommer-ball",
    wort: "Ball",
    artikel: "der",
    silben: "Ball",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "⚽"
  },
  {
    id: "picknick",
    wort: "Picknick",
    artikel: "das",
    silben: "Pick-nick",
    kategorie: "Draußen",
    thema: "Sommer",
    emoji: "🧺"
  },
  {
    id: "urlaub",
    wort: "Urlaub",
    artikel: "der",
    silben: "Ur-laub",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "🏖️"
  },
  {
    id: "koffer",
    wort: "Koffer",
    artikel: "der",
    silben: "Kof-fer",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "🧳"
  },
  {
    id: "reise",
    wort: "Reise",
    artikel: "die",
    silben: "Rei-se",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "🧳"
  },
  {
    id: "auto",
    wort: "Auto",
    artikel: "das",
    silben: "Au-to",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "🚗"
  },
  {
    id: "zug",
    wort: "Zug",
    artikel: "der",
    silben: "Zug",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "🚆"
  },
  {
    id: "hotel",
    wort: "Hotel",
    artikel: "das",
    silben: "Ho-tel",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "🏨"
  },
  {
    id: "zelt",
    wort: "Zelt",
    artikel: "das",
    silben: "Zelt",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "⛺"
  },
  {
    id: "ferien",
    wort: "Ferien",
    artikel: "die",
    silben: "Fe-ri-en",
    kategorie: "Ferien",
    thema: "Sommer",
    emoji: "🏖️"
  },
  {
    id: "meer",
    wort: "Meer",
    artikel: "das",
    silben: "Meer",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🌊"
  },
  {
    id: "strand",
    wort: "Strand",
    artikel: "der",
    silben: "Strand",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🏖️"
  },
  {
    id: "sand",
    wort: "Sand",
    artikel: "der",
    silben: "Sand",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🏝️"
  },
  {
    id: "muschel",
    wort: "Muschel",
    artikel: "die",
    silben: "Mu-schel",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🐚"
  },
  {
    id: "eimer",
    wort: "Eimer",
    artikel: "der",
    silben: "Ei-mer",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🪣"
  },
  {
    id: "schaufel",
    wort: "Schaufel",
    artikel: "die",
    silben: "Schau-fel",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🖼️"
  },
  {
    id: "eis",
    wort: "Eis",
    artikel: "das",
    silben: "Eis",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🍦"
  },
  {
    id: "schwimmbad",
    wort: "Schwimmbad",
    artikel: "das",
    silben: "Schwimm-bad",
    kategorie: "Meer und Schwimmbad",
    thema: "Sommer",
    emoji: "🏊"
  },
  {
    id: "apfel",
    wort: "Apfel",
    artikel: "der",
    silben: "Ap-fel",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍎"
  },
  {
    id: "banane",
    wort: "Banane",
    artikel: "die",
    silben: "Ba-na-ne",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍌"
  },
  {
    id: "birne",
    wort: "Birne",
    artikel: "die",
    silben: "Bir-ne",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍐"
  },
  {
    id: "erdbeere",
    wort: "Erdbeere",
    artikel: "die",
    silben: "Erd-bee-re",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍓"
  },
  {
    id: "traube",
    wort: "Traube",
    artikel: "die",
    silben: "Trau-be",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍇"
  },
  {
    id: "orange",
    wort: "Orange",
    artikel: "die",
    silben: "O-ran-ge",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍊"
  },
  {
    id: "kirsche",
    wort: "Kirsche",
    artikel: "die",
    silben: "Kir-sche",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍒"
  },
  {
    id: "melone",
    wort: "Melone",
    artikel: "die",
    silben: "Me-lo-ne",
    kategorie: "Obst",
    thema: "Essen",
    emoji: "🍉"
  },
  {
    id: "karotte",
    wort: "Karotte",
    artikel: "die",
    silben: "Ka-rot-te",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🥕"
  },
  {
    id: "gurke",
    wort: "Gurke",
    artikel: "die",
    silben: "Gur-ke",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🥒"
  },
  {
    id: "tomate",
    wort: "Tomate",
    artikel: "die",
    silben: "To-ma-te",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🍅"
  },
  {
    id: "kartoffel",
    wort: "Kartoffel",
    artikel: "die",
    silben: "Kar-tof-fel",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🥔"
  },
  {
    id: "salat",
    wort: "Salat",
    artikel: "der",
    silben: "Sa-lat",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🥗"
  },
  {
    id: "paprika",
    wort: "Paprika",
    artikel: "die",
    silben: "Pa-pri-ka",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🫑"
  },
  {
    id: "erbse",
    wort: "Erbse",
    artikel: "die",
    silben: "Erb-se",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🟢"
  },
  {
    id: "mais",
    wort: "Mais",
    artikel: "der",
    silben: "Mais",
    kategorie: "Gemüse",
    thema: "Essen",
    emoji: "🌽"
  },
  {
    id: "essen-brot",
    wort: "Brot",
    artikel: "das",
    silben: "Brot",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🍞"
  },
  {
    id: "broetchen",
    wort: "Brötchen",
    artikel: "das",
    silben: "Bröt-chen",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🥖"
  },
  {
    id: "kaese",
    wort: "Käse",
    artikel: "der",
    silben: "Kä-se",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🧀"
  },
  {
    id: "butter",
    wort: "Butter",
    artikel: "die",
    silben: "But-ter",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🧈"
  },
  {
    id: "marmelade",
    wort: "Marmelade",
    artikel: "die",
    silben: "Mar-me-la-de",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🍯"
  },
  {
    id: "ei",
    wort: "Ei",
    artikel: "das",
    silben: "Ei",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🥚"
  },
  {
    id: "joghurt",
    wort: "Joghurt",
    artikel: "der",
    silben: "Jo-ghurt",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🥛"
  },
  {
    id: "muesli",
    wort: "Müsli",
    artikel: "das",
    silben: "Müs-li",
    kategorie: "Frühstück und Brotzeit",
    thema: "Essen",
    emoji: "🥣"
  },
  {
    id: "wasser",
    wort: "Wasser",
    artikel: "das",
    silben: "Was-ser",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "💧"
  },
  {
    id: "milch",
    wort: "Milch",
    artikel: "die",
    silben: "Milch",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "🥛"
  },
  {
    id: "saft",
    wort: "Saft",
    artikel: "der",
    silben: "Saft",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "🧃"
  },
  {
    id: "kakao",
    wort: "Kakao",
    artikel: "der",
    silben: "Ka-kao",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "☕"
  },
  {
    id: "essen-eis",
    wort: "Eis",
    artikel: "das",
    silben: "Eis",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "🍦"
  },
  {
    id: "kuchen",
    wort: "Kuchen",
    artikel: "der",
    silben: "Ku-chen",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "🍰"
  },
  {
    id: "keks",
    wort: "Keks",
    artikel: "der",
    silben: "Keks",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "🍪"
  },
  {
    id: "schokolade",
    wort: "Schokolade",
    artikel: "die",
    silben: "Scho-ko-la-de",
    kategorie: "Getränke und Süßes",
    thema: "Essen",
    emoji: "🍫"
  },
  {
    id: "spielzeug-ball",
    wort: "Ball",
    artikel: "der",
    silben: "Ball",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "⚽"
  },
  {
    id: "spielzeug-puppe",
    wort: "Puppe",
    artikel: "die",
    silben: "Pup-pe",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "🪆"
  },
  {
    id: "spielzeug-auto",
    wort: "Auto",
    artikel: "das",
    silben: "Au-to",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "🚗"
  },
  {
    id: "spielzeug-teddy",
    wort: "Teddy",
    artikel: "der",
    silben: "Ted-dy",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "🧸"
  },
  {
    id: "spielzeug-wuerfel",
    wort: "Würfel",
    artikel: "der",
    silben: "Wür-fel",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "🎲"
  },
  {
    id: "spielzeug-puzzle",
    wort: "Puzzle",
    artikel: "das",
    silben: "Puz-zle",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "🧩"
  },
  {
    id: "spielzeug-spiel",
    wort: "Spiel",
    artikel: "das",
    silben: "Spiel",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "🎲"
  },
  {
    id: "spielzeug-karte",
    wort: "Karte",
    artikel: "die",
    silben: "Kar-te",
    kategorie: "Spielsachen",
    thema: "Spielzeug",
    emoji: "🃏"
  },
  {
    id: "spielzeug-stein",
    wort: "Stein",
    artikel: "der",
    silben: "Stein",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "◼️"
  },
  {
    id: "spielzeug-turm",
    wort: "Turm",
    artikel: "der",
    silben: "Turm",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "🗼"
  },
  {
    id: "spielzeug-haus",
    wort: "Haus",
    artikel: "das",
    silben: "Haus",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "🏠"
  },
  {
    id: "spielzeug-burg",
    wort: "Burg",
    artikel: "die",
    silben: "Burg",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "🏰"
  },
  {
    id: "spielzeug-kiste",
    wort: "Kiste",
    artikel: "die",
    silben: "Kis-te",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "📦"
  },
  {
    id: "spielzeug-klotz",
    wort: "Klotz",
    artikel: "der",
    silben: "Klotz",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "🧱"
  },
  {
    id: "spielzeug-schiene",
    wort: "Schiene",
    artikel: "die",
    silben: "Schie-ne",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "🛤️"
  },
  {
    id: "spielzeug-zug",
    wort: "Zug",
    artikel: "der",
    silben: "Zug",
    kategorie: "Bauen",
    thema: "Spielzeug",
    emoji: "🚂"
  },
  {
    id: "spielzeug-seil",
    wort: "Seil",
    artikel: "das",
    silben: "Seil",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🪢"
  },
  {
    id: "spielzeug-roller",
    wort: "Roller",
    artikel: "der",
    silben: "Rol-ler",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🛴"
  },
  {
    id: "spielzeug-fahrrad",
    wort: "Fahrrad",
    artikel: "das",
    silben: "Fahr-rad",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🚲"
  },
  {
    id: "spielzeug-schaukel",
    wort: "Schaukel",
    artikel: "die",
    silben: "Schau-kel",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🖼️"
  },
  {
    id: "spielzeug-rutsche",
    wort: "Rutsche",
    artikel: "die",
    silben: "Rut-sche",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🛝"
  },
  {
    id: "spielzeug-sand",
    wort: "Sand",
    artikel: "der",
    silben: "Sand",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🏖️"
  },
  {
    id: "spielzeug-eimer",
    wort: "Eimer",
    artikel: "der",
    silben: "Ei-mer",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🪣"
  },
  {
    id: "spielzeug-schaufel",
    wort: "Schaufel",
    artikel: "die",
    silben: "Schau-fel",
    kategorie: "Draußen spielen",
    thema: "Spielzeug",
    emoji: "🖼️"
  },
  {
    id: "spielzeug-kuscheltier",
    wort: "Kuscheltier",
    artikel: "das",
    silben: "Ku-schel-tier",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "🧸"
  },
  {
    id: "spielzeug-decke",
    wort: "Decke",
    artikel: "die",
    silben: "De-cke",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "🟨"
  },
  {
    id: "spielzeug-kissen",
    wort: "Kissen",
    artikel: "das",
    silben: "Kis-sen",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "🟦"
  },
  {
    id: "spielzeug-bett",
    wort: "Bett",
    artikel: "das",
    silben: "Bett",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "🛏️"
  },
  {
    id: "spielzeug-teddy-kuscheln",
    wort: "Teddy",
    artikel: "der",
    silben: "Ted-dy",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "🧸"
  },
  {
    id: "spielzeug-hoehle",
    wort: "Höhle",
    artikel: "die",
    silben: "Höh-le",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "🕳️"
  },
  {
    id: "spielzeug-zelt",
    wort: "Zelt",
    artikel: "das",
    silben: "Zelt",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "⛺"
  },
  {
    id: "spielzeug-lampe",
    wort: "Lampe",
    artikel: "die",
    silben: "Lam-pe",
    kategorie: "Kuscheln",
    thema: "Spielzeug",
    emoji: "💡"
  },
  {
    id: "menschen-mama",
    wort: "Mama",
    artikel: "die",
    silben: "Ma-ma",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "👩"
  },
  {
    id: "menschen-papa",
    wort: "Papa",
    artikel: "der",
    silben: "Pa-pa",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "👨"
  },
  {
    id: "menschen-kind",
    wort: "Kind",
    artikel: "das",
    silben: "Kind",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "🧒"
  },
  {
    id: "menschen-schwester",
    wort: "Schwester",
    artikel: "die",
    silben: "Schwes-ter",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "👧"
  },
  {
    id: "menschen-bruder",
    wort: "Bruder",
    artikel: "der",
    silben: "Bru-der",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "👦"
  },
  {
    id: "menschen-oma",
    wort: "Oma",
    artikel: "die",
    silben: "O-ma",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "👵"
  },
  {
    id: "menschen-opa",
    wort: "Opa",
    artikel: "der",
    silben: "O-pa",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "👴"
  },
  {
    id: "menschen-familie",
    wort: "Familie",
    artikel: "die",
    silben: "Fa-mi-lie",
    kategorie: "Familie",
    thema: "Familie und Menschen",
    emoji: "👨‍👩‍👧"
  },
  {
    id: "menschen-freund",
    wort: "Freund",
    artikel: "der",
    silben: "Freund",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "👦"
  },
  {
    id: "menschen-freundin",
    wort: "Freundin",
    artikel: "die",
    silben: "Freun-din",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "👧"
  },
  {
    id: "menschen-maedchen",
    wort: "Mädchen",
    artikel: "das",
    silben: "Mäd-chen",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "👧"
  },
  {
    id: "menschen-junge",
    wort: "Junge",
    artikel: "der",
    silben: "Jun-ge",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "👦"
  },
  {
    id: "menschen-gruppe",
    wort: "Gruppe",
    artikel: "die",
    silben: "Grup-pe",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "👥"
  },
  {
    id: "menschen-team",
    wort: "Team",
    artikel: "das",
    silben: "Team",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "👥"
  },
  {
    id: "menschen-klasse",
    wort: "Klasse",
    artikel: "die",
    silben: "Klas-se",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "🏫"
  },
  {
    id: "menschen-besuch",
    wort: "Besuch",
    artikel: "der",
    silben: "Be-such",
    kategorie: "Freunde",
    thema: "Familie und Menschen",
    emoji: "🚪"
  },
  {
    id: "menschen-kopf",
    wort: "Kopf",
    artikel: "der",
    silben: "Kopf",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "🙂"
  },
  {
    id: "menschen-auge",
    wort: "Auge",
    artikel: "das",
    silben: "Au-ge",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "👁️"
  },
  {
    id: "menschen-nase",
    wort: "Nase",
    artikel: "die",
    silben: "Na-se",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "👃"
  },
  {
    id: "menschen-mund",
    wort: "Mund",
    artikel: "der",
    silben: "Mund",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "👄"
  },
  {
    id: "menschen-ohr",
    wort: "Ohr",
    artikel: "das",
    silben: "Ohr",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "👂"
  },
  {
    id: "menschen-hand",
    wort: "Hand",
    artikel: "die",
    silben: "Hand",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "✋"
  },
  {
    id: "menschen-fuss",
    wort: "Fuß",
    artikel: "der",
    silben: "Fuß",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "🦶"
  },
  {
    id: "menschen-bein",
    wort: "Bein",
    artikel: "das",
    silben: "Bein",
    kategorie: "Körper",
    thema: "Familie und Menschen",
    emoji: "🦵"
  },
  {
    id: "menschen-hose",
    wort: "Hose",
    artikel: "die",
    silben: "Ho-se",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "👖"
  },
  {
    id: "menschen-kleid",
    wort: "Kleid",
    artikel: "das",
    silben: "Kleid",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "👗"
  },
  {
    id: "menschen-hemd",
    wort: "Hemd",
    artikel: "das",
    silben: "Hemd",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "👕"
  },
  {
    id: "menschen-jacke",
    wort: "Jacke",
    artikel: "die",
    silben: "Ja-cke",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "🧥"
  },
  {
    id: "menschen-muetze",
    wort: "Mütze",
    artikel: "die",
    silben: "Müt-ze",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "🧢"
  },
  {
    id: "menschen-schuh",
    wort: "Schuh",
    artikel: "der",
    silben: "Schuh",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "👟"
  },
  {
    id: "menschen-schal",
    wort: "Schal",
    artikel: "der",
    silben: "Schal",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "🧣"
  },
  {
    id: "menschen-rock",
    wort: "Rock",
    artikel: "der",
    silben: "Rock",
    kategorie: "Kleidung",
    thema: "Familie und Menschen",
    emoji: "👗"
  },
  {
    id: "zuhause-haus",
    wort: "Haus",
    artikel: "das",
    silben: "Haus",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "🏠"
  },
  {
    id: "zuhause-wohnung",
    wort: "Wohnung",
    artikel: "die",
    silben: "Woh-nung",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "🏢"
  },
  {
    id: "zuhause-zimmer",
    wort: "Zimmer",
    artikel: "das",
    silben: "Zim-mer",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "🚪"
  },
  {
    id: "zuhause-tuer",
    wort: "Tür",
    artikel: "die",
    silben: "Tür",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "🚪"
  },
  {
    id: "zuhause-fenster",
    wort: "Fenster",
    artikel: "das",
    silben: "Fens-ter",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "🪟"
  },
  {
    id: "zuhause-flur",
    wort: "Flur",
    artikel: "der",
    silben: "Flur",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "🚪"
  },
  {
    id: "zuhause-treppe",
    wort: "Treppe",
    artikel: "die",
    silben: "Trep-pe",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "↗️"
  },
  {
    id: "zuhause-garten",
    wort: "Garten",
    artikel: "der",
    silben: "Gar-ten",
    kategorie: "Zimmer",
    thema: "Zuhause",
    emoji: "🌼"
  },
  {
    id: "zuhause-tisch",
    wort: "Tisch",
    artikel: "der",
    silben: "Tisch",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "▭"
  },
  {
    id: "zuhause-stuhl",
    wort: "Stuhl",
    artikel: "der",
    silben: "Stuhl",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "🪑"
  },
  {
    id: "zuhause-bett",
    wort: "Bett",
    artikel: "das",
    silben: "Bett",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "🛏️"
  },
  {
    id: "zuhause-schrank",
    wort: "Schrank",
    artikel: "der",
    silben: "Schrank",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "🗄️"
  },
  {
    id: "zuhause-sofa",
    wort: "Sofa",
    artikel: "das",
    silben: "So-fa",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "🛋️"
  },
  {
    id: "zuhause-lampe",
    wort: "Lampe",
    artikel: "die",
    silben: "Lam-pe",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "💡"
  },
  {
    id: "zuhause-regal",
    wort: "Regal",
    artikel: "das",
    silben: "Re-gal",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "📚"
  },
  {
    id: "zuhause-teppich",
    wort: "Teppich",
    artikel: "der",
    silben: "Tep-pich",
    kategorie: "Möbel",
    thema: "Zuhause",
    emoji: "▭"
  },
  {
    id: "zuhause-kueche",
    wort: "Küche",
    artikel: "die",
    silben: "Kü-che",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "🏠"
  },
  {
    id: "zuhause-teller",
    wort: "Teller",
    artikel: "der",
    silben: "Tel-ler",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "🍽️"
  },
  {
    id: "zuhause-tasse",
    wort: "Tasse",
    artikel: "die",
    silben: "Tas-se",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "☕"
  },
  {
    id: "zuhause-loeffel",
    wort: "Löffel",
    artikel: "der",
    silben: "Löf-fel",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "🥄"
  },
  {
    id: "zuhause-gabel",
    wort: "Gabel",
    artikel: "die",
    silben: "Ga-bel",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "🍽️"
  },
  {
    id: "zuhause-messer",
    wort: "Messer",
    artikel: "das",
    silben: "Mes-ser",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "🔪"
  },
  {
    id: "zuhause-topf",
    wort: "Topf",
    artikel: "der",
    silben: "Topf",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "🥘"
  },
  {
    id: "zuhause-ofen",
    wort: "Ofen",
    artikel: "der",
    silben: "O-fen",
    kategorie: "Küche",
    thema: "Zuhause",
    emoji: "♨️"
  },
  {
    id: "zuhause-bad",
    wort: "Bad",
    artikel: "das",
    silben: "Bad",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🚿"
  },
  {
    id: "zuhause-dusche",
    wort: "Dusche",
    artikel: "die",
    silben: "Du-sche",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🚿"
  },
  {
    id: "zuhause-wanne",
    wort: "Wanne",
    artikel: "die",
    silben: "Wan-ne",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🛁"
  },
  {
    id: "zuhause-handtuch",
    wort: "Handtuch",
    artikel: "das",
    silben: "Hand-tuch",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🟦"
  },
  {
    id: "zuhause-seife",
    wort: "Seife",
    artikel: "die",
    silben: "Sei-fe",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🧼"
  },
  {
    id: "zuhause-buerste",
    wort: "Bürste",
    artikel: "die",
    silben: "Bürs-te",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🪥"
  },
  {
    id: "zuhause-kamm",
    wort: "Kamm",
    artikel: "der",
    silben: "Kamm",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🪮"
  },
  {
    id: "zuhause-spiegel",
    wort: "Spiegel",
    artikel: "der",
    silben: "Spie-gel",
    kategorie: "Bad",
    thema: "Zuhause",
    emoji: "🪞"
  },
  {
    id: "tun-laufen",
    wort: "laufen",
    artikel: "",
    silben: "lau-fen",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🏃"
  },
  {
    id: "tun-gehen",
    wort: "gehen",
    artikel: "",
    silben: "ge-hen",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🚶"
  },
  {
    id: "tun-springen",
    wort: "springen",
    artikel: "",
    silben: "sprin-gen",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🤸"
  },
  {
    id: "tun-huepfen",
    wort: "hüpfen",
    artikel: "",
    silben: "hüp-fen",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🦘"
  },
  {
    id: "tun-rennen",
    wort: "rennen",
    artikel: "",
    silben: "ren-nen",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🏃"
  },
  {
    id: "tun-klettern",
    wort: "klettern",
    artikel: "",
    silben: "klet-tern",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🧗"
  },
  {
    id: "tun-schwimmen",
    wort: "schwimmen",
    artikel: "",
    silben: "schwim-men",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🏊"
  },
  {
    id: "tun-fahren",
    wort: "fahren",
    artikel: "",
    silben: "fah-ren",
    kategorie: "Bewegung",
    thema: "Tunwörter",
    emoji: "🚲"
  },
  {
    id: "tun-lesen",
    wort: "lesen",
    artikel: "",
    silben: "le-sen",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "📖"
  },
  {
    id: "tun-schreiben",
    wort: "schreiben",
    artikel: "",
    silben: "schrei-ben",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "✏️"
  },
  {
    id: "tun-malen",
    wort: "malen",
    artikel: "",
    silben: "ma-len",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "🎨"
  },
  {
    id: "tun-rechnen",
    wort: "rechnen",
    artikel: "",
    silben: "rech-nen",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "🔢"
  },
  {
    id: "tun-hoeren",
    wort: "hören",
    artikel: "",
    silben: "hö-ren",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "👂"
  },
  {
    id: "tun-sprechen",
    wort: "sprechen",
    artikel: "",
    silben: "spre-chen",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "💬"
  },
  {
    id: "tun-fragen",
    wort: "fragen",
    artikel: "",
    silben: "fra-gen",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "❓"
  },
  {
    id: "tun-antworten",
    wort: "antworten",
    artikel: "",
    silben: "ant-wor-ten",
    kategorie: "Schule",
    thema: "Tunwörter",
    emoji: "✅"
  },
  {
    id: "tun-spielen",
    wort: "spielen",
    artikel: "",
    silben: "spie-len",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "🎲"
  },
  {
    id: "tun-bauen",
    wort: "bauen",
    artikel: "",
    silben: "bau-en",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "🧱"
  },
  {
    id: "tun-werfen",
    wort: "werfen",
    artikel: "",
    silben: "wer-fen",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "⚽"
  },
  {
    id: "tun-fangen",
    wort: "fangen",
    artikel: "",
    silben: "fan-gen",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "👐"
  },
  {
    id: "tun-suchen",
    wort: "suchen",
    artikel: "",
    silben: "su-chen",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "🔍"
  },
  {
    id: "tun-finden",
    wort: "finden",
    artikel: "",
    silben: "fin-den",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "⭐"
  },
  {
    id: "tun-lachen",
    wort: "lachen",
    artikel: "",
    silben: "la-chen",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "😄"
  },
  {
    id: "tun-singen",
    wort: "singen",
    artikel: "",
    silben: "sin-gen",
    kategorie: "Spielen",
    thema: "Tunwörter",
    emoji: "🎵"
  },
  {
    id: "tun-weinen",
    wort: "weinen",
    artikel: "",
    silben: "wei-nen",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "😢"
  },
  {
    id: "tun-laecheln",
    wort: "lächeln",
    artikel: "",
    silben: "lä-cheln",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "😊"
  },
  {
    id: "tun-helfen",
    wort: "helfen",
    artikel: "",
    silben: "hel-fen",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "🤝"
  },
  {
    id: "tun-troesten",
    wort: "trösten",
    artikel: "",
    silben: "trös-ten",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "🫶"
  },
  {
    id: "tun-streiten",
    wort: "streiten",
    artikel: "",
    silben: "strei-ten",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "⚡"
  },
  {
    id: "tun-entschuldigen",
    wort: "entschuldigen",
    artikel: "",
    silben: "ent-schul-di-gen",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "🙏"
  },
  {
    id: "tun-freuen",
    wort: "freuen",
    artikel: "",
    silben: "freu-en",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "😃"
  },
  {
    id: "tun-staunen",
    wort: "staunen",
    artikel: "",
    silben: "stau-nen",
    kategorie: "Gefühle zeigen",
    thema: "Tunwörter",
    emoji: "😮"
  },
  {
    id: "wie-schoen",
    wort: "schön",
    artikel: "",
    silben: "schön",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "🌸"
  },
  {
    id: "wie-bunt",
    wort: "bunt",
    artikel: "",
    silben: "bunt",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "🌈"
  },
  {
    id: "wie-hell",
    wort: "hell",
    artikel: "",
    silben: "hell",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "☀️"
  },
  {
    id: "wie-dunkel",
    wort: "dunkel",
    artikel: "",
    silben: "dun-kel",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "🌙"
  },
  {
    id: "wie-sauber",
    wort: "sauber",
    artikel: "",
    silben: "sau-ber",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "✨"
  },
  {
    id: "wie-schmutzig",
    wort: "schmutzig",
    artikel: "",
    silben: "schmut-zig",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "🟤"
  },
  {
    id: "wie-rund",
    wort: "rund",
    artikel: "",
    silben: "rund",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "⚪"
  },
  {
    id: "wie-eckig",
    wort: "eckig",
    artikel: "",
    silben: "e-ckig",
    kategorie: "Aussehen",
    thema: "Wiewörter",
    emoji: "◼️"
  },
  {
    id: "wie-gross",
    wort: "groß",
    artikel: "",
    silben: "groß",
    kategorie: "Größe",
    thema: "Wiewörter",
    emoji: "🦒"
  },
  {
    id: "wie-klein",
    wort: "klein",
    artikel: "",
    silben: "klein",
    kategorie: "Größe",
    thema: "Wiewörter",
    emoji: "🐭"
  },
  {
    id: "wie-lang",
    wort: "lang",
    artikel: "",
    silben: "lang",
    kategorie: "Größe",
    thema: "Wiewörter",
    emoji: "📏"
  },
  {
    id: "wie-kurz",
    wort: "kurz",
    artikel: "",
    silben: "kurz",
    kategorie: "Größe",
    thema: "Wiewörter",
    emoji: "✂️"
  },
  {
    id: "wie-dick",
    wort: "dick",
    artikel: "",
    silben: "dick",
    kategorie: "Größe",
    thema: "Wiewörter",
    emoji: "🟤"
  },
  {
    id: "wie-duenn",
    wort: "dünn",
    artikel: "",
    silben: "dünn",
    kategorie: "Größe",
    thema: "Wiewörter",
    emoji: "➖"
  },
  {
    id: "wie-hoch",
    wort: "hoch",
    artikel: "",
    silben: "hoch",
    kategorie: "Größe",
    thema: "Wiewörter",
    emoji: "⬆️"
  },
  {
    id: "wie-unten",
    wort: "unten",
    artikel: "",
    silben: "un-ten",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "⬇️"
  },
  {
    id: "wie-froh",
    wort: "froh",
    artikel: "",
    silben: "froh",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "😊"
  },
  {
    id: "wie-traurig",
    wort: "traurig",
    artikel: "",
    silben: "trau-rig",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "😢"
  },
  {
    id: "wie-wuetend",
    wort: "wütend",
    artikel: "",
    silben: "wü-tend",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "😡"
  },
  {
    id: "wie-mutig",
    wort: "mutig",
    artikel: "",
    silben: "mu-tig",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "🦁"
  },
  {
    id: "wie-ruhig",
    wort: "ruhig",
    artikel: "",
    silben: "ru-hig",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "😌"
  },
  {
    id: "wie-laut",
    wort: "laut",
    artikel: "",
    silben: "laut",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "🔊"
  },
  {
    id: "wie-leise",
    wort: "leise",
    artikel: "",
    silben: "lei-se",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "🤫"
  },
  {
    id: "wie-muede",
    wort: "müde",
    artikel: "",
    silben: "mü-de",
    kategorie: "Gefühl",
    thema: "Wiewörter",
    emoji: "😴"
  },
  {
    id: "wie-schnell",
    wort: "schnell",
    artikel: "",
    silben: "schnell",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "🏃"
  },
  {
    id: "wie-langsam",
    wort: "langsam",
    artikel: "",
    silben: "lang-sam",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "🐌"
  },
  {
    id: "wie-stark",
    wort: "stark",
    artikel: "",
    silben: "stark",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "💪"
  },
  {
    id: "wie-schwach",
    wort: "schwach",
    artikel: "",
    silben: "schwach",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "⬇️"
  },
  {
    id: "wie-wild",
    wort: "wild",
    artikel: "",
    silben: "wild",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "🐯"
  },
  {
    id: "wie-vorsichtig",
    wort: "vorsichtig",
    artikel: "",
    silben: "vor-sich-tig",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "👣"
  },
  {
    id: "wie-leicht",
    wort: "leicht",
    artikel: "",
    silben: "leicht",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "🪶"
  },
  {
    id: "wie-schwer",
    wort: "schwer",
    artikel: "",
    silben: "schwer",
    kategorie: "Bewegung",
    thema: "Wiewörter",
    emoji: "🪨"
  },
  {
    id: "gefuehl-froh",
    wort: "froh",
    artikel: "",
    silben: "froh",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "😊"
  },
  {
    id: "gefuehl-gluecklich",
    wort: "glücklich",
    artikel: "",
    silben: "glück-lich",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "😄"
  },
  {
    id: "gefuehl-stolz",
    wort: "stolz",
    artikel: "",
    silben: "stolz",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "😌"
  },
  {
    id: "gefuehl-mutig",
    wort: "mutig",
    artikel: "",
    silben: "mu-tig",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "🦁"
  },
  {
    id: "gefuehl-ruhig",
    wort: "ruhig",
    artikel: "",
    silben: "ru-hig",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "😌"
  },
  {
    id: "gefuehl-freundlich",
    wort: "freundlich",
    artikel: "",
    silben: "freund-lich",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "🙂"
  },
  {
    id: "gefuehl-lustig",
    wort: "lustig",
    artikel: "",
    silben: "lus-tig",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "😆"
  },
  {
    id: "gefuehl-zufrieden",
    wort: "zufrieden",
    artikel: "",
    silben: "zu-frie-den",
    kategorie: "Gute Gefühle",
    thema: "Gefühle",
    emoji: "😊"
  },
  {
    id: "gefuehl-traurig",
    wort: "traurig",
    artikel: "",
    silben: "trau-rig",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "😢"
  },
  {
    id: "gefuehl-wuetend",
    wort: "wütend",
    artikel: "",
    silben: "wü-tend",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "😡"
  },
  {
    id: "gefuehl-sauer",
    wort: "sauer",
    artikel: "",
    silben: "sau-er",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "😠"
  },
  {
    id: "gefuehl-muede",
    wort: "müde",
    artikel: "",
    silben: "mü-de",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "😴"
  },
  {
    id: "gefuehl-allein",
    wort: "allein",
    artikel: "",
    silben: "al-lein",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "🧍"
  },
  {
    id: "gefuehl-unsicher",
    wort: "unsicher",
    artikel: "",
    silben: "un-si-cher",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "😟"
  },
  {
    id: "gefuehl-enttaeuscht",
    wort: "enttäuscht",
    artikel: "",
    silben: "ent-täuscht",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "😞"
  },
  {
    id: "gefuehl-genervt",
    wort: "genervt",
    artikel: "",
    silben: "ge-nervt",
    kategorie: "Schlechte Gefühle",
    thema: "Gefühle",
    emoji: "😤"
  },
  {
    id: "gefuehl-freund",
    wort: "Freund",
    artikel: "der",
    silben: "Freund",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "👦"
  },
  {
    id: "gefuehl-freundin",
    wort: "Freundin",
    artikel: "die",
    silben: "Freun-din",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "👧"
  },
  {
    id: "gefuehl-streit",
    wort: "Streit",
    artikel: "der",
    silben: "Streit",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "⚡"
  },
  {
    id: "gefuehl-entschuldigung",
    wort: "Entschuldigung",
    artikel: "die",
    silben: "Ent-schul-di-gung",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "🙏"
  },
  {
    id: "gefuehl-gespraech",
    wort: "Gespräch",
    artikel: "das",
    silben: "Ge-spräch",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "💬"
  },
  {
    id: "gefuehl-hilfe",
    wort: "Hilfe",
    artikel: "die",
    silben: "Hil-fe",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "🤝"
  },
  {
    id: "gefuehl-loesung",
    wort: "Lösung",
    artikel: "die",
    silben: "Lö-sung",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "💡"
  },
  {
    id: "gefuehl-frieden",
    wort: "Frieden",
    artikel: "der",
    silben: "Frie-den",
    kategorie: "Miteinander",
    thema: "Gefühle",
    emoji: "🕊️"
  },
  {
    id: "gefuehl-angst",
    wort: "Angst",
    artikel: "die",
    silben: "Angst",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "😨"
  },
  {
    id: "gefuehl-mut",
    wort: "Mut",
    artikel: "der",
    silben: "Mut",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "💪"
  },
  {
    id: "gefuehl-sorge",
    wort: "Sorge",
    artikel: "die",
    silben: "Sor-ge",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "😟"
  },
  {
    id: "gefuehl-freude",
    wort: "Freude",
    artikel: "die",
    silben: "Freu-de",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "😃"
  },
  {
    id: "gefuehl-traene",
    wort: "Träne",
    artikel: "die",
    silben: "Trä-ne",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "💧"
  },
  {
    id: "gefuehl-lachen",
    wort: "Lachen",
    artikel: "das",
    silben: "La-chen",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "😂"
  },
  {
    id: "gefuehl-herz",
    wort: "Herz",
    artikel: "das",
    silben: "Herz",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "❤️"
  },
  {
    id: "gefuehl-hoffnung",
    wort: "Hoffnung",
    artikel: "die",
    silben: "Hoff-nung",
    kategorie: "Mut und Angst",
    thema: "Gefühle",
    emoji: "🌈"
  }
];
