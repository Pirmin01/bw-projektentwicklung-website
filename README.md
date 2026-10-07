# BW Projektentwicklung — Website

Firmen-Website für **bwprojektentwicklung.de**. Keine Datenbank, kein Login, keine Cookies.
Statisch ausgeliefert, dazu **eine** Server-Funktion für das Kontaktformular (`api/kontakt.ts`).

Abgegrenzt von:
- **Projektentwicklungs-Tool** (internes Werkzeug mit Datenbank/Login, eigenes Repo/Projekt).
- **BurgerHaus Invest** (`burgerhaus-invest.de`) — Exposé-Marktplatz, eigenes Repo/Projekt.

Zuordnung der Bausteine: `Pirmin's Brain/03 Unternehmen/Digitale Struktur (Websites & Tools).md`.

## Stack

- Vite 8 + React 19 + TypeScript, Tailwind CSS 4, react-router-dom
- Schriften selbst gehostet (`@fontsource/work-sans`, `@fontsource/montserrat`), kein Google-Fonts-CDN
- Design-Tokens aus dem Projektentwicklungs-Tool (Petrol `#1f6f76`, Anthrazit `#262626`, Beige `#f4f2ef`)
- Fotos in `public/bilder/` (je 800/1600 px, Titelbild zusätzlich 2400 px); Liste und Alt-Texte in `src/lib/bilder.ts`

## Kontaktformular

`POST /api/kontakt` prüft die Eingaben (Pflichtfelder, Honigtopf, Mindestzeit, Herkunft) und schickt sie
über **Resend** als E-Mail an `info@bwprojektentwicklung.de`. Es wird nichts gespeichert.

Umgebungsvariablen (Vercel → Project → Settings → Environment Variables, Production):

| Name | Pflicht | Zweck |
|---|---|---|
| `RESEND_API_KEY` | ja | Ohne ihn zeigt das Formular „nicht erreichbar“ + E-Mail-Adresse (kein Datenverlust, aber nichts geht raus) |
| `KONTAKT_ABSENDER` | nein | Standard `BW Projektentwicklung <info@bwprojektentwicklung.de>` — die Domain muss bei Resend verifiziert sein |
| `KONTAKT_EMPFAENGER` | nein | Standard `info@bwprojektentwicklung.de` |

## Befehle

```bash
npm install
npm run dev      # http://localhost:5173 (ohne /api — das Formular zeigt dort den Ausweichhinweis)
npm run build    # Typecheck + Produktions-Build nach dist/
npm run lint
```

## Stand der Rechtstexte

Impressum und Datenschutzerklärung sind als „Unternehmen im Aufbau“ formuliert (neutraler Hinweis, keine
gelben Platzhalter). **Sobald die Gründung steht, hier eintragen** (`src/pages/Impressum.tsx`, Abschnitt
„Diensteanbieter“, „Registereintrag“, „Umsatzsteuer-Identifikationsnummer“; `src/pages/Datenschutz.tsx`,
Abschnitt 1 „Verantwortlicher“) und den Hinweiskasten „Unternehmen im Aufbau“ entfernen:

- Rechtsform, ladungsfähige Anschrift (nach § 5 DDG Pflicht), Registergericht und -nummer, USt-IdNr.
- Telefonnummer (optional)

## Offen vor dem Umschalten der Domain `bwprojektentwicklung.de`

Die Domain zeigt derzeit noch auf einen GoDaddy-Websitebaukasten; E-Mail läuft über Microsoft 365 (MX-Einträge
dürfen beim Umstellen **nicht** angefasst werden).

- `RESEND_API_KEY` setzen und `bwprojektentwicklung.de` bei Resend verifizieren (DNS-Einträge)
- Auftragsverarbeitung mit Resend prüfen und die Garantien für die USA-Übermittlung in Abschnitt 5 der
  Datenschutzerklärung benennen
- Rechtliche Gegenprüfung von Impressum, Datenschutz und der Texte zur Bauausführung („Sie entscheiden, wer baut“)
- Bildrechte/Bildnachweis der Fotos klären (`BILDNACHWEIS` in `src/lib/bilder.ts`)
