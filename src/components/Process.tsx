import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type ProcessItem = { code: string; title: string; text: string; cue: string };
type ProcessProps = { items: ProcessItem[] };

export function Process({ items }: ProcessProps) {
  return (
    <section id="process" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Без лишнего ритуала. Но с дисциплиной сильной спецгруппы."
          description="Сначала трезво оцениваем ситуацию, затем собираем рабочую комбинацию каналов и усиливаем только то, что реально двигает проект вперед."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(240,122,31,0.08)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="panel-card grid gap-4 p-6 sm:grid-cols-[auto_1fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-ember/25 bg-ember/10 font-display text-3xl text-ember">{item.code}</div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sand/50">{item.cue}</p>
                <h3 className="mt-2 font-display text-3xl text-paper">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-sand/78">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
