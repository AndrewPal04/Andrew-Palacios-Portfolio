import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { hasResume, RESUME_PATH } from "@/lib/assets";

export default function Nav() {
  return (
    <header className="sticky top-2 z-40 rounded-full bg-surface shadow-[0_1px_2px_rgb(20_22_27/0.06)] sm:top-4">
      <nav
        aria-label="Main"
        className="flex items-center justify-between gap-4 py-2 pl-5 pr-2"
      >
        <Link
          href="/"
          aria-label={profile.name}
          className="text-xl font-extrabold tracking-[-0.03em] hover:text-ink"
        >
          {profile.initials}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-1">
          <NavLinks resumeHref={hasResume() ? RESUME_PATH : null} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
