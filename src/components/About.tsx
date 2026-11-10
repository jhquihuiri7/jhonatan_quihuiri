import Image from "next/image";
import { services } from "@/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-[clamp(64px,8vw,112px)] sm:px-10"
    >
      <SectionHeading eyebrow="Introduction" title="Overview" id="about-title" />

      <div className="mt-8 flex flex-wrap items-start gap-10">
        <Reveal className="flex min-w-0 flex-[1_1_520px] flex-col gap-4 text-[17px] leading-[1.75] text-lilac-200">
          <p>
            I&apos;m a Backend Developer and Data Scientist with 5+ years of experience building APIs, GIS platforms,
            and data analytics for the public, tourism, and financial sectors. At the Governing Council of Galápagos
            (CGREG), I build and run SIGTAR, the council&apos;s GIS-based territorial information system.
          </p>
          <p>
            I&apos;m also the founder of Logiciel AppLab, the company behind Wego, a ride-hailing app live on the App
            Store and Google Play, and Zero, an AI sports-broadcasting system I co-founded that is about to launch. I
            hold an MSc in Data Science and Machine Learning, studied economics in Ecuador and France, won 2nd place at
            the NASA Space Apps Challenge 2025 in San Cristóbal, and work in Spanish, English, and French. Let&apos;s
            connect!
          </p>
        </Reveal>

        <div className="grid min-w-0 flex-[1_1_380px] grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-5">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={0.1 * index}
              className="rounded-[20px] bg-gradient-to-br from-brand-violet to-brand-rose p-px"
            >
              <div className="flex h-full flex-col items-start gap-3.5 rounded-[19px] bg-night-900 px-6 py-7">
                <Image src={service.icon} alt="" width={56} height={52} className="h-[52px] w-14 object-contain" />
                <h3 className="text-xl font-bold leading-snug">{service.title}</h3>
                <p className="text-sm leading-relaxed text-lilac-300">{service.tools}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
