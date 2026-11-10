"use client";

function toggleTheme() {
  const root = document.documentElement;
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  root.classList.add("theme-transition");
  root.dataset.theme = theme;
  setTimeout(() => root.classList.remove("theme-transition"), 300);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // The theme still applies for this visit if storage is blocked.
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex size-10 items-center justify-center rounded-full text-ink-2 hover:bg-pill hover:text-ink"
    >
      <svg viewBox="0 0 24 24" className="size-[18px] dark:hidden" fill="currentColor" aria-hidden>
        <path d="M21 14.5A9 9 0 0 1 9.5 3a9 9 0 1 0 11.5 11.5Z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="hidden size-[18px] dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
      </svg>
    </button>
  );
}
