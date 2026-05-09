import { motion } from "framer-motion";
import { ClipboardX, MapPinned, Megaphone, MousePointerClick, UsersRound } from "lucide-react";
import { useRef, type PointerEvent } from "react";

const problems = [
  {
    icon: MousePointerClick,
    title: "Пациенты не доходят до записи",
    problem: "Пациент видит клинику, но не понимает, почему стоит записаться именно к вам.",
    solution: "Собираем оффер, сайт, формы и аргументы доверия в одну понятную связку, которая спокойно доводит до обращения.",
  },
  {
    icon: ClipboardX,
    title: "Заявки теряются после клика",
    problem: "Лид приходит из рекламы или карт, но дальше зависает между формой, мессенджером и администратором.",
    solution: "Связываем форму, уведомления и CRM-статусы, чтобы обращение доходило до записи, а не растворялось в процессе.",
  },
  {
    icon: MapPinned,
    title: "Репутация не продает",
    problem: "Отзывы, карты и профили врачей существуют отдельно и не складываются в цельную картину доверия.",
    solution: "Упаковываем отзывы, карты и страницы услуг в единый спокойный слой выбора клиники и врача.",
  },
  {
    icon: Megaphone,
    title: "Реклама не окупается",
    problem: "Клики есть, но сайт, оффер и обработка не дожимают пациента до обращения и записи.",
    solution: "Проверяем всю цепочку от трафика до записи и усиливаем слабые места, которые съедают окупаемость.",
  },
  {
    icon: UsersRound,
    title: "Нет контроля над заявками",
    problem: "Команда отвечает на обращения, но не понимает, откуда пришел пациент и что ему обещали.",
    solution: "Подключаем метки, статусы и понятную передачу заявки в CRM или мессенджеры, чтобы владелец видел картину целиком.",
  },
];

export function Problems() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0 });

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const node = trackRef.current;
    if (!node) return;
    dragState.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: node.scrollLeft,
    };
    node.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = trackRef.current;
    if (!node || !dragState.current.active) return;
    node.scrollLeft = dragState.current.startScrollLeft - (event.clientX - dragState.current.startX);
  };

  const stopDragging = (event?: PointerEvent<HTMLDivElement>) => {
    const node = trackRef.current;
    if (node && event && node.hasPointerCapture(event.pointerId)) {
      node.releasePointerCapture(event.pointerId);
    }
    dragState.current.active = false;
  };

  return (
    <section id="problems" className="section-shell border-y border-paper/10 bg-paper/[0.025] px-4 lg:h-[190vh]">
      <div className="mx-auto max-w-7xl lg:sticky lg:top-20">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <h2 className="editorial-title max-w-3xl text-5xl text-paper sm:text-7xl">Закрываем точки, где клиника теряет заявки.</h2>
          <p className="max-w-3xl text-lg font-semibold leading-8 text-sand/75">
            Пять типовых узких мест: путь пациента до записи, потеря лида после клика, слабая репутационная упаковка, неокупаемая реклама и отсутствие контроля по заявкам.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-gradient-to-r from-ink via-ink/70 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-ink via-ink/70 to-transparent lg:block" />
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pr-16 pt-1 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:cursor-grab active:lg:cursor-grabbing"
          >
            {problems.map((item, index) => {
              const Icon = item.icon;
              const highlighted = index === 0;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className={`h-[29rem] w-[17rem] shrink-0 snap-start rounded-[1.2rem] border p-5 shadow-panel sm:w-[17.5rem] lg:w-[17.2rem] ${
                    highlighted ? "border-ember bg-ember text-white shadow-glow" : "border-paper/10 bg-paper/[0.06] text-paper"
                  }`}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className={`text-[0.64rem] font-bold uppercase tracking-[0.2em] ${highlighted ? "text-white/60" : "text-sand/55"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                          highlighted ? "border-white/18 bg-white/10" : "border-paper/10 bg-ink/30 text-ember"
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-[2.15rem] uppercase leading-[0.9]">{item.title}</h3>

                    <div className="mt-auto grid gap-4">
                      <div>
                        <p className={`text-[0.58rem] font-bold uppercase tracking-[0.18em] ${highlighted ? "text-white/55" : "text-sand/45"}`}>Проблема</p>
                        <p className={`mt-2 text-sm font-semibold leading-6 ${highlighted ? "text-white/80" : "text-sand/72"}`}>{item.problem}</p>
                      </div>
                      <div>
                        <p className={`text-[0.58rem] font-bold uppercase tracking-[0.18em] ${highlighted ? "text-white/55" : "text-sand/45"}`}>Решение SPG</p>
                        <p className={`mt-2 text-sm font-semibold leading-6 ${highlighted ? "text-white/88" : "text-paper/86"}`}>{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
