// Bildquellen: jedes Foto liegt in public/bilder/ in 800 und 1600 px Breite
// (das Titelbild zusätzlich in 2400 px).
export type Bild = {
  name: string;
  alt: string;
  titel: string;
  breiten?: number[];
};

export function src(bild: string, breite: number) {
  return `/bilder/${bild}-${breite}.jpg`;
}

export function srcSet(bild: string, breiten: number[] = [800, 1600]) {
  return breiten.map((b) => `${src(bild, b)} ${b}w`).join(", ");
}

export const BILDNACHWEIS =
  "Realisierte Wohnbauten aus Südbaden. Bildmaterial: S. Burger Bauunternehmen, Elzach.";

export const GALERIE: Bild[] = [
  {
    name: "haus-holz-veranda",
    alt: "Einfamilienhaus mit dunkler Holzfassade und umlaufender weißer Veranda in der Landschaft",
    titel: "Holzhaus mit umlaufender Veranda",
  },
  {
    name: "haus-hang-sonnensegel",
    alt: "Modernes Einfamilienhaus in Hanglage mit Terrasse und grünen Sonnensegeln",
    titel: "Einfamilienhaus in Hanglage",
  },
  {
    name: "haus-hang-teich",
    alt: "Weißes Einfamilienhaus mit Solardach, Terrasse und Naturteich",
    titel: "Wohnhaus mit Terrasse und Naturteich",
  },
  {
    name: "mfh-neubau",
    alt: "Neubau eines Mehrfamilienhauses mit weißer Fassade und dunklen Balkonen",
    titel: "Neubau Mehrfamilienhaus",
  },
  {
    name: "mfh-holzbalkone",
    alt: "Mehrfamilienhaus mit Putzfassade und Balkonen mit Holzverkleidung",
    titel: "Mehrfamilienhaus mit Holzbalkonen",
  },
  {
    name: "haus-hang-garage",
    alt: "Wohnhaus in Hanglage mit begrüntem Sockelgeschoss und Garage",
    titel: "Hanglage mit begrüntem Sockel",
  },
  {
    name: "innen-kueche",
    alt: "Helle offene Küche mit Kochinsel und Eichenparkett",
    titel: "Offene Küche mit Essbereich",
  },
  {
    name: "innen-essen",
    alt: "Esszimmer mit großem Tisch, Pendelleuchten und bodentiefen Fenstern",
    titel: "Wohnen und Essen mit Südlicht",
  },
];
