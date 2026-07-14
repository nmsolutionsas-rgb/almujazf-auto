import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../i18n";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 17, suffix: "+", key: "stat_years" as const },
  { value: 206, suffix: "K+", key: "stat_followers" as const },
  { value: 100, suffix: "%", key: "stat_inspected" as const },
  { value: 24, suffix: "/7", key: "stat_support" as const },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { t, labelClass } = useI18n();

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((num) => {
        const target = Number(num.dataset.value);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: num, start: "top 85%", once: true },
          onUpdate: () => {
            num.textContent = Math.round(obj.v).toLocaleString("en-US");
          },
        });
      });
      gsap.fromTo(
        ".about-copy",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-copy", start: "top 85%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-navy py-16 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{ backgroundImage: "url(/images/facade-real.jpg)", backgroundSize: "cover", backgroundPosition: "center 40%" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night via-transparent to-night" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-8">
        <div className="about-copy">
          <p className={`mb-3 text-[10px] font-bold text-gold sm:text-xs ${labelClass()}`}>{t("about_kicker")}</p>
          <h2 className="font-serif text-3xl font-bold text-cream sm:text-5xl">{t("about_title")}</h2>
          <div className="hairline mx-auto mt-5 w-32 sm:mt-6 sm:w-40" />
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-cream/75 sm:mt-8 sm:text-lg">{t("about_body")}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.key} className="rounded-2xl border border-cream/10 bg-night/60 p-4 backdrop-blur sm:p-6">
              <div className="font-serif text-3xl font-bold text-gold sm:text-5xl" dir="ltr">
                <span className="stat-num" data-value={s.value}>
                  0
                </span>
                <span>{s.suffix}</span>
              </div>
              <p className={`mt-2 text-[10px] font-medium leading-snug text-cream/60 sm:text-xs ${labelClass()}`}>
                {t(s.key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
