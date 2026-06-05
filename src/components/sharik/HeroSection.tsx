import { CalendarCheck, Eye, MessageCircle, Search, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Button, Card, Container, IconBadge, Reveal, figmaAssetPath } from "./shared";

const journey = [
  { label: "Увидел клинику", icon: Eye },
  { label: "Изучил услуги", icon: Search },
  { label: "Поверил отзывам", icon: ShieldCheck },
  { label: "Оставил заявку", icon: MessageCircle },
  { label: "Записался", icon: CalendarCheck },
];

const metrics = [
  { label: "Система", value: "сайт + карты + CRM" },
  { label: "Фокус", value: "качество записей" },
  { label: "Отчётность", value: "понятные выводы" },
];

export function HeroSection() {
  return (
    <Reveal id="top" className="hero-section">
      <img src={figmaAssetPath("Хиро/фон.svg")} alt="" className="section-motif section-motif--hero" aria-hidden="true" />
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">
            <Sparkles aria-hidden="true" size={18} />
            Digital-агентство для стоматологий и клиник
          </p>
          <h1>
            Маркетинг для стоматологий, который ведёт пациента
            <span> от доверия к записи</span>
          </h1>
          <p className="hero-lead">
            ШАРиК digital находит, где клиника теряет пациентов, заявки, доверие и деньги, а затем собирает digital-систему:
            сайт, карты, репутация, контент, CRM, автоматизация и аналитика.
          </p>

          <div className="hero-actions">
            <Button href="#cta">Получить стратегический разбор</Button>
            <Button href="#system" variant="secondary">
              Посмотреть решения
            </Button>
          </div>

          <div className="hero-metrics" aria-label="Ключевые акценты">
            {metrics.map((metric) => (
              <Card key={metric.label} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </Card>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Путь пациента">
          <div className="hero-orb" aria-hidden="true">
            <span />
          </div>
          <div className="journey-card">
            <div className="journey-route" aria-hidden="true" />
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="journey-step" key={item.label}>
                  <IconBadge>
                    <Icon aria-hidden="true" size={22} />
                  </IconBadge>
                  <span>{item.label}</span>
                  {index < journey.length - 1 ? <i aria-hidden="true" /> : null}
                </div>
              );
            })}
          </div>

          <Card className="hero-insight-card">
            <IconBadge className="icon-badge--accent">
              <TrendingUp aria-hidden="true" size={20} />
            </IconBadge>
            <div>
              <span>Разбор показывает</span>
              <strong>какие элементы мешают пациенту дойти до записи</strong>
            </div>
          </Card>
        </div>
      </Container>
    </Reveal>
  );
}
