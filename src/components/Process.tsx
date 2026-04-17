import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type ProcessItem = {
  code: string;
  title: string;
  text: string;
};

type ProcessProps = {
  items: ProcessItem[];
};

export function Process({ items }: ProcessProps) {
  return (
    <section id="process" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Без театра и лишнего ритуала. Но с дисциплиной, как у сильной спецгруппы."
          description="Наша логика проста: сначала увидеть реальную ситуацию, затем собрать гипотезы, соединить каналы в систему и усиливать только то, что уже доказывает эффективность."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="panel-card grid gap-4 p-6 sm:grid-cols-[auto_1fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-ember/25 bg-ember/10 font-display text-3xl text-ember">
                {item.code}
              </div>
              <div>
                <h3 className="font-display text-3xl text-paper">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-sand/78">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
