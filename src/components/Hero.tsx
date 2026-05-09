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
  void facts;

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-14 pt-28 sm:pt-32 lg:pb-16">
      <div className="spotlight" />
      <div className="absolute inset-x-4 top-28 -z-10 h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="editorial-title max-w-6xl text-[clamp(3.35rem,13vw,7rem)] text-paper lg:text-[clamp(5.7rem,7.1vw,7rem)]"
            >
              <span className="block">Рост клиник</span>
              <span className="block text-ember">как</span>
              система
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-8 grid gap-6 border-y border-paper/10 py-6 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <p className="text-xl font-semibold leading-8 text-paper sm:text-2xl">
                Помогаем владельцам стоматологий и медицинских клиник видеть, где теряются пациенты, и собирать понятную систему заявок.
              </p>
              <p className="text-base leading-8 text-sand/75 sm:text-lg">
                Посадочные страницы, реклама, SMM, SEO, SERM, карты, CRM, контент и аналитика работают вместе: пациент быстрее доверяет клинике, а владелец видит экономику роста.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#audit-form" className="btn-primary w-full sm:w-fit">
                Обсудить рост клиники
                <ArrowRight size={18} />
              </a>
              <a href={casesHref} className="btn-secondary w-full sm:w-fit">
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
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_18%,rgba(198,106,61,0.13),transparent_34%),linear-gradient(145deg,rgba(37,28,22,0.82),rgba(8,7,6,0.94)_62%)]" />
                <div className="relative p-7 pb-4 sm:p-8 sm:pb-5">
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

                <div className="relative grid grid-cols-1 border-t border-paper/10 bg-ink/35 backdrop-blur-sm sm:grid-cols-3">
                  {heroSignals.map((signal) => (
                    <div key={signal.label} className="border-b border-paper/10 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
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
      </div>
    </section>
  );
}
