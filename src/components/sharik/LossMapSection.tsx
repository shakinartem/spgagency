import { AlertCircle, ArrowDownRight, CircleDotDashed } from "lucide-react";
import { lossIssues, patientPath } from "../../data/sharik-reference-content";
import { Button, Card, Container, IconBadge, Reveal, SectionTitle } from "./shared";

export function LossMapSection() {
  return (
    <Reveal id="loss-map" className="loss-section">
      <Container className="loss-grid">
        <div>
          <SectionTitle
            eyebrow="Где теряет"
            title={
              <>
                Часто проблема не в одной рекламе: пациент теряется <span>между касаниями</span>
              </>
            }
            description="Мы смотрим на весь путь: сайт, карты, отзывы, переписку, звонок, CRM и аналитику."
          />

          <div className="loss-issues">
            {lossIssues.map((issue) => (
              <Card key={issue} className="loss-issue-card">
                <AlertCircle aria-hidden="true" size={20} />
                <p>{issue}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="patient-path-card">
          <div className="patient-path-card__top">
            <IconBadge className="icon-badge--accent">
              <CircleDotDashed aria-hidden="true" size={22} />
            </IconBadge>
            <div>
              <span>Карта пути</span>
              <strong>видим не заявки вообще, а места разрыва</strong>
            </div>
          </div>

          <div className="patient-path">
            {patientPath.map((step, index) => (
              <div className="patient-path__step" key={step.title}>
                <span className="patient-path__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>
                  <ArrowDownRight aria-hidden="true" size={16} />
                  {step.loss}
                </p>
              </div>
            ))}
          </div>

          <Button href="#cta">Проверить, где вы теряете</Button>
        </Card>
      </Container>
    </Reveal>
  );
}
