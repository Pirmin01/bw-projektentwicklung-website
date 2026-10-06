import { useState, type ReactNode } from "react";
import { KontaktFormular } from "../components/KontaktFormular";
import { Lightbox } from "../components/Lightbox";
import { Reveal } from "../components/Reveal";
import { BILDNACHWEIS, GALERIE, src, srcSet } from "../lib/bilder";

const MAIL = "info@bwprojektentwicklung.de";

/* ---------- kleine Bausteine ---------- */

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Ueberschrift({
  kicker,
  titel,
  text,
  hell = false,
}: {
  kicker: string;
  titel: string;
  text?: string;
  hell?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-semibold tracking-wide ${hell ? "text-white/70" : "text-brand-petrol"}`}>
        {kicker}
      </p>
      <h2 className={`mt-2 text-3xl leading-tight sm:text-4xl ${hell ? "text-white!" : ""}`}>{titel}</h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${hell ? "text-white/80" : "text-brand-muted-fg"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function Haken({ children, hell = false }: { children: ReactNode; hell?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${hell ? "bg-white/15 text-white" : "bg-brand-petrol/10 text-brand-petrol"}`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="m2.5 6.2 2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

/* ---------- Inhalte ---------- */

const ECKDATEN = [
  { titel: "Wohnen & Gewerbe", text: "Beide Nutzungen aus einer Hand" },
  { titel: "Neubau & Bestand", text: "Vom Grundstück bis zum Umbau" },
  { titel: "Freiburg & Umgebung", text: "Regional verwurzelt" },
  { titel: "Inhabergeführt", text: "Direkte Ansprechpartner" },
];

const LEISTUNGEN = [
  {
    titel: "Grundstücksentwicklung",
    text: "Wir prüfen Baurecht, Lage und Potenzial und entwickeln daraus ein tragfähiges Konzept – von der Machbarkeitsprüfung bis zur baureifen Planung.",
    icon: (
      <Icon>
        <path d="M3 21h20M5 21V10l8-6 8 6v11" />
        <path d="M10 21v-6h6v6" />
      </Icon>
    ),
  },
  {
    titel: "Wohnungsbau",
    text: "Mehrfamilienhäuser und Wohnanlagen mit Grundrissen, die zu den Menschen passen, die dort wohnen – und mit Mieten und Preisen, die sich am Markt tragen.",
    icon: (
      <Icon>
        <rect x="5" y="3" width="16" height="20" rx="1.5" />
        <path d="M9 8h2M15 8h2M9 12h2M15 12h2M9 16h2M15 16h2" />
      </Icon>
    ),
  },
  {
    titel: "Bestandsentwicklung",
    text: "Sanieren, modernisieren, aufstocken oder aufteilen: Wir prüfen, welcher Weg bei einem Bestandsobjekt den größten Wert schafft – und wann ein Neubau die bessere Lösung ist.",
    icon: (
      <Icon>
        <path d="M4 22V9l9-6 9 6v13" />
        <path d="M9 22v-7h8v7M13 3v3" />
        <path d="m18 5 3-2" />
      </Icon>
    ),
  },
  {
    titel: "Gewerbeimmobilien",
    text: "Auch Gewerbeflächen und gemischt genutzte Objekte entwickeln wir. Wir bewerten Standort, Nutzung und Wirtschaftlichkeit und erarbeiten passende Konzepte.",
    icon: (
      <Icon>
        <path d="M3 22h20M6 22V8h9v14M15 22V12h5v10" />
        <path d="M9 12h3M9 16h3" />
      </Icon>
    ),
  },
];

const SCHRITTE = [
  {
    titel: "Erstgespräch",
    text: "Sie schildern uns Ihr Grundstück, Ihre Immobilie oder Ihre Projektidee. Wir hören zu und klären die wichtigsten Fragen.",
  },
  {
    titel: "Prüfung",
    text: "Baurecht, Lage, Umgebung und Wirtschaftlichkeit: Wir bereiten die Fakten auf, bevor Entscheidungen fallen.",
  },
  {
    titel: "Konzept & Planung",
    text: "Wir entwickeln ein Konzept, stimmen Planung und Genehmigung ab und bringen das Projekt bis zur Baureife.",
  },
  {
    titel: "Umsetzung",
    text: "Gebaut wird mit dem Bauunternehmen Ihrer Wahl. Wir begleiten die Abstimmung zwischen Planung und Ausführung.",
  },
];

const SUCHPROFIL = [
  "Baugrundstücke und Entwicklungsflächen",
  "Bestandsobjekte mit Potenzial",
  "Mehrfamilienhäuser und Wohnanlagen",
  "Gewerbeobjekte und gemischt genutzte Immobilien",
];

const GRUNDSAETZE = [
  {
    titel: "Freie Wahl",
    text: "Grundstück und Bauausführung sind getrennte Entscheidungen. Sie können Angebote mehrerer Unternehmen einholen und in Ruhe vergleichen.",
  },
  {
    titel: "Netzwerk der Region",
    text: "Wir arbeiten mit Generalunternehmern, Architekten und Fachplanern aus Südbaden zusammen und stimmen Planung und Ausführung auf Ihr Vorhaben ab.",
  },
  {
    titel: "Empfehlung auf Wunsch",
    text: "Wenn Sie möchten, stellen wir den Kontakt zu Bauunternehmen her – darunter das Familienunternehmen S. Burger Bauunternehmen aus Elzach. Eine Empfehlung ist ein Angebot, keine Bedingung.",
  },
];

const WERTE = [
  { titel: "Sorgfältig statt schnell", text: "Jedes Vorhaben prüfen wir einzeln auf Lage, Baurecht und Marktpotenzial." },
  { titel: "Transparent", text: "Zahlen, Annahmen und nächste Schritte legen wir offen – verständlich und nachvollziehbar." },
  { titel: "Regional", text: "Wir kennen Freiburg, den Breisgau und die Gemeinden rundherum – und die Menschen dort." },
];

/* ---------- Seite ---------- */

export function Home() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [vorwahl, setVorwahl] = useState<string | undefined>(undefined);

  function zumKontakt(anliegen: string) {
    setVorwahl(anliegen);
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Titelbild */}
      <section className="relative isolate overflow-hidden bg-brand-charcoal">
        <img
          src={src("haus-hang-garten", 1600)}
          srcSet={srcSet("haus-hang-garten", [800, 1600, 2400])}
          sizes="100vw"
          alt="Modernes Einfamilienhaus mit Solardach, Terrasse und Naturteich in Südbaden"
          fetchPriority="high"
          className="hero-bild absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-charcoal/85 via-brand-charcoal/55 to-brand-charcoal/10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-charcoal/60 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 pb-40 pt-24 sm:pb-44">
          <p className="hero-einblenden text-sm font-semibold tracking-wide text-white/80">
            Projektentwicklung · Freiburg &amp; Umgebung
          </p>
          <h1 className="hero-einblenden mt-4 max-w-3xl text-4xl leading-[1.1] text-white! sm:text-6xl" style={{ animationDelay: "80ms" }}>
            Aus Grundstücken wird Wohnraum.
          </h1>
          <p className="hero-einblenden mt-6 max-w-xl text-lg leading-relaxed text-white/85" style={{ animationDelay: "160ms" }}>
            BW Projektentwicklung entwickelt Wohn- und Gewerbeimmobilien in Freiburg und Umgebung –
            von der ersten Standortprüfung bis zur baureifen Planung.
          </p>
          <div className="hero-einblenden mt-10 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
            <button
              type="button"
              onClick={() => zumKontakt("projekt")}
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-brand-charcoal shadow-karte transition hover:bg-brand-surface active:scale-[0.98]"
            >
              Vorhaben besprechen
            </button>
            <a
              href="#leistungen"
              className="rounded-md border border-white/50 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </section>

      {/* Eckdaten, überlappt das Titelbild */}
      <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-6 sm:-mt-24">
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-brand-border bg-white shadow-karte lg:grid-cols-4">
          {ECKDATEN.map((e, i) => (
            <div
              key={e.titel}
              className={`p-5 sm:p-7 ${i % 2 === 1 ? "border-l border-brand-border" : ""} ${i > 1 ? "border-t border-brand-border lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-brand-border" : ""}`}
            >
              <dt className="font-[family-name:var(--font-heading)] text-base font-semibold text-brand-charcoal sm:text-lg">
                {e.titel}
              </dt>
              <dd className="mt-1 text-sm text-brand-muted-fg">{e.text}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Leistungen */}
      <section id="leistungen" className="scroll-mt-24 bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Ueberschrift
              kicker="Leistungen"
              titel="Was wir für Sie entwickeln"
              text="Wohnen und Gewerbe, Neubau und Bestand: Wir begleiten Vorhaben von der ersten Idee bis zur Baureife."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEISTUNGEN.map((l, i) => (
              <Reveal key={l.titel} delay={i * 70} className="h-full">
                <article className="group h-full rounded-xl border border-brand-border bg-white p-7 shadow-karte transition duration-300 hover:-translate-y-1 hover:border-brand-petrol/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-petrol/10 text-brand-petrol transition-colors group-hover:bg-brand-petrol group-hover:text-white">
                    {l.icon}
                  </div>
                  <h3 className="mt-6 text-lg">{l.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted-fg">{l.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eigentümer: Klarheit */}
      <section id="eigentuemer" className="scroll-mt-24 bg-brand-surface py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-5 gap-4">
              <img
                src={src("baustart", 800)}
                srcSet={srcSet("baustart")}
                sizes="(min-width: 1024px) 30vw, 60vw"
                alt="Baugrube mit Bagger auf einem Grundstück zwischen Wohnhäusern"
                loading="lazy"
                className="col-span-3 h-full min-h-[22rem] w-full rounded-xl object-cover shadow-karte"
              />
              <img
                src={src("bestand", 800)}
                srcSet={srcSet("bestand")}
                sizes="(min-width: 1024px) 20vw, 40vw"
                alt="Gelbes Bestandsgebäude mit Fensterläden"
                loading="lazy"
                className="col-span-2 mt-12 h-[20rem] w-full rounded-xl object-cover shadow-karte"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Ueberschrift
              kicker="Für Eigentümer"
              titel="Klarheit, bevor Sie entscheiden"
              text="Sie besitzen ein Grundstück oder eine Immobilie und möchten wissen, was darauf möglich ist? Wir klären Bebaubarkeit, Potenzial und Wirtschaftlichkeit – nachvollziehbar aufbereitet und unabhängig davon, ob Sie anschließend verkaufen oder gemeinsam mit uns entwickeln."
            />
            <ul className="mt-8 space-y-3 text-base text-brand-charcoal">
              <Haken>Bebaubarkeit und Baurecht einordnen</Haken>
              <Haken>Umgebung, Höhen und Geodaten auswerten</Haken>
              <Haken>Wirtschaftlichkeit belastbar rechnen</Haken>
              <Haken>Ergebnis verständlich und professionell vorlegen</Haken>
            </ul>

            <div className="mt-10 rounded-xl border border-brand-border bg-white p-6 shadow-karte">
              <p className="text-sm font-semibold text-brand-charcoal">Wir suchen laufend in Freiburg und Umgebung:</p>
              <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm text-brand-muted-fg sm:grid-cols-2">
                {SUCHPROFIL.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-petrol" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => zumKontakt("grundstueck")}
                className="mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
              >
                Objekt anbieten
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Galerie */}
      <section id="referenzen" className="scroll-mt-24 bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Ueberschrift
              kicker="Eindrücke"
              titel="Wohnhäuser aus Südbaden"
              text="So sieht gutes Bauen in unserer Region aus: Einfamilienhäuser, Mehrfamilienhäuser und Wohnräume, die zum Ort und zu den Menschen passen."
            />
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 md:grid-cols-6">
              {GALERIE.map((bild, i) => {
                const groesse = [
                  "col-span-2 row-span-2 md:col-span-4",
                  "md:col-span-2",
                  "md:col-span-2",
                  "md:col-span-2",
                  "md:col-span-2",
                  "md:col-span-2",
                  "col-span-2 md:col-span-3",
                  "col-span-2 md:col-span-3",
                ][i];
                return (
                  <button
                    key={bild.name}
                    type="button"
                    onClick={() => setLightbox(i)}
                    aria-label={`Bild vergrößern: ${bild.titel}`}
                    className={`group relative overflow-hidden rounded-xl bg-brand-surface ${groesse}`}
                  >
                    <img
                      src={src(bild.name, 800)}
                      srcSet={srcSet(bild.name)}
                      sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                      alt={bild.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-10 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      {bild.titel}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-brand-muted-fg">{BILDNACHWEIS}</p>
          </Reveal>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="scroll-mt-24 bg-brand-surface py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Ueberschrift
              kicker="Ablauf"
              titel="In vier Schritten zum baureifen Projekt"
              text="Klar strukturiert und mit festen Ansprechpartnern – so behalten Sie in jeder Phase den Überblick."
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {SCHRITTE.map((s, i) => (
              <Reveal key={s.titel} delay={i * 80} className="h-full">
                <li className="relative h-full rounded-xl border border-brand-border bg-white p-7 shadow-karte">
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-semibold leading-none text-brand-petrol/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg">{s.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted-fg">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Bauausführung: freie Wahl */}
      <section id="bauausfuehrung" className="scroll-mt-24 bg-brand-charcoal py-24 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <Ueberschrift
                hell
                kicker="Bauausführung"
                titel="Sie entscheiden, wer baut."
                text="Wir entwickeln Projekte unabhängig von der Bauausführung. Ob Sie mit einem Generalunternehmer Ihres Vertrauens bauen oder auf unser Netzwerk zurückgreifen: Die Wahl liegt bei Ihnen – und bleibt es."
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-2">
              <img
                src={src("haus-holz-wiese", 800)}
                srcSet={srcSet("haus-holz-wiese")}
                sizes="(min-width: 1024px) 40vw, 100vw"
                alt="Holzhaus mit Veranda auf einer Wiese in Südbaden"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {GRUNDSAETZE.map((g, i) => (
              <Reveal key={g.titel} delay={i * 80} className="h-full">
                <div className="h-full rounded-xl border border-white/15 bg-white/[0.04] p-7">
                  <h3 className="text-lg text-white!">{g.titel}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="scroll-mt-24 bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <Ueberschrift kicker="Über uns" titel="Inhabergeführt, regional verwurzelt" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted-fg">
              <p>
                BW Projektentwicklung ist ein junges, inhabergeführtes Unternehmen im Raum Freiburg,
                gegründet von den Brüdern Pirmin und Pius Burger gemeinsam mit ihrem Cousin Marius
                Wernet. Wir konzentrieren uns auf Projektentwicklung in Freiburg und im Breisgau – vom
                Grundstücksankauf über die Planung bis zur Baureife.
              </p>
              <p>
                Aktuell liegt unser Schwerpunkt auf Wohnraum in Freiburg und Umgebung. Dazu kommen
                Bestandsentwicklungen und Gewerbeimmobilien. Wir entwickeln dort, wo wir die Region,
                die Märkte und die Menschen kennen.
              </p>
            </div>

            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {WERTE.map((w) => (
                <li key={w.titel}>
                  <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-brand-charcoal">
                    {w.titel}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-muted-fg">{w.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <img
              src={src("haus-holz-garten", 800)}
              srcSet={srcSet("haus-holz-garten")}
              sizes="(min-width: 1024px) 45vw, 100vw"
              alt="Holzhaus mit Veranda und Garten vor einer Hügellandschaft"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-karte"
            />
          </Reveal>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-24 border-t border-brand-border bg-brand-surface py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <Ueberschrift
              kicker="Kontakt"
              titel="Sprechen Sie uns an"
              text="Sie haben ein Grundstück, eine Immobilie oder eine Projektidee? Schreiben Sie uns kurz, worum es geht. Wir melden uns zeitnah persönlich zurück."
            />
            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-brand-charcoal">E-Mail</dt>
                <dd className="mt-1">
                  <a href={`mailto:${MAIL}`} className="text-brand-petrol hover:underline">
                    {MAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-charcoal">Region</dt>
                <dd className="mt-1 text-brand-muted-fg">Freiburg im Breisgau und Umgebung</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <KontaktFormular vorwahl={vorwahl} />
          </Reveal>
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox
          bilder={GALERIE}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndex={setLightbox}
        />
      )}
    </>
  );
}
