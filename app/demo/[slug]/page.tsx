import type { Metadata } from "next";
import Link from "next/link";
import { DEMOS } from "@/data/demos";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  AlertCircle,
  Building2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = DEMOS[slug];

  if (!demo) {
    return {
      title: "Vista previa no encontrada",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${demo.nombre} | ${demo.rubro}`,
    description: demo.eslogan,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(DEMOS).map((slug) => ({ slug }));
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const demo = DEMOS[slug];

  if (!demo) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-slate-100">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Vista previa no encontrada
        </h1>
        <p className="mt-2 max-w-md text-sm text-slate-400">
          La maqueta conceptual que estás buscando no existe o el enlace es
          incorrecto.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
        >
          Volver al portafolio principal
        </Link>
      </div>
    );
  }

  const defaultMsg =
    demo.mensajeWAPrecargado ||
    `Hola, vi su página web y me gustaría agendar una cita para más información.`;
  const primaryWaUrl = `https://wa.me/${demo.telefonoWA}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
      {/* ─── Top Bar Discreto de Autoría ─── */}
      <div className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-900/90 px-4 py-2 text-xs backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span>
              Vista previa conceptual preparada por{" "}
              <strong className="text-slate-200">Nicolás Valenzuela</strong> •{" "}
              <span className="font-mono text-teal-400">nival.is-a.dev</span>
            </span>
          </span>
          <a
            href="https://wa.me/573124932822?text=Hola%20Nicol%C3%A1s,%20vi%20la%20demo%20conceptual%20en%20tu%20sitio%20y%20me%20interesa%20una%20propuesta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-teal-400 underline decoration-teal-400/40 underline-offset-2 transition-colors hover:text-teal-300"
          >
            ¿Quieres un sitio como este? Escríbeme
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* ─── Header / Navbar del Cliente ─── */}
      <header className="border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight text-white sm:text-lg leading-tight">
                {demo.nombre}
              </h2>
              <p className="text-[11px] font-medium text-slate-400">
                {demo.rubro} • {demo.ciudad}
              </p>
            </div>
          </div>

          <a
            href={primaryWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold text-teal-300 transition-all hover:bg-teal-500/20 hover:border-teal-500/50"
          >
            <FaWhatsapp className="h-4 w-4 text-emerald-400" />
            <span>Contactar Directo</span>
          </a>
        </div>
      </header>

      {/* ─── Hero Section (Mobile-First & Conversión) ─── */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24">
        {/* Glow de fondo */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{demo.rubro}</span>
            <span className="text-slate-500">•</span>
            <span>{demo.ciudad}</span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-tight">
            {demo.nombre}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {demo.eslogan}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={primaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:scale-[1.02]"
            >
              <FaWhatsapp className="h-5 w-5 text-slate-950" />
              <span>Agendar valoración por WhatsApp</span>
            </a>

            <a
              href="#servicios"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800"
            >
              <span>Ver servicios</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Micro-Trust Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Atención personalizada
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal-400" />
              Profesionales certificados
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-amber-400" />
              Respuesta inmediata por WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* ─── Sección de Servicios ─── */}
      <section id="servicios" className="border-t border-slate-800/60 bg-slate-900/30 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-teal-400">
              Tratamientos & Especialidades
            </h2>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Nuestros Servicios Principales
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
              Soluciones integrales diseñadas con los más altos estándares de calidad, tecnología y confort.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demo.servicios.map((servicio, idx) => {
              const serviceMsg = `Hola, me interesa consultar información sobre el servicio de "${servicio.titulo}" en ${demo.nombre}.`;
              const serviceWaUrl = `https://wa.me/${demo.telefonoWA}?text=${encodeURIComponent(serviceMsg)}`;

              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-200 hover:border-teal-500/40 hover:bg-slate-900/90 hover:shadow-[0_8px_30px_rgba(13,148,136,0.1)]"
                >
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/20 bg-teal-500/10 font-mono text-xs font-bold text-teal-400">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <h4 className="mt-4 text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                      {servicio.titulo}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {servicio.descripcion}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60">
                    <a
                      href={serviceWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Consultar por WhatsApp</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bloque de Confianza, Horarios & Ubicación ─── */}
      <section className="border-t border-slate-800/60 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Horarios */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3 text-teal-400">
                <Clock className="h-5 w-5" />
                <h4 className="text-base font-bold text-white">
                  Horarios de Atención
                </h4>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {demo.horarios}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Atención y agendamiento activo por WhatsApp
              </div>
            </div>

            {/* Ubicación y Ciudad */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3 text-teal-400">
                <MapPin className="h-5 w-5" />
                <h4 className="text-base font-bold text-white">Ubicación</h4>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {demo.direccion ? `${demo.direccion} • ` : ""}
                {demo.ciudad}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Zona de fácil acceso con parqueadero y transporte cercano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Banner Final de Conversión ─── */}
      <section className="border-t border-slate-800/80 bg-linear-to-b from-slate-900/40 to-slate-950 px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            ¿Listo para agendar tu consulta?
          </h3>
          <p className="mt-3 text-sm text-slate-400">
            Comunícate directamente con nuestro equipo por WhatsApp y recibe asesoría inmediata sin filas ni esperas.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={primaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-400 hover:scale-[1.03]"
            >
              <FaWhatsapp className="h-5 w-5 text-slate-950" />
              <span>Escribir al WhatsApp oficial</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer del Cliente ─── */}
      <footer className="border-t border-slate-900 px-4 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {demo.nombre}. Todos los derechos reservados.
        </p>
        <p className="mt-1 text-[11px] text-slate-600">
          Diseño web y desarrollo optimizado para conversión comercial.
        </p>
      </footer>

      {/* ─── Botón Flotante de WhatsApp del Negocio ─── */}
      <a
        href={primaryWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Escribir por WhatsApp a ${demo.nombre}`}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-[0_8px_24px_rgba(16,185,129,0.45)] transition-all hover:scale-110 hover:bg-emerald-400"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  );
}
