import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "../../data/sharik-content";
import { assetPath, Button, Container } from "./shared";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-page/92 backdrop-blur-md">
      <Container className="py-4">
        <div className={`rounded-full border px-4 py-3 transition-all sm:px-6 ${scrolled ? "border-brand-line shadow-soft" : "border-transparent"}`}>
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <img src={assetPath("logo-sharik.svg")} alt="ШАРиК digital" className="h-12 w-12 flex-none" />
              <div className="min-w-0">
                <p className="font-display text-[1.45rem] font-semibold leading-none text-brand-ink">ШАРиК digital</p>
                <p className="hidden text-[0.72rem] font-medium tracking-[0.04em] text-brand-muted sm:block">
                  маркетинг для стоматологий
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-4 lg:flex">
              <span className="hidden h-10 w-px bg-[url('/assets/sharik/header-dots.svg')] bg-contain bg-center bg-no-repeat xl:block" />
              <nav className="flex items-center gap-6">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm font-medium text-brand-muted transition hover:text-brand-ink">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden lg:block">
              <Button href="#cta">Получить разбор</Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink lg:hidden"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open ? (
            <div className="mt-4 border-t border-brand-line pt-4 lg:hidden">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-brand-muted transition hover:bg-brand-card hover:text-brand-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#cta" className="button-primary mt-2 justify-center" onClick={() => setOpen(false)}>
                  Получить разбор
                </a>
              </nav>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
