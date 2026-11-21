export interface DemoService {
  titulo: string;
  descripcion: string;
  icono?: string;
}

export interface DemoConfig {
  slug: string;
  nombre: string;
  rubro: string;
  ciudad: string;
  telefonoWA: string;
  eslogan: string;
  servicios: DemoService[];
  colorAcento?: string;
  horarios: string;
  direccion?: string;
  mensajeWAPrecargado?: string;
}

export const DEMOS: Record<string, DemoConfig> = {
  "demo-base": {
    slug: "demo-base",
    nombre: "Clínica Dental Sonrisas & Salud",
    rubro: "Odontología Especializada & Estética",
    ciudad: "Bogotá, Colombia",
    telefonoWA: "573124932822",
    eslogan: "Transformamos tu sonrisa con tecnología moderna, escaneo 3D y atención sin dolor.",
    colorAcento: "#0d9488",
    horarios: "Lunes a Viernes: 8:00 AM – 6:30 PM | Sábados: 8:30 AM – 2:00 PM",
    direccion: "Cra 15 # 93-45, Chicó Norte, Bogotá",
    mensajeWAPrecargado: "Hola, vi su sitio web y me gustaría agendar una valoración para conocer sus tratamientos.",
    servicios: [
      {
        titulo: "Diseño de Sonrisa Digital",
        descripcion: "Planificación estética 3D con carillas cerámicas o resinas de alta definición que armonizan con tu rostro.",
      },
      {
        titulo: "Ortodoncia Invisible (Alineadores)",
        descripcion: "Alineación dental discreta, cómoda y sin brackets metálicos mediante escaneo intraoral de última generación.",
      },
      {
        titulo: "Implantes Dentales & Rehabilitación",
        descripcion: "Recupera la función masticatoria y estética dental con titanio biocompatible guiado por tomografía.",
      },
      {
        titulo: "Blanqueamiento Dental Láser",
        descripcion: "Aclara hasta 4 tonos en una sesión de 45 minutos con tecnología fría que previene la sensibilidad dental.",
      },
      {
        titulo: "Odontopediatría & Atención Familiar",
        descripcion: "Atención preventiva y correctiva sin traumas para niños y adultos en un ambiente relajado y moderno.",
      },
      {
        titulo: "Limpieza Ultrasónica & Profilaxis",
        descripcion: "Eliminación de sarro profundo con ultrasonido y pulido con aeropulidor para encías fuertes y sanas.",
      },
    ],
  },
};
