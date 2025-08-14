import type { ComponentInstance, Props } from "astro";
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

export const EMBEDS = {
  youtube: YouTube,
  link: LinkPreview,
  tweet: Tweet,
};
