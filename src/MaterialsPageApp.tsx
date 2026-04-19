import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
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
          <p className="text-sm text-paper">Материалы дел SPG</p>
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
        <section className="section-shell px-4 pb-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="max-w-2xl">
              <div className="label-chip">Материалы дел</div>
              <h1 className="mt-6 font-display text-[3rem] leading-[0.94] text-paper sm:text-[3.7rem] lg:text-[4.4rem]">
                Все страницы, разборы и рабочие материалы SPG для органического спроса.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-sand/80 sm:text-lg">
                Здесь собран многостраничный слой сайта: посадочные по нишам и услугам, а также практические материалы
                по вопросам, с которых бизнес обычно начинает поиск подрядчика.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`${basePath}#audit-form`} className="btn-primary">Получить аудит</a>
                <a href={`${basePath}#cases`} className="btn-secondary">Открыть кейсы</a>
              </div>
            </div>

            <div className="panel-card dossier-card relative overflow-hidden p-6 sm:p-7">
              <div className="agent-corner agent-corner-top" />
              <div className="agent-corner agent-corner-bottom" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,122,31,0.18),transparent_34%)]" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Зачем это собрано</p>
                  <p className="mt-3 text-sm leading-6 text-paper/88">
                    Чтобы сайт начал работать не только как презентация, но и как сеть входных страниц под реальные поисковые запросы.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Что внутри</p>
                  <p className="mt-3 text-sm leading-6 text-paper/88">
                    Ниши, услуги, статьи, локальная репутация, сайты, Telegram и материалы, которые помогают закрывать вопрос доверия.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Как использовать</p>
                  <p className="mt-3 text-sm leading-6 text-paper/88">
                    Эти страницы можно усиливать SEO, ссылками, рекламой и контентом, а потом постепенно разворачивать в отдельные кластеры.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-ember/30 bg-ember/8 p-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Текущий этап</p>
                  <p className="mt-3 text-sm leading-6 text-paper/90">
                    Сейчас это рабочий эксперимент в побочной ветке: мы тестируем архитектуру, тексты и точку входа для органического трафика.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeoHub basePath={basePath} showHeading={false} />
      </main>
      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        homeHref={`${basePath}#top`}
        contactHref={`${basePath}#cta`}
        extraLinks={[{ label: "Материалы дел", href: `${basePath}materialy.html` }]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
