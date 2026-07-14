import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar" | "ku";

const dictionaries = {
  en: {
    nav_collection: "Collection",
    nav_about: "About",
    nav_contact: "Contact",
    nav_visit: "Visit Us",
    scroll_hint: "Scroll to enter the showroom",
    scene_arrive: "Salim Street, Sulaymaniyah",
    scene_doors: "The doors open for you",
    scene_inside: "Welcome inside",
    hero_since: "General Trading & Auto Trade — Since 2009",
    hero_tagline: "Where Kurdistan meets the world's finest automobiles",
    hero_cta: "Explore the Collection",
    hero_cta2: "Talk to us on WhatsApp",
    collection_kicker: "The Collection",
    collection_title: "Handpicked. Inspected. Ready.",
    collection_sub:
      "A rotating selection of the world's most desired supercars, armored vehicles and luxury SUVs — available today on our showroom floor.",
    badge_flagship: "Flagship",
    badge_armored: "Armored",
    badge_new: "New Arrival",
    badge_suv: "Luxury SUV",
    badge_supercar: "Supercar",
    badge_sedan: "Executive",
    card_enquire: "Enquire on WhatsApp",
    about_kicker: "The House",
    about_title: "Sulaymaniyah's home of extraordinary cars",
    about_body:
      "Established in 2009, Al Mujazf Auto has grown into one of Kurdistan's most trusted names in general trading and the automobile business. From flagship Lamborghinis to armored Brabus builds, every car on our floor is sourced, inspected and delivered with total transparency.",
    stat_years: "Years in business",
    stat_followers: "Followers across platforms",
    stat_inspected: "Inspected & verified cars",
    stat_support: "Reachable on WhatsApp",
    contact_kicker: "Visit the Showroom",
    contact_title: "The doors are open",
    contact_sub: "Come see the collection in person, or reach us directly — we reply fast.",
    contact_address: "Salim Street, As Sulaymaniyah, Iraq",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    contact_instagram_label: "Instagram",
    contact_hours_label: "Opening hours",
    hours_weekdays: "Saturday – Thursday",
    hours_friday: "Friday",
    hours_closed: "Closed",
    contact_whatsapp: "Chat on WhatsApp",
    contact_services: "Curbside pickup · In-store pickup",
    footer_rights: "All rights reserved.",
    footer_desc: "For general trading & auto trade — Sulaymaniyah, Kurdistan Region, Iraq.",
  },
  ar: {
    nav_collection: "التشكيلة",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    nav_visit: "زورونا",
    scroll_hint: "مرّر للدخول إلى صالة العرض",
    scene_arrive: "شارع سالم، السليمانية",
    scene_doors: "الأبواب تُفتح لكم",
    scene_inside: "أهلاً بكم في الداخل",
    hero_since: "للتجارة العامة وتجارة السيارات — منذ 2009",
    hero_tagline: "حيث تلتقي كردستان بأرقى سيارات العالم",
    hero_cta: "استكشف التشكيلة",
    hero_cta2: "تواصل معنا عبر واتساب",
    collection_kicker: "التشكيلة",
    collection_title: "مختارة بعناية. مفحوصة. جاهزة.",
    collection_sub:
      "تشكيلة متجددة من أكثر السيارات الخارقة والمدرعة وسيارات الدفع الرباعي الفاخرة طلباً في العالم — متوفرة اليوم في صالة عرضنا.",
    badge_flagship: "الطراز الرائد",
    badge_armored: "مدرعة",
    badge_new: "وصل حديثاً",
    badge_suv: "دفع رباعي فاخر",
    badge_supercar: "سيارة خارقة",
    badge_sedan: "سيدان فاخرة",
    card_enquire: "استفسر عبر واتساب",
    about_kicker: "الدار",
    about_title: "بيت السيارات الاستثنائية في السليمانية",
    about_body:
      "تأسست المجزف أوتو عام 2009، وأصبحت واحدة من أكثر الأسماء ثقةً في كردستان في مجال التجارة العامة وتجارة السيارات. من لامبورغيني الرائدة إلى سيارات برابوس المدرعة، كل سيارة في صالتنا يتم اختيارها وفحصها وتسليمها بشفافية تامة.",
    stat_years: "سنة من الخبرة",
    stat_followers: "متابع عبر المنصات",
    stat_inspected: "سيارات مفحوصة وموثّقة",
    stat_support: "متاحون على واتساب",
    contact_kicker: "زوروا صالة العرض",
    contact_title: "الأبواب مفتوحة",
    contact_sub: "تعالوا لمشاهدة التشكيلة بأنفسكم، أو تواصلوا معنا مباشرة — نرد بسرعة.",
    contact_address: "شارع سالم، السليمانية، العراق",
    contact_phone_label: "الهاتف",
    contact_email_label: "البريد الإلكتروني",
    contact_instagram_label: "إنستغرام",
    contact_hours_label: "ساعات العمل",
    hours_weekdays: "السبت – الخميس",
    hours_friday: "الجمعة",
    hours_closed: "مغلق",
    contact_whatsapp: "تواصل عبر واتساب",
    contact_services: "استلام خارجي · استلام من المتجر",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_desc: "للتجارة العامة وتجارة السيارات — السليمانية، إقليم كردستان، العراق.",
  },
  ku: {
    nav_collection: "کۆلێکشن",
    nav_about: "دەربارە",
    nav_contact: "پەیوەندی",
    nav_visit: "سەردانمان بکەن",
    scroll_hint: "بۆ چوونە ژوورەوەی شۆوڕوومەکە سکرۆڵ بکە",
    scene_arrive: "شەقامی سالم، سلێمانی",
    scene_doors: "دەرگاکان بۆ ئێوە دەکرێنەوە",
    scene_inside: "بەخێربێن بۆ ژوورەوە",
    hero_since: "بازرگانی گشتی و بازرگانی ئۆتۆمبێل — لە ٢٠٠٩ەوە",
    hero_tagline: "لەو شوێنەی کوردستان بە باشترین ئۆتۆمبێلەکانی جیهان دەگات",
    hero_cta: "کۆلێکشنەکە ببینە",
    hero_cta2: "لە واتسئاپ قسەمان لەگەڵ بکە",
    collection_kicker: "کۆلێکشن",
    collection_title: "هەڵبژێردراو. پشکنراو. ئامادە.",
    collection_sub:
      "هەڵبژاردەیەکی نوێبووەوە لە داواکراوترین سوپەرکار و ئۆتۆمبێلی زرێپۆش و SUVە لوکسەکانی جیهان — ئەمڕۆ لە شۆوڕوومەکەمان بەردەستە.",
    badge_flagship: "فلاگشیپ",
    badge_armored: "زرێپۆش",
    badge_new: "تازە گەیشتووە",
    badge_suv: "SUVی لوکس",
    badge_supercar: "سوپەرکار",
    badge_sedan: "سیدانی بەرز",
    card_enquire: "لە واتسئاپ بپرسە",
    about_kicker: "ماڵەکە",
    about_title: "ماڵی ئۆتۆمبێلە نایابەکان لە سلێمانی",
    about_body:
      "ئەلموجەزف ئۆتۆ لە ساڵی ٢٠٠٩ دامەزراوە و بووەتە یەکێک لە متمانەپێکراوترین ناوەکانی کوردستان لە بواری بازرگانی گشتی و بازرگانی ئۆتۆمبێل. لە لامبۆرگینی فلاگشیپەوە تا برابوسی زرێپۆش، هەموو ئۆتۆمبێلێک لە شۆوڕوومەکەمان بە شەفافیەتی تەواو دابین دەکرێت و پشکنراوە و ڕادەستدەکرێت.",
    stat_years: "ساڵ لە بازاڕدا",
    stat_followers: "فۆڵۆوەر لە پلاتفۆرمەکان",
    stat_inspected: "ئۆتۆمبێلی پشکنراو و پشتڕاستکراو",
    stat_support: "لە واتسئاپ بەردەستین",
    contact_kicker: "سەردانی شۆوڕوومەکە بکەن",
    contact_title: "دەرگاکان کراوەن",
    contact_sub: "وەرن کۆلێکشنەکە بە چاوی خۆتان ببینن، یان ڕاستەوخۆ پەیوەندیمان پێوە بکەن — بە خێرایی وەڵام دەدەینەوە.",
    contact_address: "شەقامی سالم، سلێمانی، عێراق",
    contact_phone_label: "تەلەفۆن",
    contact_email_label: "ئیمەیڵ",
    contact_instagram_label: "ئینستاگرام",
    contact_hours_label: "کاتەکانی کارکردن",
    hours_weekdays: "شەممە – پێنجشەممە",
    hours_friday: "هەینی",
    hours_closed: "داخراوە",
    contact_whatsapp: "لە واتسئاپ قسە بکە",
    contact_services: "وەرگرتن لە دەرەوە · وەرگرتن لە فرۆشگا",
    footer_rights: "هەموو مافەکان پارێزراون.",
    footer_desc: "بۆ بازرگانی گشتی و بازرگانی ئۆتۆمبێل — سلێمانی، هەرێمی کوردستان، عێراق.",
  },
} as const;

export type TKey = keyof (typeof dictionaries)["en"];

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir: "ltr" | "rtl" = lang === "en" ? "ltr" : "rtl";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (key: TKey) => dictionaries[lang][key];

  return <I18nContext.Provider value={{ lang, setLang, t, dir }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
