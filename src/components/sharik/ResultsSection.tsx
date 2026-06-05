import { CheckCircle2, FileSearch, Gauge, Route } from "lucide-react";
import { growthPoints, reportCards } from "../../data/sharik-reference-content";
import { Button, Card, Container, IconBadge, Reveal, SectionTitle, figmaAssetPath } from "./shared";

const icons = [Route, Gauge, FileSearch];

export function ResultsSection() {
  return (
    <Reveal id="results" className="results-section">
      <img src={figmaAssetPath("Результаты/фон.svg")} alt="" className="section-motif section-motif--results" aria-hidden="true" />
      <Container>
        <SectionTitle
          eyebrow="Результаты и выводы"
          title={
            <>
              Показываем не красивые отчёты, а <span>точки роста клиники</span>
            </>
          }
          description="На разборе видно, какие элементы мешают пациенту дойти до записи и что стоит усилить в первую очередь."
          align="center"
        />

        <div className="results-layout">
          <Card className="growth-card">
            <h3>Что обычно становится понятнее</h3>
            <ul>
              {growthPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="report-grid">
            {reportCards.map((card, index) => {
              const Icon = icons[index];
              return (
                <Card key={card.title} className="report-card">
                  <div className="report-card__top">
                    <IconBadge>
                      <Icon aria-hidden="true" size={22} />
                    </IconBadge>
                    <span>{card.value}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="cta-strip">
          <div>
            <span>Первичный разбор</span>
            <strong>Покажем, какие элементы digital-системы стоит усилить первыми.</strong>
          </div>
          <Button href="#cta">Получить разбор</Button>
        </div>
      </Container>
    </Reveal>
  );
}
