type FooterProps = {
  privacyHref: string;
  termsHref: string;
  homeHref?: string;
  contactHref?: string;
  extraLinks?: { label: string; href: string }[];
};

export function Footer({ privacyHref, termsHref, homeHref = "#top", contactHref = "#cta", extraLinks = [] }: FooterProps) {
  return (
    <footer className="border-t border-paper/10 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-3xl text-paper">ШАРиК digital</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-sand/60">digital-система для клиник</p>
            <p className="mt-5 max-w-md text-xs uppercase tracking-[0.2em] text-sand/40">
              ШАРиК digital — сайт, репутация, контент, CRM и аналитика для стоматологий и околомедицинских проектов.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-sand/70">
            <a href={privacyHref} className="transition hover:text-ember">Политика конфиденциальности</a>
            <a href={termsHref} className="transition hover:text-ember">Пользовательское соглашение</a>
            <a href={contactHref} className="transition hover:text-ember">Контакты</a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 border-t border-paper/10 pt-5 text-sm text-sand/60">
          <a href={homeHref} className="transition hover:text-ember">Главная</a>
          {extraLinks.map((link) => (
            <a key={`${link.label}-${link.href}`} href={link.href} className="transition hover:text-ember">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

