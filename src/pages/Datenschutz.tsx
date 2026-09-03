import { Todo } from "../components/Todo";

export function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl">Datenschutzerklärung</h1>
      <p className="mt-2 text-sm text-brand-muted-fg">
        Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO
      </p>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-brand-charcoal">
        <div>
          <h2 className="text-lg">1. Verantwortlicher</h2>
          <p className="mt-3">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            BW Projektentwicklung <Todo>Rechtsform und Anschrift wie im Impressum</Todo>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@bwprojektentwicklung.de"
              className="text-brand-petrol hover:underline"
            >
              info@bwprojektentwicklung.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg">2. Was diese Website macht – und was nicht</h2>
          <p className="mt-3">
            Diese Website ist eine reine Informationsseite. Sie hat keinen
            Nutzerbereich, keine Anmeldung und keine Datenbank. Wir setzen{" "}
            <strong>keine Cookies</strong> und{" "}
            <strong>keine Analyse-, Tracking- oder Werbewerkzeuge</strong> ein. Es
            entstehen keine Nutzerprofile. Personenbezogene Daten verarbeiten wir nur
            in zwei Fällen: technisch beim Aufruf der Seite (Abschnitt 3) und wenn Sie
            uns selbst kontaktieren (Abschnitt 5).
          </p>
          <p className="mt-3">
            Unsere internen Arbeitssysteme sind von dieser Website vollständig
            getrennt. Es werden weder Daten von dieser Website an interne Systeme
            übergeben noch Daten aus internen Systemen auf dieser Website angezeigt.
          </p>
        </div>

        <div>
          <h2 className="text-lg">3. Hosting und Server-Logfiles</h2>
          <p className="mt-3">
            Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
            91789, USA, gehostet. Beim Aufruf der Seite verarbeitet Vercel in unserem
            Auftrag automatisch technische Zugriffsdaten in sogenannten
            Server-Logfiles:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seite bzw. Datei</li>
            <li>übertragene Datenmenge und Meldung über den Abruf</li>
            <li>verwendeter Browser und Betriebssystem</li>
            <li>zuvor besuchte Seite (Referrer), sofern übermittelt</li>
          </ul>
          <p className="mt-3">
            <strong>Zweck:</strong> technische Bereitstellung, Stabilität und
            Sicherheit der Website, insbesondere Abwehr von Angriffen und
            Missbrauch.{" "}
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse am sicheren, störungsfreien Betrieb).{" "}
            <strong>Speicherdauer:</strong> Die Logfiles werden vom Hostinganbieter
            nur für die genannten Zwecke und nur so lange verarbeitet, wie es dafür
            erforderlich ist; Einzelheiten ergeben sich aus der Datenschutzerklärung
            von Vercel. Wir werten diese Daten nicht personenbezogen aus und führen
            sie nicht mit anderen Datenquellen zusammen.
          </p>
          <p className="mt-3">
            Die Verarbeitung erfolgt auf Grundlage eines Auftragsverarbeitungsvertrags
            nach Art. 28 DSGVO. Da Vercel seinen Sitz in den USA hat, können Daten in
            die USA übermittelt werden. Vercel ist nach dem{" "}
            <strong>EU-U.S. Data Privacy Framework</strong> zertifiziert; für die
            Übermittlung besteht damit ein Angemessenheitsbeschluss der Europäischen
            Kommission nach Art. 45 DSGVO. Ergänzend setzt Vercel
            Standardvertragsklauseln ein. Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="text-brand-petrol hover:underline"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg">4. Schriftarten</h2>
          <p className="mt-3">
            Die verwendeten Schriftarten liefern wir von unserem eigenen Server aus.
            Es werden dabei <strong>keine Verbindungen zu Google Fonts</strong> oder
            anderen externen Schriftanbietern aufgebaut, und es wird keine IP-Adresse
            an Dritte übermittelt.
          </p>
        </div>

        <div>
          <h2 className="text-lg">5. Kontaktaufnahme</h2>
          <p className="mt-3">
            Das Kontaktformular auf dieser Website überträgt Ihre Eingaben{" "}
            <strong>nicht</strong> an unseren Server und speichert sie nicht in einer
            Datenbank. Beim Absenden öffnet sich Ihr eigenes E-Mail-Programm mit einer
            vorausgefüllten Nachricht; der Versand erfolgt über Ihr persönliches
            E-Mail-Postfach. Sie behalten die Nachricht also bis zum Absenden
            vollständig in der Hand.
          </p>
          <p className="mt-3">
            Schreiben Sie uns per E-Mail, verarbeiten wir die von Ihnen mitgeteilten
            Daten – in der Regel Name, E-Mail-Adresse und Inhalt der Nachricht –
            ausschließlich zur Bearbeitung Ihres Anliegens und für mögliche
            Anschlussfragen.
          </p>
          <p className="mt-3">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre
            Anfrage der Vorbereitung oder Durchführung eines Vertrags dient,
            andernfalls Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Beantwortung von Anfragen).{" "}
            <strong>Speicherdauer:</strong> Anfragen, die zu keiner
            Geschäftsbeziehung führen, löschen wir spätestens sechs Monate nach dem
            letzten Kontakt. Entsteht aus der Anfrage ein Vertragsverhältnis, gelten
            die handels- und steuerrechtlichen Aufbewahrungsfristen von sechs bzw.
            zehn Jahren (§ 257 HGB, § 147 AO).
          </p>
        </div>

        <div>
          <h2 className="text-lg">6. Externe Links</h2>
          <p className="mt-3">
            Diese Website verlinkt auf Angebote Dritter. Ein Klick auf einen solchen
            Link führt Sie auf eine fremde Website, für deren Datenverarbeitung der
            jeweilige Anbieter verantwortlich ist. Bitte informieren Sie sich dort
            über den Umgang mit Ihren Daten. Es werden keine Inhalte Dritter direkt in
            diese Website eingebettet.
          </p>
        </div>

        <div>
          <h2 className="text-lg">7. Keine automatisierte Entscheidungsfindung</h2>
          <p className="mt-3">
            Wir nutzen keine automatisierte Entscheidungsfindung und kein Profiling im
            Sinne von Art. 22 DSGVO.
          </p>
        </div>

        <div>
          <h2 className="text-lg">8. Ihre Rechte</h2>
          <p className="mt-3">Sie haben uns gegenüber das Recht auf:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Auskunft über die zu Ihnen verarbeiteten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>
              Widerspruch gegen Verarbeitungen auf Grundlage eines berechtigten
              Interesses (Art. 21 DSGVO)
            </li>
          </ul>
          <p className="mt-3">
            Für die Ausübung dieser Rechte genügt eine Nachricht an{" "}
            <a
              href="mailto:info@bwprojektentwicklung.de"
              className="text-brand-petrol hover:underline"
            >
              info@bwprojektentwicklung.de
            </a>
            . Unabhängig davon können Sie sich bei einer
            Datenschutz-Aufsichtsbehörde beschweren – für uns zuständig ist der
            Landesbeauftragte für den Datenschutz und die Informationsfreiheit
            Baden-Württemberg.
          </p>
        </div>

        <div>
          <h2 className="text-lg">9. Stand und Änderungen</h2>
          <p className="mt-3">
            Diese Datenschutzerklärung beschreibt den aktuellen Stand dieser Website.
            Ändern wir die Website technisch – etwa durch ein Reichweiten-Werkzeug
            oder ein serverseitiges Kontaktformular –, passen wir die Erklärung
            vorher entsprechend an.
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
