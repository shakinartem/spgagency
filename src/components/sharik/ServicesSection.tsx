import { ReferenceImageSection } from "./shared";

const servicesLayers = [
  { src: "compiled/services-title.svg", x: 68, y: 58, w: 513, h: 89, alt: "Собираем digital-систему для роста записей" },
  { src: "compiled/services-desc.svg", x: 68, y: 170, w: 436, h: 36 },
  { src: "digital система/Сайт и посадочные.svg", x: 68, y: 282, w: 293, h: 112 },
  { src: "digital система/Карты.svg", x: 372, y: 280, w: 290, h: 119 },
  { src: "digital система/Репутация.svg", x: 768, y: 280, w: 300, h: 121 },
  { src: "digital система/Контент и соцсети.svg", x: 68, y: 420, w: 281, h: 119 },
  { src: "digital система/ЦРМ.svg", x: 372, y: 420, w: 296, h: 119 },
  { src: "digital система/Аналитика.svg", x: 768, y: 420, w: 298, h: 119 },
  { src: "compiled/services-bottom.svg", x: 92, y: 559, w: 799, h: 51 },
  { src: "digital система/Кнопка.svg", x: 1000, y: 548, w: 199, h: 44 },
];

export function ServicesSection() {
  return (
    <ReferenceImageSection id="services" ratio="1280 / 627" baseHeight={627} figmaBackground="digital система/фон.svg" figmaLayers={servicesLayers}>
      <a href="#cta" className="reference-hotspot services-hotspot" aria-label="Обсудить мой проект" />
    </ReferenceImageSection>
  );
}
