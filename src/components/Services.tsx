import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type ServicesProps = {
  items: ServiceItem[];
};

export function Services({ items }: ServicesProps) {
  return (
    <section id="services" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Оперативные направления"
          title="Не список услуг, а рабочие контуры, из которых собирается система роста."
          description="Каждое направление можно подключать отдельно, но сильнее всего они работают в связке: аналитика, упаковка, контент, сайт, воронка, репутация и базовая автоматизация."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="group panel-card relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,122,31,0.18),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/30 bg-ember/10 text-ember">
                    <item.icon size={18} />
                  </div>
                  <ArrowUpRight size={16} className="text-sand/40 transition group-hover:text-ember" />
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight text-paper">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-sand/78">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
