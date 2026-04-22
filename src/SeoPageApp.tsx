import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { CaseModal } from "./components/CaseModal";
import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
import { FallbackImage } from "./components/FallbackImage";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { getEnrichedCaseStudies } from "./data/enriched-cases";
import { getRelatedSeoPages } from "./data/seo-helpers";
import { contacts } from "./data/site-content";
import type { SeoPageConfig } from "./data/seo-pages";
import { createCaseLogoSources } from "./lib/assets";
import type { CaseStudy, ContactLink } from "./types";

type SeoPageAppProps = {
  page: SeoPageConfig;
  basePath: string;
};

function dossierMotion(index: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.42,
      delay: 0.08 + index * 0.06,
    },
  };
}

function SeoHeader({ basePath, page }: { basePath: string; page: SeoPageConfig }) {
  const homeHref = `${basePath}#top`;
  const auditHref = `${basePath}#audit-form`;
  const relatedCasesHref = "#related-cases";

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.8rem] px-4 py-3 sm:px-6">
        <a href={homeHref} className="min-w-0">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand/70">SPG</p>
          <p className="text-sm text-paper">Материалы и SEO-страницы</p>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          <a href={homeHref} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Главная</a>
          <a href={relatedCasesHref} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Кейсы</a>
          <a href={`${basePath}materialy.html`} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Архив</a>
          <a href={auditHref} className="text-sm uppercase tracking-[0.18em] text-sand/72 transition hover:text-paper">Аудит</a>
        </nav>
        <a href={auditHref} className="liquid-glass-button liquid-glass-button--compact">
          {page.primaryLabel}
        </a>
      </div>
    </header>
  );
}

function RelatedCaseLogo({ item, basePath }: { item: CaseStudy; basePath: string }) {
  const logoSources = createCaseLogoSources(basePath, item.id, item.logoPath);

  return (
    <div className="flex h-12 min-w-[6.75rem] max-w-[9.5rem] items-center justify-start rounded-2xl px-0">
      <FallbackImage
        sources={logoSources}
        alt={item.name}
        className="h-10 w-full object-contain object-left"
        fallback={<div className="logo-badge !h-11 !min-w-11 !px-2 text-[0.62rem]">{item.badge}</div>}
      />
    </div>
  );
}

