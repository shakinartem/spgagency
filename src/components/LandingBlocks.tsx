import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { AuditForm } from "./AuditForm";
import { SectionHeading } from "./SectionHeading";

const cities = ["Уфа", "Салават", "Нефтекамск", "Казань", "Москва", "Санкт-Петербург", "Екатеринбург", "Самара"];

const expertiseStats = [
  { value: "Доверие", label: "до обращения", note: "Усиливаем сайт, отзывы, карты и подачу клиники так, чтобы пациенту было проще принять решение о записи." },
  { value: "Путь", label: "до записи", note: "Смотрим, где пациент теряется в касаниях, и убираем лишние шаги между интересом, вопросом и обращением." },
  { value: "Контроль", label: "по заявкам", note: "Подключаем понятную аналитику и статусы, чтобы владелец видел, какие каналы действительно приводят пациентов." },
];

const contractorItems = [
  "сайт существует отдельно от карт, отзывов и обработки заявки",
  "реклама запускается без проверки маршрута пациента до записи",
  "контент живет сам по себе и не подводит к обращению",
  "никто не видит, где именно теряются заявки после первого касания",
  "цифры собираются разрозненно и не помогают принимать решения",
];

const systemItems = [
  "собираем путь пациента от первого касания до записи в одну систему",
  "усиливаем сайт, карточки услуг, карты, отзывы и локальное доверие",
  "подключаем контент, который объясняет и прогревает без лишнего шума",
  "связываем заявки, CRM и аналитику, чтобы не терять обращения",
  "показываем владельцу точки роста, а не просто красивые отчеты",
];

const processSteps = [
  ["01", "Аудит", "Смотрим сайт, карты, отзывы, контент, заявки и аналитику, чтобы понять, где клиника теряет пациентов."],
  ["02", "Стратегия", "Определяем, какие точки дадут быстрый эффект: упаковка, локальное доверие, контент, CRM или аналитика."],
  ["03", "Упаковка", "Усиливаем смысл, страницы, карточки услуг, офферы и доверие к клинике и врачам."],
  ["04", "Внедрение", "Запускаем сайт, контент, карты, CRM, автоматизацию и прозрачную работу с заявками."],
  ["05", "Рост", "Оставляем рабочие связки и усиливаем то, что реально влияет на запись и доверие."],
];

const dealSteps = [
  "Оставляете заявку",
  "Быстрый разбор",
  "Собираем приоритеты",
  "Запускаем этапы",
  "Показываем выводы",
  "Усиливаем рабочее",
];

const whyCards = [
  ["Смотрим шире рекламы", "Разбираем не только трафик, но и сайт, карты, репутацию, обработку заявок и аналитику."],
  ["Спокойная подача", "Работаем взрослым тоном без громких обещаний и фейковых процентов, особенно в медицине и стоматологии."],
  ["Контроль цифр", "Показываем, какие каналы, этапы и точки реально влияют на запись и доверие."],
  ["Система вместо хаоса", "Соединяем посадочные, контент, карты, CRM и отчеты так, чтобы они работали вместе, а не спорили друг с другом."],
];

const services = [
  { name: "Сайт и посадочные", price: "от 80 000 ₽", note: "Страницы услуг, врачей и направлений, которые объясняют ценность и ведут пациента к записи." },
  { name: "Локальное доверие", price: "по запросу", note: "Карты, отзывы, карточки, рейтинги и визуальная подача клиники в локальном поиске." },
  { name: "Контент и прогрев", price: "от 70 000 ₽", note: "Система материалов, которая отвечает на вопросы пациента и подводит к осознанному обращению." },
  { name: "CRM и аналитика", price: "по запросу", note: "Статусы, источники, контроль обработки заявок и базовая управленческая аналитика." },
  { name: "Рекламная связка", price: "от 60 000 ₽", note: "Запуск трафика только там, где уже понятны оффер, посадочная и путь пациента до записи." },
  { name: "Сопровождение", price: "от 100 000 ₽", note: "Внешний digital-контур клиники: развитие системы, контента, доверия и рабочих каналов роста." },
];

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

