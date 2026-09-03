import { Todo } from "../components/Todo";

export function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl">Impressum</h1>
      <p className="mt-2 text-sm text-brand-muted-fg">
        Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
      </p>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-brand-charcoal">
        <div>
          <h2 className="text-lg">Diensteanbieter</h2>
          <p className="mt-3">
            BW Projektentwicklung <Todo>Rechtsform ergänzen (z. B. GmbH, ggf. „i. G." für in Gründung)</Todo>
            <br />
            <Todo>Straße und Hausnummer</Todo>
            <br />
            <Todo>PLZ und Ort</Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Vertretungsberechtigte</h2>
          <p className="mt-3">
            Pirmin Burger, Pius Burger <Todo>Geschäftsführer-Angabe bestätigen</Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Kontakt</h2>
          <p className="mt-3">
            Telefon: <Todo>Telefonnummer ergänzen</Todo>
            <br />
            E-Mail: <Todo>kontakt@bwprojektentwicklung.de – Platzhalter, sobald Domain &amp; Postfach stehen</Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Registereintrag</h2>
          <p className="mt-3">
            <Todo>
              Eintragung im Handelsregister ergänzen (Registergericht, Registernummer) –
              oder, falls die Gesellschaft noch nicht eingetragen ist, entsprechend als
              „in Gründung" kennzeichnen
            </Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Umsatzsteuer-ID</h2>
          <p className="mt-3">
            <Todo>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG ergänzen, sobald vorhanden</Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="mt-3">
            Pirmin Burger <Todo>Anschrift wie oben, sobald bestätigt</Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">EU-Streitschlichtung</h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-petrol hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben. Wir sind nicht verpflichtet und
            nicht bereit, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Haftung für Inhalte</h2>
          <p className="mt-3">
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Haftung für Links</h2>
          <p className="mt-3">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Urheberrecht</h2>
          <p className="mt-3">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>

      <p className="mt-14 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Diese Seite enthält markierte Platzhalter und sollte vor der
        Veröffentlichung rechtlich gegengeprüft werden.
      </p>
    </section>
  );
}
