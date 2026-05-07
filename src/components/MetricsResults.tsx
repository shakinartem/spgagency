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

type MetricsResultsProps = {
  stats: StatItem[];
  dentalClients: DentalClient[];
};

export function MetricsResults({ stats, dentalClients }: MetricsResultsProps) {
  return (
    <section id="metrics" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Результаты"
          title="Рост стоматологии должен выглядеть дорого и управляться цифрами."
          description="Пациент выбирает врача долго и осторожно. Поэтому рост строится не на одном канале, а на связке доверия, упаковки, заявки, карт, отзывов и аналитики."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className={`panel-card p-6 ${index === 0 ? "sm:col-span-2" : ""}`}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-sand/60">{stat.title}</p>
                <p className="mt-4 font-display text-6xl leading-none text-paper sm:text-7xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix ?? ""} decimals={stat.decimals ?? 0} />
                </p>
                <p className="mt-5 text-sm leading-6 text-sand/70">{stat.note}</p>
              </motion.div>
            ))}
          </div>

          <div className="panel-card overflow-hidden p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-sand/60">Стоматологии в фокусе</p>
            <h3 className="editorial-title mt-4 text-4xl text-paper sm:text-5xl">Слой доверия</h3>
            <p className="mt-5 text-base leading-7 text-sand/75">
              Усиливаем стоматологии, где путь пациента зависит от локального поиска, карт, отзывов, врача,
              эстетики бренда и спокойного объяснения стоимости.
            </p>
            <div className="mt-6 grid gap-3">
              {dentalClients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-[1.35rem] border border-paper/10 bg-ink/35 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-3xl uppercase leading-none text-paper">{client.name}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-sand/50">{client.city}</p>
                    </div>
                    <span className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-sand/75">
                      стоматология
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {client.channels.map((channel) => (
                      <span key={channel} className="rounded-full border border-paper/10 bg-paper/[0.055] px-3 py-2 text-xs uppercase tracking-[0.16em] text-sand/70">
                        {channel}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
