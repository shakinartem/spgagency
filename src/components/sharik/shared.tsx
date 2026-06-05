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
