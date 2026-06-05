import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function assetPath(path: string) {
  return `${import.meta.env.BASE_URL}assets/sharik/${encodeURIComponent(path)}`;
}

export function figmaAssetPath(path: string) {
  return `${import.meta.env.BASE_URL}assets-figma/${path.split("/").map(encodeURIComponent).join("/")}`;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-title-block section-title-block--${align}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <a className={`ui-button ui-button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2.2} />
    </a>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`ui-card ${className}`}>{children}</article>;
}

export function IconBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`icon-badge ${className}`}>{children}</span>;
}

export function Reveal({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`section reveal ${className}`}>
      {children}
    </section>
  );
}

type FigmaLayer = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  alt?: string;
  className?: string;
};

export function ReferenceCanvas({
  id,
  height,
  background,
  layers = [],
  children,
  className = "",
}: {
  id?: string;
  height: number;
  background: string;
  layers?: FigmaLayer[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`reference-section ${className}`} style={{ "--reference-height": height } as React.CSSProperties}>
      <div className="reference-canvas">
        <img src={figmaAssetPath(background)} alt="" className="reference-bg" aria-hidden="true" />
        {layers.map((layer) => (
          <img
            key={`${layer.src}-${layer.x}-${layer.y}`}
            src={figmaAssetPath(layer.src)}
            alt={layer.alt ?? ""}
            className={`reference-layer ${layer.className ?? ""}`}
            aria-hidden={layer.alt ? undefined : true}
            style={
              {
                left: `${(layer.x / 1280) * 100}%`,
                top: `${(layer.y / height) * 100}%`,
                width: `${(layer.w / 1280) * 100}%`,
                height: `${(layer.h / height) * 100}%`,
              } as React.CSSProperties
            }
          />
        ))}
        {children}
      </div>
    </section>
  );
}
