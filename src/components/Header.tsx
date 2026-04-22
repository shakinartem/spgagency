import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FallbackImage } from "./FallbackImage";

type HeaderProps = {
  links: { label: string; href: string }[];
  primaryHref: string;
  logoPaths?: string[];
};

export function Header({ links, primaryHref, logoPaths = [] }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const materialsLink = links.find((link) => link.href.includes("materialy.html"));
  const regularLinks = links.filter((link) => !link.href.includes("materialy.html"));

  const getLinkClassName = (href: string) => {
    if (href.includes("materialy.html")) {
      return "liquid-glass-button liquid-glass-button--compact liquid-glass-button--orange";
    }

    return "text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper";
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className={`glass-nav mx-auto max-w-7xl rounded-[1.8rem] px-4 py-3 transition-all duration-500 sm:px-6 ${scrolled ? "border-ember/28 shadow-panel" : "border-white/15"}`}>
        <div className="flex items-center justify-between gap-5">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            {logoPaths.length > 0 ? (
              <FallbackImage
                sources={logoPaths}
                alt="SPG"
                className="h-11 w-11 rounded-full border border-white/10 bg-white/5 object-contain p-1.5"
                fallback={<div className="liquid-orb flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold tracking-[0.25em] text-paper">SPG</div>}
              />
            ) : (
              <div className="liquid-orb flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold tracking-[0.25em] text-paper">SPG</div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-paper">SPG</p>
              <p className="hidden whitespace-nowrap text-[0.62rem] uppercase tracking-[0.18em] text-sand/62 xl:block">
                оперативный штаб
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {regularLinks.map((link) => (
              <a key={link.href} href={link.href} className={getLinkClassName(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            {materialsLink ? (
              <a href={materialsLink.href} className="liquid-glass-button liquid-glass-button--compact liquid-glass-button--orange">
                {materialsLink.label}
              </a>
            ) : null}
            <a href={primaryHref} className="liquid-glass-button liquid-glass-button--orange">
              Обсудить проект
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="glass-nav mt-4 rounded-[1.6rem] p-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-[0.18em] transition hover:text-paper ${
                    link.href.includes("materialy.html")
                      ? "liquid-glass-button liquid-glass-button--compact liquid-glass-button--orange"
                      : "rounded-2xl px-3 py-3 text-sand/75 hover:bg-white/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href={primaryHref} className="liquid-glass-button liquid-glass-button--orange mt-2 w-full justify-center text-center" onClick={() => setOpen(false)}>
                Обсудить проект
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
