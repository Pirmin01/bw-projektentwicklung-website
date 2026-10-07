export function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl">Impressum</h1>
      <p className="mt-2 text-sm text-brand-muted-fg">
        Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
      </p>

      <div className="mt-8 rounded-lg border border-brand-border border-l-4 border-l-brand-petrol bg-brand-surface p-5 text-sm leading-relaxed text-brand-charcoal">
        <p className="font-semibold">Unternehmen im Aufbau</p>
        <p className="mt-1 text-brand-muted-fg">
          BW Projektentwicklung befindet sich derzeit im Aufbau. Rechtsform, Anschrift und
          Registerangaben ergänzen wir an dieser Stelle, sobald die Gründung abgeschlossen ist.
          Bei Fragen erreichen Sie uns schon jetzt unter{" "}
          <a href="mailto:info@bwprojektentwicklung.de" className="text-brand-petrol hover:underline">
            info@bwprojektentwicklung.de
          </a>
          .
        </p>
      </div>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-brand-charcoal">
        <div>
          <h2 className="text-lg">Diensteanbieter</h2>
          <p className="mt-3">
            BW Projektentwicklung (Unternehmen im Aufbau)
            <br />
            Rechtsform: wird mit Abschluss der Gründung ergänzt
            <br />
            Anschrift: wird mit Abschluss der Gründung ergänzt
          </p>
        </div>

        <div>
          <h2 className="text-lg">Vertreten durch</h2>
          <p className="mt-3">Pirmin Burger, Pius Burger und Marius Wernet</p>
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
            Noch nicht eingetragen: Das Unternehmen befindet sich im Aufbau. Registergericht und
            Registernummer ergänzen wir nach der Eintragung.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Umsatzsteuer-Identifikationsnummer</h2>
          <p className="mt-3">
            Noch nicht erteilt. Wir ergänzen die Umsatzsteuer-Identifikationsnummer nach § 27a UStG, sobald sie vorliegt.
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
    </section>
  );
}
