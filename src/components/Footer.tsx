type FooterProps = { privacyHref: string; termsHref: string };
export function Footer({ privacyHref, termsHref }: FooterProps) {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-display text-3xl text-paper">SPG</p><p className="mt-1 text-sm uppercase tracking-[0.18em] text-sand/60">Social Programming Group</p></div>
        <div className="flex flex-wrap gap-4 text-sm text-sand/70"><a href={privacyHref} className="transition hover:text-paper">???????? ??????????????????</a><a href={termsHref} className="transition hover:text-paper">???????????????? ??????????</a><a href="#cta" className="transition hover:text-paper">????????</a><a href="https://t.me/spg_marketing" className="transition hover:text-paper">Telegram</a></div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl text-xs uppercase tracking-[0.2em] text-sand/40">???? ????????? ??????????? ? ????? ? ?????????? ?? GitHub Pages.</div>
    </footer>
  );
}