export function DifferenceBlock() {
  return (
    <section id="difference" className="section-shell border-y border-paper/10 bg-paper/[0.025] px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="editorial-title max-w-5xl text-5xl text-paper sm:text-7xl">Собираем digital-систему для роста записей.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-sand/75">
          Берем не отдельный инструмент, а всю цепочку: от первого касания пациента до записи и повторного визита.
        </p>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <CompareColumn title="Разрозненные действия" items={contractorItems} muted />
          <CompareColumn title="ШАРиК digital" items={systemItems} />
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
          title="Как мы выстраиваем поток пациентов."
          description="Сначала разбираем систему, потом усиливаем точки, которые реально влияют на запись: упаковку, доверие, обработку обращения и прозрачность цифр."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.35rem] border border-paper/10 bg-paper/10 md:grid-cols-2 lg:grid-cols-5">
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

export function ExpertiseBlock() {
  return (
    <section id="expertise" className="border-y border-paper/10 bg-paper/[0.025] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="editorial-title text-4xl text-paper sm:text-5xl">Показываем не красивые отчеты, а точки роста клиники.</h2>
          <p className="max-w-3xl text-lg font-semibold leading-8 text-sand/75">
            На разборе видно, какие элементы мешают пациенту дойти до записи, где проседает доверие и какие направления
            стоит усиливать в первую очередь: сайт, карты, отзывы, обработку заявок или аналитику.
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

export function WhyUsBlock() {
  return (
    <section id="why-us" className="section-shell relative overflow-hidden px-4">
      <div className="pointer-events-none absolute left-1/2 top-8 -z-0 -translate-x-1/2 whitespace-nowrap font-display text-[8rem] uppercase leading-none text-paper/[0.035] sm:text-[12rem] lg:text-[17rem]">
        Система
      </div>
      <div className="relative mx-auto max-w-7xl">
        <h2 className="editorial-title max-w-5xl text-5xl text-paper sm:text-7xl">Работаем как внешний digital-контур клиники.</h2>
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

export function DealApproachBlock() {
  return (
    <section id="approach" className="section-shell px-4">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="editorial-title mx-auto max-w-5xl text-5xl text-paper sm:text-7xl">Гибкий и прозрачный подход в работе.</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-sand/75">
          Сначала вы оставляете заявку, затем мы быстро собираем приоритеты и показываем, какие точки стоит усиливать в первую очередь.
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

export function PricingBlock() {
  return (
    <section id="pricing" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow=""
          title="Можно собрать проект по частям."
          description="Цены ниже остаются ориентиром для MVP. Итоговый объем зависит от города, конкуренции, текущего сайта, CRM и уровня проработки digital-системы."
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
    { label: "Карты", value: 30000 },
    { label: "Контент", value: 45000 },
    { label: "CRM", value: 50000 },
    { label: "Аналитика", value: 35000 },
    { label: "Реклама", value: 60000 },
  ];

  const presetPackages = [
    { name: "База доверия", price: "от 100 000 ₽", preset: ["Сайт", "Карты", "Контент"] },
    { name: "Поток обращений", price: "от 150 000 ₽", preset: ["Сайт", "Реклама", "Карты", "Контент"] },
    { name: "Контроль заявок", price: "от 200 000 ₽", preset: ["Сайт", "CRM", "Аналитика", "Контент"] },
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
            <h2 className="font-display text-4xl uppercase leading-tight text-paper sm:text-5xl">Хотите понять, где клиника теряет пациентов?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-sand/70">
              Выберите направления, которые хотите разобрать в первую очередь, или используйте готовый пакет. Это ориентир для разговора, а не жесткое коммерческое предложение.
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
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

            <div className="mt-5 grid gap-3 md:grid-cols-3">
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
                <p className="text-xs uppercase tracking-[0.22em] text-sand/50">Ориентир</p>
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
              <p className="text-sm leading-6 text-sand/72 md:col-span-2">
                Финальный формат собираем после короткого разбора клиники: где проседает доверие, где теряются заявки и что даст самый быстрый эффект.
              </p>
            </div>
          </div>

          <AuditForm
            mode="short"
            title="Оставьте имя и контакт"
            description="Проведем первичный разбор digital-системы и покажем, какие точки стоит усилить в первую очередь."
            buttonLabel="Получить разбор"
          />
        </div>
      </div>
    </section>
  );
}

export function SummerPromo() {
  return null;
}

export function TeamPlaceholderBlock() {
  return null;
}
