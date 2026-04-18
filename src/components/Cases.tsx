import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Filter, ImagePlus } from "lucide-react";
import { useMemo, useState } from "react";
import { createCaseLogoSources, createCaseReviewSources } from "../lib/assets";
import type { CaseStudy } from "../types";
import { CaseModal } from "./CaseModal";
import { FallbackImage } from "./FallbackImage";
import { SectionHeading } from "./SectionHeading";

type CasesProps = { items: CaseStudy[] };
const caseCategories = ["Все", "Стоматологии", "Медицина", "Недвижимость", "Авто", "Эксперты", "B2B", "Другое"] as const;

function CaseLogo({ item }: { item: CaseStudy }) {
  const basePath = import.meta.env.BASE_URL;
  const logoSources = createCaseLogoSources(basePath, item.id, item.logoPath);

  return (
    <div className="flex h-14 min-w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3">
      <FallbackImage
        sources={logoSources}
        alt={item.name}
        className="h-9 w-auto object-contain"
        fallback={<div className="logo-badge">{item.badge}</div>}
      />
    </div>
  );
}

function ReviewWindow({ item }: { item: CaseStudy }) {
  const basePath = import.meta.env.BASE_URL;
  const reviewSources = createCaseReviewSources(basePath, item.id, item.reviewImagePath);

  return (
    <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-dashed border-white/12 bg-black/20">
      <FallbackImage
        sources={reviewSources}
        alt={`Отзыв ${item.name}`}
        className="h-40 w-full object-cover"
        fallback={
          <div className="flex h-40 flex-col items-center justify-center gap-3 text-center text-sand/55">
            <ImagePlus size={22} />
            <p className="max-w-[16rem] text-xs uppercase tracking-[0.2em]">Окно под скрин отзыва, переписки или благодарности клиента</p>
          </div>
        }
      />
    </div>
  );
}

export function Cases({ items }: CasesProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof caseCategories)[number]>("Все");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredCases = useMemo(
    () => (activeCategory === "Все" ? items : items.filter((item) => item.category === activeCategory)),
    [activeCategory, items],
  );

  return (
    <section id="cases" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Кейсы"
          title="Кейсы, где видно не только эстетику, но и собранную логику роста."
          description="Для каждого кейса можно положить логотип в public/assets/cases/<slug>/logo.png или logo.svg, а отзыв или скрин в review.png, review.jpg или review.webp. Если файла пока нет, сайт покажет аккуратную заглушку."
        />

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-sand/65">
            <Filter size={14} />
            фильтр
          </div>
          {caseCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${activeCategory === category ? "border-ember/40 bg-ember/12 text-paper" : "border-white/10 bg-white/5 text-sand/70 hover:text-paper"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.28 }}
                className="group panel-card relative flex h-full flex-col p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <CaseLogo item={item} />
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-sand/65">
                    {item.category}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-sand/55">{item.niche}</p>
                  <h3 className="mt-3 font-display text-4xl text-paper">{item.name}</h3>
                  <p className="mt-4 text-base leading-7 text-sand/76">{item.task}</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {item.metrics.slice(0, 4).map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-sand/55">{metric.label}</p>
                      <p className="mt-2 text-lg text-paper">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-sand/70">
                      {tool}
                    </span>
                  ))}
                </div>

                <ReviewWindow item={item} />

                {item.reviewQuote ? (
                  <div className="mt-4 rounded-[1.25rem] border border-dashed border-ember/30 bg-ember/8 p-4">
                    <p className="text-sm leading-6 text-paper/88">«{item.reviewQuote}»</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-sand/58">
                      {item.reviewAuthor}
                      {item.reviewRole ? `, ${item.reviewRole}` : ""}
                    </p>
                  </div>
                ) : null}

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-left text-sm uppercase tracking-[0.2em] text-paper transition group-hover:text-ember"
                  onClick={() => setSelectedCase(item)}
                >
                  Смотреть кейс
                  <ArrowUpRight size={16} />
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CaseModal caseItem={selectedCase} onClose={() => setSelectedCase(null)} />
    </section>
  );
}
