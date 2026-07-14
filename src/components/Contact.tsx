import { useI18n } from "../i18n";
import { whatsappLink } from "../data/cars";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative bg-night py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">{t("contact_kicker")}</p>
          <h2 className="font-serif text-4xl font-bold text-cream sm:text-5xl">{t("contact_title")}</h2>
          <div className="hairline mx-auto mt-6 w-40" />
          <p className="mx-auto mt-6 max-w-xl text-cream/70">{t("contact_sub")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Location + hours */}
          <div className="rounded-2xl border border-cream/10 bg-navy-2/60 p-8">
            <h3 className="flex items-center gap-3 font-serif text-2xl font-semibold text-cream">
              <IconPin /> {t("contact_address")}
            </h3>
            <a
              href="https://maps.google.com/?q=Al+Mujazf+Auto+Salim+Street+Sulaymaniyah+Iraq"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-gold underline-offset-4 hover:underline"
            >
              Google Maps ↗
            </a>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cream/50">{t("contact_hours_label")}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between border-b border-cream/10 pb-2">
                  <span className="text-cream/80">{t("hours_weekdays")}</span>
                  <span dir="ltr" className="font-semibold text-cream">09:00 – 22:00</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-cream/80">{t("hours_friday")}</span>
                  <span className="font-semibold text-gold">{t("hours_closed")}</span>
                </div>
              </div>
              <p className="mt-5 text-xs text-cream/50">{t("contact_services")}</p>
            </div>
          </div>

          {/* Direct contact */}
          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink("Hello Al Mujazf Auto! I'd like to visit the showroom.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl bg-gold p-6 text-night shadow-lg shadow-gold/20 transition hover:bg-gold-2"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">WhatsApp</p>
                <p className="mt-1 text-xl font-bold">{t("contact_whatsapp")}</p>
              </div>
              <span className="text-3xl transition group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
            </a>

            <ContactRow label={t("contact_phone_label")} value="+964 770 151 2700" href="tel:+9647701512700" />
            <ContactRow label={t("contact_phone_label")} value="+964 770 333 0333" href="tel:+9647703330333" />
            <ContactRow label={t("contact_email_label")} value="arez@almujazf.com" href="mailto:arez@almujazf.com" />
            <ContactRow
              label={t("contact_instagram_label")}
              value="@al_mujazf_auto · 68K"
              href="https://instagram.com/al_mujazf_auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center justify-between rounded-2xl border border-cream/10 bg-navy-2/60 px-6 py-4 transition hover:border-gold/50"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-cream/50">{label}</span>
      <span dir="ltr" className="font-semibold text-cream">{value}</span>
    </a>
  );
}

function IconPin() {
  return (
    <svg className="size-6 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
