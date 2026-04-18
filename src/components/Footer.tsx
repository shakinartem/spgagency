type FooterProps = { privacyHref: string; termsHref: string };

export function Footer({ privacyHref, termsHref }: FooterProps) {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-3xl text-paper">SPG</p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-sand/60">Social Programming Group</p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-sand/40">Статический премиальный сайт, готовый к публикации на GitHub Pages.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-sand/70">
          <a href={privacyHref} className="transition hover:text-paper">Политика конфиденциальности</a>
          <a href={termsHref} className="transition hover:text-paper">Пользовательское соглашение</a>
          <a href="#cta" className="transition hover:text-paper">Контакты</a>
          <a href="https://t.me/spg_marketing" className="transition hover:text-paper">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
