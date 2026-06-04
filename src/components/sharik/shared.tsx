import type { ReactNode } from "react";

export function assetPath(path: string) {
  return `${import.meta.env.BASE_URL}assets/sharik/${encodeURIComponent(path)}`;
}

export function figmaAssetPath(path: string) {
  return `${import.meta.env.BASE_URL}assets/figma/${path.split("/").map(encodeURIComponent).join("/")}`;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <a href={href} className={`${variant === "primary" ? "button-primary" : "button-secondary"} ${className}`}>
      {children}
    </a>
  );
}

export function ReferenceImageSection({
  id,
  ratio,
  baseHeight,
  figmaBackground,
  figmaLayers = [],
  children,
}: {
  id?: string;
  ratio: string;
  baseHeight: number;
  figmaBackground?: string;
  figmaLayers?: Array<{ src: string; x: number; y: number; w: number; h: number; className?: string; alt?: string }>;
  children?: ReactNode;
}) {
  const layerStyle = (layer: { x: number; y: number; w: number; h: number }) =>
    ({
      left: `${(layer.x / 1280) * 100}%`,
      top: `${(layer.y / baseHeight) * 100}%`,
      width: `${(layer.w / 1280) * 100}%`,
      height: `${(layer.h / baseHeight) * 100}%`,
    }) as React.CSSProperties;

  return (
    <section id={id} className="reference-screen" style={{ "--reference-ratio": ratio } as React.CSSProperties}>
      <div className="reference-canvas">
        {figmaBackground ? <img src={figmaAssetPath(figmaBackground)} alt="" className="reference-figma-background" aria-hidden="true" /> : null}
        {figmaLayers.map((layer) => (
          <img
            key={layer.src}
            src={figmaAssetPath(layer.src)}
            alt={layer.alt ?? ""}
            className={`reference-figma-layer ${layer.className ?? ""}`}
            style={layerStyle(layer)}
            aria-hidden={layer.alt ? undefined : true}
          />
        ))}
        {children}
      </div>
    </section>
  );
}
