import React from "react";
import ReactDOM from "react-dom/client";
import { seoPages } from "./data/seo-pages";
import { createFaviconSources } from "./lib/assets";
import { SeoPageApp } from "./SeoPageApp";
import "./index.css";

const basePath = import.meta.env.BASE_URL;
const faviconSources = createFaviconSources(basePath);

function applyFavicon(source: string) {
  let iconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;

  if (!iconLink) {
    iconLink = document.createElement("link");
    iconLink.rel = "icon";
    document.head.appendChild(iconLink);
  }

  iconLink.href = source;
}

function loadFavicon(candidates: string[], index = 0) {
  const current = candidates[index];

  if (!current) {
    return;
  }

  const probe = new Image();
  probe.onload = () => applyFavicon(current);
  probe.onerror = () => loadFavicon(candidates, index + 1);
  probe.src = current;
}

loadFavicon(faviconSources);

const rootElement = document.getElementById("root");
const pageKey = rootElement?.getAttribute("data-page") ?? "";
const page = seoPages[pageKey];

if (!rootElement || !page) {
  throw new Error(`SEO page is not configured for key: ${pageKey}`);
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SeoPageApp page={page} basePath={basePath} />
  </React.StrictMode>,
);