function RelatedCases({ basePath, caseIds }: { basePath: string; caseIds: string[] }) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const items = useMemo(
    () =>
      getEnrichedCaseStudies()
        .filter((item) => caseIds.includes(item.id))
        .slice(0, 3),
    [caseIds],
  );

  return (
    <section id="related-cases" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="label-chip">Связанные кейсы</span>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-paper sm:text-5xl">
              Проекты, где уже видно, как эта логика работает на практике.
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-sm leading-6 text-sand/72 sm:block">
            По клику открывается тот же подробный кейс, что и на главной: с отзывом, цифрами и полной разборкой.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedCase(item)}
              className="panel-card p-5 text-left transition hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <RelatedCaseLogo item={item} basePath={basePath} />
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.56rem] uppercase tracking-[0.18em] text-sand/65">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl text-paper">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-sand/78">{item.summary}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {item.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[0.55rem] uppercase tracking-[0.18em] text-sand/55">{metric.label}</p>
                    <p className="mt-1 text-sm text-paper">{metric.value}</p>
                  </div>
                ))}
              </div>
              <span className="mt-4 inline-flex text-[0.68rem] uppercase tracking-[0.2em] text-paper transition hover:text-ember">
                Открыть кейс
              </span>
            </button>
          ))}
        </div>
      </div>

      <CaseModal caseItem={selectedCase} onClose={() => setSelectedCase(null)} />
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
  const relatedMaterials = useMemo(() => getRelatedSeoPages(page.key), [page.key]);

  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-80" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <CustomCursor />
      <SeoHeader basePath={basePath} page={page} />

      <main>
        <section className="section-shell px-4 pt-24 sm:pt-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-end xl:gap-14">
            <motion.div
              className="max-w-[48rem]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48 }}
            >
              <span className="label-chip">{page.eyebrow}</span>
              <h1 className="mt-6 max-w-[8.5ch] font-display text-[clamp(3rem,6.2vw,5.9rem)] leading-[0.92] text-paper">
                {page.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-sand/80">{page.heroText}</p>
              <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.18em] text-sand/58">{page.heroNote}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`${basePath}#audit-form`} className="liquid-glass-button">{page.primaryLabel}</a>
                <a href="#related-cases" className="btn-secondary">{page.secondaryLabel}</a>
              </div>
            </motion.div>

            <motion.aside
              className="panel-card dossier-card relative max-w-none overflow-hidden p-7 sm:p-8 xl:p-9"
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.52, delay: 0.08 }}
            >
              <div className="agent-corner agent-corner-top" />
              <div className="agent-corner agent-corner-bottom" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />
              <div className="pointer-events-none absolute inset-y-10 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0)_24%,rgba(255,255,255,0)_100%)]" />

              <motion.div className="flex items-start justify-between gap-4 border-b border-white/8 pb-5" {...dossierMotion(0)}>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-sand/55">Оперативное досье</p>
                  <h2 className="mt-3 font-display text-[2.05rem] leading-none text-paper sm:text-[2.45rem]">Профиль задачи</h2>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-emerald-200">
                  active
                </div>
              </motion.div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <motion.div className="rounded-[1.5rem] border border-ember/25 bg-ember/8 p-5 sm:p-6" {...dossierMotion(1)}>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Ключевой вывод</p>
                  <p className="mt-3 text-[1.08rem] leading-8 text-paper/90">
                    Сильнее всего эта страница работает там, где бизнесу нужна не активность ради отчета, а управляемая система роста с понятной логикой.
                  </p>
                </motion.div>
                <motion.div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5" {...dossierMotion(2)}>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Контур задачи</p>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-paper/84">
                    <div className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3">
                      Спрос должен приходить без хаоса, случайных подрядчиков и разрозненных площадок.
                    </div>
                    <div className="rounded-[1rem] border border-white/8 bg-black/15 px-4 py-3">
                      В приоритете доверие, управляемость воронки и взрослая подача, а не громкий шум.
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div className="mt-5 rounded-[1.55rem] border border-white/10 bg-white/5 p-5 sm:p-6" {...dossierMotion(3)}>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Кому подходит</p>
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-sand/42">field access</p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {page.audience.map((item) => (
                    <div key={item} className="rounded-[1.15rem] border border-white/10 bg-black/15 px-4 py-4 text-[0.95rem] text-paper/88">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="mt-5 rounded-[1.7rem] border border-ember/30 bg-ember/8 p-5 sm:p-6" {...dossierMotion(4)}>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Формат работы</p>
                <p className="mt-3 text-[1.02rem] leading-8 text-paper/86">
                  Базовая единица работ начинается от 35 000 ₽, но сильнее всего SPG работает через пакет связок:
                  аналитика, упаковка, контент, сайт, репутация и воронка.
                </p>
              </motion.div>
            </motion.aside>
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
              {page.approach.map((step, index) => (
                <article key={step.title} className="panel-card p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-ember/35 bg-ember/10 text-sm uppercase tracking-[0.18em] text-ember">
                    {String(index + 1).padStart(2, "0")}
                  </div>
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
            <span className="label-chip">Материалы по теме</span>
            <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] text-paper sm:text-5xl">
              Связанные страницы и разборы, которые усиливают этот вход внутри общей структуры сайта.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedMaterials.map((item) => (
                <a key={item.key} href={`${basePath}${item.slug}`} className="panel-card p-5 transition hover:-translate-y-1">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">{item.eyebrow}</p>
                  <h3 className="mt-3 max-w-[16rem] font-display text-[2rem] leading-tight text-paper">{item.title.replace(" | SPG", "")}</h3>
                  <p className="mt-3 text-sm leading-6 text-sand/78">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-paper">
                    Открыть материал
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

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
                    <a href={`${basePath}#audit-form`} className="liquid-glass-button">Получить аудит</a>
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
          { label: "Материалы дел", href: `${basePath}materialy.html` },
        ]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
