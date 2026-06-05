import { ReferenceCanvas } from "./shared";

const heroLayers = [
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
    <ReferenceCanvas id="top" height={606} background="Хиро/фон.svg" layers={heroLayers} className="hero-ref">
      <div className="ref-text hero-title">
        Маркетинг для стоматологий, который <span>приводит пациентов</span>
      </div>
      <p className="ref-text hero-copy">
        Строим системный digital-маркетинг для клиник: сайт, карты, репутация, контент, CRM, аналитика и автоматизация
        — чтобы пациент не терялся по пути к записи.
      </p>
      <a href="#cta" className="ref-live-button hero-primary">
        Получить стратегический разбор
      </a>
      <a href="#system" className="ref-live-button ref-live-button--light hero-secondary">
        Посмотреть решения
      </a>
    </ReferenceCanvas>
  );
}
