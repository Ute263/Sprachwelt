# Tonis Sprachwelt

Deutsch-Lernportal der Antonius Grundschule Kevelaer.

Die App ist vollständig statisch und läuft ohne Anmeldung, Datenbank oder externe Frameworks. Nach dem Laden funktioniert sie weiter, auch wenn keine Internetverbindung besteht.

## Bereiche

- `Wortforscher`: Wörterbuch, Rechtschreibung und Wort des Tages.
- `Wörterbuch`: Themenkacheln mit Suche, Vorlesen, Favoriten und Grundwortschatz-Label.
- `Schreibwerkstatt`: Digitale Aufgabenkarten mit vorgeschalteten Übersichten, Denkfragen, Satzanfängen, Worthelfern und Schreibtipps.
- `Geschichtenwürfel`: Würfelt aus `Wer?`, `Wo?` und `Was passiert?` eine neue Schreibidee.
- `Lesewelt`: Kurze Lesetexte und Lesekarten mit Aufgaben zum genauen Lesen, Textverständnis, Vorlesen und Lies-und-male-Aufgaben.

## Lokal öffnen

Öffne die Datei `index.html` direkt im Browser.

Auf dem Mac geht das zum Beispiel so:

1. Öffne den Ordner `Woerterbuch`.
2. Doppelklicke auf `index.html`.

## GitHub Pages aktivieren

1. Lege ein neues Repository auf GitHub an.
2. Lade diese Dateien und Ordner in das Repository hoch:
   - `index.html`
   - `style.css`
   - `grundwortschatz-nrw.js`
   - `words.js`
   - `schreibkarten.js`
   - `lesetexte.js`
   - `app.js`
   - `manifest.json`
   - `service-worker.js`
   - `assets/`
   - `README.md`
3. Öffne in GitHub die Einstellungen des Repositorys.
4. Gehe zu `Pages`.
5. Wähle als Quelle den Branch `main` und den Ordner `/root`.
6. Speichere die Einstellung.

Nach kurzer Zeit zeigt GitHub den Link zur App an.

## Schreibwerkstatt

Tonis Schreibwerkstatt enthält digitale Aufgabenkarten mit vorgeschalteten Übersichtsseiten. Die Kinder wählen zuerst einen Bereich, dann eine nummerierte Aufgabe und schreiben weiterhin handschriftlich ins Heft, auf Arbeitsblätter oder in Mini-Bücher.

Die Schreibwerkstatt hat fünf Bereiche:

- `Schreibaufgaben`
- `Mini-Bücher`
- `Geschichtenideen`
- `Starke Schreiber`
- `Geschichtenbilder`

Der Bereich `Geschichtenbilder` ist vorbereitet. Spätere Wimmelbilder werden als PNG-Dateien im Ordner `assets/geschichtenbilder/` abgelegt. Solange noch kein Bild vorhanden ist, zeigt die App einen Platzhalter.

## Wortforscher

Der Wortforscher bündelt drei Bereiche:

- `Wörterbuch`
- `Rechtschreibung`
- `Wort des Tages`

Die Kinder lesen, untersuchen Wörter und bearbeiten Aufgaben weiterhin auf Papier. Es werden keine Schülertexte eingegeben oder gespeichert.

Die Datei `grundwortschatz-nrw.js` enthält vorbereitete Wörter mit Silben, Wortart, FRESCH-Strategien und Themen. Wörter aus dieser Datei erscheinen im Wörterbuch mit dem Label `Grundwortschatz NRW`. Der Bereich `Wort des Tages` nutzt Wörter aus dieser Datei und verbindet sie mit den FRESCH-Strategien.

Die FRESCH-Strategien bleiben als Symbole und Hilfen im Bereich `Wort des Tages` erhalten:

- `Schwingen`
- `Verlängern`
- `Ableiten`
- `Merken`
- `Wortbausteine`
- `Groß- und Kleinschreibung`
- `Nachschlagen`

Der Bereich `Wort des Tages` arbeitet als tägliches Sprachritual. Ein Klick auf `Neues Wort` erzeugt ein zufälliges Grundwortschatzwort. Die Seite zeigt drei große analoge Aufgabenkarten: Wort untersuchen, mit dem Wort arbeiten und verwandte Wörter finden. Die Kinder entscheiden die FRESCH-Methode, Wortart und schwierige Stelle selbst im Heft oder auf einem Arbeitsblatt.

Die verbindlichen FRESCH-Symbole liegen im Ordner `assets/fresch/`:

- `schwingen.svg`
- `verlaengern.svg`
- `ableiten.svg`
- `merken.svg`
- `wortbausteine.svg`
- `gross-klein.svg`
- `nachschlagen.svg`

## Lesewelt

Tonis Lesewelt enthält kurze Lesetexte und Lesekarten. Die Kinder lesen am iPad oder auf Papier und bearbeiten die Aufgaben handschriftlich. Es werden keine Schülertexte eingegeben oder gespeichert.

Die Lesewelt hat vier Bereiche:

- `Lies und male`
- `Lesedetektiv`
- `Texte verstehen`
- `Vorlesen`

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
- `bild` ist optional und verweist auf ein lokales Bild, zum Beispiel `assets/words/tisch.png`.

## Link als QR-Code für iPads nutzen

1. Öffne die veröffentlichte GitHub-Pages-Adresse im Browser.
2. Kopiere den Link.
3. Erstelle daraus mit einem QR-Code-Werkzeug einen QR-Code.
4. Drucke den QR-Code aus oder zeige ihn am Bildschirm.
5. Die Kinder scannen den Code mit dem iPad und öffnen die App.

Tipp: Einmal geladen, bleiben Favoriten auf dem jeweiligen iPad gespeichert.

## Rechte und Nutzung

© 2026 Ute Holzschneider-Riedl. Alle Rechte vorbehalten.

Diese App und die enthaltenen Aufgaben, Texte, Strukturen, Karten und Materialien wurden für die private schulische Nutzung erstellt. Eine Weitergabe, Veröffentlichung, Veränderung oder kommerzielle Nutzung durch Dritte ist nur mit ausdrücklicher Erlaubnis gestattet.
