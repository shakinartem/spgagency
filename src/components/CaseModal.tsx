import { AnimatePresence, motion } from "framer-motion";
import { ImagePlus, X } from "lucide-react";
import { useState } from "react";
import { createCaseReviewSources } from "../lib/assets";
import type { CaseStudy } from "../types";
import { FallbackImage } from "./FallbackImage";

type CaseModalProps = { caseItem: CaseStudy | null; onClose: () => void };

function ReviewPreview({ item }: { item: CaseStudy }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const basePath = import.meta.env.BASE_URL;
  const reviewSources = createCaseReviewSources(basePath, item.id, item.reviewImagePath);

  return (
    <>
      <div className="rounded-[1.75rem] border border-paper/10 bg-paper/[0.07] p-4">
        <button
          type="button"
          onClick={() => setIsZoomed(true)}
          className="mb-4 block w-full rounded-2xl text-left transition hover:opacity-95"
        >
          <FallbackImage
            sources={reviewSources}
            alt={`Отзыв ${item.name}`}
            className="max-h-[24rem] w-full rounded-2xl border border-paper/10 bg-paper/[0.07] object-contain p-2"
            fallback={
              <div className="flex h-56 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-paper/10 bg-paper/[0.07] text-center text-sand/50">
                <ImagePlus size={24} />
                <p className="max-w-[15rem] text-xs uppercase tracking-[0.24em]">Зона под фото отзыва, благодарность или скрин переписки</p>
              </div>
            }
          />
        </button>
        {item.reviewQuote ? <p className="text-base leading-7 text-paper/90">«{item.reviewQuote}»</p> : null}
        {item.reviewAuthor || item.reviewRole ? (
          <p className="mt-3 text-xs uppercase tracking-[0.24em] text-sand/60">
            {item.reviewAuthor}
            {item.reviewRole ? `, ${item.reviewRole}` : ""}
          </p>
        ) : null}
      </div>
      <AnimatePresence>
        {isZoomed ? (
          <motion.button
            type="button"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative max-h-[92vh] max-w-5xl"
            >
              <FallbackImage
                sources={reviewSources}
                alt={`Увеличенный отзыв ${item.name}`}
                className="max-h-[92vh] w-auto max-w-full rounded-3xl border border-paper/10 bg-[#111] object-contain p-3 shadow-2xl shadow-black/50"
                fallback={
                  <div className="flex h-56 w-[22rem] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-paper/10 bg-paper/[0.07] text-center text-sand/50">
                    <ImagePlus size={24} />
                    <p className="max-w-[15rem] text-xs uppercase tracking-[0.24em]">Файл отзыва не найден</p>
                  </div>
                }
              />
            </motion.div>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function CaseModal({ caseItem, onClose }: CaseModalProps) {
  return (
    <AnimatePresence>
      {caseItem ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="panel-card relative w-full max-w-4xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/10 bg-paper/[0.07] text-paper transition hover:border-ember/35 hover:text-ember"
              aria-label="Закрыть кейс"
            >
              <X size={18} />
            </button>
            <div className="pr-14">
              <p className="text-xs uppercase tracking-[0.28em] text-sand/50">{caseItem.category}</p>
              <h3 className="mt-3 font-display text-5xl text-paper">{caseItem.name}</h3>
              <p className="mt-3 text-lg text-sand/80">{caseItem.summary}</p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-sand/50">Задача</p>
                  <p className="mt-3 text-base leading-7 text-paper/90">{caseItem.task}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-sand/50">Решение</p>
                  <p className="mt-3 text-base leading-7 text-paper/90">{caseItem.solution}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-sand/50">Результат</p>
                  <p className="mt-3 text-base leading-7 text-paper/90">{caseItem.results}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-sand/50">Что сделали</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {caseItem.artifacts.map((artifact) => (
                      <span key={artifact} className="rounded-full border border-paper/10 bg-paper/[0.07] px-3 py-2 text-xs uppercase tracking-[0.16em] text-sand/70">
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.75rem] border border-ember/25 bg-ember/10 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-sand/60">Ключевой акцент</p>
                  <p className="mt-3 text-base leading-7 text-paper/90">{caseItem.spotlight}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {caseItem.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.5rem] border border-paper/10 bg-paper/[0.07] p-4">
                      <p className="text-[0.65rem] uppercase tracking-[0.24em] text-sand/50">{metric.label}</p>
                      <p className="mt-2 text-xl text-paper">{metric.value}</p>
                    </div>
                  ))}
                </div>
                <ReviewPreview item={caseItem} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
