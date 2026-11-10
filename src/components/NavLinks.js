"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// The phone menu has room for every section, not just the main ones.
const menuSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "leetcode", label: "LeetCode" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }

    function update() {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive("contact");
        return;
      }
      const line = window.innerHeight * 0.4;
      const passed = sections.filter(({ id }) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= line;
      });
      setActive(passed.at(-1)?.id ?? null);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled]);

  return active;
}

export default function NavLinks({ resumeHref }) {
  const pathname = usePathname();
  const active = useActiveSection(pathname === "/");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <ul className="hidden items-center gap-1 text-[15px] md:flex">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`/#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`block rounded-full px-3.5 py-2 hover:bg-pill hover:text-ink ${
                active === id ? "bg-pill" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        {resumeHref && (
          <li className="ml-1">
            <a
              href={resumeHref}
              className="block rounded-full bg-night px-4 py-2 text-white hover:bg-accent-fill hover:text-white"
            >
              Resume
            </a>
          </li>
        )}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-controls="phone-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex size-10 items-center justify-center rounded-full text-ink-2 hover:bg-pill hover:text-ink md:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <ul
          id="phone-menu"
          className="absolute inset-x-0 top-full mt-2 grid grid-cols-2 gap-1 rounded-[28px] bg-surface p-3 text-base shadow-[0_10px_30px_rgb(20_22_27/0.12)] md:hidden"
        >
          {menuSections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-full px-4 py-2.5 hover:bg-pill hover:text-ink"
              >
                {label}
              </Link>
            </li>
          ))}
          {resumeHref && (
            <li className="col-span-2 mt-1">
              <a
                href={resumeHref}
                className="block rounded-full bg-night px-4 py-2.5 text-center text-white hover:bg-accent-fill hover:text-white"
              >
                Resume
              </a>
            </li>
          )}
        </ul>
      )}
    </>
  );
}
