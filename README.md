# Tonis Wörterbuch

Wörterbuch der Antonius Grundschule Kevelaer.

Eine kleine statische Web-App für Kinder der 1. Klasse mit mehreren Wörterbuch-Bänden. Sie läuft ohne Anmeldung, ohne Datenbank und ohne externe Frameworks. Nach dem Laden funktioniert sie auch ohne Internetverbindung weiter.

Aktuell enthalten:

- `Tiere`
- `Schule`
- `Sommer und Ferien`
- `Essen und Trinken`
- `Spielzeug`
- `Familie und Menschen`
- `Zuhause`
- `Tunwörter`
- `Wiewörter`

Die Suche findet Wörter über alle enthaltenen Bände hinweg. Favoriten werden ebenfalls bandübergreifend auf dem jeweiligen Gerät gespeichert.

## Lokal öffnen

Öffne die Datei `index.html` direkt im Browser.

Auf dem Mac geht das zum Beispiel so:

1. Öffne den Ordner `Woerterbuch`.
2. Doppelklicke auf `index.html`.

## GitHub Pages aktivieren

1. Lege ein neues Repository auf GitHub an.
2. Lade diese Dateien in das Repository hoch:
   - `index.html`
   - `style.css`
   - `words.js`
   - `app.js`
   - `assets/toni.png`
   - `README.md`
3. Öffne in GitHub die Einstellungen des Repositorys.
4. Gehe zu `Pages`.
5. Wähle als Quelle den Branch `main` und den Ordner `/root`.
6. Speichere die Einstellung.

Nach kurzer Zeit zeigt GitHub den Link zur App an.

## Neue Wörter ergänzen

Alle Wörter stehen in `words.js`. Ein neues Wort wird als weiterer Eintrag in die Liste `WORDS` geschrieben.

Beispiel:

```js
{
  id: "hund",
  wort: "Hund",
  artikel: "der",
  silben: "Hund",
  kategorie: "Haustiere",
  thema: "Tiere",
  emoji: "🐶"
}
```

Wichtig:

- `id` muss eindeutig sein.
- `thema` steuert den Band, zum Beispiel `Tiere`.
- `kategorie` steuert die Untergruppe, zum Beispiel `Haustiere`.
- `emoji` kann durch ein anderes kindgerechtes Emoji ersetzt werden.

## Link als QR-Code für iPads nutzen

1. Öffne die veröffentlichte GitHub-Pages-Adresse im Browser.
2. Kopiere den Link.
3. Erstelle daraus mit einem QR-Code-Werkzeug einen QR-Code.
4. Drucke den QR-Code aus oder zeige ihn am Bildschirm.
5. Die Kinder scannen den Code mit dem iPad und öffnen die App.

Tipp: Einmal geladen, bleiben Favoriten auf dem jeweiligen iPad gespeichert.
