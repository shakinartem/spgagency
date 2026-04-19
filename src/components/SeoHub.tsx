import { ArrowUpRight, FileText, LocateFixed, MonitorSmartphone, Send } from "lucide-react";
import { seoPageOrder, seoPages } from "../data/seo-pages";
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

export function SeoHub({ basePath, title, description }: { basePath: string; title?: string; description?: string }) {
  const items = seoPageOrder.map((key) => seoPages[key]);

  return (
    <section className="section-shell px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Контентный штаб"
          title={title ?? "Отдельные страницы и разборы, которые помогают находить SPG не только по бренду, но и по реальному спросу."}
          description={
            description ??
            "Это первый слой многостраничной структуры: посадочные под ниши и материалы под вопросы, с которых обычно начинается поиск подрядчика."
          }
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = iconMap[item.key as keyof typeof iconMap] ?? FileText;

            return (
              <a
                key={item.key}
                href={`${basePath}${item.slug}`}
                className="panel-card group relative overflow-hidden p-6 transition hover:-translate-y-1"
              >
                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-sand/60 transition group-hover:border-ember/30 group-hover:text-ember">
                  <Icon size={16} />
                </div>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sand/55">{item.eyebrow}</p>
                <h3 className="mt-4 max-w-[18rem] font-display text-3xl leading-tight text-paper">{item.title.replace(" | SPG", "")}</h3>
                <p className="mt-4 text-sm leading-6 text-sand/78">{item.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-paper transition group-hover:text-ember">
                  Открыть страницу
                  <ArrowUpRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
