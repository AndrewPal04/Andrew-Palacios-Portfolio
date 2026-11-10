// `on` is the surface the chips sit on, so they always contrast with it.
const tones = {
  surface: "bg-inset text-ink-2",
  inset: "bg-surface text-ink-2",
  night: "bg-night-chip text-night-chip-ink",
};

export default function Tags({ items, on = "surface" }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className={`rounded-full px-3 py-[5px] font-mono text-xs ${tones[on]}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
