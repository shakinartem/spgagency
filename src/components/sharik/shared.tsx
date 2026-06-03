import type { ReactNode } from "react";

export function assetPath(path: string) {
  return `${import.meta.env.BASE_URL}assets/sharik/${encodeURIComponent(path)}`;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
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
