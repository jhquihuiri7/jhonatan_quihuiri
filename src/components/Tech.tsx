import { skillGroups } from "@/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Tech() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-title"
      className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-[clamp(64px,8vw,112px)] sm:px-10"
    >
      <SectionHeading eyebrow="What do I use" title="MY STACK" id="tech-title" />

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-5">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={0.05 * (index % 3)}
            className="flex flex-col gap-4 rounded-[18px] border border-white/[0.08] bg-night-900 p-6"
          >
            <h3 className="flex items-center gap-2.5 text-base font-bold">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-purple" />
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[13.5px] text-lilac-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
