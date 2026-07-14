import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar" | "ku";

const dictionaries = {
  en: {
    nav_collection: "Collection",
    nav_about: "About",
    nav_contact: "Contact",
    menu_open: "Open menu",
    menu_close: "Close menu",
    scroll_hint: "Scroll to enter the showroom",
    scroll_hint_mobile: "Scroll down to explore the collection",
    scene_arrive: "Salim Street, Sulaymaniyah",
    scene_doors: "The doors open for you",
    scene_inside: "Welcome inside",
    scene_showroom_kicker: "The Showroom",
    hero_since: "General Trading & Auto Trade — Since 2009",
    hero_tagline: "Where Kurdistan meets the world's finest automobiles",
    hero_cta: "Explore the Collection",
    hero_cta2: "Talk to us on WhatsApp",
    collection_kicker: "The Collection",
    collection_title: "Handpicked. Inspected. Ready.",
    collection_sub:
      "A rotating selection of the world's most desired supercars, armored vehicles and luxury SUVs — available today on our showroom floor.",
    filter_all: "All",
    filter_luxury: "Luxury",
    filter_armored: "Armored",
    filter_performance: "Performance",
    filter_empty: "More vehicles arriving soon in this category.",
    filter_aria: "Vehicle categories",
    badge_new: "New Arrival",
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
    contact_facebook_label: "Facebook",
    contact_hours_label: "Opening hours",
    hours_weekdays: "Saturday – Thursday",
    hours_friday: "Friday",
    hours_closed: "Closed",
    contact_whatsapp: "Chat on WhatsApp",
    contact_whatsapp_brand: "WhatsApp",
    contact_services: "Curbside pickup · In-store pickup",
    maps_link: "Google Maps",
    social_kicker: "Follow the showroom",
    social_title: "See what's new before anyone else",
    social_sub: "Daily arrivals, rare builds and live updates — almost everything happens on Instagram and Facebook first.",
    social_ig_cta: "Open Instagram",
    social_fb_cta: "Open Facebook",
    social_followers_ig: "68K followers",
    social_followers_fb: "138K followers",
    float_whatsapp: "Chat on WhatsApp",
    float_instagram: "Instagram",
    float_facebook: "Facebook",
    footer_rights: "All rights reserved.",
    footer_desc: "For general trading & auto trade — Sulaymaniyah, Kurdistan Region, Iraq.",
    wa_msg_site: "Hello Al Mujazf Auto! I found you through your website.",
    wa_msg_cars: "Hello Al Mujazf Auto! I'd like to ask about your cars.",
    wa_msg_visit: "Hello Al Mujazf Auto! I'd like to visit the showroom.",
    wa_msg_car: "Hello Al Mujazf Auto! I'm interested in the {name}.",
  },
  ar: {
    nav_collection: "التشكيلة",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    menu_open: "فتح القائمة",
    menu_close: "إغلاق القائمة",
    scroll_hint: "مرّر للدخول إلى صالة العرض",
    scroll_hint_mobile: "مرّر لأسفل لاستكشاف التشكيلة",
    scene_arrive: "شارع سالم، السليمانية",
    scene_doors: "الأبواب تُفتح لكم",
    scene_inside: "أهلاً بكم في الداخل",
    scene_showroom_kicker: "صالة العرض",
    hero_since: "للتجارة العامة وتجارة السيارات — منذ 2009",
    hero_tagline: "حيث تلتقي كردستان بأرقى سيارات العالم",
    hero_cta: "استكشف التشكيلة",
    hero_cta2: "تواصل معنا عبر واتساب",
    collection_kicker: "التشكيلة",
    collection_title: "مختارة بعناية. مفحوصة. جاهزة.",
    collection_sub:
      "تشكيلة متجددة من أكثر السيارات الخارقة والمدرعة وسيارات الدفع الرباعي الفاخرة طلباً في العالم — متوفرة اليوم في صالة عرضنا.",
    filter_all: "الكل",
    filter_luxury: "فاخرة",
    filter_armored: "مدرعة",
    filter_performance: "أداء",
    filter_empty: "سيارات جديدة قادمة قريباً في هذه الفئة.",
    filter_aria: "فئات السيارات",
    badge_new: "وصل حديثاً",
    card_enquire: "استفسر عبر واتساب",
    about_kicker: "الدار",
    about_title: "بيت السيارات الاستثنائية في السليمانية",
    about_body:
      "تأسست المجزف أوتو عام 2009، وأصبحت واحدة من أكثر الأسماء ثقةً في كردستان في مجال التجارة العامة وتجارة السيارات. من لامبورغيني الرائدة إلى سيارات برابوس المدرعة، كل سيارة في صالتنا يتم اختيارها وفحصها وتسليمها بشفافية تامة.",
    stat_years: "سنوات الخبرة",
    stat_followers: "متابعون عبر المنصات",
    stat_inspected: "سيارات مفحوصة وموثّقة",
    stat_support: "متاحون على واتساب",
    contact_kicker: "زوروا صالة العرض",
    contact_title: "الأبواب مفتوحة",
    contact_sub: "تعالوا لمشاهدة التشكيلة بأنفسكم، أو تواصلوا معنا مباشرة — نرد بسرعة.",
    contact_address: "شارع سالم، السليمانية، العراق",
    contact_phone_label: "الهاتف",
    contact_email_label: "البريد",
    contact_instagram_label: "إنستغرام",
    contact_facebook_label: "فيسبوك",
    contact_hours_label: "ساعات العمل",
    hours_weekdays: "السبت – الخميس",
    hours_friday: "الجمعة",
    hours_closed: "مغلق",
    contact_whatsapp: "تواصل عبر واتساب",
    contact_whatsapp_brand: "واتساب",
    contact_services: "استلام خارجي · استلام من المتجر",
    maps_link: "خرائط جوجل",
    social_kicker: "تابعوا صالة العرض",
    social_title: "شاهدوا الجديد قبل الجميع",
    social_sub: "وصول يومي، سيارات نادرة وتحديثات مباشرة — معظم المحتوى يظهر أولاً على إنستغرام وفيسبوك.",
    social_ig_cta: "افتح إنستغرام",
    social_fb_cta: "افتح فيسبوك",
    social_followers_ig: "68 ألف متابع",
    social_followers_fb: "138 ألف متابع",
    float_whatsapp: "تواصل عبر واتساب",
    float_instagram: "إنستغرام",
    float_facebook: "فيسبوك",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_desc: "للتجارة العامة وتجارة السيارات — السليمانية، إقليم كردستان، العراق.",
    wa_msg_site: "مرحباً المجزف أوتو! وجدتكم عبر الموقع.",
    wa_msg_cars: "مرحباً المجزف أوتو! أود الاستفسار عن السيارات.",
    wa_msg_visit: "مرحباً المجزف أوتو! أود زيارة صالة العرض.",
    wa_msg_car: "مرحباً المجزف أوتو! أنا مهتم بسيارة {name}.",
  },
  ku: {
    nav_collection: "کۆکردنەوە",
    nav_about: "دەربارەمان",
    nav_contact: "پەیوەندی",
    menu_open: "کردنەوەی مێنیو",
    menu_close: "داخستنی مێنیو",
    scroll_hint: "بۆ چوونە ژوورەوەی شۆوڕووم سکرۆڵ بکە",
    scroll_hint_mobile: "بۆ بینینی کۆکردنەوەکە بسوڕێنە خوارەوە",
    scene_arrive: "شەقامی سالم، سلێمانی",
    scene_doors: "دەرگاکان بۆ ئێوە دەکرێنەوە",
    scene_inside: "بەخێربێن بۆ ژوورەوە",
    scene_showroom_kicker: "شۆوڕووم",
    hero_since: "بازرگانی گشتی و ئۆتۆمبێل — لە ٢٠٠٩ەوە",
    hero_tagline: "لەو شوێنەی کوردستان بە باشترین ئۆتۆمبێلەکانی جیهان دەگات",
    hero_cta: "کۆکردنەوەکە ببینە",
    hero_cta2: "لە واتساپ قسەمان لەگەڵ بکە",
    collection_kicker: "کۆکردنەوە",
    collection_title: "هەڵبژێردراو. پشکنراو. ئامادە.",
    collection_sub:
      "هەڵبژاردەیەکی نوێبووەوە لە داواکراوترین سوپەرکار و ئۆتۆمبێلی زرێپۆش و ئێس یو ڤی لوکس — ئەمڕۆ لە شۆوڕوومەکەمان بەردەستە.",
    filter_all: "هەموو",
    filter_luxury: "لوکس",
    filter_armored: "زرێپۆش",
    filter_performance: "سپۆرت",
    filter_empty: "ئۆتۆمبێلی زیاتر بەم زووانە لەم بەشەدا دەگات.",
    filter_aria: "جۆری ئۆتۆمبێل",
    badge_new: "تازە گەیشتووە",
    card_enquire: "لە واتساپ بپرسە",
    about_kicker: "ماڵەکە",
    about_title: "ماڵی ئۆتۆمبێلە نایابەکان لە سلێمانی",
    about_body:
      "ئەلموجەزف ئۆتۆ لە ساڵی ٢٠٠٩ دامەزراوە و بووەتە یەکێک لە متمانەپێکراوترین ناوەکانی کوردستان لە بواری بازرگانی گشتی و ئۆتۆمبێل. لە لامبۆرگینیەوە تا برابوسی زرێپۆش، هەموو ئۆتۆمبێلێک بە شەفافیەتی تەواو دابین و پشکنین دەکرێت و ڕادەست دەکرێت.",
    stat_years: "ساڵ لە بازاڕدا",
    stat_followers: "شوێنکەوتوو لە پلاتفۆرمەکان",
    stat_inspected: "ئۆتۆمبێلی پشکنراو و پشتڕاستکراو",
    stat_support: "لە واتساپ بەردەستین",
    contact_kicker: "سەردانی شۆوڕوومەکە بکەن",
    contact_title: "دەرگاکان کراوەن",
    contact_sub: "وەرن کۆکردنەوەکە بە چاوی خۆتان ببینن، یان ڕاستەوخۆ پەیوەندیمان پێوە بکەن — بە خێرایی وەڵام دەدەینەوە.",
    contact_address: "شەقامی سالم، سلێمانی، عێراق",
    contact_phone_label: "تەلەفۆن",
    contact_email_label: "ئیمەیڵ",
    contact_instagram_label: "ئینستاگرام",
    contact_facebook_label: "فەیسبووک",
    contact_hours_label: "کاتەکانی کارکردن",
    hours_weekdays: "شەممە – پێنجشەممە",
    hours_friday: "هەینی",
    hours_closed: "داخراوە",
    contact_whatsapp: "لە واتساپ قسە بکە",
    contact_whatsapp_brand: "واتساپ",
    contact_services: "وەرگرتن لە دەرەوە · وەرگرتن لە فرۆشگا",
    maps_link: "گووگڵ ماپس",
    social_kicker: "شۆوڕوومەکە فۆڵۆ بکەن",
    social_title: "نوێیەکان ببینن پێش هەمووان",
    social_sub: "گەیشتنی ڕۆژانە، ئۆتۆمبێلی دەگمەن و نوێکردنەوەی ڕاستەوخۆ — زۆربەی ناوەڕۆک سەرەتا لە ئینستاگرام و فەیسبووک دەردەکەوێت.",
    social_ig_cta: "ئینستاگرام بکەرەوە",
    social_fb_cta: "فەیسبووک بکەرەوە",
    social_followers_ig: "٦٨هەزار فۆڵۆوەر",
    social_followers_fb: "١٣٨هەزار فۆڵۆوەر",
    float_whatsapp: "لە واتساپ قسە بکە",
    float_instagram: "ئینستاگرام",
    float_facebook: "فەیسبووک",
    footer_rights: "هەموو مافەکان پارێزراون.",
    footer_desc: "بۆ بازرگانی گشتی و ئۆتۆمبێل — سلێمانی، هەرێمی کوردستان، عێراق.",
    wa_msg_site: "سڵاو ئەلموجەزف ئۆتۆ! لە ڕێگەی ماڵپەڕەکەتانتانەوە دۆزیمەوە.",
    wa_msg_cars: "سڵاو ئەلموجەزف ئۆتۆ! دەمەوێت دەربارەی ئۆتۆمبێلەکان بپرسم.",
    wa_msg_visit: "سڵاو ئەلموجەزف ئۆتۆ! دەمەوێت سەردانی شۆوڕوومەکە بکەم.",
    wa_msg_car: "سڵاو ئەلموجەزف ئۆتۆ! حەزم لە {name} ـە.",
  },
} as const;

export type TKey = keyof (typeof dictionaries)["en"];

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey, vars?: Record<string, string>) => string;
  dir: "ltr" | "rtl";
  /** Compact button/label class: lowercase spacing for AR/KU, tracked uppercase for EN. */
  labelClass: (extra?: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir: "ltr" | "rtl" = lang === "en" ? "ltr" : "rtl";

  useEffect(() => {
    document.documentElement.lang = lang === "ku" ? "ckb" : lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (key: TKey, vars?: Record<string, string>) => {
    let value: string = dictionaries[lang][key];
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.replace(`{${k}}`, v);
      }
    }
    return value;
  };

  const labelClass = (extra = "") => {
    const base =
      lang === "en"
        ? "uppercase tracking-[0.14em] sm:tracking-widest"
        : "normal-case tracking-normal font-medium";
    return [base, extra].filter(Boolean).join(" ");
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir, labelClass }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
