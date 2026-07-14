import { useI18n } from "../i18n";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../data/cars";

export default function SocialStrip() {
  const { t, labelClass } = useI18n();

  return (
    <section id="social" className="relative overflow-hidden bg-navy-2 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-8">
        <p className={`mb-3 text-[10px] font-bold text-gold sm:text-xs ${labelClass()}`}>{t("social_kicker")}</p>
        <h2 className="font-serif text-3xl font-bold text-cream sm:text-5xl">{t("social_title")}</h2>
        <div className="hairline mx-auto mt-5 w-32 sm:mt-6 sm:w-40" />
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-cream/70 sm:mt-6 sm:text-base">{t("social_sub")}</p>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-night/50 p-6 text-start transition hover:-translate-y-1 hover:border-[#dd2a7b]/50 hover:shadow-xl hover:shadow-[#dd2a7b]/10 sm:p-8"
          >
            <div className="absolute -end-6 -top-6 size-28 rounded-full bg-gradient-to-br from-[#f58529]/30 via-[#dd2a7b]/25 to-[#8134af]/30 blur-2xl transition group-hover:scale-125" />
            <div className="relative flex items-start gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-lg">
                <IconInstagram className="size-7" />
              </span>
              <div className="min-w-0">
                <p className={`text-xs font-bold text-cream/50 ${labelClass()}`}>{t("contact_instagram_label")}</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-cream" dir="ltr">
                  @al_mujazf_auto
                </p>
                <p className="mt-1 text-sm text-cream/60">{t("social_followers_ig")}</p>
                <span className={`mt-5 inline-flex rounded-full border border-cream/20 px-4 py-2 text-xs font-bold text-gold transition group-hover:border-gold group-hover:bg-gold group-hover:text-night ${labelClass()}`}>
                  {t("social_ig_cta")} <span aria-hidden className="ms-1 inline-block rtl:rotate-180">→</span>
                </span>
              </div>
            </div>
          </a>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-night/50 p-6 text-start transition hover:-translate-y-1 hover:border-[#1877F2]/50 hover:shadow-xl hover:shadow-[#1877F2]/10 sm:p-8"
          >
            <div className="absolute -end-6 -top-6 size-28 rounded-full bg-[#1877F2]/25 blur-2xl transition group-hover:scale-125" />
            <div className="relative flex items-start gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#1877F2] text-white shadow-lg">
                <IconFacebook className="size-7" />
              </span>
              <div className="min-w-0">
                <p className={`text-xs font-bold text-cream/50 ${labelClass()}`}>{t("contact_facebook_label")}</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-cream">Al Mujazf Auto</p>
                <p className="mt-1 text-sm text-cream/60">{t("social_followers_fb")}</p>
                <span className={`mt-5 inline-flex rounded-full border border-cream/20 px-4 py-2 text-xs font-bold text-gold transition group-hover:border-gold group-hover:bg-gold group-hover:text-night ${labelClass()}`}>
                  {t("social_fb_cta")} <span aria-hidden className="ms-1 inline-block rtl:rotate-180">→</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}
