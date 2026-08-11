"use client";

import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

const sections = [
  { id: "skills", Component: Skills },
  { id: "stats", Component: Stats },
  { id: "projects", Component: Projects },
  { id: "contact", Component: Contact },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {/*
        NOTA: cada sección ya anima su propio contenido con `whileInView`
        (fadeUp/stagger). Un wrapper animado aquí duplicaría la animación:
        la sección entera quedaría invisible hasta entrar al viewport Y las
        cards harían su propio fade — el doble efecto que parecía "desaparecer".
      */}
      <Hero />
      {sections.map(({ id, Component }) => (
        <div key={id}>
          <Component />
        </div>
      ))}
    </div>
  );
}
