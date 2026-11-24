import b2bProspectingJson from "@/data/workflows/b2b-prospecting.json";
import linkedinPublishingJson from "@/data/workflows/linkedin-publishing.json";
import alertErrorsJson from "@/data/workflows/alert-errors.json";
import type { LocalizedText } from "./types";

export interface WorkflowStep {
  stepNumber: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  nodeType: string;
  iconName:
    | "clock"
    | "sheets"
    | "places"
    | "cpu"
    | "telegram"
    | "gemini"
    | "validation"
    | "linkedin"
    | "drive"
    | "alert";
}

export interface WorkflowMetric {
  value: string;
  label: LocalizedText;
  sublabel: LocalizedText;
  accent?: "primary" | "green";
}

export interface N8nWorkflowConfig {
  id: "pipeline1" | "pipeline2" | "pipeline3";
  tabLabel: LocalizedText;
  badge: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  filename: string;
  rawJson: Record<string, unknown>;
  nodeCount: number;
  steps: WorkflowStep[];
  metrics: WorkflowMetric[];
}

export const n8nWorkflows: Record<
  "pipeline1" | "pipeline2" | "pipeline3",
  N8nWorkflowConfig
> = {
  pipeline1: {
    id: "pipeline1",
    tabLabel: {
      es: "Prospección B2B",
      en: "B2B Prospecting",
    },
    badge: {
      es: "Cron diario 8:30 AM",
      en: "Daily cron 8:30 AM",
    },
    title: {
      es: "Prospección B2B Bogotá con Scoring & WhatsApp Directo",
      en: "Bogotá B2B Prospecting with Scoring & Direct WhatsApp",
    },
    description: {
      es: "Flujo autónomo diario que rota entre 12 nichos comerciales en Bogotá (inmobiliarias, firmas de abogados, agencias, clínicas), extrae datos con Google Places API (New), aplica deduplicación triple contra Google Sheets, valida números móviles colombianos (3XX) y despacha los mejores 8 prospectos a Telegram con mensaje pre-redactado y deep-link a WhatsApp.",
      en: "Daily autonomous workflow rotating across 12 commercial niches in Bogotá, extracting business data via Google Places API (New), applying triple deduplication against Google Sheets, validating Colombian mobile phones (3XX), and dispatching top 8 qualified leads to Telegram with tailored WhatsApp deep-links.",
    },
    filename: "b2b-prospecting-workflow.json",
    rawJson: b2bProspectingJson as unknown as Record<string, unknown>,
    nodeCount: Array.isArray(b2bProspectingJson.nodes)
      ? b2bProspectingJson.nodes.length
      : 7,
    steps: [
      {
        stepNumber: "01",
        title: { es: "Cron Diario 8:30 AM", en: "Daily Cron 8:30 AM" },
        subtitle: {
          es: "Disparo matutino programado",
          en: "Scheduled morning trigger",
        },
        description: {
          es: "Inicia la ejecución automática todos los días hábiles a primera hora.",
          en: "Initiates automated execution every weekday morning.",
        },
        nodeType: "Trigger",
        iconName: "clock",
      },
      {
        stepNumber: "02",
        title: { es: "Lectura Histórica", en: "Historical Read" },
        subtitle: {
          es: "Google Sheets",
          en: "Google Sheets",
        },
        description: {
          es: "Consulta registros previos de Place_ID, Teléfono y Web para garantizar cero duplicados.",
          en: "Queries previous Place_ID, Phone, and Web records to guarantee zero duplicates.",
        },
        nodeType: "Deduplicación",
        iconName: "sheets",
      },
      {
        stepNumber: "03",
        title: { es: "Rotador B2B Bogotá", en: "Bogotá B2B Rotator" },
        subtitle: {
          es: "12 nichos estratégicos",
          en: "12 strategic niches",
        },
        description: {
          es: "Alterna rotativamente entre inmobiliarias, firmas contables, agencias de marketing y clínicas.",
          en: "Rotates among real estate, accounting firms, marketing agencies, and healthcare.",
        },
        nodeType: "Lógica JS",
        iconName: "cpu",
      },
      {
        stepNumber: "04",
        title: { es: "Places API (New)", en: "Places API (New)" },
        subtitle: {
          es: "Google Places v1",
          en: "Google Places v1",
        },
        description: {
          es: "Búsqueda textual con FieldMask para teléfono, sitio web, rating y estado operativo.",
          en: "Text search with FieldMask for phone, website, rating, and operational status.",
        },
        nodeType: "API Externa",
        iconName: "places",
      },
      {
        stepNumber: "05",
        title: { es: "Scoring & Mensaje", en: "Scoring & Tailoring" },
        subtitle: {
          es: "Calificación heurística",
          en: "Heuristic qualification",
        },
        description: {
          es: "Filtra reseñas (10-350), móvil 3XX Colombia, descarta gigantes y redacta mensaje por ángulo.",
          en: "Filters reviews (10-350), Colombian 3XX mobiles, excludes giants, and crafts tailored pitch.",
        },
        nodeType: "Node.js",
        iconName: "cpu",
      },
      {
        stepNumber: "06",
        title: { es: "Guardar en Sheets", en: "Save to Sheets" },
        subtitle: {
          es: "Persistencia",
          en: "Persistence",
        },
        description: {
          es: "Agrega los nuevos prospectos a la base de datos central en Google Sheets.",
          en: "Appends newly qualified prospects into central Google Sheets database.",
        },
        nodeType: "Base de Datos",
        iconName: "sheets",
      },
      {
        stepNumber: "07",
        title: { es: "Alerta Telegram", en: "Telegram Alert" },
        subtitle: {
          es: "Deep-link WhatsApp",
          en: "WhatsApp Deep-link",
        },
        description: {
          es: "Notificación formateada con botón de 1-click directo al chat de WhatsApp del prospecto.",
          en: "Formatted alert with 1-click button directly to prospect WhatsApp chat.",
        },
        nodeType: "Destino",
        iconName: "telegram",
      },
    ],
    metrics: [
      {
        value: "8 leads",
        label: { es: "Por ejecución", en: "Per execution" },
        sublabel: {
          es: "Prospectos calificados diarios",
          en: "Daily qualified prospects",
        },
        accent: "primary",
      },
      {
        value: "100%",
        label: { es: "Anti-duplicados", en: "Anti-duplicate" },
        sublabel: {
          es: "Triple validación (ID, móvil, web)",
          en: "Triple validation (ID, mobile, web)",
        },
        accent: "green",
      },
      {
        value: "< 30s",
        label: { es: "Tiempo de ciclo", en: "Cycle time" },
        sublabel: {
          es: "Extracción a notificación",
          en: "Extraction to notification",
        },
        accent: "primary",
      },
      {
        value: "1-Click",
        label: { es: "Contacto WhatsApp", en: "WhatsApp contact" },
        sublabel: {
          es: "Mensaje listo según rubro",
          en: "Tailored pitch ready",
        },
        accent: "green",
      },
    ],
  },

  pipeline2: {
    id: "pipeline2",
    tabLabel: {
      es: "Contenido LinkedIn",
      en: "LinkedIn Content",
    },
    badge: {
      es: "Ingesta + Publicación 12:00 PM",
      en: "Ingestion + Scheduled 12:00 PM",
    },
    title: {
      es: "Curación con Gemini AI & Publicador FIFO en LinkedIn",
      en: "Gemini AI Curation & FIFO LinkedIn Scheduler",
    },
    description: {
      es: "Sistema completo de 30 nodos: captura ideas crudas o enlaces web desde Telegram, scraping de contenido, generación y traducción técnica con Gemini API, gestión de cola priorizada (FIFO) en Google Sheets, y publicación programada a las 12:00 PM con imagen asociada desde Google Drive y confirmación por Telegram.",
      en: "Comprehensive 30-node system: captures raw thoughts or reference links from Telegram, content scraping, technical formatting & translation via Gemini API, prioritized FIFO queue in Google Sheets, and scheduled publishing at 12:00 PM with image sync from Google Drive and Telegram confirmation.",
    },
    filename: "linkedin-publishing-workflow.json",
    rawJson: linkedinPublishingJson as unknown as Record<string, unknown>,
    nodeCount: Array.isArray(linkedinPublishingJson.nodes)
      ? linkedinPublishingJson.nodes.length
      : 30,
    steps: [
      {
        stepNumber: "01",
        title: { es: "Telegram Trigger", en: "Telegram Trigger" },
        subtitle: {
          es: "Entrada multimodal",
          en: "Multimodal input",
        },
        description: {
          es: "Captura mensajes desde bot privado distinguiendo entre enlaces externos o ideas propias.",
          en: "Captures messages from private bot detecting between external links or original briefs.",
        },
        nodeType: "Trigger",
        iconName: "telegram",
      },
      {
        stepNumber: "02",
        title: { es: "Scraping & Dedupe", en: "Scraping & Dedupe" },
        subtitle: {
          es: "HTTP + Sheets",
          en: "HTTP + Sheets",
        },
        description: {
          es: "Descarga el contenido web de referencia y descarta enlaces procesados con anterioridad.",
          en: "Fetches reference web content and discards previously processed links.",
        },
        nodeType: "Deduplicación",
        iconName: "sheets",
      },
      {
        stepNumber: "03",
        title: { es: "Gemini API (LLM)", en: "Gemini API (LLM)" },
        subtitle: {
          es: "Redactor técnico",
          en: "Technical copywriter",
        },
        description: {
          es: "Extrae aprendizajes clave, redacta el gancho técnico y genera versiones bilingües.",
          en: "Extracts key insights, crafts technical hook, and generates bilingual copy.",
        },
        nodeType: "IA / LLM",
        iconName: "gemini",
      },
      {
        stepNumber: "04",
        title: { es: "Cola en Sheets", en: "Queue in Sheets" },
        subtitle: {
          es: "Control de estados",
          en: "Status management",
        },
        description: {
          es: "Almacena borradores con estados: pendiente, listo_prioritario, listo y publicado.",
          en: "Stores drafts with statuses: pending, priority_ready, ready, and published.",
        },
        nodeType: "Persistencia",
        iconName: "sheets",
      },
      {
        stepNumber: "05",
        title: { es: "Cron Diario 12:00 PM", en: "Daily Cron 12:00 PM" },
        subtitle: {
          es: "Hora pico",
          en: "Peak engagement",
        },
        description: {
          es: "Dispara la revisión y despacho automático del siguiente post en cola a mediodía.",
          en: "Triggers automated review and dispatch of the next queued post at noon.",
        },
        nodeType: "Trigger",
        iconName: "clock",
      },
      {
        stepNumber: "06",
        title: { es: "Filtro FIFO", en: "FIFO Filter" },
        subtitle: {
          es: "Prioridad dinámica",
          en: "Dynamic priority",
        },
        description: {
          es: "Selecciona el post más antiguo en estado listo, priorizando los marcados como urgentes.",
          en: "Selects oldest ready post, giving priority to urgent items in the queue.",
        },
        nodeType: "Lógica JS",
        iconName: "cpu",
      },
      {
        stepNumber: "07",
        title: { es: "Google Drive Sync", en: "Google Drive Sync" },
        subtitle: {
          es: "Asset visual",
          en: "Visual asset",
        },
        description: {
          es: "Descarga la imagen asociada al post directamente desde Google Drive.",
          en: "Downloads associated image asset directly from Google Drive.",
        },
        nodeType: "Drive API",
        iconName: "drive",
      },
      {
        stepNumber: "08",
        title: { es: "Publicación LinkedIn", en: "LinkedIn Publish" },
        subtitle: {
          es: "LinkedIn OAuth2",
          en: "LinkedIn OAuth2",
        },
        description: {
          es: "Publica oficialmente el post con imagen y confirma el enlace en Telegram.",
          en: "Officially publishes post with image and confirms live link in Telegram.",
        },
        nodeType: "Destino",
        iconName: "linkedin",
      },
    ],
    metrics: [
      {
        value: "30 nodos",
        label: { es: "Arquitectura", en: "Architecture" },
        sublabel: {
          es: "Flujo robusto bifurcado",
          en: "Robust branched workflow",
        },
        accent: "primary",
      },
      {
        value: "12:00 PM",
        label: { es: "Publicación fija", en: "Daily post" },
        sublabel: {
          es: "Cadencia diaria automática",
          en: "Automated daily cadence",
        },
        accent: "green",
      },
      {
        value: "-85%",
        label: { es: "Tiempo invertido", en: "Time spent" },
        sublabel: {
          es: "De idea cruda a post en vivo",
          en: "From raw note to live post",
        },
        accent: "primary",
      },
      {
        value: "5 servicios",
        label: { es: "Integraciones", en: "Integrations" },
        sublabel: {
          es: "Telegram + Gemini + Sheets + Drive + LinkedIn",
          en: "Telegram + Gemini + Sheets + Drive + LinkedIn",
        },
        accent: "green",
      },
    ],
  },

  pipeline3: {
    id: "pipeline3",
    tabLabel: {
      es: "Monitor de Errores",
      en: "Error Monitor",
    },
    badge: {
      es: "Vigilancia 24/7 Global",
      en: "24/7 Global Monitoring",
    },
    title: {
      es: "Monitoreo de Errores & Alertas Críticas en Telegram",
      en: "Error Monitoring & Critical Alerts in Telegram",
    },
    description: {
      es: "Workflow centinela conectado al Error Trigger nativo de n8n: captura cualquier fallo en los flujos del servidor, extrae de forma segura el nodo responsable y el mensaje de error sin filtrar credenciales o tokens, y despacha una alerta push inmediata a Telegram con el link directo a la ejecución.",
      en: "Sentinel workflow connected to n8n native Error Trigger: captures any failure across server pipelines, safely extracts faulty node and error message without leaking tokens, and dispatches an immediate push alert to Telegram with direct execution link.",
    },
    filename: "alert-errors-workflow.json",
    rawJson: alertErrorsJson as unknown as Record<string, unknown>,
    nodeCount: Array.isArray(alertErrorsJson.nodes)
      ? alertErrorsJson.nodes.length
      : 3,
    steps: [
      {
        stepNumber: "01",
        title: { es: "Error Trigger", en: "Error Trigger" },
        subtitle: {
          es: "Captura global",
          en: "Global capture",
        },
        description: {
          es: "Escucha eventos de fallo en cualquier workflow configurado en la instancia.",
          en: "Listens for failure events across all workflows in the n8n instance.",
        },
        nodeType: "Trigger",
        iconName: "alert",
      },
      {
        stepNumber: "02",
        title: { es: "Sanitización Segura", en: "Safe Sanitization" },
        subtitle: {
          es: "JavaScript Sandbox",
          en: "JavaScript Sandbox",
        },
        description: {
          es: "Redacta el mensaje aislando el nodo y causa sin filtrar variables de entorno ni secretos.",
          en: "Drafts message isolating node and reason without exposing environment secrets.",
        },
        nodeType: "Seguridad",
        iconName: "cpu",
      },
      {
        stepNumber: "03",
        title: { es: "Alerta Telegram", en: "Telegram Alert" },
        subtitle: {
          es: "Push instantáneo",
          en: "Instant Push",
        },
        description: {
          es: "Envía notificación al móvil del administrador con enlace directo a la ejecución fallida.",
          en: "Dispatches push alert to admin mobile with direct link to failed execution.",
        },
        nodeType: "Destino",
        iconName: "telegram",
      },
    ],
    metrics: [
      {
        value: "100%",
        label: { es: "Cobertura", en: "Coverage" },
        sublabel: {
          es: "Vigilancia en todos los flujos",
          en: "Monitoring across all workflows",
        },
        accent: "green",
      },
      {
        value: "< 5s",
        label: { es: "Tiempo de alerta", en: "Alert latency" },
        sublabel: {
          es: "Notificación push inmediata",
          en: "Immediate mobile push notification",
        },
        accent: "primary",
      },
      {
        value: "0 leaks",
        label: { es: "Seguridad de datos", en: "Data security" },
        sublabel: {
          es: "Logs sanitizados sin secretos",
          en: "Sanitized logs without secrets",
        },
        accent: "green",
      },
      {
        value: "24/7",
        label: { es: "Disponibilidad", en: "Availability" },
        sublabel: {
          es: "Operación desatendida en VPS",
          en: "Unattended VPS operation",
        },
        accent: "primary",
      },
    ],
  },
};
