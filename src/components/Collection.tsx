import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../i18n";
import { cars, whatsappLink } from "../data/cars";

gsap.registerPlugin(ScrollTrigger);

export default function Collection() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".car-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: (i % 3) * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="collection" ref={ref} className="relative bg-night py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">{t("collection_kicker")}</p>
          <h2 className="font-serif text-4xl font-bold text-cream sm:text-5xl">{t("collection_title")}</h2>
          <div className="hairline mx-auto mt-6 w-40" />
          <p className="mx-auto mt-6 max-w-2xl text-cream/70">{t("collection_sub")}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.id}
              className="car-card group overflow-hidden rounded-2xl border border-cream/10 bg-navy-2/60 shadow-xl shadow-black/30 transition duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-gold/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute start-4 top-4 rounded-full bg-night/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold backdrop-blur">
                  {t(car.badge)}
                </span>
              </div>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/50">{car.brand}</p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-cream">{car.name}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-cream/65">
                  {car.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hello Al Mujazf Auto! I'm interested in the ${car.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block w-full rounded-full border border-gold/60 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-gold transition hover:bg-gold hover:text-night"
                >
                  {t("card_enquire")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
