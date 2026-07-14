import { useEffect, useState } from "react";
import { useI18n, type Lang } from "../i18n";
import { whatsappLink } from "../data/cars";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "ع" },
  { code: "ku", label: "کو" },
];

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-night/85 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-gold/60 bg-navy font-serif text-xl font-bold text-gold">
            M
          </span>
          <span className="font-serif text-xl font-semibold tracking-wide text-cream sm:text-2xl">
            Al Mujazf <span className="gold-gradient-text">Auto</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest text-cream/80 md:flex">
          <a href="#collection" className="transition hover:text-gold">{t("nav_collection")}</a>
          <a href="#about" className="transition hover:text-gold">{t("nav_about")}</a>
          <a href="#contact" className="transition hover:text-gold">{t("nav_contact")}</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-cream/20">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1.5 text-xs font-semibold transition ${
                  lang === l.code ? "bg-gold text-night" : "text-cream/70 hover:text-cream"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href={whatsappLink("Hello Al Mujazf Auto! I found you through your website.")}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-gold/70 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold transition hover:bg-gold hover:text-night sm:block"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
