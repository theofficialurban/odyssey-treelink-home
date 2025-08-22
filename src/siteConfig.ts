import siteConfigJson from "./siteConfig.json";
import { YouTube, Tweet, LinkPreview } from "astro-embed";

export interface SiteConfiguration {
  name: string;
  subName?: string;
  bio: string;
  profilePicture: string;
  url: string;
  blog: boolean;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
}

interface IconLink {
  id: string;
  icon: string;
  url: string;
}

export type LinkImage = {
  src?: string;
  className?: string;
  alt?: string;
  bgColor?: string;
  height?: string;
};

export interface LiveClasses {
  main?: string;
  icon?: string;
  title?: string;
  innerMain?: string;
  listItemClass?: string;
}
export interface LiveSocial {
  title: string;
  subtitle?: string;
  url: string;
  platform: Platform;
}

export interface colorScheme {
  icon: string;
  gFrom: string;
  gTo: string;
  blur: string;
}
export interface Platform {
  name: string;
  iconName: string;
  colorScheme: colorScheme;
  root: string;
}
export interface CustomLink {
  id: string;
  title: string;
  url: string;
  className?: string;
  customHtml?: string;
  isModel: boolean | EmbedModel;
}
export interface EmbedModel {
  embed: string;
  url: string;
}
export const SITE: SiteConfiguration = {
  ...siteConfigJson,
};
export type Platforms = "rumble" | "youtube" | "twitch" | "kick" | "twitter";
// export type Platforms = {
//   rumble: Platform;
//   youtube: Platform;
//   kick: Platform;
//   twitch: Platform;
//   twitter: Platform;
// };

export const PLATFORMS: Record<Platforms, Platform> = {
  rumble: {
    name: "Rumble",
    iconName: "rumble",
    colorScheme: {
      icon: "green",
      gFrom: "#33cc33",
      gTo: "#009900",
      blur: "rgb(0 153 0 / 0.2)",
    },
    root: "https://rumble.com",
  },
  kick: {
    name: "Kick",
    iconName: "kick",
    colorScheme: {
      icon: "green",
      gFrom: "#33cc33",
      gTo: "#009900",
      blur: "rgb(0 153 0 / 0.2)",
    },
    root: "https://kick.com",
  },
  youtube: {
    name: "YouTube",
    iconName: "youtube",
    colorScheme: {
      icon: "red",
      gFrom: "#ff0000",
      gTo: "#990000",
      blur: "rgb(255 0 0 / 0.2)",
    },
    root: "https://youtube.com",
  },
  twitch: {
    name: "Twitch",
    iconName: "twitch",
    colorScheme: {
      icon: "purple",
      gFrom: "#990099",
      gTo: "#660066",
      blur: "rgb(204 0 204 / 0.2)",
    },
    root: "https://twitch.tv",
  },
  twitter: {
    name: "X",
    iconName: "x",
    colorScheme: {
      icon: "slate",
      gFrom: "#c2c2d6",
      gTo: "#7575a3",
      blur: "rgb(102 102 102 / 0.2)",
    },
    root: "https://x.com",
  },
};
export function getPlatform(name: Platforms): Platform {
  return PLATFORMS[name];
}
export const EMBEDS = {
  youtube: YouTube,
  link: LinkPreview,
  tweet: Tweet,
};
export const LiveSocials: LiveSocial[] = [
  {
    title: "X/Twitter",
    subtitle: "@officialurbanus",
    url: "https://x.com/officialurbanus",
    platform: PLATFORMS.twitter,
  },
  {
    title: "Twitch",
    subtitle: "@theurbanodyssey",
    url: "https://twitch.tv/theurbanodyssey",
    platform: PLATFORMS.twitch,
  },
  {
    title: "Kick",
    subtitle: "@OfficialUrban",
    url: "https://kick.com/officialurban",
    platform: PLATFORMS.kick,
  },
];
