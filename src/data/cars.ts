import type { TKey } from "../i18n";

export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  badge: TKey;
  specs: string[];
}

export const cars: Car[] = [
  {
    id: "revuelto",
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    image: "/images/car-revuelto.png",
    badge: "badge_flagship",
    specs: ["V12 Hybrid · 1015 HP", "0–100 km/h · 2.5s", "350+ km/h"],
  },
  {
    id: "brabus-g800",
    name: "Brabus G800 · Armored",
    brand: "Brabus / Mercedes-AMG",
    image: "/images/car-brabus-g.png",
    badge: "badge_armored",
    specs: ["4.0L V8 Biturbo · 800 HP", "VR-grade protection", "Widebody carbon kit"],
  },
  {
    id: "sterrato",
    name: "Lamborghini Huracán Sterrato",
    brand: "Lamborghini",
    image: "/images/car-sterrato.png",
    badge: "badge_new",
    specs: ["5.2L V10 · 610 HP", "All-terrain supercar", "Rally light pack"],
  },
  {
    id: "urus",
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    image: "/images/car-urus.png",
    badge: "badge_suv",
    specs: ["4.0L V8 Biturbo · 650 HP", "0–100 km/h · 3.6s", "Super SUV"],
  },
  {
    id: "cullinan",
    name: "Rolls-Royce Cullinan Black Badge",
    brand: "Rolls-Royce",
    image: "/images/car-cullinan.png",
    badge: "badge_suv",
    specs: ["6.75L V12 · 600 HP", "Bespoke interior", "The king of luxury SUVs"],
  },
  {
    id: "maybach",
    name: "Mercedes-Maybach S680",
    brand: "Mercedes-Maybach",
    image: "/images/car-maybach.png",
    badge: "badge_sedan",
    specs: ["6.0L V12 · 621 HP", "Two-tone finish", "First-class rear cabin"],
  },
];

export const WHATSAPP_NUMBER = "9647701512700";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
