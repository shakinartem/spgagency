import { seoPageOrder, seoPages } from "./seo-pages";

export function getSeoCollection(key: string) {
  return key.startsWith("article-") ? "article" : "service";
}

export function getSeoCollections() {
  const orderedItems = seoPageOrder.map((key) => seoPages[key]);

  return {
    services: orderedItems.filter((item) => getSeoCollection(item.key) === "service"),
    articles: orderedItems.filter((item) => getSeoCollection(item.key) === "article"),
  };
}

const relatedMaterialMap: Record<string, string[]> = {
  "dental-marketing": ["website-for-dentistry", "article-dental-leads", "maps-reputation"],
  "medical-marketing": ["maps-reputation", "article-reputation-maps", "website-for-dentistry"],
  "expert-marketing": ["telegram-for-experts", "article-reputation-maps", "real-estate-marketing"],
  "real-estate-marketing": ["article-reputation-maps", "maps-reputation", "telegram-for-experts"],
  "article-dental-leads": ["dental-marketing", "website-for-dentistry", "maps-reputation"],
  "article-reputation-maps": ["maps-reputation", "medical-marketing", "dental-marketing"],
  "article-medical-trust": ["medical-marketing", "article-reputation-maps", "maps-reputation"],
  "article-local-leads": ["maps-reputation", "real-estate-marketing", "medical-marketing"],
  "article-expert-telegram-system": ["telegram-for-experts", "expert-marketing", "article-reputation-maps"],
  "article-conversion-gap": ["website-for-dentistry", "dental-marketing", "maps-reputation"],
  "article-cards-reviews-system": ["maps-reputation", "medical-marketing", "dental-marketing"],
  "website-for-dentistry": ["dental-marketing", "article-dental-leads", "maps-reputation"],
  "maps-reputation": ["article-reputation-maps", "medical-marketing", "dental-marketing"],
  "telegram-for-experts": ["expert-marketing", "real-estate-marketing", "article-reputation-maps"],
};

export function getRelatedSeoPages(currentKey: string) {
  const relatedKeys = relatedMaterialMap[currentKey] ?? [];
  return relatedKeys.map((key) => seoPages[key]).filter(Boolean);
}
