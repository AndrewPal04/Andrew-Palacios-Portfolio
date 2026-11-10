import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="px-2 pb-2 pt-4 text-center font-mono text-[13px] text-ink-3">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
