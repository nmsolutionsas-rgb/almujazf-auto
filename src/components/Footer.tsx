import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-cream/10 bg-navy py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <p className="font-serif text-2xl font-semibold">
          <span className="text-cream">Al Mujazf</span> <span className="gold-gradient-text">Auto</span>
        </p>
        <p className="max-w-md text-sm text-cream/55">{t("footer_desc")}</p>
        <div className="flex items-center gap-5 text-sm text-cream/60">
          <a href="https://instagram.com/al_mujazf_auto" target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a>
          <span className="text-cream/25">·</span>
          <a href="https://www.facebook.com/almujazfauto" target="_blank" rel="noreferrer" className="hover:text-gold">Facebook</a>
          <span className="text-cream/25">·</span>
          <a href="mailto:arez@almujazf.com" className="hover:text-gold">arez@almujazf.com</a>
        </div>
        <p className="text-xs text-cream/40">© {new Date().getFullYear()} Al Mujazf Auto. {t("footer_rights")}</p>
      </div>
    </footer>
  );
}
