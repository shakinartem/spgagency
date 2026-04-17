import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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
          description="SPG подходит бизнесам, которым нужен взрослый маркетинг без лишней суеты: спокойный, точный, системный и понятный в управлении."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="panel-card flex gap-4 p-6"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ember/30 bg-ember/10 text-ember">
                <CheckCircle2 size={18} />
              </div>
              <p className="text-base leading-7 text-paper/88">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
