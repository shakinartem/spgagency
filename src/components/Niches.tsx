import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type NicheItem = {
  title: string;
  note: string;
  problem: string;
  result: string;
};

type NichesProps = {
  items: NicheItem[];
};

export function Niches({ items }: NichesProps) {
  return (
    <section id="niches" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="С кем мы сильнее всего"
          title="Лучше всего работаем там, где маркетинг должен внушать доверие, а не шуметь."
          description="У SPG особенно сильная экспертиза в стоматологиях и медицинских проектах, но наша система хорошо работает и в других нишах, где важны экспертность, прозрачность и длинный цикл принятия решения."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className={`panel-card p-6 ${index === 0 ? "ring-1 ring-ember/25" : ""}`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl text-paper">{item.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-sand/68">
                  {item.note}
                </span>
              </div>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Типовая задача</p>
                  <p className="mt-2 text-base leading-7 text-sand/82">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Типовой результат</p>
                  <p className="mt-2 text-base leading-7 text-paper/88">{item.result}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
