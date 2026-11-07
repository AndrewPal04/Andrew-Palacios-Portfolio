export default function Section({ id, title, children }) {
  return (
    <section id={id} data-reveal aria-labelledby={`${id}-heading`} className="py-12 sm:py-16">
      <div className="mb-8 flex items-center gap-4 sm:mb-10">
        <h2
          id={`${id}-heading`}
          className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}
