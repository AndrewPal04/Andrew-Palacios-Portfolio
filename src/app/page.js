import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Tags from "@/components/Tags";
import { education, experience, profile, skills } from "@/data/profile";
import { otherWork, projects } from "@/data/projects";
import { hasResume, RESUME_PATH } from "@/lib/assets";
import { getLeetCodeStats } from "@/lib/leetcode";

const card = "border border-border bg-surface";
const label = "font-mono text-xs uppercase tracking-wider text-muted";
const button = "px-4 py-2.5 font-mono text-xs uppercase tracking-wider";
const primaryButton = `${button} bg-accent text-on-accent hover:opacity-90`;
const secondaryButton = `${button} border border-border text-foreground hover:border-accent hover:text-accent`;

function Hero() {
  const [firstName, ...lastName] = profile.name.split(" ");

  return (
    <section className="grid items-center gap-12 border-b border-border py-14 sm:py-20 md:grid-cols-[1fr_19rem]">
      <div>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-accent">
          <span aria-hidden className="h-px w-6 bg-accent" />
          {profile.title}
        </p>
        <h1 className="mt-4 font-serif text-6xl font-semibold leading-none tracking-tight sm:text-7xl">
          <span className="block">{firstName}</span>
          <span className="block">{lastName.join(" ")}</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
          Full-stack software engineer and recent Cal Poly Pomona Computer Science graduate. As
          Lead Software Engineer at Apulza, I build web, mobile, and AI features for a study app
          designed for neurodivergent students.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#projects" className={primaryButton}>
            View Projects
          </Link>
          {hasResume() && (
            <a href={RESUME_PATH} className={secondaryButton}>
              Resume
            </a>
          )}
          <a href={profile.github} className={secondaryButton}>
            GitHub
          </a>
          <a href={profile.linkedin} className={secondaryButton}>
            LinkedIn
          </a>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-border pt-6">
          {profile.quickFacts.map((fact) => (
            <div key={fact.label}>
              <dt className={label}>{fact.label}</dt>
              <dd className="mt-1">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mx-auto w-full max-w-xs border border-border bg-surface p-2 md:mx-0">
        <Image
          src="/headshot.jpg"
          alt={`Portrait of ${profile.name}`}
          width={800}
          height={800}
          priority
          unoptimized
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-5">
        {experience.map((job) => (
          <article
            key={job.role}
            className={`${card} grid gap-4 p-6 sm:p-8 md:grid-cols-[11rem_1fr] md:gap-8`}
          >
            <div>
              <p className="font-mono text-xs text-accent">{job.dates}</p>
              <p className="mt-2">
                {job.orgUrl ? (
                  <a href={job.orgUrl} className="hover:text-accent hover:underline">
                    {job.org}
                  </a>
                ) : (
                  job.org
                )}
              </p>
              <p className={`mt-1 ${label}`}>{job.detail}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">{job.role}</h3>
              <p className="mt-2 text-muted">{job.summary}</p>
              <ul className="mt-4 space-y-2 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="relative pl-5">
                    <span aria-hidden className="absolute left-0 text-muted">
                      –
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Tags items={job.tech} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="grid gap-5 md:grid-cols-3">
        {projects
          .filter((project) => project.featured !== false)
          .map((project) => (
          <article
            key={project.slug}
            className={`${card} group relative flex flex-col p-6 transition hover:border-accent hover:shadow-md motion-safe:hover:-translate-y-0.5`}
          >
            <p className={label}>{project.category}</p>
            <h3 className="mt-2 font-serif text-xl font-semibold">
              <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
                {project.name}
              </Link>
            </h3>
            <p className="mb-5 mt-3 flex-1 leading-relaxed text-muted">{project.summary}</p>
            <Tags items={project.tech.slice(0, 4)} />
            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-accent">
              View details{" "}
              <span
                aria-hidden
                className="inline-block transition-transform motion-safe:group-hover:translate-x-1"
              >
                →
              </span>
            </p>
          </article>
        ))}
      </div>
      <h3 className={`${label} mt-10 border-b border-border pb-3`}>Other work</h3>
      <ul className="divide-y divide-border border-b border-border">
        {otherWork.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="grid gap-1 py-3 hover:text-accent md:grid-cols-[13rem_1fr] md:gap-4"
            >
              <span className="font-serif text-lg">{item.name}</span>
              <span className="text-muted">{item.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className={`${card} p-6 sm:p-8`}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-serif text-xl font-semibold">{education.school}</h3>
          <p className="font-mono text-xs text-accent">{education.dates}</p>
        </div>
        <p className="mt-2 text-muted">
          {education.degree} · {education.honors.join(" · ")}
        </p>
        <div className="mt-5 border-t border-border pt-5">
          <Tags items={education.coursework} />
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.label} className={`${card} p-6`}>
            <h3 className={`${label} mb-4 border-b border-border pb-4`}>{group.label}</h3>
            <Tags items={group.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function LeetCode() {
  const { languages, recent, topics } = getLeetCodeStats();
  if (recent.length === 0) return null;

  return (
    <Section id="leetcode" title="LeetCode">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="leading-relaxed text-muted">
            Recent practice in {languages.map((language) => language.name).join(", ")}, synced
            automatically from my accepted submissions.
          </p>
          <div className="mt-4">
            <Tags items={topics.map((topic) => topic.name)} />
          </div>
        </div>
        <div>
          <h3 className={`${label} border-b border-border pb-3`}>Recent problems</h3>
          <ul className="divide-y divide-border border-b border-border">
            {recent.map((solution) => (
              <li key={solution.number}>
                <a
                  href={solution.href}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3 hover:text-accent"
                >
                  <span className="w-10 font-mono text-xs text-accent">{solution.number}</span>
                  <span className="flex-1">{solution.title}</span>
                  <span className="font-mono text-xs text-muted">
                    {solution.difficulty} · {solution.language}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Interests() {
  return (
    <Section id="interests" title="Interests">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.interests}</p>
    </Section>
  );
}

function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: "@AndrewPal04", href: profile.github },
    { label: "LinkedIn", value: "andrew-palacios-55ba29307", href: profile.linkedin },
  ];

  return (
    <section
      id="contact"
      data-reveal
      aria-labelledby="contact-heading"
      className="grid items-center gap-10 border-t border-border py-14 sm:py-20 md:grid-cols-2"
    >
      <div>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-accent">
          <span aria-hidden className="h-px w-6 bg-accent" />
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Let&apos;s connect.
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          I&apos;m looking for new grad software engineering roles and I&apos;m open to relocating.
          Email is the best way to reach me.
        </p>
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-5 hover:text-accent"
            >
              <span className="font-serif text-lg">{link.label}</span>
              <span className="break-all font-mono text-xs text-muted">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <LeetCode />
      <Interests />
      <Contact />
    </>
  );
}
