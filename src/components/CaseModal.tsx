import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { CaseStudy } from "../types";

type CaseModalProps = {
  caseItem: CaseStudy | null;
  onClose: () => void;
};

export function CaseModal({ caseItem, onClose }: CaseModalProps) {
  useEffect(() => {
    if (!caseItem) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [caseItem, onClose]);

  return (
    <AnimatePresence>
      {caseItem ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-ember/25 bg-ink p-6 shadow-panel sm:p-8"
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper"
              onClick={onClose}
              aria-label="Закрыть кейс"
            >
              <X size={18} />
            </button>

            <div className="pr-12">
              <div className="label-chip">{caseItem.category}</div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="logo-badge">{caseItem.badge}</div>
                <div>
                  <h3 className="font-display text-4xl text-paper sm:text-5xl">{caseItem.name}</h3>
                  <p className="mt-2 text-base text-sand/75">{caseItem.niche}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="panel-subtle">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Задача</p>
                  <p className="mt-3 text-base leading-7 text-paper/88">{caseItem.task}</p>
                </div>
                <div className="panel-subtle">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Решение</p>
                  <p className="mt-3 text-base leading-7 text-paper/88">{caseItem.solution}</p>
                </div>
                <div className="panel-subtle">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Результат</p>
                  <p className="mt-3 text-base leading-7 text-paper/88">{caseItem.results}</p>
                </div>
                <div className="panel-subtle">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Артефакты</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {caseItem.artifacts.map((artifact) => (
                      <span key={artifact} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-sand/78">
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="panel-card p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Метрики</p>
                  <div className="mt-4 grid gap-3">
                    {caseItem.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-sand/55">{metric.label}</p>
                        <p className="mt-2 font-display text-3xl text-paper">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="panel-card p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Инструменты</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {caseItem.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-ember/25 bg-ember/10 px-3 py-2 text-sm text-paper">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-dashed border-ember/30 bg-ember/8 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Ключевой вывод</p>
                  <p className="mt-3 text-base leading-7 text-paper/90">{caseItem.spotlight}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
