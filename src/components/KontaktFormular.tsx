import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const MAIL = "info@bwprojektentwicklung.de";

const ANLIEGEN = [
  { wert: "grundstueck", text: "Grundstück oder Bestandsimmobilie anbieten" },
  { wert: "projekt", text: "Projektidee oder Zusammenarbeit" },
  { wert: "gewerbe", text: "Gewerbeimmobilie" },
  { wert: "kapitalanleger", text: "Kapitalanlage / Investition" },
  { wert: "sonstiges", text: "Sonstiges" },
];

type Zustand = "bereit" | "sendet" | "gesendet" | "fehler" | "nicht_erreichbar";

const feld =
  "mt-1.5 w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none transition-colors placeholder:text-brand-muted-fg/60 focus:border-brand-petrol focus:ring-2 focus:ring-brand-petrol/20";

export function KontaktFormular({ vorwahl }: { vorwahl?: string }) {
  const [zustand, setZustand] = useState<Zustand>("bereit");
  const [meldung, setMeldung] = useState("");
  const seitenstart = useRef(0);
  const formular = useRef<HTMLFormElement>(null);

  useEffect(() => {
    seitenstart.current = Date.now();
  }, []);

  // Vorauswahl, wenn jemand auf der Seite z. B. „Objekt anbieten“ angeklickt hat
  useEffect(() => {
    const auswahl = formular.current?.elements.namedItem("anliegen") as HTMLSelectElement | null;
    if (vorwahl && auswahl && ANLIEGEN.some((a) => a.wert === vorwahl)) {
      auswahl.value = vorwahl;
    }
  }, [vorwahl, zustand]);

  async function senden(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const f = event.currentTarget;
    const wert = (n: string) => (f.elements.namedItem(n) as HTMLInputElement).value;
    setZustand("sendet");
    setMeldung("");
    try {
      const antwort = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: wert("name"),
          email: wert("email"),
          telefon: wert("telefon"),
          anliegen: wert("anliegen"),
          nachricht: wert("nachricht"),
          einwilligung: (f.elements.namedItem("einwilligung") as HTMLInputElement).checked,
          website: wert("website"),
          verweildauer: Date.now() - seitenstart.current,
        }),
      });
      if (antwort.ok) {
        setZustand("gesendet");
        f.reset();
        return;
      }
      const daten = await antwort.json().catch(() => ({}));
      if (antwort.status === 503 || daten.fehler === "nicht_konfiguriert") {
        setZustand("nicht_erreichbar");
      } else {
        setZustand("fehler");
        setMeldung(
          daten.fehler === "email"
            ? "Bitte prüfen Sie Ihre E-Mail-Adresse."
            : daten.fehler === "nachricht"
              ? "Bitte schreiben Sie uns mindestens ein bis zwei Sätze."
              : "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.",
        );
      }
    } catch {
      setZustand("nicht_erreichbar");
    }
  }

  if (zustand === "gesendet") {
    return (
      <div
        role="status"
        className="rounded-xl border border-brand-border bg-white p-8 shadow-karte sm:p-10"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-petrol/10 text-brand-petrol">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="m5 11.5 4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl">Vielen Dank für Ihre Nachricht.</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted-fg">
          Sie ist bei uns eingegangen. Wir melden uns zeitnah persönlich bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setZustand("bereit")}
          className="mt-6 text-sm font-medium text-brand-petrol hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formular}
      onSubmit={senden}
      className="space-y-5 rounded-xl border border-brand-border bg-white p-6 shadow-karte sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-brand-charcoal">
            Name <span className="text-brand-petrol">*</span>
          </label>
          <input id="name" name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" className={feld} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-brand-charcoal">
            E-Mail <span className="text-brand-petrol">*</span>
          </label>
          <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={feld} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefon" className="text-sm font-medium text-brand-charcoal">
            Telefon <span className="font-normal text-brand-muted-fg">(optional)</span>
          </label>
          <input id="telefon" name="telefon" type="tel" maxLength={40} autoComplete="tel" className={feld} />
        </div>
        <div>
          <label htmlFor="anliegen" className="text-sm font-medium text-brand-charcoal">
            Worum geht es?
          </label>
          <select id="anliegen" name="anliegen" defaultValue="projekt" className={feld}>
            {ANLIEGEN.map((a) => (
              <option key={a.wert} value={a.wert}>
                {a.text}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="nachricht" className="text-sm font-medium text-brand-charcoal">
          Nachricht <span className="text-brand-petrol">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Anliegen – etwa Lage, Größe oder Stand des Vorhabens."
          className={feld}
        />
      </div>

      {/* Honigtopf gegen Bots: für Menschen unsichtbar, nicht ausfüllen */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted-fg">
        <input
          type="checkbox"
          name="einwilligung"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-brand-border accent-brand-petrol"
        />
        <span>
          Ich habe die{" "}
          <Link to="/datenschutz" className="font-medium text-brand-petrol hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
          verarbeitet werden.
        </span>
      </label>

      {zustand === "fehler" && (
        <p role="alert" className="rounded-md border border-brand-destructive/30 bg-brand-destructive/5 px-4 py-3 text-sm text-brand-destructive">
          {meldung}
        </p>
      )}
      {zustand === "nicht_erreichbar" && (
        <p role="alert" className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
          Das Formular ist gerade nicht erreichbar. Bitte schreiben Sie uns direkt an{" "}
          <a href={`mailto:${MAIL}`} className="font-medium underline">
            {MAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={zustand === "sendet"}
        className="w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
      >
        {zustand === "sendet" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
      <p className="text-xs leading-relaxed text-brand-muted-fg">
        Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage per E-Mail an uns
        übermittelt und nicht in einer Datenbank gespeichert.
      </p>
    </form>
  );
}
