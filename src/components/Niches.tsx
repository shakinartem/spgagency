import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type NicheItem = { title: string; note: string; problem: string; result: string };
type NichesProps = { items: NicheItem[] };

const drift = [
  { y: [0, -8, 0], rotate: [-0.8, 0.3, -0.8] },
  { y: [0, 6, 0], rotate: [0.7, -0.25, 0.7] },
  { y: [0, -5, 0], rotate: [-0.5, 0.4, -0.5] },
  { y: [0, 7, 0], rotate: [0.8, -0.2, 0.8] },
  { y: [0, -6, 0], rotate: [-0.7, 0.25, -0.7] },
  { y: [0, 5, 0], rotate: [0.6, -0.2, 0.6] },
  { y: [0, -7, 0], rotate: [-0.8, 0.2, -0.8] },
];

const layoutClasses = [
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-6",
  "xl:col-span-6",
];

export function Niches({ items }: NichesProps) {
  return (
    <section id="niches" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="С кем мы сильнее всего"
          title="Лучше всего работаем там, где маркетинг должен внушать доверие, а не шуметь."
          description="У SPG особенно сильная экспертиза в стоматологиях и медицинских проектах, но наша система хорошо работает и в других нишах, где важны экспертность, прозрачность и длинный цикл принятия решения."
        />

        <div className="niche-swarm mt-12 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-12">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              animate={drift[index % drift.length]}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.8 : 0.8, scale: 1.008 }}
              className={`panel-card niche-card flex h-full flex-col p-5 xl:col-span-4 ${layoutClasses[index] ?? ""} ${index === 0 ? "ring-1 ring-ember/20" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="max-w-[14rem] font-display text-[2rem] leading-[0.95] text-paper">{item.title}</h3>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-sand/68">
                  {item.note}
                </span>
              </div>

              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.26em] text-sand/55">Типовая задача</p>
                  <p className="mt-2 text-sm leading-6 text-sand/82">{item.problem}</p>
                </div>
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.26em] text-sand/55">Типовой результат</p>
                  <p className="mt-2 text-sm leading-6 text-paper/88">{item.result}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
