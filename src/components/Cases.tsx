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
    <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3">
      <FallbackImage
        sources={logoSources}
        alt={item.name}
        className="h-8 w-auto object-contain"
        fallback={<div className="logo-badge !h-12 !min-w-12 !px-2 text-xs">{item.badge}</div>}
      />
    </div>
  );
}

function ReviewWindow({ item }: { item: CaseStudy }) {
  const basePath = import.meta.env.BASE_URL;
  const reviewSources = createCaseReviewSources(basePath, item.id, item.reviewImagePath);

  return (
    <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-dashed border-white/12 bg-black/20">
      <FallbackImage
        sources={reviewSources}
        alt={`Отзыв ${item.name}`}
        className="h-24 w-full object-cover"
        fallback={
          <div className="flex h-24 flex-col items-center justify-center gap-2 text-center text-sand/55">
            <ImagePlus size={18} />
            <p className="max-w-[13rem] text-[0.65rem] uppercase tracking-[0.18em]">Окно под отзыв</p>
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
          description="Карточки показывают проект коротко, а полный разбор, метрики и артефакты открываются уже внутри кейса."
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
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

        <motion.div layout className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.28 }}
                className="group panel-card relative flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <CaseLogo item={item} />
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-sand/65">
                    {item.category}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-sand/55">{item.niche}</p>
                  <h3 className="mt-2 font-display text-[2rem] leading-none text-paper">{item.name}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-sand/76">{item.summary}</p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {item.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[0.58rem] uppercase tracking-[0.2em] text-sand/55">{metric.label}</p>
                      <p className="mt-1 text-base text-paper">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tools.slice(0, 2).map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] text-sand/70">
                      {tool}
                    </span>
                  ))}
                </div>

                <ReviewWindow item={item} />

                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-left text-xs uppercase tracking-[0.2em] text-paper transition group-hover:text-ember"
                  onClick={() => setSelectedCase(item)}
                >
                  Смотреть кейс
                  <ArrowUpRight size={14} />
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
