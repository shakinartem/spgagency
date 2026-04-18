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
          title="Подключаемся как сильный внешний отдел роста, а не как декоративная активность."
          description="Здесь собраны причины, по которым бизнесу спокойнее и выгоднее работать со зрелой спецгруппой: без хаоса, лишнего шума и раздувания задач."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="impact-card panel-card p-6"
            >
              <div className="impact-scan" />
              <p className="relative z-10 text-base leading-7 text-paper/88">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
