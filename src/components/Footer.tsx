import { useI18n } from "../i18n";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../data/cars";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-cream/10 bg-navy py-10 pb-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <p className="font-serif text-2xl font-semibold">
          <span className="text-cream">Al Mujazf</span> <span className="gold-gradient-text">Auto</span>
        </p>
        <p className="max-w-md text-sm text-cream/55">{t("footer_desc")}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-cream/60">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
            {t("contact_instagram_label")}
          </a>
          <span className="text-cream/25">·</span>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
            {t("contact_facebook_label")}
          </a>
          <span className="text-cream/25">·</span>
          <a href="mailto:arez@almujazf.com" className="hover:text-gold" dir="ltr">
            arez@almujazf.com
          </a>
        </div>
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} Al Mujazf Auto. {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
}
