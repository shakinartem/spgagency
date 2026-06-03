import { heroAdvantages, heroMetrics } from "../../data/sharik-content";
import { assetPath, Button, Container } from "./shared";

export function HeroSection() {
  return (
    <section id="top" className="section-shell relative overflow-hidden pt-10">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(480px,1.06fr)] lg:items-start">
          <div className="relative z-10">
            <h1 className="max-w-[11ch] font-display text-[clamp(3rem,7vw,5.9rem)] font-semibold leading-[0.93] tracking-[-0.04em] text-brand-ink">
              Маркетинг для стоматологий, который <span className="text-brand-accent">приводит пациентов</span>
            </h1>
            <p className="mt-6 max-w-[37rem] text-lg leading-8 text-brand-copy">
              Строим системный digital-маркетинг для клиник: сайт, карты, репутация, контент, CRM, аналитика и автоматизация —
              чтобы пациент не терялся по пути к записи.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#cta">Получить стратегический разбор</Button>
              <Button href="#services" variant="secondary">
                Посмотреть решения
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="hero-illustration">
              <img src={assetPath("hero-patient-tree.svg")} alt="Схема пути пациента и ключевых метрик." className="h-auto w-full" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 border-t border-brand-line pt-8 lg:grid-cols-4">
          {heroAdvantages.map((item, index) => (
            <article key={item.title} className={`feature-inline ${index > 0 ? "lg:border-l lg:border-brand-line lg:pl-5" : ""}`}>
              <h3 className="feature-inline-title">{item.title}</h3>
              <p className="feature-inline-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {heroMetrics.map((metric) => (
            <article key={metric.title} className="metric-card">
              <h3 className="metric-card-title">{metric.title}</h3>
              <p className="metric-card-text">{metric.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
