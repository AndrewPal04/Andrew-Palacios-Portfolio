// Shared building blocks for the card layout used on every page.

export const card = "rounded-[20px] bg-surface p-6 sm:rounded-[28px] sm:p-10 lg:p-14";
export const accentCard = "rounded-[20px] bg-accent-fill text-on-accent sm:rounded-[28px]";
export const nightCard = "rounded-[20px] bg-night text-white sm:rounded-[28px]";

const pill = "inline-block rounded-full px-[22px] py-3.5 text-base font-semibold";
export const primaryButton = `${pill} bg-accent-fill text-on-accent hover:bg-accent-hover hover:text-on-accent dark:hover:bg-accent-fill dark:hover:brightness-110`;
export const outlineButton = `${pill} border-[1.5px] border-line hover:border-accent hover:text-ink`;

// Large section title: Experience, Selected Projects, Skills.
export function Title({ id, children, className = "" }) {
  return (
    <h2
      id={id}
      className={`text-4xl font-extrabold leading-none tracking-[-0.04em] sm:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

// Small mono label: About, Education, LeetCode, Interests, Contact.
export function Label({ id, as: Tag = "h2", className = "text-ink-3", children }) {
  return (
    <Tag id={id} className={`font-mono text-sm font-normal ${className}`}>
      {children}
    </Tag>
  );
}

export function Bullets({ items, className = "" }) {
  return (
    <ul className={`flex flex-col gap-2.5 text-base ${className}`}>
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[20px_1fr]">
          <span aria-hidden className="mt-2.5 size-1.5 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
