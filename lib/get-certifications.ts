import fs from "fs";
import path from "path";

export interface Certification {
  title: string;
  file: string;
}

export interface CertificationGroup {
  name: string;
  certifications: Certification[];
}

const CERTS_DIR = path.join(process.cwd(), "public", "certifications");
const ORDER_FILE = path.join(CERTS_DIR, "order.json");

function readOrder(): string[] {
  try {
    const raw = JSON.parse(fs.readFileSync(ORDER_FILE, "utf8"));
    if (
      raw &&
      Array.isArray(raw.order) &&
      raw.order.every((name: unknown) => typeof name === "string")
    ) {
      return raw.order;
    }
  } catch {
    // missing or invalid order.json → alphabetical fallback
  }
  return [];
}

/** Titles selected for the CV, in display order. Empty → show all. */
function readCvSelection(): string[] {
  try {
    const raw = JSON.parse(fs.readFileSync(ORDER_FILE, "utf8"));
    if (
      raw &&
      Array.isArray(raw.cv) &&
      raw.cv.every((name: unknown) => typeof name === "string")
    ) {
      return raw.cv;
    }
  } catch {
    // missing or invalid → fall back to all certifications
  }
  return [];
}

/** Case- and accent-insensitive match key so typos in order.json are forgiven. */
function normalizeKey(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function encodeSegment(segment: string): string {
  return encodeURI(segment).replace(/#/g, "%23");
}

function readCertifications(folder: string): Certification[] {
  const folderPath = path.join(CERTS_DIR, folder);
  return fs
    .readdirSync(folderPath)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .map((f) => ({
      title: f.replace(/\.pdf$/i, ""),
      file: `/certifications/${encodeSegment(folder)}/${encodeSegment(f)}`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title, "es"));
}

export function getCertificationGroups(): CertificationGroup[] {
  try {
    const folders = fs
      .readdirSync(CERTS_DIR, { withFileTypes: true })
      .filter(
        (entry) => entry.isDirectory() && entry.name !== "order.json",
      )
      .map((entry) => entry.name);

    const order = readOrder();
    const sortedFolders = [...folders].sort((a, b) =>
      a.localeCompare(b, "es"),
    );
    const ordered = order.filter((name) => folders.includes(name));
    const unlisted = sortedFolders.filter((name) => !ordered.includes(name));

    return [...ordered, ...unlisted].map((name) => ({
      name,
      certifications: readCertifications(name),
    }));
  } catch {
    return [];
  }
}

export function getCertifications(): Certification[] {
  const all = getCertificationGroups().flatMap((group) => group.certifications);
  const cvSelection = readCvSelection();
  if (cvSelection.length === 0) return all;

  const byKey = new Map(all.map((cert) => [normalizeKey(cert.title), cert]));
  const selected: Certification[] = [];
  for (const title of cvSelection) {
    const cert = byKey.get(normalizeKey(title));
    if (cert) selected.push(cert);
  }
  return selected;
}
