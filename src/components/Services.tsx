import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
};

type ServicesProps = { items: ServiceItem[] };

export function Services({ items }: ServicesProps) {
  return (
    <section id="services" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Оперативные направления"
          title="Не список услуг, а рабочие контуры, из которых собирается система роста."
          description="Каждое направление можно подключать отдельно, но сильнее всего они работают как единая операция роста: согласованно, точно и без лишнего шума."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              whileHover={{ y: -8 }}
              className="panel-card group relative flex min-h-[16rem] flex-col p-5 sm:p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/30 bg-ember/10 text-ember"><item.icon size={18} /></div>
                <ArrowUpRight size={16} className="text-sand/50 transition group-hover:text-ember" />
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight text-paper">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-sand/76">{item.text}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
