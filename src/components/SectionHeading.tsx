import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** id of the <h2>, referenced by the section's aria-labelledby */
  id: string;
};

export default function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-col gap-2.5">
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-lilac-300">
        <span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-gradient-to-r from-brand-violet to-brand-rose" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-[clamp(40px,5.2vw,64px)] font-black leading-[1.05] tracking-[-0.02em]">
        {title}
      </h2>
    </Reveal>
  );
}
