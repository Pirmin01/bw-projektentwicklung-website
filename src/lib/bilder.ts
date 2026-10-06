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
    name: "mfh-waldkirch-ecke",
    alt: "Neubau-Mehrfamilienhaus mit weißer Putzfassade, grauen Akzentflächen und dunklen Balkonen unter blauem Himmel",
    titel: "Mehrfamilienhaus in Waldkirch",
  },
  {
    name: "haus-hang-sonnensegel",
    alt: "Modernes Einfamilienhaus in Hanglage mit Terrasse und grünen Sonnensegeln",
    titel: "Wohnhaus in Hanglage",
  },
  {
    name: "mfh-waldkirch-balkon",
    alt: "Balkone mit dunklem Aluminiumgeländer an einer weißen Fassade, von unten fotografiert",
    titel: "Balkone und Fassadendetail",
  },
  {
    name: "mfh-waldkirch-front",
    alt: "Frontansicht eines dreigeschossigen Mehrfamilienhauses mit gleichmäßig gegliederter Fassade",
    titel: "Straßenansicht, Waldkirch",
  },
  {
    name: "mfh-holzbalkone",
    alt: "Mehrfamilienhaus mit Putzfassade und Balkonen mit Holzverkleidung",
    titel: "Mehrfamilienhaus mit Holzbalkonen",
  },
  {
    name: "haus-hang-teich",
    alt: "Weißes Wohnhaus mit Solardach, Terrasse und Naturteich",
    titel: "Wohnhaus mit Terrasse und Naturteich",
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
