import type { ReactNode } from "react";

import { SiNextdotjs, SiTypescript, SiTailwindcss, SiAngular, SiVuedotjs, SiShadcnui, SiLaravel, SiFastapi, SiPython, SiSpringboot, SiDotnet, SiMysql, SiSqlite, SiPostgresql, SiMongodb, SiGit, SiVercel, SiSupabase, SiDocker, SiRailway, SiLinux } from "react-icons/si";
import { FaReact, FaNetworkWired, FaCogs, FaCloud, FaDatabase } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiVuedotjs,
  SiShadcnui,
  SiLaravel,
  SiFastapi,
  SiPython,
  SiSpringboot,
  SiDotnet,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiVercel,
  SiSupabase,
  SiDocker,
  SiRailway,
  SiLinux,
  FaReact,
  FaNetworkWired,
  FaCogs,
  FaCloud,
  FaDatabase,
  VscGraph,
};

export interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className }: SkillIconProps): ReactNode {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
