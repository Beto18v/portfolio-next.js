import fs from "fs";
import path from "path";

export interface Certification {
  title: string;
  file: string;
}

export function getCertifications(): Certification[] {
  const certsDir = path.join(process.cwd(), "public", "certifications");
  try {
    const files = fs.readdirSync(certsDir);
    return files
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .map((f) => ({
        title: f.replace(/\.pdf$/i, ""),
        file: `/certifications/${f}`,
      }));
  } catch {
    return [];
  }
}
