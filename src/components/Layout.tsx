import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NAV_LINKS = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#projekte", label: "Projekte" },
  { href: "/#ueber-uns", label: "Über uns" },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-brand-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" aria-label="BW Projektentwicklung, zur Startseite">
            <img src="/logo-horizontal.png" alt="BW Projektentwicklung" className="h-8 w-auto sm:h-9" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-petrol"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-karte transition-opacity hover:opacity-90"
            >
              Kontakt
            </a>
          </nav>

          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-brand-border p-2 md:hidden"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menü</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M2.5 5h15M2.5 10h15M2.5 15h15"
                stroke="#262626"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-brand-border bg-white px-6 py-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-brand-charcoal hover:bg-brand-surface"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              className="mt-1 rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-brand-border bg-brand-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <img src="/logo-horizontal.png" alt="BW Projektentwicklung" className="h-8 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-brand-muted-fg">
              Grundstücke und Neubauprojekte im Raum Freiburg/Breisgau – von der
              Standortprüfung bis zur baureifen Planung.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-charcoal">Leistungen</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted-fg">
              <li>
                <a href="/#leistungen" className="hover:text-brand-petrol">
                  Grundstücksentwicklung
                </a>
              </li>
              <li>
                <a href="/#leistungen" className="hover:text-brand-petrol">
                  Neubau-Projektentwicklung
                </a>
              </li>
              <li>
                <a href="/#leistungen" className="hover:text-brand-petrol">
                  Bestandsentwicklung
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-charcoal">Unternehmen</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted-fg">
              <li>
                <a href="/#ueber-uns" className="hover:text-brand-petrol">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/#kontakt" className="hover:text-brand-petrol">
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="https://burgerhaus-invest.de"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-petrol"
                >
                  Wohnungsangebote (BurgerHaus Invest)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-charcoal">Rechtliches</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted-fg">
              <li>
                <Link to="/impressum" className="hover:text-brand-petrol">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-brand-petrol">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border px-6 py-6">
          <p className="mx-auto max-w-6xl text-xs text-brand-muted-fg">
            © {new Date().getFullYear()} BW Projektentwicklung
          </p>
        </div>
      </footer>
    </div>
  );
}
