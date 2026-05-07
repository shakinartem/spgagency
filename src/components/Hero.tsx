import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, BarChart3, Crosshair, ShieldCheck } from "lucide-react";

type HeroProps = {
  facts: string[];
  casesHref: string;
};

const heroSignals = [
  { label: "ниша", value: "стоматологии", note: "работаем только с dental-проектами" },
  { label: "система", value: "рост", note: "стратегия, заявки, инфраструктура" },
  { label: "старт", value: "3 дня", note: "до первичной карты роста" },
];

export function Hero({ facts, casesHref }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="spotlight" />
      <div className="absolute inset-x-4 top-28 -z-10 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-end">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="label-chip">
              Маркетинговая система роста для стоматологий
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="editorial-title mt-7 max-w-6xl text-[4.35rem] text-paper sm:text-[7rem] lg:text-[9.2rem]"
            >
              Рост
              <span className="block text-ember">стоматологий</span>
              без хаоса
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-8 grid gap-6 border-y border-paper/10 py-6 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <p className="text-xl font-semibold leading-8 text-paper sm:text-2xl">
                SPG работает только со стоматологиями и собирает систему, которая приводит пациентов без скидочной гонки.
              </p>
              <p className="text-base leading-8 text-sand/75 sm:text-lg">
                Мы соединяем стратегию, сайт, контент, карты, отзывы, репутацию и лидогенерацию в один понятный маршрут:
                от первого касания до записи пациента.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#cta" className="btn-primary">
                Обсудить рост стоматологии
                <ArrowRight size={18} />
              </a>
              <a href={casesHref} className="btn-secondary">
                Смотреть кейсы
                <ArrowDownRight size={18} />
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.16 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.9rem] border border-paper/10 bg-paper/[0.06] shadow-panel backdrop-blur-sm">
              <div className="relative min-h-[32rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_18%,rgba(178,13,16,0.36),transparent_34%),linear-gradient(145deg,rgba(99,8,10,0.86),rgba(8,7,6,0.92)_58%)]" />
                <div className="relative p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-sand/70">досье роста</p>
                  <h2 className="editorial-title mt-6 max-w-md text-5xl text-paper sm:text-6xl">
                    От доверия к записи пациента
                  </h2>
                  <div className="mt-8 grid gap-3">
                    {[
                      { icon: Crosshair, text: "Определяем, где стоматология теряет доверие, заявки и маржинальность." },
                      { icon: ShieldCheck, text: "Собираем маршрут пациента до записи без скидочной гонки." },
                      { icon: BarChart3, text: "Даем владельцу контроль цифр, а не красивую активность." },
                    ].map((item) => (
                      <div key={item.text} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-paper/10 bg-paper/[0.07] p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ember">
                          <item.icon size={17} />
                        </div>
                        <p className="text-sm font-semibold leading-6 text-paper/90">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-paper/10 bg-ink/35 backdrop-blur-sm">
                  {heroSignals.map((signal) => (
                    <div key={signal.label} className="border-r border-paper/10 p-4 last:border-r-0">
                      <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-sand/50">{signal.label}</p>
                      <p className="mt-3 font-display text-3xl uppercase leading-none text-paper">{signal.value}</p>
                      <p className="mt-2 text-xs leading-5 text-sand/60">{signal.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {facts.map((fact, index) => (
            <motion.div
              key={fact}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 + index * 0.08 }}
              className="rounded-[1.35rem] border border-paper/10 bg-paper/[0.055] px-5 py-4 text-sm font-semibold leading-6 text-sand/80 backdrop-blur-sm"
            >
              {fact}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
