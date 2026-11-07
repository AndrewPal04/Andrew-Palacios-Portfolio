import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";

// LeetRepo syncs each solution into a root folder like `0020-valid-parentheses`.
// These are read at build time, and each sync redeploys the site, so the stats
// stay current without any manual updates.
const SOLUTION_FOLDER = /^\d{4}-/;

function readField(readme, field) {
  return readme.match(new RegExp(`\\*\\*${field}:\\*\\*\\s*(.+)`))?.[1].trim();
}

function parseSolution(folder) {
  const readmePath = path.join(process.cwd(), folder, "README.md");
  if (!fs.existsSync(readmePath)) return null;

  const readme = fs.readFileSync(readmePath, "utf8");
  const heading = readme.match(/^#\s+(\d+)\.\s+(.+)$/m);
  const difficulty = readField(readme, "Difficulty");

  // LeetRepo sometimes writes a duplicate entry numbered 0 with an unknown
  // difficulty alongside the real one.
  if (!heading || heading[1] === "0" || !difficulty || difficulty === "Unknown") {
    return null;
  }

  return {
    number: Number(heading[1]),
    title: heading[2].trim(),
    difficulty,
    language: (readField(readme, "Language") ?? "").replace(/^Python3$/, "Python"),
    topics: (readField(readme, "Topics") ?? "")
      .split(",")
      .map((topic) => topic.trim())
      .filter(Boolean),
    solved: readField(readme, "Solved") ?? "",
    href: `${profile.repo}/tree/main/${folder}`,
  };
}

function rankByCount(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => ({ name, count }));
}

export function getLeetCodeStats() {
  const solutions = fs
    .readdirSync(process.cwd(), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && SOLUTION_FOLDER.test(entry.name))
    .map((entry) => parseSolution(entry.name))
    .filter(Boolean)
    .sort((a, b) => b.solved.localeCompare(a.solved));

  return {
    total: solutions.length,
    languages: rankByCount(solutions.map((s) => s.language).filter(Boolean)),
    topics: rankByCount(solutions.flatMap((s) => s.topics)).slice(0, 6),
    recent: solutions.slice(0, 5),
  };
}
