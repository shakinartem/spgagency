import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type HeaderProps = {
  links: { label: string; href: string }[];
  primaryHref: string;
};

export function Header({ links, primaryHref }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      <div
        className={`mx-auto max-w-7xl rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-ember/25 bg-ink/80 shadow-panel backdrop-blur-xl"
            : "border-white/10 bg-ink/50 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ember/40 bg-white/5 text-sm font-bold tracking-[0.25em] text-paper">
              SPG
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/70">Social Programming Group</p>
              <p className="text-sm text-paper">оперативный маркетинговый штаб</p>
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
            <a href={primaryHref} className="btn-primary">
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
          <div className="mt-4 rounded-3xl border border-white/10 bg-black/50 p-4 lg:hidden">
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
