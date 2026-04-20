import { ArrowUpRight, FileText, LocateFixed, MonitorSmartphone, Send } from "lucide-react";
import { getSeoCollection, getSeoCollections } from "../data/seo-helpers";
import { seoPages } from "../data/seo-pages";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  "dental-marketing": MonitorSmartphone,
  "medical-marketing": LocateFixed,
  "expert-marketing": Send,
  "real-estate-marketing": MonitorSmartphone,
  "article-dental-leads": FileText,
  "article-reputation-maps": FileText,
  "website-for-dentistry": MonitorSmartphone,
  "maps-reputation": LocateFixed,
  "telegram-for-experts": Send,
} as const;

export function SeoHub({
  basePath,
  title,
  description,
  showHeading = true,
  featuredKey,
}: {
  basePath: string;
  title?: string;
  description?: string;
  showHeading?: boolean;
  featuredKey?: string;
}) {
  const { services, articles } = getSeoCollections();
  const featured = featuredKey ? seoPages[featuredKey] : services[0];

  const renderCard = (item: (typeof services)[number], compact = false) => {
    const Icon = iconMap[item.key as keyof typeof iconMap] ?? FileText;
    const collection = getSeoCollection(item.key) === "article" ? "Разбор" : "Страница";

    return (
      <a
        key={item.key}
        href={`${basePath}${item.slug}`}
        className={`panel-card group relative overflow-hidden transition hover:-translate-y-1 ${compact ? "p-5" : "p-6"}`}
      >
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-sand/60 transition group-hover:border-ember/30 group-hover:text-ember">
          <Icon size={16} />
        </div>
        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">{collection}</p>
        <h3 className={`mt-3 font-display leading-tight text-paper ${compact ? "max-w-[15rem] text-[1.65rem]" : "max-w-[20rem] text-[2.2rem]"}`}>
          {item.title.replace(" | SPG", "")}
        </h3>
        <p className="mt-3 text-sm leading-6 text-sand/78">{item.description}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-paper transition group-hover:text-ember">
          Открыть страницу
          <ArrowUpRight size={14} />
        </div>
      </a>
    );
  };

  return (
    <section className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        {showHeading ? (
          <SectionHeading
            eyebrow="Материалы дел"
            title={title ?? "Отдельные страницы и разборы, которые помогают находить SPG не только по бренду, но и по реальному спросу."}
            description={
              description ??
              "Это уже не просто набор статей, а рабочая структура: посадочные под ниши и услуги, разборы под конкретные вопросы и внутренняя сеть материалов, которая усиливает доверие и органический вход."
            }
          />
        ) : null}

        <div className={`${showHeading ? "mt-8" : ""} grid gap-4 lg:grid-cols-[1.08fr_0.92fr]`}>
          {featured ? (
            <div className="panel-card dossier-card relative overflow-hidden p-6 sm:p-7">
              <div className="agent-corner agent-corner-top" />
              <div className="agent-corner agent-corner-bottom" />
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Рекомендуемый вход</p>
              <h3 className="mt-4 max-w-[18rem] font-display text-[2.7rem] leading-[0.95] text-paper">
                {featured.title.replace(" | SPG", "")}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-sand/80">{featured.description}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-[0.62rem] uppercase tracking-[0.18em] text-sand/58">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Материалы дел</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">SEO-вход</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  {getSeoCollection(featured.key) === "article" ? "Разбор" : "Страница услуги"}
                </span>
              </div>
              <a
                href={`${basePath}${featured.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-paper transition hover:text-ember"
              >
                Открыть материал
                <ArrowUpRight size={14} />
              </a>
            </div>
          ) : null}

          <div className="grid gap-4">
            <div className="panel-card p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Архив материалов</p>
                  <h3 className="mt-2 font-display text-[2rem] text-paper">Контентная архитектура</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-sand/60">
                  {services.length + articles.length} страниц
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.18em] text-sand/55">Страницы услуг</p>
                  <p className="mt-2 text-2xl text-paper">{services.length}</p>
                </div>
                <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.18em] text-sand/55">Разборы и статьи</p>
                  <p className="mt-2 text-2xl text-paper">{articles.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Страницы услуг</p>
          <h3 className="mt-2 font-display text-[2.2rem] text-paper">Посадочные под реальный спрос</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => renderCard(item))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">Разборы и статьи</p>
          <h3 className="mt-2 font-display text-[2.2rem] text-paper">Материалы, которые разогревают интерес</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((item) => renderCard(item, true))}
          </div>
        </div>
      </div>
    </section>
  );
}
