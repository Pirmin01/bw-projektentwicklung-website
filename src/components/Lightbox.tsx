import { useEffect, useRef } from "react";
import { srcSet, src, type Bild } from "../lib/bilder";

export function Lightbox({
  bilder,
  index,
  onClose,
  onIndex,
}: {
  bilder: Bild[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const schliessen = useRef<HTMLButtonElement>(null);
  const bild = bilder[index];

  useEffect(() => {
    const vorher = document.activeElement as HTMLElement | null;
    schliessen.current?.focus();
    const ueberlauf = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ueberlauf;
      vorher?.focus?.();
    };
  }, []);

  useEffect(() => {
    function taste(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % bilder.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + bilder.length) % bilder.length);
    }
    window.addEventListener("keydown", taste);
    return () => window.removeEventListener("keydown", taste);
  }, [index, bilder.length, onClose, onIndex]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Bildansicht: ${bild.titel}`}
      className="fixed inset-0 z-50 flex flex-col bg-black/92 p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="flex items-center justify-between text-white">
        <p className="text-sm text-white/80">
          {index + 1} / {bilder.length}
        </p>
        <button
          ref={schliessen}
          type="button"
          onClick={onClose}
          className="rounded-md border border-white/30 px-3 py-1.5 text-sm hover:bg-white/10"
        >
          Schließen
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
        <img
          key={bild.name}
          src={src(bild.name, 1600)}
          srcSet={srcSet(bild.name)}
          sizes="100vw"
          alt={bild.alt}
          className="max-h-full max-w-full rounded-md object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          type="button"
          aria-label="Vorheriges Bild"
          onClick={(e) => {
            e.stopPropagation();
            onIndex((index - 1 + bilder.length) % bilder.length);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur hover:bg-white/25 sm:left-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 4 6.5 10l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Nächstes Bild"
          onClick={(e) => {
            e.stopPropagation();
            onIndex((index + 1) % bilder.length);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur hover:bg-white/25 sm:right-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="m7.5 4 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="text-center text-sm text-white/85">{bild.titel}</p>
    </div>
  );
}
