import type { Metadata } from "next";
import {
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Users,
  CalendarCheck,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Clínica Odontológica Antonny Vásquez | Vista Previa",
  description:
    "Odontología Especializada • Rehabilitación Oral e Implantología en Bogotá. Reserva tu valoración por WhatsApp o agenda online.",
  robots: {
    index: false,
    follow: false,
  },
};

const CLIENT_DATA = {
  nombre: "Clínica Odontológica Antonny Vásquez",
  doctor: "Dr. Antonny Vásquez",
  enfoque: "Odontología Especializada • Rehabilitación Oral e Implantología",
  ubicacion: "Calle 140 # 11-45, Bogotá, Colombia",
  telefonoWA: "573104012408",
  agendaUrl: "https://ff.healthatom.io/Tv6Eo8",
  instagramUser: "@od.antonnyvc",
  instagramUrl: "https://www.instagram.com/od.antonnyvc/",
  seguidores: "+8.1K seguidores",
  horarios:
    "Horarios sujetos a disponibilidad • Agenda en línea 24/7 o por WhatsApp",
  waMsgPrincipal:
    "Hola Clínica Antonny Vásquez, quisiera agendar una valoración",
};

const ESPECIALIDADES = [
  {
    titulo: "Rehabilitación Oral",
    descripcion:
      "Restauración integral de la función masticatoria y estética dental mediante coronas de zirconio, incrustaciones cerámicas y prótesis de alta precisión biomimética.",
    badge: "Alta Precisión",
  },
  {
    titulo: "Implantología Dental",
    descripcion:
      "Reemplazo definitivo de dientes perdidos con implantes de titanio biocompatible de grado médico y cirugía guiada por tomografía computarizada.",
    badge: "Cirugía Guiada",
  },
  {
    titulo: "Periodoncia & Cirugía Oral",
    descripcion:
      "Salud y preservación de encías y soporte óseo, regeneración tisular y procedimientos quirúrgicos mínimamente invasivos sin dolor.",
    badge: "Mínimamente Invasivo",
  },
  {
    titulo: "Diseño de Sonrisa & Estética",
    descripcion:
      "Armonización dentofacial personalizada con carillas cerámicas o resinas de alta gama, respetando la anatomía natural de tu sonrisa.",
    badge: "Armonización Facial",
  },
];

