import type { TKey } from "../i18n";

export type CarCategory = "luxury" | "armored" | "performance";

export type CarFilter = "all" | CarCategory;

/** Update categories here when the client confirms which cars belong where. */
export const CAR_CATEGORIES: CarCategory[] = ["luxury", "armored", "performance"];

export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  category: CarCategory;
  newArrival?: boolean;
  specs: string[];
}

export const cars: Car[] = [
  {
    id: "revuelto",
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    image: "/images/car-revuelto.jpg",
    category: "performance",
    specs: ["V12 Hybrid · 1015 HP", "0–100 km/h · 2.5s", "350+ km/h"],
  },
  {
    id: "brabus-g800",
    name: "Brabus G800 · Armored",
    brand: "Brabus / Mercedes-AMG",
    image: "/images/car-brabus-g.jpg",
    category: "armored",
    specs: ["4.0L V8 Biturbo · 800 HP", "VR-grade protection", "Widebody carbon kit"],
  },
  {
    id: "sterrato",
    name: "Lamborghini Huracán Sterrato",
    brand: "Lamborghini",
    image: "/images/car-sterrato.jpg",
    category: "performance",
    newArrival: true,
    specs: ["5.2L V10 · 610 HP", "All-terrain supercar", "Rally light pack"],
  },
  {
    id: "urus",
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    image: "/images/car-urus.jpg",
    category: "performance",
    specs: ["4.0L V8 Biturbo · 650 HP", "0–100 km/h · 3.6s", "Super SUV"],
  },
  {
    id: "cullinan",
    name: "Rolls-Royce Cullinan Black Badge",
    brand: "Rolls-Royce",
    image: "/images/car-cullinan.jpg",
    category: "luxury",
    specs: ["6.75L V12 · 600 HP", "Bespoke interior", "The king of luxury SUVs"],
  },
  {
    id: "maybach",
    name: "Mercedes-Maybach S680",
    brand: "Mercedes-Maybach",
    image: "/images/car-maybach.jpg",
    category: "luxury",
    specs: ["6.0L V12 · 621 HP", "Two-tone finish", "First-class rear cabin"],
  },
];

export function filterCars(filter: CarFilter): Car[] {
  if (filter === "all") return cars;
  return cars.filter((c) => c.category === filter);
}

export const WHATSAPP_NUMBER = "9647701512700";
export const INSTAGRAM_URL = "https://instagram.com/al_mujazf_auto";
export const FACEBOOK_URL = "https://www.facebook.com/Almujazf.Auto/";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function categoryFilterKey(category: CarFilter): TKey {
  const map: Record<CarFilter, TKey> = {
    all: "filter_all",
    luxury: "filter_luxury",
    armored: "filter_armored",
    performance: "filter_performance",
  };
  return map[category];
}
