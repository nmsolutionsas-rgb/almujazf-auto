import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../i18n";
import { whatsappLink } from "../data/cars";

gsap.registerPlugin(ScrollTrigger);

// Only true phones: narrow + touch. Half a PC window keeps the desktop cinematic hero.
const PHONE_MQ = "(max-width: 640px) and (hover: none), (max-width: 640px) and (pointer: coarse)";

function useIsPhone() {
  const [isPhone, setIsPhone] = useState(
    () => typeof window !== "undefined" && window.matchMedia(PHONE_MQ).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(PHONE_MQ);
    const update = () => setIsPhone(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isPhone;
}

export default function CinematicHero() {
  const isPhone = useIsPhone();
  if (isPhone) return <MobileHero />;
  return <DesktopHero />;
}

function MobileHero() {
  const { t, labelClass } = useI18n();

  return (
    <section id="top" className="hero-screen relative overflow-hidden bg-night">
      <img
        src="/images/facade-mobile.jpg"
        alt="Al Mujazf Auto showroom exterior"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/40 via-transparent to-night/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(7,11,20,0.55))]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-10 pt-20 text-center">
        <p className="mb-2 max-w-sm text-[10px] font-semibold text-gold/90 sm:text-xs">
          {t("hero_since")}
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-cream">
          Al Mujazf <span className="gold-gradient-text">Auto</span>
        </h1>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">{t("hero_tagline")}</p>
        <div className="mt-6 flex w-full max-w-xs flex-col gap-3">
          <a
            href="#collection"
            className={`rounded-full bg-gold px-6 py-3 text-center text-xs font-bold text-night shadow-lg shadow-gold/25 ${labelClass()}`}
          >
            {t("hero_cta")}
          </a>
          <a
            href={whatsappLink(t("wa_msg_cars"))}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border border-cream/30 px-6 py-3 text-center text-xs font-semibold text-cream ${labelClass()}`}
          >
            {t("hero_cta2")}
          </a>
        </div>
        <p className="mt-8 text-[9px] font-medium text-cream/55 sm:text-[10px]">{t("scroll_hint_mobile")}</p>
      </div>
    </section>
  );
}

function DesktopHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { t, labelClass } = useI18n();
  const [hintHidden, setHintHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHintHidden(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const facade = wrap.querySelector(".scene-facade");

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(".scene-facade", { opacity: 0 });
        gsap.set(".hero-veil", { opacity: 0.72 });
        gsap.set([".brand-line-1", ".brand-line-2", ".brand-ctas"], {
          opacity: 1,
          y: 0,
          scale: 1,
          pointerEvents: "auto",
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "none", force3D: true },
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "+=3200",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          onLeave: () => facade?.classList.add("is-dimmed"),
          onEnterBack: () => facade?.classList.remove("is-dimmed"),
        },
      });

      tl.fromTo(".scene-facade", { scale: 1 }, { scale: 1.18, duration: 2.4 }, 0)
        .fromTo(".cap-1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 0.15)
        .to(".cap-1", { opacity: 0, y: -20, duration: 0.4 }, 1.8)
        .to(
          ".scene-facade",
          {
            opacity: 0,
            duration: 0.6,
            onStart: () => facade?.classList.add("is-dimmed"),
            onReverseComplete: () => facade?.classList.remove("is-dimmed"),
          },
          2.1
        );

      tl.fromTo(
        ".scene-entrance",
        { opacity: 0, scale: 1.04, transformOrigin: "50% 58%" },
        { opacity: 1, duration: 0.6 },
        2.1
      )
        .to(".scene-entrance", { scale: 1.85, ease: "power1.in", duration: 2.4 }, 2.1)
        .fromTo(".cap-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 2.5)
        .to(".cap-2", { opacity: 0, y: -20, duration: 0.4 }, 3.9)
        .to(".scene-entrance", { opacity: 0, duration: 0.6 }, 4.3);

      tl.fromTo(".scene-showroom", { opacity: 0, scale: 1 }, { opacity: 1, duration: 0.6 }, 4.3)
        .to(".scene-showroom", { scale: 1.22, duration: 2.6 }, 4.3)
        .fromTo(".cap-3", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 4.7)
        .to(".cap-3", { opacity: 0, y: -20, duration: 0.4 }, 5.6);

      tl.to(".hero-veil", { opacity: 0.72, duration: 0.8 }, 5.9)
        .fromTo(
          ".brand-line-1",
          { opacity: 0, y: 28, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          6.1
        )
        .fromTo(".brand-line-2", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 6.5)
        .fromTo(
          ".brand-ctas",
          { opacity: 0, y: 16, pointerEvents: "none" },
          { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.7 },
          6.9
        );
    }, wrap);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), 180);
    };
    window.addEventListener("orientationchange", onResize);
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("orientationchange", onResize);
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <div id="top" ref={wrapRef} className="hero-screen relative overflow-hidden bg-night">
      <div className="scene-facade hero-scene absolute inset-0">
        <img
          src="/images/facade-real-strobe.jpg"
          alt="Al Mujazf Auto showroom exterior"
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-center"
        />
        <div className="strobe-blue pointer-events-none absolute left-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.5),transparent_68%)]" />
        <div className="strobe-red pointer-events-none absolute left-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.5),transparent_68%)]" />
        <div className="strobe-blue pointer-events-none absolute right-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.5),transparent_68%)]" />
        <div className="strobe-red pointer-events-none absolute right-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.5),transparent_68%)]" />
      </div>

      <div className="scene-entrance hero-scene absolute inset-0 opacity-0">
        <img
          src="/images/entrance-clean.jpg"
          alt="The entrance of the Al Mujazf Auto showroom"
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="scene-showroom hero-scene absolute inset-0 opacity-0">
        <img
          src="/images/showroom.jpg"
          alt="Inside the Al Mujazf Auto showroom"
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(7,11,20,0.75))]" />
      <div className="hero-veil pointer-events-none absolute inset-0 bg-night opacity-0" />

      <Caption className="cap-1" kicker="Al Mujazf Auto" text={t("scene_arrive")} />
      <Caption className="cap-2" kicker="Al Mujazf Auto" text={t("scene_doors")} />
      <Caption className="cap-3" kicker={t("scene_showroom_kicker")} text={t("scene_inside")} />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="brand-line-2 mb-4 max-w-xl text-xs font-semibold text-gold/90 opacity-0">
          {t("hero_since")}
        </p>
        <h1 className="brand-line-1 inline-flex max-w-full flex-nowrap items-baseline justify-center gap-x-[0.28em] px-2 font-serif text-[clamp(2.25rem,7vw,5.5rem)] font-bold leading-none whitespace-nowrap opacity-0">
          <span className="text-cream">Al Mujazf</span>
          <span className="gold-gradient-text">Auto</span>
        </h1>
        <p className="brand-line-2 mt-5 max-w-xl text-base text-cream/80 opacity-0 sm:text-lg">{t("hero_tagline")}</p>
        <div className="brand-ctas mt-9 flex flex-col items-center gap-4 opacity-0 sm:flex-row" style={{ pointerEvents: "none" }}>
          <a
            href="#collection"
            className={`rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-night shadow-lg shadow-gold/25 transition hover:bg-gold-2 ${labelClass()}`}
          >
            {t("hero_cta")}
          </a>
          <a
            href={whatsappLink(t("wa_msg_cars"))}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold ${labelClass()}`}
          >
            {t("hero_cta2")}
          </a>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-cream/80 transition-opacity duration-500 ${
          hintHidden ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className={`text-[11px] font-medium ${labelClass()}`}>{t("scroll_hint")}</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/40 p-1">
          <span className="size-1.5 animate-bounce rounded-full bg-gold" />
        </span>
      </div>
    </div>
  );
}

function Caption({ className, kicker, text }: { className: string; kicker: string; text: string }) {
  const { labelClass } = useI18n();
  return (
    <div
      className={`${className} pointer-events-none absolute inset-x-0 bottom-24 z-10 flex flex-col items-center gap-2 px-6 text-center opacity-0`}
    >
      <span className={`text-[11px] font-bold text-gold ${labelClass()}`}>{kicker}</span>
      <span className="font-serif text-3xl font-medium text-cream drop-shadow-lg sm:text-4xl">{text}</span>
    </div>
  );
}
