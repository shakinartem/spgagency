import { BarChart3, FileText, MapPinned, MessageSquareText, PanelsTopLeft, Workflow } from "lucide-react";
import { digitalSystem } from "../../data/sharik-reference-content";
import { Button, Card, Container, IconBadge, Reveal, SectionTitle, figmaAssetPath } from "./shared";

const icons = [PanelsTopLeft, MapPinned, MessageSquareText, FileText, Workflow, BarChart3];

export function DigitalSystemSection() {
  return (
    <Reveal id="system" className="system-section">
      <img src={figmaAssetPath("digital система/фон.svg")} alt="" className="section-motif section-motif--system" aria-hidden="true" />
      <Container>
        <div className="section-head-row">
          <SectionTitle
            eyebrow="Digital-система"
            title={
              <>
                Собираем не отдельные инструменты, а <span>понятную систему роста</span>
              </>
            }
            description="Каждый блок усиливает путь пациента: от первого поиска до повторной записи и контроля качества обработки."
          />
          <Button href="#cta" variant="ghost">
            Проверить digital-систему
          </Button>
        </div>

        <div className="system-grid">
          {digitalSystem.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card key={item.title} className="system-card">
                <IconBadge>
                  <Icon aria-hidden="true" size={23} />
                </IconBadge>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Reveal>
  );
}
