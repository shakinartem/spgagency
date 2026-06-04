import { ReferenceImageSection } from "./shared";

const ctaLayers = [
  { src: "compiled/cta-title.svg", x: 68, y: 65, w: 417, h: 128, alt: "Хотите понять, где клиника теряет пациентов" },
  { src: "compiled/cta-desc.svg", x: 68, y: 214, w: 381, h: 56 },
  { src: "compiled/cta-checklist.svg", x: 68, y: 317, w: 504, h: 257 },
  { src: "compiled/cta-form.svg", x: 664, y: 62, w: 549, h: 475 },
  { src: "compiled/cta-button.svg", x: 696, y: 411, w: 482, h: 50 },
  { src: "compiled/cta-footer.svg", x: 60, y: 540, w: 1160, h: 82 },
  { src: "compiled/cta-logo.svg", x: 80, y: 552, w: 244, h: 67 },
  { src: "compiled/cta-tg.svg", x: 448, y: 572, w: 86, h: 21 },
  { src: "compiled/cta-whatsapp.svg", x: 610, y: 571, w: 94, h: 23 },
  { src: "compiled/cta-email.svg", x: 788, y: 573, w: 68, h: 19 },
  { src: "compiled/cta-policy.svg", x: 954, y: 571, w: 212, h: 22 },
];

export function CTAFooterSection() {
  return <ReferenceImageSection id="cta" ratio="1280 / 623" baseHeight={623} figmaBackground="СТА/фон.svg" figmaLayers={ctaLayers} />;
}
