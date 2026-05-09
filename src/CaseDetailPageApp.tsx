import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useMemo } from "react";
import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Preloader } from "./components/Preloader";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { getEnrichedCaseStudies } from "./data/enriched-cases";
import { createBrandLogoSources } from "./lib/assets";

type CaseDetailPageAppProps = {
  basePath: string;
  caseId: string;
};

export function CaseDetailPageApp({ basePath, caseId }: CaseDetailPageAppProps) {
  const brandLogoPaths = createBrandLogoSources(basePath);
  const cases = useMemo(() => getEnrichedCaseStudies(), []);
  const item = cases.find((caseItem) => caseItem.id === caseId) ?? cases[0];

  return (
    <div className="grain-layer relative min-h-screen overflow-x-hidden bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-100" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <Preloader />
      <CustomCursor />
      <Header
        links={[
          { label: "Главная", href: basePath },
          { label: "Проекты", href: `${basePath}cases.html` },
          { label: "Калькулятор", href: `${basePath}#calculator` },
          { label: "FAQ", href: `${basePath}#faq` },
        ]}
        primaryHref={`${basePath}#cta`}
        logoPaths={brandLogoPaths}
      />

      <main className="pt-28">
        <section className="relative overflow-hidden px-4 pb-14 pt-14">
          <div className="spotlight" />
          <div className="mx-auto max-w-7xl">
            <a href={`${basePath}cases.html`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-sand/65 transition hover:text-ember">
              <ArrowLeft size={16} />
              Все проекты
            </a>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-ember">{item.niche}</p>
                <h1 className="editorial-title mt-5 max-w-5xl text-[4.4rem] leading-none text-paper sm:text-[6.5rem] lg:text-[8rem]">
                  {item.name}
                </h1>
                <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-sand/80">{item.summary}</p>
              </div>
              <div className="rounded-[1.35rem] border border-dashed border-paper/15 bg-[linear-gradient(145deg,rgba(198,106,61,0.16),rgba(8,7,6,0.78))] p-6 shadow-panel">
                <p className="text-xs uppercase tracking-[0.22em] text-sand/55">место под мокап</p>
                <div className="mt-16 grid grid-cols-2 gap-3">
                  {item.metrics.slice(0, 4).map((metric) => (
                    <div key={metric.label} className="rounded-[1rem] border border-paper/10 bg-ink/35 p-4">
                      <p className="text-[0.58rem] uppercase tracking-[0.18em] text-sand/50">{metric.label}</p>
                      <p className="mt-2 font-display text-3xl uppercase text-paper">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-paper/10 bg-paper/[0.025] px-4">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
            <CaseArticleCard title="Задача" text={item.task} />
            <CaseArticleCard title="Проблема" text={item.spotlight} />
            <CaseArticleCard title="Что сделали" text={item.solution} />
            <CaseArticleCard title="Результат" text={item.results} />
          </div>
        </section>

        <section className="section-shell px-4">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="editorial-title text-5xl text-paper sm:text-7xl">Вывод.</h2>
              <p className="mt-6 text-lg leading-8 text-sand/75">
                Проект показывает подход SPG: сначала находим слабые места в доверии и маршруте пациента, затем собираем связку каналов, контента и аналитики под реальную запись.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {item.artifacts.map((artifact) => (
                <div key={artifact} className="rounded-[1.15rem] border border-paper/10 bg-paper/[0.055] p-5">
                  <CheckCircle2 className="text-ember" size={18} />
                  <p className="mt-4 text-sm font-semibold leading-6 text-paper/85">{artifact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-28">
          <div className="mx-auto max-w-7xl rounded-[1.45rem] border border-ember/35 bg-ember/12 p-7 sm:p-9">
            <h2 className="font-display text-4xl uppercase leading-tight text-paper sm:text-5xl">Хотите такой же разбор для клиники?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-sand/75">Оставьте имя и Telegram — покажем, где сейчас теряются заявки и с какого этапа лучше начать.</p>
            <a href={`${basePath}#cta`} className="btn-primary mt-7">
              Получить разбор клиники →
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        extraLinks={[
          { label: "Проекты", href: `${basePath}cases.html` },
          { label: "Калькулятор", href: `${basePath}#calculator` },
          { label: "FAQ", href: `${basePath}#faq` },
        ]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}

function CaseArticleCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[1.25rem] border border-paper/10 bg-ink/70 p-6 shadow-panel">
      <p className="font-display text-4xl uppercase text-paper">{title}</p>
      <p className="mt-5 text-base font-semibold leading-7 text-sand/75">{text}</p>
    </article>
  );
}
