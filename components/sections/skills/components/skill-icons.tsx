import type { CSSProperties, ReactNode } from "react";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFastapi,
  SiPython,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiDocker,
  SiLinux,
  SiHetzner,
  SiNodedotjs,
  SiExpress,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiOllama,
  SiLangchain,
  SiRedis,
  SiGithub,
  SiJavascript,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiN8N,
  SiSelenium,
  SiCloudflare,
  SiNginx,
} from "react-icons/si";
import {
  FaReact,
  FaNetworkWired,
  FaBrain,
  FaDatabase,
  FaGlobe,
  FaBolt,
  FaCodeBranch,
  FaCode,
  FaCogs,
  FaLayerGroup,
  FaExchangeAlt,
  FaSearchengin,
} from "react-icons/fa";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: CSSProperties }>
> = {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFastapi,
  SiPython,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiDocker,
  SiLinux,
  SiHetzner,
  SiNodedotjs,
  SiExpress,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiOllama,
  SiLangchain,
  SiRedis,
  SiGithub,
  SiJavascript,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiN8N,
  SiSelenium,
  SiCloudflare,
  SiNginx,
  FaReact,
  FaNetworkWired,
  FaBrain,
  FaDatabase,
  FaGlobe,
  FaBolt,
  FaCodeBranch,
  FaCode,
  FaCogs,
  FaLayerGroup,
  FaExchangeAlt,
  FaSearchengin,
};

const colorMap: Record<string, string> = {
  SiNextdotjs: "#6B7280",
  SiTypescript: "#3178C6",
  SiTailwindcss: "#06B6D4",
  SiShadcnui: "#6B7280",
  SiFastapi: "#009688",
  SiPython: "#3776AB",
  SiMysql: "#4479A1",
  SiSqlite: "#003B57",
  SiPostgresql: "#4169E1",
  SiGit: "#F05032",
  SiVercel: "#6B7280",
  SiDocker: "#2496ED",
  SiLinux: "#FCC624",
  SiNodedotjs: "#339933",
  SiExpress: "#6B7280",
  SiOpenai: "#412991",
  SiAnthropic: "#F18200",
  SiGooglegemini: "#4285F4",
  SiOllama: "#6B7280",
  SiLangchain: "#1C3C3C",
  SiRedis: "#FF4438",
  SiGithub: "#181717",
  SiJavascript: "#F7DF1E",
  SiFramer: "#0055FF",
  SiHtml5: "#E34F26",
  SiCss3: "#1572B6",
  SiN8N: "#EA4A71",
  SiSelenium: "#43B02A",
  SiCloudflare: "#F38020",
  SiNginx: "#009639",
  SiHetzner: "#D50C2D",
  FaReact: "#61DAFB",
  FaNetworkWired: "#6B7280",
  FaBrain: "#A855F7",
  FaDatabase: "#6B7280",
  FaGlobe: "#3B82F6",
  FaBolt: "#EAB308",
  FaCodeBranch: "#6B7280",
  FaCode: "#6B7280",
  FaCogs: "#6B7280",
  FaLayerGroup: "#6B7280",
  FaExchangeAlt: "#6B7280",
  FaSearchengin: "#6B7280",
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
