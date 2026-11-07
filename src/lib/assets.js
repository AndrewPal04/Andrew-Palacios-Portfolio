import fs from "node:fs";
import path from "node:path";

export const RESUME_PATH = "/Andrew-Palacios-Resume.pdf";

// Resume links only appear once the PDF has been added to `public/`.
export function hasResume() {
  return fs.existsSync(path.join(process.cwd(), "public", RESUME_PATH));
}
