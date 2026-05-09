import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useMemo, useRef, useState, type PointerEvent } from "react";
import { AuditForm } from "./AuditForm";
import { SectionHeading } from "./SectionHeading";

const cities = ["Уфа", "Салават", "Нефтекамск", "Казань", "Москва", "Санкт-Петербург", "Екатеринбург", "Самара"];

const expertiseStats = [
  { value: "6", label: "месяцев активной работы", note: "Проверяем связки и оставляем то, что влияет на заявки." },
  { value: "10+", label: "клиник по России", note: "Стоматологии, медицина, эстетика и локальные проекты." },
  { value: "Регионы", label: "города России", note: "Учитываем карты, отзывы, локальный спрос и доверие." },
];

const whyCards = [
  ["Держим сроки", "Работа идет по этапам, с понятными контрольными точками."],
  ["Не требуем сложное ТЗ", "Помогаем быстро сформулировать задачу и собрать нужные вводные."],
  ["Даем понятные этапы", "Владелец видит, что делаем сейчас и зачем это влияет на заявки."],
  ["На связи в течение недели", "Не пропадаем между созвонами, согласованиями и запуском."],
  ["Не бросаем после запуска", "Смотрим, как система работает после публикации и трафика."],
  ["Показываем цифры", "Оцениваем заявки, стоимость обращения, каналы и качество лидов."],
  ["Не просто красиво", "Дизайн и тексты работают на доверие, запись и экономику проекта."],
  ["Старт с одной услуги", "Можно начать с сайта, карт, SMM, CRM или аудита."],
];

const processSteps = [
  ["01", "Разбираем текущий маркетинг", "Сайт, рекламу, карты, отзывы, CRM, контент и путь пациента до записи."],
  ["02", "Находим потери заявок", "Фиксируем, где пациент сомневается, где форма не работает и где лид теряется."],
  ["03", "Собираем стратегию", "Определяем услуги, оффер, посадочные, каналы и метрики для владельца."],
  ["04", "Запускаем этапы", "Делаем страницы, рекламу, контент, SMM, карты, формы и интеграции."],
  ["05", "Подключаем CRM и аналитику", "Настраиваем метки, статусы, отчеты и контроль обработки заявок."],
  ["06", "Улучшаем систему", "Оставляем рабочие связки и усиливаем то, что приводит пациентов."],
];

const contractorItems = [
  "делает сайт и исчезает",
  "запускает рекламу без проверки посадочной",
  "смотрит только клики",
  "не связывает заявки с CRM",
  "не работает с доверием и картами",
];

const spgItems = [
  "собираем систему от первого касания до записи",
  "проверяем сайт, оффер, формы, мессенджеры и CRM",
  "смотрим на стоимость заявки и качество обращения",
  "связываем рекламу, контент, карты, CRM и отчеты",
  "усиливаем доверие до момента записи",
];

const dealSteps = [
  "Оставляете заявку",
  "Быстрый разбор",
  "Предлагаем стратегию",
  "Согласовываем объем",
  "Запускаем этапы",
  "Показываем результаты",
];

const team = [
  ["Артём", "Директор", "Стратегия, продажи, упаковка и контроль проекта"],
  ["Максим", "Копирайтер", "Тексты, офферы, статьи, сценарии и контент"],
  ["Маргарита", "Дизайнер", "Визуальная система, макеты, соцсети и посадочные"],
  ["Настя", "Разработчик", "Сайт, формы, интеграции и техническая сборка"],
  ["Миша", "Тим-лид", "Контроль задач, сроки, качество и связка команды"],
];

const services = [
  { name: "Сайт", price: "от 80 000 ₽", note: "Страница под услугу, врача, акцию или направление." },
  { name: "Рекламная связка", price: "от 60 000 ₽", note: "Гипотезы, креативы, запуск и первичная оптимизация." },
  { name: "SMM и контент", price: "от 70 000 ₽", note: "Соцсети, рубрики, визуал, посты и сторис." },
  { name: "SEO / SERM / карты", price: "по запросу", note: "Поиск, отзывы, рейтинги, Яндекс, Google и 2ГИС." },
  { name: "CRM / аналитика", price: "по запросу", note: "Метки, статусы, источники заявок и контроль обработки." },
  { name: "Ведение и сопровождение", price: "от 100 000 ₽", note: "Ежемесячная работа с каналами, гипотезами и цифрами." },
];

