import type { FormEvent } from "react";

const LEISTUNGEN = [
  {
    title: "Grundstücksankauf & -entwicklung",
    text: "Wir prüfen Grundstücke auf Baurecht, Lage und Potenzial und entwickeln daraus tragfähige Konzepte – von der ersten Machbarkeitsprüfung bis zur baureifen Planung.",
  },
  {
    title: "Neubau-Projektentwicklung",
    text: "Für Mehrfamilienhäuser und Wohnanlagen übernehmen wir die Projektsteuerung: Planung, Genehmigungsverfahren und Koordination bis zur Baureife.",
  },
  {
    title: "Bestandsentwicklung",
    text: "Auch bestehende Immobilien entwickeln wir gezielt weiter: Sanierung, Modernisierung und Aufteilung, wo das mehr Wert schafft als ein Neubau.",
  },
];

export function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:info@bwprojektentwicklung.de?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
          <h1 className="mx-auto max-w-3xl text-4xl leading-tight sm:text-5xl">
            Grundstücke entwickeln. Werte schaffen.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted-fg">
            BW Projektentwicklung entwickelt Grundstücke und Neubauprojekte im Raum
            Freiburg/Breisgau – von der ersten Standortprüfung bis zur baureifen
            Planung.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#leistungen"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-karte transition-opacity hover:opacity-90"
            >
              Leistungen ansehen
            </a>
            <a
              href="#kontakt"
              className="rounded-md border border-brand-border px-6 py-3 text-sm font-medium text-brand-charcoal transition-colors hover:border-brand-petrol hover:text-brand-petrol"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-petrol">
              Leistungen
            </p>
            <h2 className="mt-2 text-3xl">Unsere Leistungen</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {LEISTUNGEN.map((leistung) => (
              <div
                key={leistung.title}
                className="rounded-lg border border-brand-border bg-white p-8 shadow-karte"
              >
                <h3 className="text-lg">{leistung.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted-fg">
                  {leistung.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projekte */}
      <section id="projekte" className="scroll-mt-24 bg-brand-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-brand-petrol">
              Projekte
            </p>
            <h2 className="mt-2 text-3xl">Aktuell in Planung und im Bau</h2>
          </div>

          <div className="mt-10 rounded-lg border border-brand-border bg-white p-8 shadow-karte sm:p-10">
            <p className="text-base leading-relaxed text-brand-muted-fg">
              Unsere Projekte entstehen im Raum Freiburg und im Breisgau – von
              Neubau-Mehrfamilienhäusern bis zu Bestandsentwicklungen. Eine
              ausführliche Übersicht mit Bildern folgt an dieser Stelle in Kürze.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted-fg">
              Konkrete, verfügbare Wohneinheiten finden Sie schon jetzt bei{" "}
              <a
                href="https://burgerhaus-invest.de"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-petrol hover:underline"
              >
                BurgerHaus Invest
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand-petrol">
                Über uns
              </p>
              <h2 className="mt-2 text-3xl">Inhabergeführt, regional verwurzelt</h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-brand-muted-fg">
              <p>
                BW Projektentwicklung ist ein junges, inhabergeführtes Unternehmen im
                Raum Freiburg, gegründet von den Brüdern Pirmin und Pius Burger. Wir
                konzentrieren uns auf Projektentwicklung im Breisgau: vom
                Grundstücksankauf über die Planung bis zur Baureife.
              </p>
              <p>
                Jedes Projekt prüfen wir einzeln auf Lage, Baurecht und
                Marktpotenzial, bevor wir es weiterentwickeln – sorgfältig statt
                schnell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="scroll-mt-24 border-t border-brand-border bg-brand-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand-petrol">
                Kontakt
              </p>
              <h2 className="mt-2 text-3xl">Sprechen Sie uns an</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-brand-muted-fg">
                Sie haben ein Grundstück, eine Projektidee oder Fragen zu einer
                Zusammenarbeit? Wir melden uns zeitnah zurück.
              </p>

              <dl className="mt-8 space-y-3 text-sm text-brand-charcoal">
                <div className="flex gap-2">
                  <dt className="font-medium">E-Mail:</dt>
                  <dd>
                    <a
                      href="mailto:info@bwprojektentwicklung.de"
                      className="hover:text-brand-petrol"
                    >
                      info@bwprojektentwicklung.de
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium">Region:</dt>
                  <dd>Freiburg im Breisgau und Umgebung</dd>
                </div>
              </dl>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-lg border border-brand-border bg-white p-8 shadow-karte"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-brand-charcoal">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-md border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-petrol"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-brand-charcoal">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-md border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-petrol"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-brand-charcoal">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full rounded-md border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-petrol"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Nachricht senden
              </button>
              <p className="text-xs leading-relaxed text-brand-muted-fg">
                Öffnet Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht an
                uns. Es werden dabei keine Daten an einen Server übertragen.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
