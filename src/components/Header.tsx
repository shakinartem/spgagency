import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FallbackImage } from "./FallbackImage";

type HeaderProps = {
  links: { label: string; href: string }[];
  primaryHref: string;
  secondaryHref?: string;
  logoPaths?: string[];
};

export function Header({ links, primaryHref, secondaryHref, logoPaths = [] }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="flex items-center justify-between gap-4">
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
              <p className="truncate text-[0.65rem] uppercase tracking-[0.28em] text-sand/70">Social Programming Group</p>
              <p className="truncate text-sm text-paper">оперативный маркетинговый штаб</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <div className="flex items-center gap-3">
              {secondaryHref ? (
                <a href={secondaryHref} className="btn-secondary">
                  Материалы
                </a>
              ) : null}
              <a href={primaryHref} className="btn-primary">
                Обсудить проект
              </a>
            </div>
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
                  className="rounded-2xl px-3 py-3 text-sm uppercase tracking-[0.18em] text-sand/75 transition hover:bg-white/5 hover:text-paper"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {secondaryHref ? (
                <a
                  href={secondaryHref}
                  className="rounded-2xl px-3 py-3 text-sm uppercase tracking-[0.18em] text-sand/75 transition hover:bg-white/5 hover:text-paper"
                  onClick={() => setOpen(false)}
                >
                  Материалы
                </a>
              ) : null}
              <a href={primaryHref} className="btn-primary mt-2 justify-center text-center" onClick={() => setOpen(false)}>
                Обсудить проект
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
