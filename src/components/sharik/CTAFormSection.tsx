import { Mail, MessageCircle, Phone } from "lucide-react";
import { auditChecklist } from "../../data/sharik-reference-content";
import { Card, Container, Reveal, SectionTitle, figmaAssetPath } from "./shared";
import { LeadForm } from "./LeadForm";

export function CTAFormSection() {
  return (
    <Reveal id="cta" className="cta-section">
      <img src={figmaAssetPath("СТА/фон.svg")} alt="" className="section-motif section-motif--cta" aria-hidden="true" />
      <Container className="cta-grid">
        <div className="cta-copy">
          <SectionTitle
            eyebrow="Первичный разбор"
            title={
              <>
                Хотите понять, где клиника <span>теряет пациентов?</span>
              </>
            }
            description="Оставьте заявку: проведём первичный разбор digital-системы и покажем, какие точки стоит усилить в первую очередь."
          />

          <Card className="audit-card">
            <h3>Что проверим на разборе</h3>
            <ul>
              {auditChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <div className="contact-row" aria-label="Контакты">
            <a href="https://t.me/sharikdigital">
              <MessageCircle aria-hidden="true" size={18} />
              Telegram
            </a>
            <a href="https://wa.me/79873576071">
              <Phone aria-hidden="true" size={18} />
              WhatsApp
            </a>
            <a href="mailto:hello@sharik.digital">
              <Mail aria-hidden="true" size={18} />
              Email
            </a>
          </div>
        </div>

        <Card className="form-card">
          <LeadForm />
        </Card>
      </Container>
    </Reveal>
  );
}
