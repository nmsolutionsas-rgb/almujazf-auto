import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../i18n";
import {
  CAR_CATEGORIES,
  categoryFilterKey,
  FACEBOOK_URL,
  filterCars,
  INSTAGRAM_URL,
  whatsappLink,
  type CarFilter,
} from "../data/cars";

gsap.registerPlugin(ScrollTrigger);

const FILTERS: CarFilter[] = ["all", ...CAR_CATEGORIES];

export default function Collection() {
  const ref = useRef<HTMLElement>(null);
  const { t, labelClass } = useI18n();
  const [activeFilter, setActiveFilter] = useState<CarFilter>("all");

  const visibleCars = useMemo(() => filterCars(activeFilter), [activeFilter]);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".car-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (i % 3) * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%", once: true },
          }
        );
      });
    }, el);
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="collection" ref={ref} className="relative bg-night py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-8 text-center sm:mb-14">
          {/* Instagram · Facebook — own row above title so they never overlap copy */}
          <div className="mb-5 flex items-center justify-between sm:mb-7">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={t("float_instagram")}
              title={t("float_instagram")}
              className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white shadow-lg shadow-black/30 transition hover:scale-110 sm:size-12"
            >
              <IconInstagram className="size-5 sm:size-6" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={t("float_facebook")}
              title={t("float_facebook")}
              className="grid size-10 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-black/30 transition hover:scale-110 sm:size-12"
            >
              <IconFacebook className="size-5 sm:size-6" />
            </a>
          </div>

          <p className={`mb-3 text-[10px] font-bold text-gold sm:text-xs ${labelClass()}`}>
            {t("collection_kicker")}
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream sm:text-5xl">{t("collection_title")}</h2>
          <div className="hairline mx-auto mt-5 w-32 sm:mt-6 sm:w-40" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-cream/70 sm:mt-6 sm:text-base">
            {t("collection_sub")}
          </p>
        </div>

        <div className="mb-8 flex justify-center sm:mb-12">
          <div
            role="tablist"
            aria-label={t("filter_aria")}
            className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-cream/15 bg-navy-2/50 p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-[11px] font-bold transition sm:px-6 sm:text-xs ${labelClass()} ${
                    active
                      ? "bg-gold text-night shadow-md shadow-gold/20"
                      : "text-cream/65 hover:bg-cream/5 hover:text-cream"
                  }`}
                >
                  {t(categoryFilterKey(filter))}
                </button>
              );
            })}
          </div>
        </div>

        {visibleCars.length === 0 ? (
          <p className="py-16 text-center text-sm text-cream/50">{t("filter_empty")}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {visibleCars.map((car) => (
              <article
                key={car.id}
                className="car-card group flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-navy-2/60 shadow-xl shadow-black/30 transition duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-gold/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    loading="lazy"
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute start-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
                    <span
                      className={`rounded-full bg-night/80 px-3 py-1.5 text-[10px] font-bold text-gold backdrop-blur sm:text-[11px] ${labelClass()}`}
                    >
                      {t(categoryFilterKey(car.category))}
                    </span>
                    {car.newArrival && (
                      <span
                        className={`rounded-full border border-gold/40 bg-night/80 px-3 py-1.5 text-[10px] font-bold text-cream backdrop-blur sm:text-[11px] ${labelClass()}`}
                      >
                        {t("badge_new")}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/50 sm:text-[11px]" dir="ltr">
                    {car.brand}
                  </p>
                  <h3 className="mt-1 min-h-[2.5em] font-serif text-xl font-semibold leading-snug text-cream sm:text-2xl" dir="ltr">
                    {car.name}
                  </h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-cream/65" dir="ltr">
                    {car.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="size-1 shrink-0 rounded-full bg-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <a
                      href={whatsappLink(t("wa_msg_car", { name: car.name }))}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex h-11 w-full items-center justify-center whitespace-nowrap rounded-full border border-gold/60 px-3 text-center text-xs font-bold text-gold transition hover:bg-gold hover:text-night ${labelClass()}`}
                    >
                      {t("card_enquire")}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
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
