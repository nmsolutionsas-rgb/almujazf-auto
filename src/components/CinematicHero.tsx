import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../i18n";
import { whatsappLink } from "../data/cars";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useI18n();
  const [hintHidden, setHintHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHintHidden(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "+=4200",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Scene 1 — approaching the facade
      tl.fromTo(".scene-facade", { scale: 1 }, { scale: 1.28, duration: 3 }, 0)
        .fromTo(".cap-1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .to(".cap-1", { opacity: 0, y: -30, duration: 0.5 }, 2.2)
        .to(".scene-facade", { opacity: 0, duration: 0.8 }, 2.6);

      // Scene 2 — approaching the entrance doors
      tl.fromTo(
        ".scene-entrance",
        { opacity: 0, scale: 1.05, transformOrigin: "50% 58%" },
        { opacity: 1, duration: 0.8 },
        2.6
      )
        .to(".scene-entrance", { scale: 2.4, ease: "power1.in", duration: 3.2 }, 2.6)
        .fromTo(".cap-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 3.1)
        .to(".cap-2", { opacity: 0, y: -30, duration: 0.5 }, 5.0)
        .to(".scene-entrance", { opacity: 0, duration: 0.8 }, 5.5);

      // Scene 3 — inside the showroom, gliding down the aisle
      tl.fromTo(".scene-showroom", { opacity: 0, scale: 1 }, { opacity: 1, duration: 0.8 }, 5.5)
        .to(".scene-showroom", { scale: 1.35, duration: 3.5 }, 5.5)
        .fromTo(".cap-3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, 6.0)
        .to(".cap-3", { opacity: 0, y: -30, duration: 0.5 }, 7.2);

      // Scene 4 — brand reveal over the Revuelto
      tl.to(".hero-veil", { opacity: 0.72, duration: 1 }, 7.6)
        .fromTo(
          ".brand-line-1",
          { opacity: 0, y: 60, letterSpacing: "0.4em" },
          { opacity: 1, y: 0, letterSpacing: "0.12em", duration: 1.2 },
          7.9
        )
        .fromTo(".brand-line-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 8.4)
        .fromTo(".brand-ctas", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 8.9);

      // Scene 1: each G-Class flashes blue and red alternately, like a real siren
      gsap.fromTo(".strobe-blue", { opacity: 0 }, { opacity: 0.55, repeat: -1, yoyo: true, duration: 0.3, ease: "sine.inOut" });
      gsap.fromTo(".strobe-red", { opacity: 0.55 }, { opacity: 0, repeat: -1, yoyo: true, duration: 0.3, ease: "sine.inOut" });
    }, wrap);

    return () => ctx.revert();
  }, [lang]);

  return (
    <div id="top" ref={wrapRef} className="relative h-screen overflow-hidden bg-night">
      {/* Scene 1: facade */}
      <div className="scene-facade absolute inset-0">
        <img src="/images/facade-real-strobe.png" alt="Al Mujazf Auto showroom exterior" className="size-full object-cover" />
        {/* Alternating blue/red siren strobes over each G-Class */}
        <div className="strobe-blue pointer-events-none absolute left-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.6),transparent_65%)] opacity-0" />
        <div className="strobe-red pointer-events-none absolute left-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.6),transparent_65%)] opacity-0" />
        <div className="strobe-blue pointer-events-none absolute right-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.6),transparent_65%)] opacity-0" />
        <div className="strobe-red pointer-events-none absolute right-[6%] top-[38%] h-[58%] w-[36%] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.6),transparent_65%)] opacity-0" />
      </div>

      {/* Scene 2: the entrance */}
      <div className="scene-entrance absolute inset-0 opacity-0">
        <img src="/images/entrance-clean.png" alt="The entrance of the Al Mujazf Auto showroom" className="size-full object-cover" />
      </div>

      {/* Scene 3: showroom aisle */}
      <div className="scene-showroom absolute inset-0 opacity-0">
        <img src="/images/showroom.png" alt="Inside the Al Mujazf Auto showroom" className="size-full object-cover" />
      </div>

      {/* Cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(7,11,20,0.75))]" />
      <div className="hero-veil pointer-events-none absolute inset-0 bg-night opacity-0" />

      {/* Scene captions */}
      <Caption className="cap-1" kicker="Al Mujazf Auto" text={t("scene_arrive")} />
      <Caption className="cap-2" kicker="Al Mujazf Auto" text={t("scene_doors")} />
      <Caption className="cap-3" kicker="The Showroom" text={t("scene_inside")} />

      {/* Scene 4: brand reveal */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="brand-line-2 mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold/90 opacity-0 sm:text-sm">
          {t("hero_since")}
        </p>
        <h1 className="brand-line-1 font-serif text-5xl font-bold uppercase leading-tight opacity-0 sm:text-7xl lg:text-8xl">
          <span className="text-cream">Al Mujazf</span> <span className="gold-gradient-text">Auto</span>
        </h1>
        <p className="brand-line-2 mt-5 max-w-xl text-base text-cream/80 opacity-0 sm:text-lg">{t("hero_tagline")}</p>
        <div className="brand-ctas mt-9 flex flex-col items-center gap-4 opacity-0 sm:flex-row">
          <a
            href="#collection"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-night shadow-lg shadow-gold/25 transition hover:bg-gold-2"
          >
            {t("hero_cta")}
          </a>
          <a
            href={whatsappLink("Hello Al Mujazf Auto! I'd like to ask about your cars.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition hover:border-gold hover:text-gold"
          >
            {t("hero_cta2")}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-cream/80 transition-opacity duration-500 ${
          hintHidden ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.3em]">{t("scroll_hint")}</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/40 p-1">
          <span className="size-1.5 animate-bounce rounded-full bg-gold" />
        </span>
      </div>
    </div>
  );
}

function Caption({ className, kicker, text }: { className: string; kicker: string; text: string }) {
  return (
    <div className={`${className} absolute inset-x-0 bottom-24 z-10 flex flex-col items-center gap-2 px-6 text-center opacity-0`}>
      <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-gold">{kicker}</span>
      <span className="font-serif text-2xl font-medium text-cream drop-shadow-lg sm:text-4xl">{text}</span>
    </div>
  );
}
