"use client";

import { useLocale } from "@/components/shared/locale-provider";
import { getCvData } from "@/lib/cv-data";
import type { Locale } from "@/lib/types";
import { Download, ExternalLink, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function CvContent() {
  const { locale } = useLocale();
  const data = getCvData(locale as Locale);
  const labels = data.labels;
  const router = useRouter();

  const handlePrint = () => window.print();
  const goBack = () => router.push("/");

  return (
    <>
      {/* ── CV Document ── */}
      <article className="cv-document mx-auto max-w-205 bg-white px-10 py-10 text-[15px] leading-relaxed text-slate-800 sm:px-14 sm:py-12">
        {/* ── Header ── */}
        <header className="mb-7">
          <h1 className="text-[2.1rem] font-bold tracking-[-0.025em] text-slate-900">
            {data.profile.name}
          </h1>
          <p className="mt-0.5 text-[1.05rem] font-medium text-slate-500">
            {data.profile.role}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-0.5 text-[0.82rem] text-slate-500">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {data.profile.location}
            </span>
            <span>{data.profile.phone}</span>
            <span>{data.profile.email}</span>
          </div>

          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-0.5 text-[0.82rem] text-slate-500">
            <a
              href={`https://${data.profile.website}`}
              className="text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.profile.website}
            </a>
            <a
              href={data.profile.github}
              className="text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.profile.github.replace("https://", "")}
            </a>
            {data.profile.linkedin && (
              <a
                href={data.profile.linkedin}
                className="text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.profile.linkedin.replace("https://", "")}
              </a>
            )}
          </div>

          <p className="mt-2 text-[0.82rem] text-slate-500">
            {data.profile.languages}
          </p>
        </header>

        {/* ── Professional Summary ── */}
        <section className="mb-6">
          <h2 className="section-heading">{labels.sectionSummary}</h2>
          <p className="text-[0.92rem] leading-relaxed text-slate-700">
            {data.professionalSummary}
          </p>
        </section>

        {/* ── Experience ── */}
        <section className="mb-5">
          <h2 className="section-heading">{labels.sectionExperience}</h2>

          {data.experience.map((exp, i) => (
            <div key={i} className="cv-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div>
                  <h3 className="text-[1rem] font-semibold text-slate-900">
                    {exp.title}
                  </h3>
                  <p className="text-[0.83rem] text-slate-500">
                    {exp.company}
                    {exp.environment ? ` · ${exp.environment}` : ""}
                  </p>
                </div>
              </div>
              <ul className="cv-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Education ── */}
        <section className="mb-5">
          <h2 className="section-heading">{labels.sectionEducation}</h2>

          {data.education.map((edu, i) => (
            <div key={i} className="cv-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-slate-900">
                    {edu.title}
                  </h3>
                  {edu.institution && (
                    <p className="text-[0.83rem] text-slate-500">
                      {edu.institution}
                    </p>
                  )}
                </div>
                <span className="text-[0.8rem] font-medium whitespace-nowrap text-slate-400">
                  {edu.period}
                </span>
              </div>
              {edu.details && (
                <ul className="cv-bullets mt-1">
                  <li>{edu.details}</li>
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* ── Certifications ── */}
        <section className="mb-5">
          <h2 className="section-heading">{labels.sectionCertifications}</h2>

          <div className="space-y-1.5">
            {data.certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-2 text-[0.88rem]">
                <ExternalLink className="h-3 w-3 shrink-0 text-slate-400" />
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 underline-offset-2 hover:text-slate-900 hover:underline"
                >
                  {cert.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technical Skills ── */}
        <section>
          <h2 className="section-heading">{labels.sectionSkills}</h2>

          <div className="space-y-3">
            {data.skillGroups.map((group, i) => (
              <div key={i} className="cv-entry">
                <h4 className="text-[0.82rem] font-bold uppercase tracking-[0.05em] text-slate-900">
                  {group.title}
                </h4>
                <p className="mt-0.5 text-[0.82rem] leading-relaxed text-slate-600">
                  {group.skills.join("  ·  ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* ── Floating Buttons (CV page only, hidden on print) ── */}
      {/* Back — left on desktop, above download on mobile */}
      <div className="cv-no-print fixed top-20 right-6 z-50 sm:left-6 sm:right-auto">
        <Button
          size="icon"
          onClick={goBack}
          className="h-10 w-10 rounded-full shadow-lg shadow-slate-400/20"
          aria-label={locale === "es" ? "Volver atrás" : "Go back"}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>

      {/* Download PDF — right on desktop, below back-to-top on mobile */}
      <div className="cv-no-print fixed top-40 right-6 z-50 sm:top-20">
        <Button
          size="lg"
          onClick={handlePrint}
          className="h-12 gap-2 rounded-full px-5 shadow-lg shadow-slate-400/20"
        >
          <Download className="h-4 w-4" />
          {labels.downloadPdf}
        </Button>
      </div>

      {/* ── Print Styles ── */}
      <style>{`
        /* Section heading style */
        .section-heading {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f172a;
          border-bottom: 1.5px solid #e2e8f0;
          padding-bottom: 5px;
          margin-bottom: 12px;
          margin-top: 4px;
        }

        /* Entry spacing */
        .cv-entry {
          margin-bottom: 14px;
        }
        .cv-entry:last-child {
          margin-bottom: 0;
        }

        /* Bullet list */
        .cv-bullets {
          list-style: none;
          padding-left: 0;
          margin-top: 5px;
        }
        .cv-bullets li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 4px;
          font-size: 0.87rem;
          line-height: 1.55;
          color: #334155;
        }
        .cv-bullets li::before {
          content: '▸';
          position: absolute;
          left: 0;
          top: 0;
          color: #0f172a;
          font-size: 0.65rem;
          line-height: 1.55;
        }
        .cv-bullets li:last-child {
          margin-bottom: 0;
        }

        /* Print styles */
        @media print {
          html,
          body {
            margin: 0 !important;
            padding: 12mm !important;
            width: auto !important;
            background: #ffffff !important;
            color: #1e293b !important;
          }

          @page {
            size: A4;
          }

          /* Hide site chrome — Navbar uses <header>, Footer uses <footer>, WhatsApp is a floating <a> */
          body > div > header,
          body > div > footer,
          a[href*="wa.me"],
          .cv-no-print {
            display: none !important;
          }

          .cv-document {
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }

          .section-heading,
          .cv-entry,
          .cv-bullets li {
            page-break-inside: avoid;
          }
          .section-heading {
            page-break-after: avoid;
          }

          a {
            color: #1e293b !important;
            text-decoration: none !important;
          }

          .cv-bullets li {
            color: #1e293b !important;
          }

          .cv-bullets li::before {
            color: #0f172a !important;
          }
        }
      `}</style>
    </>
  );
}
