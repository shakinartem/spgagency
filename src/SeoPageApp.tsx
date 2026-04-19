import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { casePlaceholders } from "./data/case-placeholders";
import { caseStudies } from "./data/cases";
import { contacts } from "./data/site-content";
import type { SeoPageConfig } from "./data/seo-pages";
import type { ContactLink } from "./types";

type SeoPageAppProps = {
  page: SeoPageConfig;
  basePath: string;
};

function SeoHeader({ basePath, page }: { basePath: string; page: SeoPageConfig }) {
  const homeHref = `${basePath}#top`;
  const auditHref = `${basePath}#audit-form`;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.8rem] px-4 py-3 sm:px-6">
        <a href={homeHref} className="min-w-0">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/70">Social Programming Group</p>
          <p className="text-sm text-paper">SEO-страницы и материалы SPG</p>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          <a href={homeHref} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Главная</a>
          <a href={`${basePath}#cases`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Кейсы</a>
          <a href={auditHref} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Аудит</a>
        </nav>
        <a href={auditHref} className="btn-primary">
          {page.primaryLabel}
        </a>
      </div>
    </header>
  );
}

function RelatedCases({ basePath, caseIds }: { basePath: string; caseIds: string[] }) {
  const items = caseStudies
    .filter((item) => caseIds.includes(item.id))
    .map((item) => ({ ...casePlaceholders[item.id], ...item }));

  return (
    <section className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="label-chip">Связанные кейсы</span>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-paper sm:text-5xl">
              Проекты, где уже видно, как эта логика работает на практике.
            </h2>
          </div>
          <a href={`${basePath}#cases`} className="hidden items-center gap-2 text-sm uppercase tracking-[0.2em] text-sand/70 transition hover:text-paper sm:inline-flex">
            Все кейсы
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <a key={item.id} href={`${basePath}#cases`} className="panel-card p-5 transition hover:-translate-y-1">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">{item.category}</p>
              <h3 className="mt-3 font-display text-3xl text-paper">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-sand/78">{item.summary}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {item.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[0.55rem] uppercase tracking-[0.18em] text-sand/55">{metric.label}</p>
                    <p className="mt-1 text-sm text-paper">{metric.value}</p>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsInline({ items }: { items: ContactLink[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((contact) => (
        <a key={contact.label} href={contact.href} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4 transition hover:border-ember/30 hover:bg-white/[0.07]">
          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/52">{contact.label}</p>
          <p className="mt-2 text-xl text-paper">{contact.note}</p>
        </a>
      ))}
    </div>
  );
}

export function SeoPageApp({ page, basePath }: SeoPageAppProps) {
  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-80" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <CustomCursor />
      <SeoHeader basePath={basePath} page={page} />

      <main>
        <section className="section-shell px-4 pt-24 sm:pt-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <span className="label-chip">{page.eyebrow}</span>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,7vw,6.2rem)] leading-[0.92] text-paper">
                {page.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-sand/80">{page.heroText}</p>
              <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.18em] text-sand/58">{page.heroNote}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`${basePath}#audit-form`} className="btn-primary">{page.primaryLabel}</a>
                <a href={`${basePath}#cases`} className="btn-secondary">{page.secondaryLabel}</a>
              </div>
            </div>

            <aside className="panel-card dossier-card relative overflow-hidden p-6">
              <div className="agent-corner agent-corner-top" />
              <div className="agent-corner agent-corner-bottom" />
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-sand/55">Кому подходит</p>
              <div className="mt-5 grid gap-3">
                {page.audience.map((item) => (
                  <div key={item} className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper/88">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-ember/30 bg-ember/8 p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Формат работы</p>
                <p className="mt-3 text-base leading-7 text-paper/86">
                  Базовая единица работ начинается от 35 000 ₽, но сильнее всего SPG работает через пакет связок: аналитика, упаковка,
                  контент, сайт, репутация и воронка.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 lg:grid-cols-3">
              {page.problems.map((problem) => (
                <article key={problem.title} className="panel-card p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Задача</p>
                  <h2 className="mt-4 font-display text-3xl leading-tight text-paper">{problem.title}</h2>
                  <p className="mt-4 text-base leading-7 text-sand/78">{problem.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-4">
          <div className="mx-auto max-w-7xl">
            <span className="label-chip">Как собираем систему</span>
            <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] text-paper sm:text-5xl">
              Не отдельные услуги ради галочки, а связки, которые двигают проект к реальному росту.
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {page.approach.map((step) => (
                <article key={step.title} className="panel-card p-6">
                  <div className="mb-4 h-11 w-11 rounded-full border border-ember/35 bg-ember/10" />
                  <h3 className="font-display text-3xl leading-tight text-paper">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-sand/78">{step.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 panel-card p-6">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Что может войти в работу</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {page.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                    <Check size={16} className="mt-1 text-ember" />
                    <span className="text-sm leading-6 text-paper/88">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RelatedCases basePath={basePath} caseIds={page.relatedCases} />

        <section className="section-shell px-4">
          <div className="mx-auto max-w-7xl">
            <span className="label-chip">FAQ</span>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {page.faq.map((item) => (
                <article key={item.question} className="panel-card p-6">
                  <div className="flex items-start gap-3">
                    <ChevronRight size={16} className="mt-1 text-ember" />
                    <div>
                      <h3 className="text-lg leading-7 text-paper">{item.question}</h3>
                      <p className="mt-3 text-base leading-7 text-sand/78">{item.answer}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-4">
          <div className="mx-auto max-w-7xl">
            <div className="panel-card overflow-hidden p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div>
                  <span className="label-chip">Финальный CTA</span>
                  <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-paper sm:text-5xl">{page.ctaTitle}</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-sand/80">{page.ctaText}</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={`${basePath}#audit-form`} className="btn-primary">Получить аудит</a>
                    <a href="https://t.me/spg_marketing" className="btn-secondary">Написать в Telegram</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <ContactsInline items={contacts} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        homeHref={`${basePath}#top`}
        contactHref={`${basePath}#cta`}
        extraLinks={[
          { label: "Маркетинг для стоматологии", href: `${basePath}marketing-dlya-stomatologii.html` },
          { label: "Маркетинг для медицины", href: `${basePath}marketing-dlya-meditsiny.html` },
          { label: "Маркетинг для экспертов", href: `${basePath}marketing-dlya-ekspertov.html` },
          { label: "Маркетинг для недвижимости", href: `${basePath}marketing-dlya-nedvizhimosti.html` },
        ]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
