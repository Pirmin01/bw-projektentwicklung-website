import { Todo } from "../components/Todo";

export function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl">Impressum</h1>
      <p className="mt-2 text-sm text-brand-muted-fg">
        Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
      </p>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-brand-charcoal">
        <div>
          <h2 className="text-lg">Diensteanbieter</h2>
          <p className="mt-3">
            BW Projektentwicklung <Todo>Rechtsform ergänzen</Todo>
            <br />
            <Todo>Straße und Hausnummer</Todo>
            <br />
            <Todo>PLZ und Ort</Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Vertreten durch</h2>
          <p className="mt-3">Pirmin Burger, Pius Burger</p>
        </div>

        <div>
          <h2 className="text-lg">Kontakt</h2>
          <p className="mt-3">
            E-Mail:{" "}
            <a
              href="mailto:info@bwprojektentwicklung.de"
              className="text-brand-petrol hover:underline"
            >
              info@bwprojektentwicklung.de
            </a>
            <br />
            Kontaktformular:{" "}
            <a href="/#kontakt" className="text-brand-petrol hover:underline">
              bwprojektentwicklung.de/#kontakt
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Registereintrag</h2>
          <p className="mt-3">
            <Todo>
              Registergericht und Registernummer ergänzen – oder als „in Gründung"
              kennzeichnen, solange die Eintragung noch nicht erfolgt ist
            </Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">Umsatzsteuer-Identifikationsnummer</h2>
          <p className="mt-3">
            <Todo>USt-IdNr. gemäß § 27a UStG ergänzen, sobald erteilt</Todo>
          </p>
        </div>

        <div>
          <h2 className="text-lg">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">Pirmin Burger, Anschrift wie oben</p>
        </div>

        <div>
          <h2 className="text-lg">Verbraucherstreitbeilegung</h2>
          <p className="mt-3">
            Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen. Die Plattform der Europäischen Kommission zur
            Online-Streitbeilegung erreichen Sie unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-petrol hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg">Haftung für Inhalte</h2>
          <p className="mt-3">
            Die Inhalte dieser Website haben wir mit Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
            keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG
            für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich, nach
            §§ 8 bis 10 DDG jedoch nicht verpflichtet, übermittelte oder gespeicherte
            fremde Informationen zu überwachen. Angaben zu Projekten, Flächen und
            Leistungen sind unverbindlich und stellen kein Angebot im Rechtssinne dar.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Haftung für Links</h2>
          <p className="mt-3">
            Diese Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir
            keine Gewähr übernehmen; verantwortlich ist stets der jeweilige Anbieter.
            Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte
            erkennbar. Bei Bekanntwerden von Rechtsverstößen entfernen wir solche
            Links unverzüglich.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Urheberrecht</h2>
          <p className="mt-3">
            Die von uns erstellten Inhalte, Texte, Bilder und Grafiken auf dieser
            Website unterliegen dem deutschen Urheberrecht. Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechts bedürfen unserer schriftlichen Zustimmung. Downloads und
            Kopien dieser Seite sind für den privaten, nicht kommerziellen Gebrauch
            gestattet.
          </p>
        </div>
      </div>

      <p className="mt-14 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Die gelb markierten Angaben fehlen noch und müssen vor der Veröffentlichung
        ergänzt werden. Eine anwaltliche Prüfung vor dem Go-Live ist empfehlenswert.
      </p>
    </section>
  );
}
