import { Todo } from "../components/Todo";

export function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-10 text-base leading-relaxed text-brand-charcoal">
        <div>
          <h2 className="text-lg">1. Verantwortlicher</h2>
          <p className="mt-3">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            BW Projektentwicklung <Todo>Rechtsform, Anschrift wie im Impressum</Todo>
            <br />
            E-Mail: <Todo>kontakt@bwprojektentwicklung.de – Platzhalter</Todo>
          </p>
          <p className="mt-3">
            Nähere Angaben finden Sie in unserem{" "}
            <a href="/impressum" className="text-brand-petrol hover:underline">
              Impressum
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg">2. Diese Website im Überblick</h2>
          <p className="mt-3">
            Diese Website ist eine reine Informationsseite ohne Datenbank und ohne
            Login. Es findet keine Nutzerregistrierung statt, und es werden derzeit
            <strong> keine Cookies und keine Analyse- oder Tracking-Tools</strong>{" "}
            eingesetzt. Personenbezogene Daten werden ausschließlich verarbeitet,
            wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren.
          </p>
        </div>

        <div>
          <h2 className="text-lg">3. Hosting</h2>
          <p className="mt-3">
            Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
            91789, USA) gehostet. Beim Aufruf der Website verarbeitet Vercel
            automatisch technische Zugriffsdaten (u. a. IP-Adresse, Datum und
            Uhrzeit des Zugriffs, aufgerufene Seite, verwendeter Browser) in
            sogenannten Server-Logfiles. Dies ist erforderlich, um die Website
            technisch stabil und sicher auszuliefern (berechtigtes Interesse gemäß
            Art. 6 Abs. 1 lit. f DSGVO). Details entnehmen Sie der
            Datenschutzerklärung von Vercel:{" "}
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
          <h2 className="text-lg">4. Kontaktaufnahme</h2>
          <p className="mt-3">
            Unser Kontaktformular übermittelt Ihre Eingaben nicht an einen Server
            oder eine Datenbank. Beim Absenden öffnet sich stattdessen Ihr eigenes
            E-Mail-Programm mit einer vorausgefüllten Nachricht an unsere
            Kontaktadresse – der eigentliche Versand erfolgt über Ihr persönliches
            E-Mail-Postfach.
          </p>
          <p className="mt-3">
            Wenn Sie uns auf diesem Weg oder direkt per E-Mail kontaktieren,
            verarbeiten wir die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse,
            Nachrichteninhalt) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO (Anfrage zur Vorbereitung eines Vertrags)
            bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Beantwortung Ihrer Anfrage). Wir löschen diese Daten, sobald sie für die
            Bearbeitung nicht mehr erforderlich sind, soweit keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </div>

        <div>
          <h2 className="text-lg">5. Cookies und Tracking</h2>
          <p className="mt-3">
            Diese Website setzt aktuell keine Cookies und keine Analyse- oder
            Marketing-Tools ein. Sollte sich das ändern (z. B. durch ein
            datenschutzfreundliches Reichweiten-Tool), passen wir diese Erklärung
            entsprechend an.
          </p>
        </div>

        <div>
          <h2 className="text-lg">6. Ihre Rechte</h2>
          <p className="mt-3">Sie haben jederzeit das Recht auf:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Auskunft über die von uns verarbeiteten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-3">
            Wenden Sie sich dazu an die oben genannte Kontaktadresse. Außerdem
            haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren, z. B. beim Landesbeauftragten für den Datenschutz und die
            Informationsfreiheit Baden-Württemberg.
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
