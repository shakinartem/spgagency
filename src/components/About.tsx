import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber";
import { SectionHeading } from "./SectionHeading";

type StatItem = {
  title: string;
  value: number;
  suffix?: string;
  note: string;
  decimals?: number;
};

type DentalClient = {
  name: string;
  city: string;
  channels: string[];
};

type AboutProps = {
  stats: StatItem[];
  dentalClients: DentalClient[];
};

export function About({ stats, dentalClients }: AboutProps) {
  return (
    <section id="about" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="О нас"
          title="Небольшая, но очень собранная команда, которая мыслит системой, а не списком задач."
          description="SPG работает как внешний маркетинговый штаб роста. Мы не размазываемся по декоративной активности, а собираем рабочие связки под конкретный бизнес, конкретный цикл сделки и конкретный уровень доверия на рынке."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="panel-card dossier-card p-7 sm:p-8">
            <div className="grid gap-4 text-paper/88 sm:grid-cols-2">
              {[
                "Вникаем в бизнес-модель, а не только в рекламные кабинеты.",
                "Собираем связки из контента, сайта, соцсетей, карт, отзывов и аналитики.",
                "Спокойно работаем с чувствительными тематиками, где важны доверие и корректная подача.",
                "Можем быть внешним маркетинговым штабом на долгой дистанции, а не разовым подрядчиком.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-base leading-7 text-sand/82"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.8rem] border border-dashed border-ember/30 bg-[linear-gradient(135deg,rgba(240,122,31,0.08),rgba(255,255,255,0.03))] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Сейчас сильнее всего</p>
                <p className="mt-3 font-display text-3xl leading-tight text-paper">Стоматология, медицина, локальные сервисы, эксперты и B2B с длинным циклом решения.</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-black/25 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Формат</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["контент", "сайт", "карты", "воронка", "аналитика", "репутация"].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-sand/72">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sand/55">Стоматология в фокусе</p>
                  <p className="mt-2 text-sm leading-6 text-sand/78">Отдельно усиливаем проекты, где важны карты, локальный поиск, VK, доверие к врачам и понятный путь пациента до записи.</p>
                </div>
                <div className="agent-marker hidden text-xs uppercase tracking-[0.24em] text-sand/70 sm:block">dental desk</div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {dentalClients.map((client, index) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-2xl text-paper">{client.name}</p>
                        <p className="mt-1 text-sm uppercase tracking-[0.22em] text-sand/56">{client.city}</p>
                      </div>
                      <span className="rounded-full border border-ember/25 bg-ember/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-sand/72">стоматология</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {client.channels.map((channel) => (
                        <span key={channel} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-sand/70">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
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