function useDragTrack() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0 });

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const node = scrollRef.current;
    if (!node) return;
    dragState.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: node.scrollLeft,
    };
    node.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = scrollRef.current;
    if (!node || !dragState.current.active) return;
    node.scrollLeft = dragState.current.startScrollLeft - (event.clientX - dragState.current.startX);
  };

  const stopDragging = (event?: PointerEvent<HTMLDivElement>) => {
    const node = scrollRef.current;
    if (node && event && node.hasPointerCapture(event.pointerId)) {
      node.releasePointerCapture(event.pointerId);
    }
    dragState.current.active = false;
  };

  return { scrollRef, handlePointerDown, handlePointerMove, stopDragging };
}

export function ExpertiseBlock() {
  return (
    <section id="expertise" className="border-y border-paper/10 bg-paper/[0.025] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="editorial-title text-4xl text-paper sm:text-5xl">За полгода мы поработали с клиниками из разных городов России.</h2>
          <p className="max-w-3xl text-lg font-semibold leading-8 text-sand/75">
            Стоматологии, медицинские центры, эстетика и локальные проекты, где доверие влияет на запись сильнее скидки.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {expertiseStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="border-t border-paper/10 py-6"
            >
              <p className="font-display text-6xl leading-none text-paper">{item.value}</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-sand/70">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-sand/60">{item.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 overflow-hidden border-y border-paper/10 py-4">
          <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-8 text-sm font-bold uppercase tracking-[0.18em] text-sand/65">
            {[...cities, ...cities].map((city, index) => (
              <span key={`${city}-${index}`} className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-ember" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SummerPromo() {
  const promoItems = ["Сайт", "Реклама", "SMM", "SEO", "SERM", "CRM", "Карты", "Контент", "Аналитика"];

  return (
    <section id="summer" className="section-shell px-4">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-between border-y border-paper/10 py-8"
        >
          <div>
            <div className="mb-6 inline-flex rounded-full border border-ember/35 bg-ember/12 px-4 py-2 text-sm font-bold text-paper">
              Скидка 15% до начала летнего сезона
            </div>
            <h2 className="editorial-title text-5xl text-paper sm:text-7xl">Подготовьте маркетинг клиники до летнего сезона.</h2>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-sand/75">
            Пока конкуренты ждут, можно собрать сайт, рекламу, SMM, SEO, SERM, карты, CRM, контент и аналитику в одну систему заявок.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative overflow-hidden rounded-[1.6rem] border border-paper/10 bg-paper/[0.06] p-5 shadow-panel"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(198,106,61,0.16),transparent_30%),linear-gradient(145deg,rgba(26,21,18,0.95),rgba(8,7,6,0.98))]" />
          <div className="relative grid min-h-[26rem] content-between gap-6">
            <h3 className="font-display text-4xl uppercase leading-tight text-paper">Маркетинг-контур до сезона</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {promoItems.map((item, index) => (
                <div key={item} className="rounded-[1.15rem] border border-paper/10 bg-ink/40 p-4 transition hover:border-ember/45 hover:bg-ember/12">
                  <p className="text-xs uppercase tracking-[0.18em] text-sand/55">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-5 font-display text-3xl uppercase text-paper">{item}</p>
                </div>
              ))}
            </div>
            <a href="#calculator" className="btn-primary w-fit">
              Собрать пакет
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhyUsBlock() {
  return (
    <section id="why-us" className="section-shell relative overflow-hidden px-4">
      <div className="pointer-events-none absolute left-1/2 top-8 -z-0 -translate-x-1/2 whitespace-nowrap font-display text-[8rem] uppercase leading-none text-paper/[0.035] sm:text-[12rem] lg:text-[17rem]">
        Спокойнее
      </div>
      <div className="relative mx-auto max-w-7xl">
        <h2 className="editorial-title max-w-5xl text-5xl text-paper sm:text-7xl">Почему с нами спокойнее запускать маркетинг клиники.</h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyCards.map(([title, text], index) => {
            const tone = index % 4;
            const className =
              tone === 1
                ? "border-ember bg-ember text-white"
                : tone === 2
                  ? "border-paper/20 bg-paper text-ink"
                  : "border-paper/10 bg-paper/[0.06] text-paper";

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: index % 2 ? 18 : 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.035 }}
                className={`min-h-[14rem] rounded-[1.15rem] border p-5 shadow-panel ${className}`}
              >
                <p className="font-display text-3xl uppercase leading-none">{title}</p>
                <p className={`mt-5 text-base font-semibold leading-7 ${tone === 2 ? "text-ink/70" : tone === 1 ? "text-white/80" : "text-sand/75"}`}>{text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WorkProcessBlock() {
  return (
    <section id="process" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow=""
          title="От аудита до управляемой системы заявок."
          description="Работа идет этапами: сначала понимаем, где клиника теряет пациентов, затем собираем связки и ежемесячно улучшаем то, что влияет на запись."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.35rem] border border-paper/10 bg-paper/10 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(([code, title, text]) => (
            <div key={code} className="bg-ink p-6 transition hover:bg-paper/[0.055]">
              <p className="font-display text-5xl leading-none text-ember">{code}</p>
              <h3 className="mt-6 font-display text-3xl uppercase leading-tight text-paper">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-sand/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DifferenceBlock() {
  return (
    <section id="difference" className="section-shell border-y border-paper/10 bg-paper/[0.025] px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="editorial-title max-w-5xl text-5xl text-paper sm:text-7xl">Обычный подрядчик vs SPG.</h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <CompareColumn title="Обычный подрядчик" items={contractorItems} muted />
          <CompareColumn title="SPG" items={spgItems} />
        </div>
      </div>
    </section>
  );
}

function CompareColumn({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className={`rounded-[1.35rem] border p-5 ${muted ? "border-paper/10 bg-paper/[0.04]" : "border-ember/45 bg-ember/12"}`}>
      <h3 className="font-display text-4xl uppercase text-paper">{title}</h3>
      <div className="mt-6 grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="grid grid-cols-[auto_1fr] gap-4 border-t border-paper/10 pt-4">
            <span className="font-display text-2xl text-ember">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-lg font-semibold leading-7 text-paper/90">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DealApproachBlock() {
  return (
    <section id="approach" className="section-shell px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="editorial-title mx-auto max-w-5xl text-5xl text-paper sm:text-7xl">Гибкий и прозрачный подход в работе.</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-sand/75">
          Сначала вы оставляете заявку, затем мы быстро собираем стратегию или пакет под задачу клиники.
        </p>
        <div className="mt-12 grid gap-3 text-left md:grid-cols-2 lg:grid-cols-3">
          {dealSteps.map((step, index) => {
            const warm = index === 1 || index === 4;
            const light = index === 2 || index === 5;
            return (
              <div
                key={step}
                className={`min-h-[12rem] rounded-[1.15rem] border p-5 ${warm ? "border-ember bg-ember text-white" : light ? "border-paper bg-paper text-ink" : "border-paper/10 bg-paper/[0.055] text-paper"}`}
              >
                <p className={`text-xs uppercase tracking-[0.24em] ${light ? "text-ink/45" : warm ? "text-white/55" : "text-sand/50"}`}>Этап {index + 1}</p>
                <p className="mt-8 font-display text-4xl uppercase leading-tight">{step}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TeamPlaceholderBlock() {
  const { scrollRef, handlePointerDown, handlePointerMove, stopDragging } = useDragTrack();

  return (
    <section id="team" className="section-shell border-y border-paper/10 bg-paper/[0.025] px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow=""
          title="Команда под задачи клиники."
          description="Пока без реальных фото: карточки готовы для замены на съемку, а роли уже собраны так, чтобы их было удобно просмотреть на любом экране."
        />
        <div className="mt-6">
          <p className="max-w-2xl text-sm leading-6 text-sand/70">Пять ролей в одной связке: стратегия, тексты, визуал, разработка и контроль проекта.</p>
        </div>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-gradient-to-r from-ink via-ink/70 to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-ink via-ink/70 to-transparent lg:block" />
          <div
            ref={scrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pr-16 pt-1 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:cursor-grab active:lg:cursor-grabbing"
          >
            {team.map(([name, role, area]) => (
              <div key={name} className="aspect-square w-[17rem] shrink-0 snap-start rounded-[1.15rem] border border-paper/10 bg-paper/[0.055] p-5 sm:w-[17.5rem] lg:w-[17.25rem]">
                <div className="flex h-full flex-col">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-ember/35 bg-ember/12 font-display text-4xl uppercase text-ember">
                    {name[0]}
                  </div>
                  <p className="mt-6 font-display text-[2.3rem] uppercase leading-[0.92] text-paper">{name}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-sand/55">{role}</p>
                  <p className="mt-auto text-sm leading-6 text-sand/75">{area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingBlock() {
  return (
    <section id="pricing" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow=""
          title="Можно собрать проект по частям."
          description="Цены указаны как ориентир. Итоговый объем зависит от города, конкуренции, текущего сайта, CRM и каналов продвижения."
        />
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="panel-card p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-sand/55">{service.name}</p>
              <p className="mt-6 font-display text-4xl uppercase text-paper">{service.price}</p>
              <p className="mt-4 text-sm leading-6 text-sand/70">{service.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CalculatorLeadBlock() {
  const serviceOptions = [
    { label: "Сайт", value: 80000 },
    { label: "Реклама", value: 60000 },
    { label: "SMM", value: 70000 },
    { label: "SEO", value: 50000 },
    { label: "SERM", value: 60000 },
    { label: "Карты", value: 30000 },
    { label: "CRM", value: 50000 },
    { label: "Аналитика", value: 35000 },
    { label: "Контент", value: 45000 },
    { label: "Сопровождение", value: 100000 },
  ];

  const presetPackages = [
    { name: "База присутствия", price: "100 000 ₽ / мес", preset: ["SMM", "Карты", "Контент"] },
    { name: "Активный поток", price: "150 000 ₽ / мес", preset: ["SMM", "Реклама", "Карты", "Контент"] },
    { name: "Стабильный поток", price: "200 000 ₽ / мес", preset: ["SMM", "Реклама", "CRM", "Контент"] },
    { name: "Маркетинг под контролем", price: "250 000 ₽ / мес", preset: ["SMM", "Реклама", "Аналитика", "CRM", "Контент"] },
    { name: "Система привлечения", price: "300 000 ₽ / мес", preset: ["SMM", "Реклама", "CRM", "Аналитика", "Контент", "Сопровождение"] },
    { name: "Репутация и рост доверия", price: "350 000 ₽ / мес", preset: ["SMM", "Реклама", "SERM", "Карты", "Контент"] },
    {
      name: "Масштабирование клиники",
      price: "от 500 000 ₽ / мес",
      preset: ["SMM", "Реклама", "SEO", "SERM", "Карты", "CRM", "Аналитика", "Контент", "Сопровождение"],
    },
  ];

  const [selected, setSelected] = useState<string[]>(presetPackages[0].preset);
  const [activePackage, setActivePackage] = useState(0);

  const total = useMemo(
    () => serviceOptions.filter((item) => selected.includes(item.label)).reduce((sum, item) => sum + item.value, 0),
    [selected],
  );

  const toggle = (label: string) => {
    setActivePackage(-1);
    setSelected((current) => (current.includes(label) ? current.filter((item) => item !== label) : [...current, label]));
  };

  const choosePackage = (index: number) => {
    setActivePackage(index);
    setSelected(presetPackages[index].preset);
  };

  const activePack = activePackage >= 0 ? presetPackages[activePackage] : null;

  return (
    <section id="calculator" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_21rem] xl:grid-cols-[minmax(0,1fr)_23rem]">
          <div className="panel-card p-5 sm:p-6 lg:p-7">
            <h2 className="font-display text-4xl uppercase leading-tight text-paper sm:text-5xl">Калькулятор услуг и пакетных решений.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-sand/70">
              Выберите отдельные услуги сверху или переключитесь на готовый пакет. Пакет сразу подсветит пресет и покажет ориентир по стоимости.
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {serviceOptions.map((option) => {
                const active = selected.includes(option.label);
                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => toggle(option.label)}
                    className={`min-h-[4rem] rounded-[0.95rem] border px-3 py-3 text-left transition ${
                      active ? "border-ember bg-ember/15 text-paper" : "border-paper/10 bg-paper/[0.045] text-sand/75 hover:text-paper"
                    }`}
                  >
                    <span className="text-sm font-semibold leading-5">{option.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {presetPackages.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => choosePackage(index)}
                  className={`min-h-[7.5rem] rounded-[0.95rem] border p-4 text-left transition ${
                    activePackage === index ? "border-ember bg-ember text-white" : "border-paper/10 bg-paper/[0.045] text-paper hover:border-ember/35"
                  }`}
                >
                  <p className="font-display text-[1.24rem] uppercase leading-[1.04]">{item.name}</p>
                  <p className={`mt-2 text-sm font-semibold ${activePackage === index ? "text-white/75" : "text-sand/65"}`}>{item.price}</p>
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-4 rounded-[1.15rem] border border-paper/10 bg-ink/45 p-4 md:grid-cols-[0.74fr_1.26fr] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sand/50">Стоимость</p>
                <p className="mt-3 font-display text-4xl uppercase text-paper sm:text-5xl">{activePack ? activePack.price : `от ${total.toLocaleString("ru-RU")} ₽`}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sand/50">{activePack ? "Пакет" : "Выбрано"}</p>
                {activePack ? <p className="mt-3 text-sm font-semibold leading-6 text-paper/90">{activePack.name}</p> : null}
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.map((item) => (
                    <span key={item} className="rounded-full border border-ember/30 bg-ember/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-paper">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-6 text-sand/72 md:col-span-2">Это ориентир. Финальный пакет соберем после короткого разбора клиники.</p>
            </div>
          </div>

          <AuditForm
            mode="short"
            title="Оставьте имя и Telegram"
            description="Оставьте имя и Telegram — обсудим выбранный пакет и подскажем, с чего начать."
            buttonLabel="Получить расчет"
          />
        </div>
      </div>
    </section>
  );
}
