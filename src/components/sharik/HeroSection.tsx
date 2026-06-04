import { ReferenceImageSection } from "./shared";

const heroLayers = [
  { src: "compiled/hero-title.svg", x: 68, y: 46, w: 473, h: 206, alt: "Маркетинг для стоматологий, который приводит пациентов" },
  { src: "compiled/hero-desc.svg", x: 69, y: 276, w: 363, h: 78 },
  { src: "Хиро/Кнопка.svg", x: 68, y: 376, w: 235, h: 44 },
  { src: "Хиро/Кнопка-1.svg", x: 334, y: 376, w: 184, h: 44 },
  { src: "Хиро/Увидел клинику.svg", x: 611, y: 28, w: 64, h: 130 },
  { src: "Хиро/Изучил услуги.svg", x: 746, y: 28, w: 64, h: 130 },
  { src: "Хиро/Поверил отзывам.svg", x: 873, y: 28, w: 64, h: 180 },
  { src: "Хиро/Оставил заявку.svg", x: 997, y: 28, w: 64, h: 130 },
  { src: "Хиро/Записался на прием.svg", x: 1119, y: 28, w: 68, h: 130 },
  { src: "Хиро/линия между глазом и зубом.svg", x: 676, y: 96, w: 60, h: 10 },
  { src: "Хиро/Линия между зубом и отзывом.svg", x: 808, y: 96, w: 62, h: 10 },
  { src: "Хиро/Линия между отзывом и заявкой.svg", x: 936, y: 96, w: 58, h: 10 },
  { src: "Хиро/Линия между заявкой и записью.svg", x: 1061, y: 96, w: 58, h: 10 },
  { src: "Хиро/Логотип.svg", x: 858, y: 198, w: 75, h: 106 },
  { src: "Хиро/Заявки.svg", x: 598, y: 347, w: 163, h: 74 },
  { src: "Хиро/Конверсия в запись.svg", x: 817, y: 347, w: 185, h: 74 },
  { src: "Хиро/Снижаем стоимость.svg", x: 1075, y: 347, w: 203, h: 74 },
  { src: "Хиро/Стратегия.svg", x: 68, y: 478, w: 285, h: 77 },
  { src: "Хиро/Система.svg", x: 391, y: 478, w: 263, h: 77 },
  { src: "Хиро/Прозрачность.svg", x: 690, y: 478, w: 266, h: 77 },
  { src: "Хиро/Рост заявок.svg", x: 986, y: 478, w: 228, h: 77 },
];

export function HeroSection() {
  return (
    <ReferenceImageSection id="top" ratio="1280 / 606" baseHeight={606} figmaBackground="Хиро/фон.svg" figmaLayers={heroLayers}>
      <h1 className="sr-only">Маркетинг для стоматологий, который приводит пациентов</h1>
      <a href="#cta" className="reference-hotspot hero-hotspot-primary" aria-label="Получить стратегический разбор" />
      <a href="#services" className="reference-hotspot hero-hotspot-secondary" aria-label="Посмотреть решения" />
    </ReferenceImageSection>
  );
}
