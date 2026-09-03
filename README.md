# BW Projektentwicklung — Website

Reine Firmen-Website für **bwprojektentwicklung.de** (Domain noch nicht registriert).
Kein Login, keine Datenbank — vollständig statisch.

Abgegrenzt von:
- **Projektentwicklungs-Tool** (`burger-projektentwicklung`) — internes Werkzeug mit Datenbank/Login, eigenes Repo.
- **BurgerHaus Invest** (`burgerhaus-invest.de`) — öffentlicher Exposé-Marktplatz mit eigener Datenbank, eigenes Repo.

Details zur Trennung: `Pirmin's Brain/03 Geschäfte/Digitale Struktur (Websites & Tools).md`.

## Stack

- Vite 8 + React 19 + TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`, kein `postcss.config`)
- react-router-dom (Client-Routing, SPA-Rewrite in `vercel.json` für `/impressum`, `/datenschutz`)
- Schriften selbst gehostet über `@fontsource/work-sans` + `@fontsource/montserrat` (kein Google-Fonts-CDN)

Design-Tokens 1:1 aus dem Projektentwicklungs-Tool übernommen (heutiger Petrol-Stand:
`#1f6f76` Akzent, `#262626` Anthrazit für Haupt-Buttons, `#f4f2ef` Beige nur für
Module/Felder, nie die ganze Fläche). Quelle: `src/styles.css` im Tool-Repo.

## Befehle

```bash
npm install
npm run dev      # lokal unter http://localhost:5173
npm run build    # Typecheck + Produktions-Build nach dist/
npm run lint      # oxlint
```

## Offene Punkte vor dem Go-Live

Im Code klar mit gelb hinterlegten `TODO`-Markierungen versehen (`Impressum.tsx`,
`Datenschutz.tsx`) — nicht raten, sondern von Pirmin/Pius bestätigen lassen:

- Rechtsform, Anschrift, Registereintrag (oder „in Gründung"), USt-IdNr., Telefon
- Echte Kontakt-E-Mail statt Platzhalter `kontakt@bwprojektentwicklung.de`
- Rechtliche Gegenprüfung von Impressum & Datenschutzerklärung
- Welches Logo (falls eines der beiden vorhandenen) für diese Website verwendet wird
- Konkrete Projekte/Referenzen mit Bildern für den Abschnitt „Projekte"

Danach: GitHub-Repo anlegen, Vercel-Projekt verbinden, Domain `bwprojektentwicklung.de`
(Registrierung durch Pirmin über GoDaddy) auf das Vercel-Projekt zeigen lassen.
