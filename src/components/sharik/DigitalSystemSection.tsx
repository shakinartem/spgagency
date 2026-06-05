import { ReferenceCanvas } from "./shared";

const systemLayers = [
  { src: "digital система/Сайт и посадочные.svg", x: 91, y: 232, w: 266, h: 91 },
  { src: "digital система/Карты.svg", x: 495, y: 232, w: 255, h: 91 },
  { src: "digital система/Репутация.svg", x: 876, y: 232, w: 267, h: 110 },
  { src: "digital система/Контент и соцсети.svg", x: 104, y: 382, w: 260, h: 103 },
  { src: "digital система/ЦРМ.svg", x: 489, y: 382, w: 292, h: 106 },
  { src: "digital система/Аналитика.svg", x: 879, y: 382, w: 267, h: 106 },
  { src: "digital система/Мы не настраиваем инструменты.svg", x: 98, y: 536, w: 801, h: 46 },
];

export function DigitalSystemSection() {
  return (
    <ReferenceCanvas id="system" height={627} background="digital система/фон.svg" layers={systemLayers} className="system-ref">
      <div className="ref-text system-title">
        Собираем digital-систему для <span>роста записей</span>
      </div>
      <p className="ref-text system-copy">
        Берём не отдельный инструмент, а всю цепочку: от первого касания пациента до записи и повторного визита.
      </p>
      <a href="#cta" className="ref-live-button ref-live-button--light system-button">
        Обсудить мой проект
      </a>
    </ReferenceCanvas>
  );
}
