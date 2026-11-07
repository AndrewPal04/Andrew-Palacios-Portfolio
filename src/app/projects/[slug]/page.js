import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

function Detail({ title, items }) {
  if (!items?.length) return null;
  return (
    <section className="mt-10">
      <h2 className="mb-3 font-serif text-2xl font-semibold">{title}</h2>
      <ul className="space-y-2 leading-relaxed">
        {items.map((item) => (
          <li key={item} className="relative pl-5">
            <span aria-hidden className="absolute left-0 text-muted">
              –
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl py-12 sm:py-16">
      <Link
        href="/#projects"
        className="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent"
      >
        ← All projects
      </Link>
      <p className="mt-8 font-mono text-xs uppercase tracking-wider text-accent">
        {project.category}
      </p>
      <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
        {project.name}
      </h1>
      <p className="mt-3 text-muted">{project.role}</p>
      <p className="mt-6 text-lg leading-relaxed">{project.overview}</p>
      <div className="mt-6">
        <Tags items={project.tech} />
      </div>
      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {project.screenshot && (
        <figure className={`mt-10 ${project.screenshot.narrow ? "max-w-xs" : ""}`}>
          <div className="border border-border bg-surface p-2">
            <Image
              src={project.screenshot.src}
              alt={project.screenshot.alt}
              width={project.screenshot.width}
              height={project.screenshot.height}
              unoptimized
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">{project.screenshot.caption}</figcaption>
        </figure>
      )}
      <Detail title="What I did" items={project.built} />
      <Detail title="How it works" items={project.architecture} />
      <Detail title="Challenges" items={project.challenges} />
      <Detail title="What I'd do next" items={project.nextSteps} />
    </article>
  );
}
