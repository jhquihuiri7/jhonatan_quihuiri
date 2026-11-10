import { jobs } from "@/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-[clamp(64px,8vw,112px)] sm:px-10"
    >
      <SectionHeading eyebrow="My development journey" title="WORK" id="work-title" />

      <ol className="mt-10 flex flex-col">
        {jobs.map((job, index) => {
          const last = index === jobs.length - 1;
          return (
            <li key={`${job.company}-${job.period}`} className="flex flex-wrap gap-x-8 gap-y-1">
              <div className="flex-[0_0_190px] pt-5">
                <p className="text-[15px] font-semibold">{job.period}</p>
                <p className="mt-1 text-[13px] text-lilac-300">{job.location}</p>
              </div>

              <div className={`relative min-w-0 flex-[1_1_560px] pl-10 ${last ? "" : "pb-6"}`}>
                {/* Timeline rail and marker */}
                <span
                  aria-hidden="true"
                  className={`absolute left-[7px] top-0 w-0.5 bg-brand-purple/[0.35] ${last ? "h-8" : "bottom-0"}`}
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 h-4 w-4 rounded-full bg-brand-pink shadow-[0_0_0_5px_rgba(237,7,98,0.18)]"
                />

                <Reveal
                  as="article"
                  className="flex flex-col gap-2.5 rounded-[18px] border border-white/[0.08] bg-night-900 px-6 py-[22px]"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-xl font-bold leading-snug">{job.role}</h3>
                    {job.current && (
                      <span className="rounded-full border border-[rgba(63,224,160,0.4)] bg-[rgba(63,224,160,0.12)] px-2.5 py-0.5 text-xs font-semibold text-[#7DF0B9]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] font-semibold text-brand-rose-soft">{job.company}</p>
                  <p className="text-[15px] leading-[1.65] text-lilac-200">{job.description}</p>
                  <ul aria-label="Skills" className="mt-1 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-brand-purple/30 bg-brand-purple/[0.14] px-3 py-[5px] text-[13px] text-[#E4DBFF]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
