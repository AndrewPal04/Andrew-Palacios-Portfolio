import Image from "next/image";
import Link from "next/link";
import {
  accentCard,
  Bullets,
  card,
  Label,
  nightCard,
  outlineButton,
  primaryButton,
  Title,
} from "@/components/Section";
import Tags from "@/components/Tags";
import { education, experience, profile, skills } from "@/data/profile";
import { otherWork, projects } from "@/data/projects";
import { hasResume, RESUME_PATH } from "@/lib/assets";
import { getLeetCodeStats } from "@/lib/leetcode";

const twoColumn = "grid gap-4 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8";

function Hero() {
  const [firstName, ...lastName] = profile.name.split(" ");

  return (
    <section className="grid gap-2 sm:gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <div className={`${card} flex flex-col justify-between gap-10 lg:gap-12`}>
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-pill px-3 py-1.5 font-mono text-[13px]">
            <span aria-hidden className="size-2 rounded-full bg-status" />
            {profile.title}
          </p>
          <h1 className="mt-7 text-[clamp(56px,7.5vw,112px)] font-extrabold leading-[0.92] tracking-[-0.05em]">
            <span className="block">{firstName}</span>
            <span className="block">{lastName.join(" ")}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-normal text-ink-2 sm:text-xl">
            {profile.heroIntro}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link href="/#projects" className={primaryButton}>
            View Projects →
          </Link>
          {hasResume() && (
            <a href={RESUME_PATH} className={outlineButton}>
              Resume
            </a>
          )}
          <a href={profile.github} className={outlineButton}>
            GitHub
          </a>
          <a href={profile.linkedin} className={outlineButton}>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:grid-rows-[minmax(0,1fr)_auto]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[20px] bg-pill sm:rounded-[28px]">
          <Image
            src="/headshot.jpg"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            unoptimized
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
        <dl className={`${nightCard} flex flex-col justify-center gap-3 px-7 py-6`}>
          {profile.quickFacts.map((fact) => (
            <div key={fact.label} className="flex items-baseline justify-between gap-4">
              <dt className="shrink-0 font-mono text-[13px] text-night-muted">{fact.label}</dt>
              <dd className="text-right">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      data-reveal
      aria-labelledby="about-heading"
      className={`${accentCard} ${twoColumn} p-6 sm:p-10 lg:p-14`}
    >
      <Label id="about-heading" className="text-on-accent">
        About
      </Label>
      <div className="flex max-w-[54rem] flex-col gap-5 text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.35] tracking-[-0.01em]">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" data-reveal aria-labelledby="experience-heading" className={card}>
      <Title id="experience-heading">Experience</Title>
      <div className="mt-8 flex flex-col gap-3 sm:mt-10">
        {experience.map((job) => (
          <article
            key={job.role}
            className="grid gap-4 rounded-[20px] bg-inset p-6 sm:p-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"
          >
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[13px] text-accent">{job.dates}</p>
              <p className="text-[19px] font-semibold">
                {job.orgUrl ? (
                  <a href={job.orgUrl} className="hover:text-accent">
                    {job.org}
                  </a>
                ) : (
                  job.org
                )}
              </p>
              <p className="font-mono text-[13px] text-ink-3">{job.detail}</p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[28px]">
                {job.role}
              </h3>
              <p className="mt-2 text-ink-2">{job.summary}</p>
              <Bullets items={job.points} className="mt-[18px]" />
              <div className="mt-5">
                <Tags items={job.tech} on="inset" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, featured }) {
  const shot = project.screenshot;
  const imageWidth = featured ? "w-[88%]" : shot?.narrow ? "w-[55%]" : "w-full";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group grid overflow-hidden rounded-[20px] bg-surface hover:text-ink motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-[3px] sm:rounded-[28px] ${
        featured ? "md:col-span-2 md:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]" : ""
      }`}
    >
      <div className="flex flex-col gap-3 p-6 sm:p-10">
        <p className="font-mono text-[13px] text-accent">
          {String(index + 1).padStart(2, "0")} — {project.category}
        </p>
        <h3 className="text-[32px] font-extrabold leading-none tracking-[-0.04em] sm:text-[40px]">
          {project.name}
        </h3>
        <p className="flex-1 text-ink-2">{project.summary}</p>
        <Tags items={project.tech.slice(0, 4)} />
        <p className="mt-2 font-semibold group-hover:text-accent">
          View details{" "}
          <span
            aria-hidden
            className="inline-block motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </div>
      {shot && (
        <div
          className={`flex items-start justify-center overflow-hidden bg-accent-tint px-6 pt-6 sm:px-8 sm:pt-8 ${
            featured ? "h-[300px] sm:h-[360px] lg:h-auto" : "h-[280px] sm:h-[320px]"
          }`}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            unoptimized
            className={`${imageWidth} block h-auto max-h-[420px] rounded-t-[14px] object-cover object-top shadow-shot`}
          />
        </div>
      )}
    </Link>
  );
}

function Projects() {
  const featured = projects.filter((project) => project.featured !== false);

  return (
    <section
      id="projects"
      data-reveal
      aria-labelledby="projects-heading"
      className="flex flex-col gap-2 sm:gap-4"
    >
      <Title id="projects-heading" className="px-6 pb-2 pt-8 sm:px-10 sm:pt-10 lg:px-14">
        Selected Projects
      </Title>
      <div className="grid gap-2 sm:gap-4 md:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            featured={index === 0}
          />
        ))}
      </div>
      <div className="rounded-[20px] bg-surface p-6 sm:rounded-[28px] sm:px-10 sm:py-10 lg:px-14">
        <Label as="h3">Other work</Label>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherWork.map((item) => {
            const internal = item.href.startsWith("/");
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col gap-1.5 rounded-[18px] bg-inset p-5 hover:bg-accent-tint hover:text-ink"
                >
                  <span className="text-[19px] font-semibold tracking-[-0.01em]">
                    {item.name} {internal ? "→" : "↗"}
                  </span>
                  <span className="text-[15px] leading-normal text-ink-2">{item.description}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      data-reveal
      aria-labelledby="education-heading"
      className="rounded-[20px] bg-surface p-6 sm:rounded-[28px] sm:p-12"
    >
      <Label id="education-heading">Education</Label>
      <h3 className="mt-5 text-[26px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[32px]">
        {education.school}
      </h3>
      <p className="mt-2.5 font-mono text-[13px] text-accent">{education.dates}</p>
      <p className="mt-3.5 text-ink-2">
        {education.degree} · {education.honors.join(" · ")}
      </p>
      <div className="mt-6">
        <Tags items={education.coursework} />
      </div>
    </section>
  );
}

function LeetCode({ stats }) {
  const { languages, recent, topics } = stats;

  return (
    <section
      id="leetcode"
      data-reveal
      aria-labelledby="leetcode-heading"
      className={`${nightCard} p-6 sm:p-12`}
    >
      <Label id="leetcode-heading" className="text-night-muted">
        LeetCode
      </Label>
      <p className="mt-5 text-xl leading-[1.4]">
        Recent practice in {languages.map((language) => language.name).join(", ")}, synced
        automatically from my accepted submissions.
      </p>
      <div className="mt-4">
        <Tags items={topics.map((topic) => topic.name)} on="night" />
      </div>
      <ul className="mt-6 border-t border-night-line">
        {recent.map((solution) => (
          <li key={solution.number} className="border-b border-night-line">
            <a
              href={solution.href}
              className="grid grid-cols-[52px_minmax(0,1fr)] items-baseline gap-x-3 py-3 hover:text-accent-light sm:grid-cols-[52px_minmax(0,1fr)_auto]"
            >
              <span className="font-mono text-[13px] text-accent-light">{solution.number}</span>
              <span>{solution.title}</span>
              <span className="col-start-2 font-mono text-xs text-night-muted sm:col-start-auto">
                {solution.difficulty} · {solution.language}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" data-reveal aria-labelledby="skills-heading" className={card}>
      <Title id="skills-heading">Skills</Title>
      <div className="mt-8 grid gap-3 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.label} className="rounded-[20px] bg-inset p-6">
            <h3 className="text-[19px] font-semibold">{group.label}</h3>
            <div className="mt-3.5">
              <Tags items={group.items} on="inset" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section
      id="interests"
      data-reveal
      aria-labelledby="interests-heading"
      className={`${card} ${twoColumn}`}
    >
      <Label id="interests-heading">Interests</Label>
      <p className="max-w-[54rem] text-xl leading-[1.45] tracking-[-0.01em] sm:text-2xl">
        {profile.interests}
      </p>
    </section>
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
      className={`${accentCard} grid items-end gap-10 p-6 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12 lg:px-14 lg:py-16`}
    >
      <div>
        <Label id="contact-heading" className="text-on-accent">
          Contact
        </Label>
        <p className="mt-5 text-[clamp(56px,8vw,112px)] font-extrabold leading-[0.92] tracking-[-0.05em]">
          Let&apos;s connect.
        </p>
        <p className="mt-6 max-w-[30rem] text-[19px]">{profile.contactBlurb}</p>
      </div>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1.5 rounded-[18px] bg-surface px-[22px] py-[18px] text-ink hover:bg-night hover:text-white"
            >
              <span className="text-[19px] font-semibold">{link.label}</span>
              <span className="break-all font-mono text-[13px]">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  const leetcode = getLeetCodeStats();
  const hasLeetCode = leetcode.recent.length > 0;

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <div className={`grid gap-2 sm:gap-4 ${hasLeetCode ? "lg:grid-cols-2" : ""}`}>
        <Education />
        {hasLeetCode && <LeetCode stats={leetcode} />}
      </div>
      <Skills />
      <Interests />
      <Contact />
    </>
  );
}
