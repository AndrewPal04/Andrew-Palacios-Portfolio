import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { hasResume, RESUME_PATH } from "@/lib/assets";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link href="/" className="flex items-baseline gap-2" aria-label={profile.name}>
          <span className="font-serif text-lg font-semibold">{profile.initials}</span>
          <span className="hidden font-mono text-xs uppercase tracking-wider text-muted lg:inline">
            {profile.name}
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <NavLinks resumeHref={hasResume() ? RESUME_PATH : null} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
