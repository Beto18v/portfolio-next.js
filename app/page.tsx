"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

const sections = [
  { id: "hero", Component: Hero, delay: 0 },
  { id: "skills", Component: Skills, delay: 0.1 },
  { id: "stats", Component: Stats, delay: 0.2 },
  { id: "projects", Component: Projects, delay: 0.15 },
  { id: "contact", Component: Contact, delay: 0.25 },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {sections.map(({ id, Component, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  );
}
