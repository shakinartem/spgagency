import { motion } from "framer-motion";
import type { CaseStudy } from "../types";
import { SectionHeading } from "./SectionHeading";

type TestimonialsProps = {
  items: CaseStudy[];
};

export function Testimonials({ items }: TestimonialsProps) {
  const testimonials = items
    .filter((item) => item.reviewQuote)
    .slice(0, 6);

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Отзывы"
          title="Доверие клиентов важнее громкой презентации."
          description="Отзывы и кейсы оставляем как доказательный слой: реальные стоматологические и медицинские проекты, понятная связь между работой и результатом."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className={`panel-card flex min-h-[18rem] flex-col p-6 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-sand/50">{item.category}</p>
              <p className="mt-6 text-xl font-semibold leading-8 text-paper/90">«{item.reviewQuote}»</p>
              <div className="mt-auto pt-8">
                <p className="font-display text-3xl uppercase leading-none text-paper">{item.reviewAuthor || item.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-sand/50">
                  {item.reviewRole || item.niche}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
