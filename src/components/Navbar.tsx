import { useEffect, useState } from "react";
import { useI18n, type Lang } from "../i18n";
import { whatsappLink } from "../data/cars";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "ع" },
  { code: "ku", label: "کو" },
];

export default function Navbar() {
  const { t, lang, setLang, labelClass } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#collection", label: t("nav_collection") },
    { href: "#about", label: t("nav_about") },
    { href: "#contact", label: t("nav_contact") },
  ];

  const waHref = whatsappLink(t("wa_msg_site"));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? "bg-night/90 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-8 sm:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/60 bg-navy font-serif text-lg font-bold text-gold sm:size-10 sm:text-xl">
            M
          </span>
          <span className="hidden truncate font-serif text-lg font-semibold tracking-wide text-cream sm:block sm:text-2xl">
            Al Mujazf <span className="gold-gradient-text">Auto</span>
          </span>
        </a>

        <div className={`hidden items-center gap-6 text-sm text-cream/80 md:flex md:gap-8 ${labelClass()}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-gold">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex overflow-hidden rounded-full border border-cream/20">
            {langs.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`px-2.5 py-1.5 text-[11px] font-semibold transition sm:px-3 sm:text-xs ${
                  lang === l.code ? "bg-gold text-night" : "text-cream/70 hover:text-cream"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className={`hidden rounded-full border border-gold/70 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold hover:text-night sm:block ${labelClass()}`}
          >
            {t("contact_whatsapp_brand")}
          </a>

          <button
            type="button"
            aria-label={menuOpen ? t("menu_close") : t("menu_open")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-full border border-cream/25 text-cream md:hidden"
          >
            {menuOpen ? (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-cream/10 bg-night/95 px-4 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3.5 text-sm font-semibold text-cream/90 transition hover:bg-cream/5 hover:text-gold ${labelClass()}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className={`mt-2 rounded-full bg-gold px-4 py-3.5 text-center text-xs font-bold text-night ${labelClass()}`}
            >
              {t("contact_whatsapp_brand")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
