// Kontaktformular: nimmt die Anfrage entgegen und schickt sie per Resend als
// E-Mail an uns. Es wird NICHTS gespeichert (keine Datenbank, kein Logging
// von Inhalten). Umgebungsvariablen in Vercel:
//   RESEND_API_KEY      Pflicht – ohne ihn geht nichts hinaus (503)
//   KONTAKT_ABSENDER    optional – Domain muss bei Resend verifiziert sein
//   KONTAKT_EMPFAENGER  optional – Standard: info@bwprojektentwicklung.de

const RESEND_SCHLUESSEL = process.env.RESEND_API_KEY ?? "";
const ABSENDER =
  process.env.KONTAKT_ABSENDER ?? "BW Projektentwicklung <info@bwprojektentwicklung.de>";
const EMPFAENGER = process.env.KONTAKT_EMPFAENGER ?? "info@bwprojektentwicklung.de";

const ANLIEGEN: Record<string, string> = {
  grundstueck: "Grundstück oder Bestandsimmobilie anbieten",
  projekt: "Projektidee oder Zusammenarbeit",
  gewerbe: "Gewerbeimmobilie",
  kapitalanleger: "Kapitalanlage / Investition",
  sonstiges: "Sonstiges",
};

const ERLAUBTE_HOSTS = ["bwprojektentwicklung.de", "www.bwprojektentwicklung.de"];

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

function einzeilig(text: string) {
  return text.replace(/[\r\n\t]+/g, " ").trim();
}

function sicher(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function herkunftErlaubt(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // z. B. direkter Aufruf; ohne Browser-Herkunft keine Prüfung möglich
  try {
    const host = new URL(origin).hostname;
    return ERLAUBTE_HOSTS.includes(host) || host.endsWith(".vercel.app") || host === "localhost";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!herkunftErlaubt(request)) return json(403, { fehler: "herkunft" });

  let daten: Record<string, unknown>;
  try {
    daten = await request.json();
  } catch {
    return json(400, { fehler: "ungueltig" });
  }

  // Honeypot und Mindestzeit: Bots füllen das versteckte Feld und senden sofort.
  const falle = typeof daten.website === "string" ? daten.website : "";
  const verweildauer = typeof daten.verweildauer === "number" ? daten.verweildauer : 0;
  if (falle !== "" || verweildauer < 2500) {
    return json(200, { ok: true }); // still verwerfen, Bots erfahren nichts
  }

  const name = einzeilig(String(daten.name ?? ""));
  const email = einzeilig(String(daten.email ?? ""));
  const telefon = einzeilig(String(daten.telefon ?? ""));
  const anliegenSchluessel = String(daten.anliegen ?? "sonstiges");
  const nachricht = String(daten.nachricht ?? "").trim();
  const einwilligung = daten.einwilligung === true;

  if (!einwilligung) return json(400, { fehler: "einwilligung" });
  if (name.length < 2 || name.length > 120) return json(400, { fehler: "name" });
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json(400, { fehler: "email" });
  }
  if (telefon.length > 40) return json(400, { fehler: "telefon" });
  if (nachricht.length < 10 || nachricht.length > 4000) return json(400, { fehler: "nachricht" });
  const anliegen = ANLIEGEN[anliegenSchluessel] ?? ANLIEGEN.sonstiges;

  if (!RESEND_SCHLUESSEL) {
    console.error("kontakt: RESEND_API_KEY fehlt — es geht nichts hinaus");
    return json(503, { fehler: "nicht_konfiguriert" });
  }

  const betreff = `Anfrage über die Website: ${anliegen} – ${name}`.slice(0, 200);
  const text = [
    `Anliegen: ${anliegen}`,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${telefon || "–"}`,
    "",
    nachricht,
    "",
    "—",
    "Gesendet über das Kontaktformular auf bwprojektentwicklung.de. Antworten geht direkt an den Absender.",
  ].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.55;color:#262626">
<p><strong>Anliegen:</strong> ${sicher(anliegen)}<br>
<strong>Name:</strong> ${sicher(name)}<br>
<strong>E-Mail:</strong> <a href="mailto:${sicher(email)}">${sicher(email)}</a><br>
<strong>Telefon:</strong> ${sicher(telefon || "–")}</p>
<p style="white-space:pre-wrap;border-left:3px solid #1f6f76;padding-left:12px">${sicher(nachricht)}</p>
<p style="color:#5c5854;font-size:12px">Gesendet über das Kontaktformular auf bwprojektentwicklung.de. Antworten geht direkt an den Absender.</p>
</div>`;

  let antwort: Response;
  try {
    antwort = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_SCHLUESSEL}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: ABSENDER,
        to: [EMPFAENGER],
        reply_to: email,
        subject: betreff,
        text,
        html,
      }),
    });
  } catch {
    return json(502, { fehler: "versand" });
  }

  if (!antwort.ok) {
    console.error(`kontakt: Resend lehnte ab (${antwort.status})`);
    return json(502, { fehler: "versand" });
  }
  return json(200, { ok: true });
}

export function GET() {
  return json(405, { fehler: "methode" });
}
