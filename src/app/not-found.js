import Link from "next/link";
import { card, primaryButton } from "@/components/Section";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className={`${card} flex min-h-[60vh] flex-col items-center justify-center text-center`}>
      <p className="inline-flex items-center gap-2 rounded-full bg-pill px-3 py-1.5 font-mono text-[13px]">
        <span aria-hidden className="size-2 rounded-full bg-accent" />
        404
      </p>
      <h1 className="mt-7 text-[clamp(48px,7vw,96px)] font-extrabold leading-[0.92] tracking-[-0.05em]">
        Page not found
      </h1>
      <p className="mt-6 text-lg text-ink-2 sm:text-xl">
        That page doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className={`${primaryButton} mt-10`}>
        Back to home →
      </Link>
    </section>
  );
}