export default function AntonnyDemoPage() {
  const primaryWaUrl = `https://wa.me/${CLIENT_DATA.telefonoWA}?text=${encodeURIComponent(CLIENT_DATA.waMsgPrincipal)}`;

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] font-sans text-[#0F172A] antialiased selection:bg-teal-500 selection:text-white">
      {/* ─── Top Bar Discreto de Autoría (Alto contraste en light mode) ─── */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-4 py-2 text-xs shadow-xs backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 text-slate-600">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
            <span>
              Vista previa conceptual preparada por{" "}
              <strong className="text-slate-900">Nicolás Valenzuela</strong> •{" "}
              <span className="font-mono text-teal-700 font-semibold">
                nival.is-a.dev
              </span>
            </span>
          </span>
          <a
            href="https://wa.me/573124932822?text=Hola%20Nicol%C3%A1s,%20vi%20la%20demo%20de%20Antonny%20V%C3%A1squez%20y%20me%20interesa%20conversar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-teal-700 underline decoration-teal-600/40 underline-offset-2 transition-colors hover:text-teal-900"
          >
            Contacto directo de desarrollo
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* ─── Header Clínico de la Marca ─── */}
      <header className="border-b border-slate-200/90 bg-white/90 px-4 py-4 backdrop-blur-md sticky top-8 z-40">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700 shadow-xs">
              <Stethoscope className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg leading-tight">
                {CLIENT_DATA.nombre}
              </h2>
              <p className="text-[11px] font-medium text-slate-500">
                {CLIENT_DATA.doctor} • Bogotá, Colombia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={CLIENT_DATA.agendaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              <CalendarCheck className="h-3.5 w-3.5 text-teal-600" />
              <span>Agenda Online 24/7</span>
            </a>
            <a
              href={primaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] hover:bg-[#15803D] px-4 py-1.5 text-xs font-bold text-white shadow-xs transition-all hover:shadow-md"
            >
              <FaWhatsapp className="h-3.5 w-3.5" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </header>

      {/* ─── Hero Section: Limpio, Clínico y de Alta Conversión ─── */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-50">
        {/* Sutil halo médico de fondo */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Badge de Enfoque */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-semibold text-teal-800 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-teal-600" />
            <span>{CLIENT_DATA.enfoque}</span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl sm:leading-tight">
            Excelencia Clínica y Precisión en Cada Sonrisa
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
            Diagnóstico avanzado, rehabilitación oral de alta complejidad e implantología dental con tecnología digital en Bogotá. Atención personalizada orientada a tu salud funcional y armonía estética.
          </p>

          {/* Dos CTAs Principales */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={primaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02]"
            >
              <FaWhatsapp className="h-5 w-5 text-white" />
              <span>Agendar valoración por WhatsApp</span>
            </a>

            <a
              href={CLIENT_DATA.agendaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 hover:border-slate-400"
            >
              <CalendarCheck className="h-4 w-4 text-teal-600" />
              <span>Agenda Online 24/7</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>

          {/* Respaldo Digital y Comunidad */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs text-slate-600 shadow-xs">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-teal-600" />
              <span>
                Comunidad de{" "}
                <strong className="text-slate-900 font-bold">
                  {CLIENT_DATA.seguidores}
                </strong>
              </span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-3 text-slate-700">
              <a
                href={CLIENT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-medium hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-3.5 w-3.5 text-pink-600" />
                <span>{CLIENT_DATA.instagramUser}</span>
              </a>
              <span className="flex items-center gap-1 text-slate-400">
                <FaTiktok className="h-3 w-3" />
                <FaFacebook className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sección de Especialidades (Tarjetas Blancas con Interacción WA) ─── */}
      <section className="border-t border-slate-200 bg-white px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
              Áreas de Enfoque
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
              Tratamientos Especializados
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-[#475569]">
              Procedimientos clínicos realizados bajo protocolos internacionales y tecnología biomaterial de primera línea.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ESPECIALIDADES.map((esp, i) => {
              const specMsg = `Hola Clínica Antonny Vásquez, quisiera consultar información sobre ${esp.titulo}`;
              const specWaUrl = `https://wa.me/${CLIENT_DATA.telefonoWA}?text=${encodeURIComponent(specMsg)}`;

              return (
                <div
                  key={i}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-teal-500/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 font-mono text-xs font-bold text-teal-700">
                        {(i + 1).toString().padStart(2, "0")}
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                        {esp.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#0F172A] group-hover:text-teal-700 transition-colors">
                      {esp.titulo}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                      {esp.descripcion}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <a
                      href={specWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span>Consultar este tratamiento</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bloque de Ubicación, Horarios y Respaldo ─── */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Ubicación */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-teal-700">
                <MapPin className="h-5 w-5" />
                <h4 className="text-base font-bold text-[#0F172A]">
                  Sede Clínica
                </h4>
              </div>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed font-medium">
                {CLIENT_DATA.ubicacion}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Ubicación privilegiada en Cedritos / Usaquén con acceso cómodo y parqueadero.
              </p>
            </div>

            {/* Horarios Ajustados */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-teal-700">
                <Clock className="h-5 w-5" />
                <h4 className="text-base font-bold text-[#0F172A]">
                  Horarios de Atención
                </h4>
              </div>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed font-medium">
                {CLIENT_DATA.horarios}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-800 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Atención con cita previa</span>
              </div>
            </div>

            {/* Centralización de Agenda HealthAtom */}
            <div className="rounded-2xl border border-teal-200 bg-gradient-to-b from-teal-50/60 to-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-teal-700">
                  <CalendarCheck className="h-5 w-5" />
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Agenda Digital 24/7
                  </h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#475569]">
                  Acceso directo a la plataforma de citas en tiempo real para valoraciones y pacientes en tratamiento.
                </p>
              </div>
              <a
                href={CLIENT_DATA.agendaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-teal-300 bg-white px-4 py-2 text-xs font-bold text-teal-800 hover:bg-teal-50 shadow-xs transition-all"
              >
                <span>Abrir HealthAtom</span>
                <ExternalLink className="h-3.5 w-3.5 text-teal-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Banner Final de Conversión ─── */}
      <section className="border-t border-slate-200 bg-white px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
            Inicia tu Tratamiento Odontológico
          </h2>
          <p className="mt-3 text-sm text-[#475569]">
            Agenda tu cita de valoración con el Dr. Antonny Vásquez a través de WhatsApp o mediante nuestra agenda digital 24/7.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={primaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02]"
            >
              <FaWhatsapp className="h-5 w-5 text-white" />
              <span>Agendar por WhatsApp</span>
            </a>

            <a
              href={CLIENT_DATA.agendaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors"
            >
              <CalendarCheck className="h-4 w-4 text-teal-600" />
              <span>Agenda Online 24/7</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer Clínico ─── */}
      <footer className="border-t border-slate-200 bg-slate-100 px-4 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {CLIENT_DATA.nombre}. Todos los derechos reservados.
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          Calle 140 # 11-45, Bogotá • Consulta odontológica especializada
        </p>
      </footer>

      {/* ─── Botón Flotante de WhatsApp del Cliente ─── */}
      <a
        href={primaryWaUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Escribir por WhatsApp a ${CLIENT_DATA.nombre}`}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-emerald-700/30 transition-all hover:scale-110 hover:bg-[#15803D]"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  );
}
