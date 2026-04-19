import { CustomCursor } from "./components/CustomCursor";
import { CookieBanner } from "./components/CookieBanner";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { SeoHub } from "./components/SeoHub";

type MaterialsPageAppProps = {
  basePath: string;
};

function MaterialsHeader({ basePath }: { basePath: string }) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.8rem] px-4 py-3 sm:px-6">
        <a href={`${basePath}#top`} className="min-w-0">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/70">Social Programming Group</p>
          <p className="text-sm text-paper">Материалы и посадочные страницы SPG</p>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          <a href={`${basePath}#top`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Главная</a>
          <a href={`${basePath}#cases`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Кейсы</a>
          <a href={`${basePath}#cta`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Контакты</a>
        </nav>
        <a href={`${basePath}#audit-form`} className="btn-primary">
          Получить аудит
        </a>
      </div>
    </header>
  );
}

export function MaterialsPageApp({ basePath }: MaterialsPageAppProps) {
  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-80" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <CustomCursor />
      <MaterialsHeader basePath={basePath} />
      <main className="pt-24 sm:pt-28">
        <SeoHub
          basePath={basePath}
          title="Все материалы, посадочные страницы и разборы SPG, которые мы собираем под продвижение и органический спрос."
          description="Здесь лежит весь наш многостраничный слой: страницы по нишам, услугам и практические материалы по вопросам, с которых бизнес обычно начинает поиск подрядчика."
        />
      </main>
      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        homeHref={`${basePath}#top`}
        contactHref={`${basePath}#cta`}
        extraLinks={[{ label: "Материалы", href: `${basePath}materialy.html` }]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
