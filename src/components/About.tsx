import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber";
import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  stats: { title: string; value: number; suffix?: string; note: string; decimals?: number }[];
};

export function About({ stats }: AboutProps) {
  return (
    <section id="about" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="О нас"
          title="Небольшая сильная команда, которая вникает в задачу и не продаёт лишнее."
          description="SPG работает как отдельный агентский отдел роста. Мы не распыляемся на декоративную активность, а собираем рабочие связки под конкретный бизнес. Сейчас особенно сильны в стоматологиях и медицине, но уверенно работаем и в недвижимости, авто, wellness, юриспруденции, локальном сервисе, B2B и нишах, где решение созревает не за один клик."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel-card p-7 sm:p-8">
            <div className="grid gap-4 text-paper/88 sm:grid-cols-2">
              {[
                "Вникаем в бизнес-модель, а не только в рекламные кабинеты.",
                "Умеем собирать связки из контента, сайтов, соцсетей, карт, отзывов и аналитики.",
                "Спокойно работаем с чувствительными тематиками, где важны доверие и корректная подача.",
                "Можем быть внешним маркетинговым штабом на долгой дистанции, а не разовым исполнителем.",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-base leading-7 text-sand/82">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="panel-card p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-sand/60">{stat.title}</p>
                <p className="mt-3 font-display text-5xl leading-none text-paper">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix ?? ""} decimals={stat.decimals ?? 0} />
                </p>
                <p className="mt-4 text-sm leading-6 text-sand/78">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
