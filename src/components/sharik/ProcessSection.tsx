import { ClipboardCheck, Layers3, LineChart, Rocket, Settings2 } from "lucide-react";
import { processSteps } from "../../data/sharik-reference-content";
import { Button, Card, Container, IconBadge, Reveal, SectionTitle } from "./shared";

const icons = [ClipboardCheck, LineChart, Layers3, Settings2, Rocket];

export function ProcessSection() {
  return (
    <Reveal id="process" className="process-section">
      <Container>
        <div className="section-head-row section-head-row--center">
          <SectionTitle
            eyebrow="Поток пациентов"
            title={
              <>
                Сначала разбираем систему, потом усиливаем точки, <span>которые влияют на запись</span>
              </>
            }
            description="Так работа остаётся управляемой: от аудита и стратегии до внедрения и регулярного роста."
            align="center"
          />
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Card key={step.title} className="process-card">
                <span className="process-card__index">{String(index + 1).padStart(2, "0")}</span>
                <IconBadge>
                  <Icon aria-hidden="true" size={22} />
                </IconBadge>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="process-cta">
          <Button href="#cta">Получить разбор</Button>
          <Button href="#results" variant="secondary">
            Кейсы
          </Button>
        </div>
      </Container>
    </Reveal>
  );
}
