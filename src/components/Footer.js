import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 sm:px-6">
      <p className="border-t border-border py-6 text-center font-mono text-xs uppercase tracking-wider text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
