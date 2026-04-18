import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type WhyUsProps = {
  items: string[];
};

export function WhyUs({ items }: WhyUsProps) {
  return (
    <section id="why" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Почему SPG"
          title="Мы не продаём ощущение движения. Мы собираем рабочую опору для роста."
          description="Этот блок я перевёл в более «агентскую» подачу: у карточек появился эффект удара, траектории и подчёркнутой точности. Не цирк, а дорогая намёк-эстетика."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="impact-card panel-card p-6"
            >
              <p className="text-base leading-7 text-paper/88">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
