import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type SocialProofProps = {
  brands: string[];
  notes: string[];
};

export function SocialProof({ brands, notes }: SocialProofProps) {
  return (
    <section id="proof" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Соцдоказательство"
          title="Проекты и ниши, с которыми SPG уже работал предметно."
          description="Мы не добавляли выдуманные отзывы. Вместо этого показываем реальные названия, направления и несколько коротких фактов о том, как именно выглядела наша работа."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="panel-card p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="flex min-h-[92px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-4 text-center font-display text-2xl text-paper"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {notes.map((note, index) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="panel-card p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Факт</p>
                <p className="mt-3 text-base leading-7 text-paper/88">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
