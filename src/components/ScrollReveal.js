"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades in `[data-reveal]` sections once, as they scroll into view. Sections are
// only hidden here, after the page has loaded, so they stay visible without
// JavaScript. Anything already on screen is left alone.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-hidden");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    const sections = [...document.querySelectorAll("[data-reveal]")];
    for (const section of sections) {
      if (section.getBoundingClientRect().top > window.innerHeight) {
        section.classList.add("reveal-hidden");
        observer.observe(section);
      }
    }

    return () => {
      observer.disconnect();
      sections.forEach((section) => section.classList.remove("reveal-hidden"));
    };
  }, [pathname]);

  return null;
}
