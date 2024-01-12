# BasisQualifikation-IT

## Übungen

Die Übungen liegen als [Markdown-Dateien](https://www.markdownguide.org/cheat-sheet/) in diesem Verzeichnis und können dort bearbeitet werden.

```
src/uebungen
```

Jede Datei benötigt einige **Meta-Informationen**, die im [Frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/) format angegeben werden.

- **layout**: Legt den Rahmen der generierten HTML-Seite fest (sollte immer `layout.njk`)
- **tags**: Der Tag `uebung` fügt dieses Dokument der Liste der Übungen auf der Startseite zu.
- **title**: Der **individuelle Name** dieses Dokument, der zur Anzeige genutzt wird

## Veröffentlichung

Aus den Markdown-Dateien können mit dem folgenden Befehl HTML-Dateien inkl. Rahmen und etwas CSS Styling erzeugt werden:

```
npm run build
```

Die erzeugten Dateien werden in diesem Verzeichnis abgelegt und können von dort durch einen Webserver veröffentlicht werden:

```
_site
```

```

```
