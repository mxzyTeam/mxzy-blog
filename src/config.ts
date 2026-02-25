import type { ExpressiveCodeConfig, GitHubEditConfig, ImageFallbackConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig, UmamiConfig } from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: '个人博客',
  subtitle: '个人博客',
  description: '个人博客，记录技术学习与生活分享。',
  keywords: [
    "",
    "冒险之源", 
    "MC",
    "生存",
    "插件",
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
      name: "介绍",
      url: "posts/介绍/",
      external: false,
    },
    {
      name: "指南", 
      url: "/guide/",
      external: false,
    },
  ]
};

export const profileConfig: ProfileConfig = {
  avatar: "/avatar.png",
  name: "Littleduan", 
  bio: "qaq",
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