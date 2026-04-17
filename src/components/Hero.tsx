import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ScanSearch, ShieldCheck, Siren, Sparkles } from "lucide-react";

type HeroProps = {
  facts: string[];
};

export function Hero({ facts }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-14 pt-36 sm:pt-40">
      <div className="spotlight" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="label-chip">
            Social Programming Group
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-6 max-w-5xl font-display text-[3.5rem] leading-[0.92] text-paper sm:text-[4.6rem] lg:text-[6.2rem]"
          >
            Подключаемся как
            <span className="block text-ember">спецгруппа роста</span>
            когда нужен не шум, а результат.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-sand/82 sm:text-xl"
          >
            SPG собирает для бизнеса взрослую digital-систему: контент, соцсети, сайты, воронки, карты, отзывы, аналитику и лидогенерацию.
            Особенно сильны там, где доверие решает больше охвата: стоматологии, медицина, экспертные и локальные ниши.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#cta" className="btn-primary">
              Обсудить проект
              <ArrowRight size={18} />
            </a>
            <a href="#cases" className="btn-secondary">
              Смотреть кейсы
              <ArrowDownRight size={18} />
            </a>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:max-w-2xl sm:grid-cols-3">
            {facts.map((fact, index) => (
              <motion.div
                key={fact}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 + index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-sand/80"
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.16 }}
          className="relative"
        >
          <div className="panel-card relative overflow-hidden p-6 sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,122,31,0.22),transparent_32%)]" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sand/65">Статус операции</p>
                <p className="mt-2 font-display text-3xl text-paper">Лучше штатного отдела маркетинга</p>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-200">
                online
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                { icon: ScanSearch, title: "Диагностика", text: "Находим слабые места, а не раздаём красивые слова." },
                { icon: ShieldCheck, title: "Система", text: "Собираем связки, которые выдерживают рост и нагрузку." },
                { icon: Sparkles, title: "Присутствие", text: "Усиливаем образ бренда так, чтобы он выглядел дороже и точнее." },
                { icon: Siren, title: "Контроль", text: "Смотрим на цифры и усиливаем только то, что уже работает." },
              ].map((item) => (
                <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-white/10 bg-black/28 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/30 bg-ember/10 text-ember">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-sand/60">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-paper/88">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-dashed border-ember/35 bg-ember/8 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-sand/65">Фокус сейчас</p>
              <p className="mt-3 text-base leading-7 text-paper/90">
                Стоматологии и медицинские проекты, которым нужен не подрядчик на один канал, а взрослая система привлечения и доверия.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
