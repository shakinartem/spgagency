type FooterProps = {
  privacyHref: string;
  termsHref: string;
  homeHref?: string;
  contactHref?: string;
  extraLinks?: { label: string; href: string }[];
};

export function Footer({ privacyHref, termsHref, homeHref = "#top", contactHref = "#cta", extraLinks = [] }: FooterProps) {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-3xl text-paper">SPG</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-sand/60">Social Programming Group</p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-sand/40">Статический премиальный сайт, готовый к публикации на GitHub Pages.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-sand/70">
            <a href={privacyHref} className="transition hover:text-paper">Политика конфиденциальности</a>
            <a href={termsHref} className="transition hover:text-paper">Пользовательское соглашение</a>
            <a href={contactHref} className="transition hover:text-paper">Контакты</a>
            <a href="https://t.me/spg_marketing" className="transition hover:text-paper">Telegram</a>
          </div>
        </div>
        {extraLinks.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5 text-sm text-sand/60">
            <a href={homeHref} className="transition hover:text-paper">Главная</a>
            {extraLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-paper">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
