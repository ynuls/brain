import { NavItem } from "@/types/nav";

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "人文社科知识图谱系统",
  description: "Draw diagram with nature language.",
  mainNav: [
    // {
    //   title: "Credentials",
    //   href: "/credentials",
    // },
  ],
  links: {
    twitter: "https://twitter.com/fraserxu",
    github: "https://github.com/fraserxu/diagram-gpt",
  },
};
