import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="py-24 text-center sm:py-32">
      <p className="font-mono text-xs uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist or may have moved.</p>
      <Link
        href="/"
        className="mt-8 inline-block bg-accent px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-on-accent hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  );
}
