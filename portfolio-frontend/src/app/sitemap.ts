import type { MetadataRoute } from "next";
import { siteUrl } from "../data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/` }];
}
