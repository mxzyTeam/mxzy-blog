import type { ExpressiveCodeConfig, GitHubEditConfig, ImageFallbackConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig, UmamiConfig } from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "MXZY Blog",
  subtitle: "Minecraft 公益生存服务器 · 官方站点",
  description: "冒险之源 Minecraft 公益生存服务器官方站点，专注建筑与生存玩法，提供服务器公告、玩法指南、更新日志与相关技术记录",
  keywords: [
    "Minecraft",
    "冒险之源", 
    "MC服务器",
    "公益服",
    "生存服务器",
    "Minecraft插件",
  ],
  lang: "zh_CN",
  themeColor: {
    hue: 361,
    fixed: false,
    forceDarkMode: false,
  },
  banner: {
    enable: false,
    src: "/xinghui.avif",
    position: "center",
    credit: {
      enable: true,
      text: "Pixiv @chokei",
      url: "",
    },
  },
  background: {
    enable: false, // 暂时禁用或设置具体图片路径
    src: "",
    position: "center",
    size: "cover", 
    repeat: "no-repeat",
    attachment: "fixed",
    opacity: 1,
  },
  toc: {
    enable: true,
    depth: 2,
  },
  notice: {
    enable: false,
    content: "本站图片资源已全面切换至 B 站图床。如出现加载异常等问题，请联系我们反馈。",
    level: "warning",
  },
  favicon: [],
  server: [],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: "服务器介绍",
      url: "posts/服务器介绍/",
      external: false,
    },
    {
      name: "玩家指南", 
      url: "/guide/",
      external: false,
    },
    {
      name: "系统商店",
      url: "https://shop.mxzysoa.top",
      external: true,
    },
  ]
};

export const profileConfig: ProfileConfig = {
  avatar: "/avatar.png",
  name: "Littleduan", 
  bio: "一个以建筑与生存为核心的 Minecraft服务器",
  links: [
    {
      name: "Bilibili",
      icon: "fa6-brands:bilibili", 
      url: "https://space.bilibili.com/1337445275",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/mxzyTeam",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const imageFallbackConfig: ImageFallbackConfig = {
  enable: false,
  originalDomain: "",
  fallbackDomain: "",
};

export const umamiConfig: UmamiConfig = {
  enable: false, 
  baseUrl: "",
  shareId: "CdkXbGgZr6ECKOyK",
  timezone: "Asia/Shanghai",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  theme: "github-dark",
};

export const gitHubEditConfig: GitHubEditConfig = {
  enable: false,
  baseUrl: "",
};