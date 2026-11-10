import { ArrowUpRight } from "lucide-react";
import { social } from "@/constants";
import Reveal from "./Reveal";

// The iridescent ring that starts in this section is drawn by ScrollHalo, which moves it along the page.
export default function Header() {
  return (
    <section id="top" aria-label="Introduction" className="relative pt-[72px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[clamp(28px,4vw,44px)] px-5 pb-12 pt-[clamp(56px,8vw,104px)] sm:px-10">
        <Reveal>
          <p
            aria-hidden="true"
            className="flex flex-col text-[clamp(96px,15vw,208px)] font-black leading-[0.86] tracking-[-0.045em]"
          >
            <span>HE</span>
            <span>
              LLO<span className="text-brand-pink">.</span>
            </span>
          </p>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-7">
          <Reveal delay={0.2} className="flex flex-wrap gap-3">
            {social.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                {label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="ml-auto flex flex-col items-end gap-3.5 text-right">
            <h1 className="text-[clamp(40px,5.6vw,80px)] font-black leading-[1.02] tracking-[-0.02em]">
              I am
              <br />
              <span className="text-brand-pink">Jhonatan Quihuiri</span>
            </h1>
            <p className="text-[clamp(16px,1.5vw,20px)] font-medium text-lilac-200">
              Backend Developer &amp; Data Scientist · Galápagos, Ecuador
            </p>
          </Reveal>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="flex h-[50px] w-[30px] justify-center self-center rounded-full border-[3px] border-lilac-400 pt-[9px]"
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-white motion-safe:animate-scroll-cue" />
        </a>
      </div>
    </section>
  );
}
