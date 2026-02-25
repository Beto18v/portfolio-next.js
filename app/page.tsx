import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
