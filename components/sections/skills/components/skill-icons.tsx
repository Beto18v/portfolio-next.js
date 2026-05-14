import type { CSSProperties, ReactNode } from "react";

import {
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
} from "react-icons/si";
import {
  FaReact,
  FaNetworkWired,
  FaCogs,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: CSSProperties }>
> = {
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

const colorMap: Record<string, string> = {
  SiNextdotjs: "#6B7280",
  SiTypescript: "#3178C6",
  SiTailwindcss: "#06B6D4",
  SiAngular: "#DD0031",
  SiVuedotjs: "#4FC08D",
  SiShadcnui: "#6B7280",
  SiLaravel: "#FF2D20",
  SiFastapi: "#009688",
  SiPython: "#3776AB",
  SiSpringboot: "#6DB33F",
  SiDotnet: "#512BD4",
  SiMysql: "#4479A1",
  SiSqlite: "#003B57",
  SiPostgresql: "#4169E1",
  SiMongodb: "#47A248",
  SiGit: "#F05032",
  SiVercel: "#6B7280",
  SiSupabase: "#3ECF8E",
  SiDocker: "#2496ED",
  SiRailway: "#6B7280",
  SiLinux: "#FCC624",
  FaReact: "#61DAFB",
  FaNetworkWired: "#6B7280",
  FaCogs: "#6B7280",
  FaCloud: "#6B7280",
  FaDatabase: "#6B7280",
  VscGraph: "#6B7280",
};

export interface SkillIconProps {
  name: string;
  className?: string;
  style?: CSSProperties;
}

export function SkillIcon({
  name,
  className,
  style,
}: SkillIconProps): ReactNode {
  const Icon = iconMap[name];
  if (!Icon) return null;
  const color = colorMap[name];
  return (
    <Icon
      className={`${className ?? ""} transition-colors duration-200 group-hover:text-(--skill-icon-color)`}
      style={{
        ...style,
        ...(color ? ({ "--skill-icon-color": color } as CSSProperties) : {}),
      }}
    />
  );
}
