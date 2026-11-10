import Image from "next/image";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { featuredProjects, projects } from "@/constants";
import type { FeaturedProject, ProjectLink } from "@/types/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TAG_COLORS = ["text-tag-blue", "text-tag-green", "text-tag-pink"];

const STATUS_STYLES: Record<FeaturedProject["status"]["tone"], string> = {
  teal: "border-[rgba(0,184,169,0.4)] bg-[rgba(0,184,169,0.12)] text-[#7FE7DC]",
  orange: "border-[rgba(247,107,21,0.45)] bg-[rgba(247,107,21,0.12)] text-[#FFB27A]",
};

function TagList({ tags, small = false }: { tags: string[]; small?: boolean }) {
  return (
    <ul
      aria-label="Tags"
      className={`flex flex-wrap font-medium ${small ? "gap-x-3 gap-y-0.5 text-[13px]" : "gap-x-3.5 gap-y-1 text-sm"}`}
    >
      {tags.map((tag, index) => (
        <li key={tag} className={TAG_COLORS[index % TAG_COLORS.length]}>
          #{tag}
        </li>
      ))}
    </ul>
  );
}

function LinkButton({ link, project }: { link: ProjectLink; project: string }) {
  const live = link.kind === "live";
  const Icon = live ? ArrowUpRight : CodeXml;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label}: ${project} (opens in a new tab)`}
      className={`inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-[10px] text-[13px] font-semibold text-white transition ${
        live
          ? "bg-gradient-to-br from-brand-violet to-brand-rose hover:brightness-110"
          : "border border-white/[0.18] hover:border-white/40 hover:bg-white/5"
      }`}
    >
      {link.label}
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}

function FeaturedCard({ project }: { project: FeaturedProject }) {
  return (
    <Reveal as="article" className="flex flex-wrap gap-5 rounded-[22px] border border-white/[0.08] bg-night-900 p-4">
      <div className="relative aspect-[1000/925] max-w-[240px] flex-[1_1_200px] overflow-hidden rounded-[14px]">
        <Image src={project.image} alt={`${project.name} cover`} fill sizes="240px" className="object-cover" />
      </div>

      <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-2.5 px-1 py-1.5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-[26px] font-extrabold leading-tight">{project.name}</h3>
          <span
            className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.06em] ${
              STATUS_STYLES[project.status.tone]
            }`}
          >
            {project.status.label}
          </span>
        </div>
        <p className="text-sm font-medium text-lilac-300">{project.role}</p>
        <p className="text-[15px] leading-[1.65] text-lilac-200">{project.description}</p>
        <TagList tags={project.tags} />
        {project.qr && (
          <a
            href={project.qr.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-3.5 self-start rounded-[14px] bg-white py-1.5 pl-[18px] pr-1.5 text-[13px] font-semibold text-night-900 transition hover:bg-lilac-100"
          >
            Launch or Scan
            <Image src={project.qr.image} alt={project.qr.alt} width={56} height={56} className="h-14 w-14 rounded-lg" />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-[1200px] scroll-mt-20 px-5 pt-[clamp(64px,8vw,112px)] sm:px-10"
    >
      <SectionHeading eyebrow="What I have done so far" title="PROJECTS" id="projects-title" />

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(540px,100%),1fr))] gap-6">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            as="article"
            delay={0.05 * (index % 4)}
            className="group flex flex-col gap-3.5 rounded-[18px] border border-white/[0.08] bg-night-900 p-3 transition-colors hover:border-white/20"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 1200px) 270px, (min-width: 640px) 45vw, 90vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 px-1.5 pb-1.5">
              <h3 className="text-lg font-bold leading-snug">{project.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-[#B3B6DC]">{project.description}</p>
              <TagList tags={project.tags} small />
              <div className="mt-1.5 flex gap-2">
                {project.links.map((link) => (
                  <LinkButton key={link.href} link={link} project={project.name} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
