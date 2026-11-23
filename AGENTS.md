# AGENTS.md — Protocolo Operativo y Arquitectura de Código (portfolio-next.js / nival.is-a.dev)

Este documento establece las reglas operativas, de arquitectura y de gestión de código que **todo asistente o agente de IA debe cumplir obligatoriamente** al trabajar en este repositorio.

---

## 1. Política Estricta de Control de Versiones (Git & Commits)

1. **Prohibición Total de Git Commit / Push Autónomo:**
   * **NUNCA** ejecutar `git commit` ni `git push` de manera autónoma, desatendida o automática.
   * Siempre se debe solicitar y recibir autorización explícita del usuario antes de registrar o enviar cualquier cambio en el historial de Git.

2. **Commits solo tras Implementaciones Significativas y Probadas:**
   * No realizar commits por cambios triviales, parciales o en progreso.
   * Un commit solo se propone una vez que una característica, fix o cambio estructural esté **completamente implementado, validado y funcionando** sin advertencias ni errores.

3. **Formato Conventional Commits:**
   * Los mensajes de commit deben seguir la convención estándar en minúsculas y en español o inglés técnico:
     * `feat(alcance): descripción clara`
     * `fix(alcance): corrección del error`
     * `docs(alcance): documentación o guías`
     * `refactor(alcance): refactorización sin cambios funcionales`
     * `perf(alcance): optimización de rendimiento`

4. **Archivos Protegidos y Secretos:**
   * Archivos `.env*`, credenciales o carpetas temporales deben permanecer estrictamente fuera del control de versiones (respetando [`.gitignore`](file:///.gitignore)).

---

## 2. Directrices de Frontend, Rendimiento y UI

1. **Cero Emojis en Componentes e Interfaz:**
   * Está **estrictamente prohibido el uso de emojis** en textos de interfaz, botones, tarjetas, encabezados, badges o modales de la web.
   * Todos los elementos visuales e iconográficos deben utilizar exclusivamente librerías de iconos estructurados ([`lucide-react`](file:///package.json) o [`react-icons`](file:///package.json)).

2. **Rendimiento 100/100 Lighthouse & Zero Reflow:**
   * Todo cambio debe preservar las métricas de rendimiento 100/100 en Google Lighthouse (Performance, Accessibility, Best Practices, SEO).
   * Prohibido introducir Cumulative Layout Shift (CLS), reflows forzados o re-renders innecesarios.
   * Utilizar siempre componentes optimizados (`next/image`, `next/link`) con atributos de dimensión adecuados (`sizes`, `priority` cuando corresponda).

3. **Soporte Bilingüe Obligatorio (i18n ES / EN):**
   * Todo contenido visible (textos, títulos, descripciones, tags, botones, labels de accesibilidad) debe definir su equivalente en español e inglés utilizando el tipo `LocalizedText` (`{ es: string; en: string }`).

4. **Stack Tecnológico:**
   * Next.js 16 (App Router con Turbopack) + React 19 + Tailwind CSS + Framer Motion + componentes accesibles tipo `shadcn/ui`.

---

## 3. Protocolo de Verificación Obligatorio

Antes de dar por finalizada cualquier modificación en el código o responder al usuario, el agente debe ejecutar y verificar:

1. **Chequeo de Tipos Estricto:**
   ```bash
   npx tsc --noEmit
   ```
   *Cero errores de TypeScript permitidos.*

2. **Compilación de Producción:**
   ```bash
   npm run build
   ```
   *Verificar que la compilación (Turbopack) genere todas las páginas estáticas (SSG/SSR) con código de salida 0.*
