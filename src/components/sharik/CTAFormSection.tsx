import { LeadForm } from "./LeadForm";
import { ReferenceCanvas } from "./shared";

const ctaLayers = [
  { src: "СТА/Что проверим на разборе.svg", x: 74, y: 238, w: 498, h: 250 },
  { src: "СТА/Логотип.svg", x: 83, y: 533, w: 244, h: 63 },
  { src: "СТА/Тг.svg", x: 438, y: 566, w: 86, h: 17 },
  { src: "СТА/Ватсап.svg", x: 600, y: 566, w: 102, h: 17 },
  { src: "СТА/Имейл.svg", x: 772, y: 566, w: 67, h: 17 },
  { src: "СТА/Политика конфиденциальности.svg", x: 920, y: 566, w: 207, h: 17 },
];

export function CTAFormSection() {
  return (
    <ReferenceCanvas id="cta" height={623} background="СТА/фон.svg" layers={ctaLayers} className="cta-ref">
      <div className="ref-text cta-title">
        Хотите понять,
        <br />
        где клиника
        <br />
        <span>теряет пациентов?</span>
      </div>
      <p className="ref-text cta-copy">
        Оставьте заявку — проведём первичный разбор digital-системы и покажем, какие точки стоит усилить в первую очередь.
      </p>
      <div className="cta-form-shell">
        <LeadForm exact />
      </div>
      <a href="https://t.me/sharikdigital" className="ref-hotspot cta-tg" aria-label="Telegram" />
      <a href="https://wa.me/79873576071" className="ref-hotspot cta-wa" aria-label="WhatsApp" />
      <a href="mailto:hello@sharik.digital" className="ref-hotspot cta-mail" aria-label="Email" />
      <a href="/privacy.html" className="ref-hotspot cta-policy" aria-label="Политика конфиденциальности" />
    </ReferenceCanvas>
  );
}
