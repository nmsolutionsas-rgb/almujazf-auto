import { useI18n } from "../i18n";
import { FACEBOOK_URL, INSTAGRAM_URL, whatsappLink } from "../data/cars";

export default function Contact() {
  const { t, labelClass } = useI18n();

  return (
    <section id="contact" className="relative bg-night py-16 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className={`mb-3 text-[10px] font-bold text-gold sm:text-xs ${labelClass()}`}>{t("contact_kicker")}</p>
          <h2 className="font-serif text-3xl font-bold text-cream sm:text-5xl">{t("contact_title")}</h2>
          <div className="hairline mx-auto mt-5 w-32 sm:mt-6 sm:w-40" />
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-cream/70 sm:mt-6 sm:px-0 sm:text-base">
            {t("contact_sub")}
          </p>
        </div>

        <div className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2">
          <div className="flex h-full flex-col rounded-2xl border border-cream/10 bg-navy-2/60 p-5 sm:p-8">
            <h3 className="flex items-start gap-3 font-serif text-xl font-semibold leading-snug text-cream sm:text-2xl">
              <IconPin /> {t("contact_address")}
            </h3>
            <a
              href="https://maps.google.com/?q=Al+Mujazf+Auto+Salim+Street+Sulaymaniyah+Iraq"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-gold underline-offset-4 hover:underline"
            >
              {t("maps_link")} ↗
            </a>

            <div className="mt-8 flex flex-1 flex-col">
              <p className={`mb-3 text-xs font-bold text-cream/50 ${labelClass()}`}>{t("contact_hours_label")}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between gap-3 border-b border-cream/10 pb-2">
                  <span className="text-cream/80">{t("hours_weekdays")}</span>
                  <span dir="ltr" className="shrink-0 font-semibold text-cream">
                    09:00 – 22:00
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 pb-1">
                  <span className="text-cream/80">{t("hours_friday")}</span>
                  <span className="shrink-0 font-semibold text-gold">{t("hours_closed")}</span>
                </div>
              </div>
              <p className="mt-auto pt-8 text-xs text-cream/50">{t("contact_services")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink(t("wa_msg_visit"))}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl bg-gold p-5 text-night shadow-lg shadow-gold/20 transition hover:bg-gold-2 sm:p-6"
            >
              <div>
                <p className={`text-xs font-bold opacity-70 ${labelClass()}`}>{t("contact_whatsapp_brand")}</p>
                <p className="mt-1 text-lg font-bold sm:text-xl">{t("contact_whatsapp")}</p>
              </div>
              <span className="text-3xl transition group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
                →
              </span>
            </a>

            <ContactRow label={t("contact_phone_label")} value="+964 770 151 2700" href="tel:+9647701512700" />
            <ContactRow label={t("contact_phone_label")} value="+964 770 333 0333" href="tel:+9647703330333" />
            <ContactRow label={t("contact_email_label")} value="arez@almujazf.com" href="mailto:arez@almujazf.com" />
            <ContactRow
              label={t("contact_instagram_label")}
              value="@al_mujazf_auto · 68K"
              href={INSTAGRAM_URL}
            />
            <ContactRow label={t("contact_facebook_label")} value="Al Mujazf Auto · 138K" href={FACEBOOK_URL} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  const { labelClass } = useI18n();
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex flex-col gap-1 rounded-2xl border border-cream/10 bg-navy-2/60 px-5 py-4 transition hover:border-gold/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
    >
      <span className={`text-[10px] font-bold text-cream/50 sm:text-xs ${labelClass()}`}>{label}</span>
      <span dir="ltr" className="text-sm font-semibold text-cream sm:text-base">
        {value}
      </span>
    </a>
  );
}

function IconPin() {
  return (
    <svg className="size-6 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}
