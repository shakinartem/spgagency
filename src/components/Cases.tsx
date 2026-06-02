import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BarChart3, LayoutTemplate, MapPinned, MessageSquareText } from "lucide-react";
import { createCaseLogoSources } from "../lib/assets";
import type { CaseStudy } from "../types";
import { FallbackImage } from "./FallbackImage";

type CasesProps = {
  items?: CaseStudy[];
  limit?: number;
  heading?: string;
  description?: string;
};

const caseDirectionCards = [
  {
    icon: LayoutTemplate,
    niche: "Стоматология",
    title: "Упаковка сайта и посадочных страниц",
    task: "Собрать понятную подачу услуг, врачей и маршрута пациента до записи без перегруза и хаотичных касаний.",
    focus: "Усиливаем структуру страниц, логику блоков, аргументы доверия, карточки услуг и точки контакта.",
    impact: "Это помогает быстрее сформировать доверие к клинике и сократить путь от интереса до обращения.",
  },
  {
    icon: MapPinned,
    niche: "Клиника",
    title: "Карты, отзывы и локальное доверие",
    task: "Сделать клинику заметнее в локальном поиске и собрать спокойный репутационный контур вокруг записи.",
    focus: "Усиливаем карточки на картах, сценарии работы с отзывами, визуальную подачу и маршрут до звонка или сообщения.",
    impact: "Это влияет на локальное доверие, количество целевых касаний и качество первичных обращений.",
  },
  {
    icon: MessageSquareText,
    niche: "Медицинский проект",
    title: "Контент и прогрев пациента",
    task: "Объяснить сложную услугу корректно и убедительно, чтобы пациенту было проще разобраться и сделать следующий шаг.",
    focus: "Усиливаем контентную систему, экспертную подачу, связку сайта и соцсетей, а также логику прогрева до консультации.",
    impact: "Это помогает дольше удерживать внимание, укреплять доверие и подводить пациента к осознанной записи.",
  },
  {
    icon: BarChart3,
    niche: "Околомедицина",
    title: "CRM, заявки и аналитика",
    task: "Навести порядок после первого обращения, чтобы заявки не терялись между формой, мессенджером и администратором.",
    focus: "Усиливаем передачу лида, статусы в CRM, источники заявок, базовую аналитику и контроль обработки.",
    impact: "Это влияет на прозрачность работы с лидами, скорость ответа и управляемость маркетинга по цифрам.",
  },
];

function CaseLogo({ item }: { item: CaseStudy }) {
  const basePath = import.meta.env.BASE_URL;
  const logoSources = createCaseLogoSources(basePath, item.id, item.logoPath);

  return (
    <div className="flex h-12 min-w-[6.75rem] max-w-[9.5rem] items-center justify-start rounded-2xl px-0">
      <FallbackImage
        sources={logoSources}
        alt={item.name}
        className="h-10 w-full object-contain object-left"
        fallback={<div className="logo-badge !h-11 !min-w-11 !px-2 text-[0.62rem]">{item.badge}</div>}
      />
    </div>
  );
}

export function Cases({
  items,
  limit = 4,
  heading = "Кейсы и направления работы",
  description = "Примеры задач и digital-связок, которые мы используем для стоматологий и околомедицинских проектов: сайт, карты, репутация, контент, CRM и аналитика.",
}: CasesProps) {
  const shownCases = items ? (limit ? items.slice(0, limit) : items) : [];
  const basePath = import.meta.env.BASE_URL;

  if (items?.length) {
    return (
      <section id="cases" className="section-shell px-4">
        <div className="mx-auto max-w-7xl">
          <div>
            <h2 className="editorial-title max-w-5xl text-5xl text-paper sm:text-7xl">{heading}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-sand/75">{description}</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {shownCases.map((item, index) => (
              <motion.a
                key={item.id}
                href={`${basePath}cases/${item.id}.html`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[1.35rem] border border-paper/10 bg-paper/[0.055] p-5 shadow-panel backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(198,106,61,0.13),transparent_28%)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative grid gap-5">
                  <div className="min-h-[18rem] rounded-[1.1rem] border border-dashed border-paper/15 bg-[linear-gradient(145deg,rgba(198,106,61,0.16),rgba(8,7,6,0.78))] p-5">
                    <div className="flex items-start justify-between gap-3">
                      <CaseLogo item={item} />
                      <span className="rounded-full border border-paper/10 bg-ink/35 px-3 py-1 text-[0.56rem] uppercase tracking-[0.18em] text-sand/60">
                        место под мокап
                      </span>
                    </div>
                    <div className="mt-12">
                      <p className="text-[0.62rem] uppercase tracking-[0.18em] text-sand/50">{item.niche}</p>
                      <h3 className="mt-3 font-display text-5xl uppercase leading-none text-paper sm:text-6xl">{item.name}</h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold leading-6 text-sand/75">{item.summary}</p>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {item.metrics.slice(0, 4).map((metric) => (
                        <div key={metric.label} className="rounded-[1rem] border border-paper/10 bg-ink/35 p-3">
                          <p className="text-[0.54rem] uppercase tracking-[0.18em] text-sand/50">{metric.label}</p>
                          <p className="mt-1 text-[0.95rem] font-semibold text-paper">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tools.slice(0, 4).map((tool) => (
                        <span key={tool} className="rounded-full border border-paper/10 bg-paper/[0.055] px-3 py-2 text-xs uppercase tracking-[0.14em] text-sand/65">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-paper transition group-hover:text-ember">
                      Смотреть проект
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {limit ? (
            <div className="mt-8 flex justify-start">
              <a href={`${basePath}cases.html`} className="btn-secondary">
                Смотреть все проекты →
                <ArrowRight size={18} />
              </a>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section id="cases" className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="editorial-title max-w-5xl text-5xl text-paper sm:text-7xl">{heading}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-sand/75">{description}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {caseDirectionCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[1.35rem] border border-paper/10 bg-paper/[0.055] p-5 shadow-panel backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(198,106,61,0.13),transparent_28%)] opacity-0 transition group-hover:opacity-100" />
                <div className="relative grid gap-5">
                  <div className="min-h-[14rem] rounded-[1.1rem] border border-dashed border-paper/15 bg-[linear-gradient(145deg,rgba(198,106,61,0.16),rgba(8,7,6,0.78))] p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-paper/10 bg-paper/[0.08] px-3 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-sand/65">
                        {item.niche}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/10 bg-ink/35 text-ember">
                        <Icon size={18} />
                      </span>
                    </div>
                    <div className="mt-10">
                      <p className="text-[0.62rem] uppercase tracking-[0.18em] text-sand/50">направление</p>
                      <h3 className="mt-3 max-w-[18rem] font-display text-4xl uppercase leading-[0.92] text-paper sm:text-5xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1rem] border border-paper/10 bg-ink/35 p-4">
                      <p className="text-[0.54rem] uppercase tracking-[0.18em] text-sand/50">Задача</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-paper/88">{item.task}</p>
                    </div>

                    <div className="rounded-[1rem] border border-paper/10 bg-ink/35 p-4">
                      <p className="text-[0.54rem] uppercase tracking-[0.18em] text-sand/50">Что усиливали</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-paper/88">{item.focus}</p>
                    </div>

                    <div className="rounded-[1rem] border border-paper/10 bg-paper/[0.055] p-4">
                      <p className="text-[0.54rem] uppercase tracking-[0.18em] text-sand/50">На что влияет</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-sand/78">{item.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
