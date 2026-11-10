import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bullets, card, Label, outlineButton, primaryButton } from "@/components/Section";
import Tags from "@/components/Tags";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.name, description: project.summary } : {};
}

function Detail({ id, title, items }) {
  if (!items?.length) return null;
  return (
    <section
      data-reveal
      aria-labelledby={id}
      className={`${card} grid gap-4 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8`}
    >
      <Label id={id}>{title}</Label>
      <Bullets items={items} className="max-w-[54rem] sm:text-[17px]" />
    </section>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const shot = project.screenshot;
  const others = projects.filter((other) => other.slug !== project.slug);

  return (
    <>
      <article className="flex flex-col gap-2 sm:gap-4">
        <header className={card}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full bg-pill px-3 py-1.5 font-mono text-[13px] hover:bg-accent-tint hover:text-ink"
          >
            ← All projects
          </Link>
          <p className="mt-10 font-mono text-[13px] text-accent">{project.category}</p>
          <h1 className="mt-3 text-[clamp(48px,7vw,96px)] font-extrabold leading-[0.92] tracking-[-0.05em]">
            {project.name}
          </h1>
          <p className="mt-4 font-mono text-[13px] text-ink-3">{project.role}</p>
          <p className="mt-6 max-w-[48rem] text-lg leading-normal text-ink-2 sm:text-xl">
            {project.overview}
          </p>
          <div className="mt-6">
            <Tags items={project.tech} />
          </div>
          {project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={index === 0 ? primaryButton : outlineButton}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </header>

        {shot && (
          <figure className="overflow-hidden rounded-[20px] bg-accent-tint sm:rounded-[28px]">
            <div className="flex justify-center px-6 pt-6 sm:px-14 sm:pt-14">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                unoptimized
                className={`block h-auto rounded-[14px] shadow-shot ${
                  shot.narrow ? "w-full max-w-xs" : "w-full max-w-3xl"
                }`}
              />
            </div>
            <figcaption className="px-6 pb-6 pt-5 text-center text-[15px] text-ink-2 sm:px-14 sm:pb-10">
              {shot.caption}
            </figcaption>
          </figure>
        )}

        <Detail id="built-heading" title="What I did" items={project.built} />
        <Detail id="architecture-heading" title="How it works" items={project.architecture} />
        <Detail id="challenges-heading" title="Challenges" items={project.challenges} />
        <Detail id="next-heading" title="What I'd do next" items={project.nextSteps} />
      </article>

      <nav
        aria-labelledby="more-heading"
        data-reveal
        className="rounded-[20px] bg-surface p-6 sm:rounded-[28px] sm:px-10 sm:py-10 lg:px-14"
      >
        <Label id="more-heading" as="h2">
          More projects
        </Label>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/projects/${other.slug}`}
                className="flex h-full flex-col gap-1.5 rounded-[18px] bg-inset p-5 hover:bg-accent-tint hover:text-ink"
              >
                <span className="font-mono text-[13px] text-accent">{other.category}</span>
                <span className="text-[19px] font-semibold tracking-[-0.01em]">
                  {other.name} →
                </span>
                <span className="text-[15px] leading-normal text-ink-2">{other.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
