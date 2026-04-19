import { Cases } from "./components/Cases";
import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { getEnrichedCaseStudies } from "./data/enriched-cases";

type CasesPageAppProps = {
  basePath: string;
};

function CasesHeader({ basePath }: { basePath: string }) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.8rem] px-4 py-3 sm:px-6">
        <a href={`${basePath}#top`} className="min-w-0">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/70">Social Programming Group</p>
          <p className="text-sm text-paper">Кейсы SPG</p>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          <a href={`${basePath}#top`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Главная</a>
          <a href={`${basePath}materialy.html`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Материалы дел</a>
          <a href={`${basePath}#cta`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Контакты</a>
        </nav>
        <a href={`${basePath}#audit-form`} className="btn-primary">
          Получить аудит
        </a>
      </div>
    </header>
  );
}

export function CasesPageApp({ basePath }: CasesPageAppProps) {
  const items = getEnrichedCaseStudies();

  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-80" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <CustomCursor />
      <CasesHeader basePath={basePath} />

      <main className="pt-24 sm:pt-28">
        <section className="section-shell px-4 pb-4">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="max-w-2xl">
              <div className="label-chip">Кейсы SPG</div>
              <h1 className="mt-6 font-display text-[3rem] leading-[0.94] text-paper sm:text-[3.7rem] lg:text-[4.4rem]">
                Открытые кейсы, где видно не только цифры, но и логику роста.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-sand/80 sm:text-lg">
                Здесь собраны кейсы по стоматологиям, медицине, экспертам, недвижимости, локальному бизнесу и B2B. Карточки компактные,
                а полный разбор, отзыв и артефакты открываются внутри.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`${basePath}#audit-form`} className="btn-primary">Обсудить проект</a>
                <a href={`${basePath}materialy.html`} className="btn-secondary">Материалы дел</a>
              </div>
            </div>

            <div className="panel-card dossier-card relative overflow-hidden p-6 sm:p-7">
              <div className="agent-corner agent-corner-top" />
              <div className="agent-corner agent-corner-bottom" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,122,31,0.18),transparent_34%)]" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Что внутри</p>
                  <p className="mt-3 text-sm leading-6 text-paper/88">
                    Фильтрация по нишам, логотипы, ключевые метрики, полное описание задачи, решения, результатов и отзывы.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Как смотреть</p>
                  <p className="mt-3 text-sm leading-6 text-paper/88">
                    Можно быстро пролистать сетку, открыть нужную нишу или углубиться в конкретный кейс без перехода обратно на главную.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Главный смысл</p>
                  <p className="mt-3 text-sm leading-6 text-paper/88">
                    Мы показываем не просто результат, а связку: какая была задача, что именно собрали и почему это сработало.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-ember/30 bg-ember/8 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Формат работы</p>
                  <p className="mt-3 text-sm leading-6 text-paper/90">
                    Базовая единица работ начинается от 35 000 ₽, но чаще мы собираем пакетную систему под задачу бизнеса и стадию роста.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cases items={items} />
      </main>

      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        homeHref={`${basePath}#top`}
        contactHref={`${basePath}#cta`}
        extraLinks={[
          { label: "Материалы дел", href: `${basePath}materialy.html` },
          { label: "Кейсы", href: `${basePath}keisy.html` },
        ]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
