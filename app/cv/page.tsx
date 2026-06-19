import type { Metadata } from "next";
import { CvContent } from "./cv-content";

export const metadata: Metadata = {
  title: "CV — Nicolás A. Valenzuela | AI & Full Stack Developer",
  description:
    "Professional CV of Nicolás A. Valenzuela — AI Systems Architect & Full Stack Developer. Multi-agent systems, RAG, Next.js, FastAPI, production SaaS.",
  robots: "index, follow",
};

export default function CvPage() {
  return (
    <>
      <CvContent />
    </>
  );
}
