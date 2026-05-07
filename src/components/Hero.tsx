import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, BarChart3, ClipboardCheck, ShieldCheck } from "lucide-react";

type HeroProps = {
  facts: string[];
  casesHref: string;
};

const heroSignals = [
  { label: "фокус", value: "клиники", note: "стоматология, медицина, эстетика" },
  { label: "цель", value: "запись", note: "пациенты, доверие и понятная экономика" },
  { label: "формат", value: "система", note: "стратегия, воронки, CRM и отчеты" },
];

export function Hero({ facts, casesHref }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="spotlight" />
      <div className="absolute inset-x-4 top-28 -z-10 h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-end">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="label-chip">
              Премиальные системы роста для клиник
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="editorial-title mt-7 max-w-6xl text-[4rem] text-paper sm:text-[6.4rem] lg:text-[8.1rem]"
            >
              Рост
              <span className="block text-ember">клиник</span>
              как система
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-8 grid gap-6 border-y border-paper/10 py-6 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <p className="text-xl font-semibold leading-8 text-paper sm:text-2xl">
                Помогаем стоматологиям и медицинским клиникам получать больше качественных записей через управляемую маркетинговую систему.
              </p>
              <p className="text-base leading-8 text-sand/75 sm:text-lg">
                Соединяем стратегию, посадочные страницы, рекламные воронки, CRM, репутацию, контент и ежемесячную аналитику
                в понятный путь пациента до записи.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#cta" className="btn-primary">
                Обсудить рост клиники
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
            <div className="rotating-symbol absolute -right-6 -top-6 z-10 hidden h-24 w-24 items-center justify-center rounded-full border border-ember/30 text-ember/80 lg:flex">
              <span className="font-display text-5xl leading-none">S</span>
            </div>
            <div className="overflow-hidden rounded-[1.9rem] border border-paper/10 bg-paper/[0.06] shadow-panel backdrop-blur-sm">
              <div className="relative min-h-[32rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_18%,rgba(181,13,19,0.14),transparent_34%),linear-gradient(145deg,rgba(37,28,22,0.82),rgba(8,7,6,0.94)_62%)]" />
                <div className="relative p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand/70">что получает владелец</p>
                  <h2 className="mt-6 max-w-md font-display text-4xl uppercase leading-[0.98] text-paper sm:text-5xl">
                    Маркетинг, который можно объяснить цифрами
                  </h2>
                  <div className="mt-8 grid gap-3">
                    {[
                      { icon: ClipboardCheck, text: "Показываем, какие точки мешают пациенту записаться." },
                      { icon: ShieldCheck, text: "Укрепляем доверие: сайт, врачи, отзывы, карты и понятный оффер." },
                      { icon: BarChart3, text: "Собираем отчеты, по которым владелец видит пользу работы." },
                    ].map((item) => (
                      <div key={item.text} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-paper/10 bg-paper/[0.055] p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/10 bg-paper/[0.08] text-ember">
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
