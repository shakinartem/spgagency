import { ReferenceImageSection } from "./shared";

const diagnosticLayers = [
  { src: "compiled/diagnostic-title.svg", x: 68, y: 18, w: 473, h: 100, alt: "Где клиника теряет пациентов" },
  { src: "compiled/diagnostic-desc.svg", x: 68, y: 143, w: 290, h: 72 },
  { src: "Где теряет/Сайт не объясняет.svg", x: 68, y: 254, w: 145, h: 79 },
  { src: "Где теряет/Карты не вызывают.svg", x: 262, y: 254, w: 145, h: 82 },
  { src: "Где теряет/Отзывы не работают.svg", x: 454, y: 254, w: 145, h: 80 },
  { src: "Где теряет/Контент не прогревает.svg", x: 68, y: 380, w: 153, h: 79 },
  { src: "Где теряет/Заявки медленно.svg", x: 262, y: 380, w: 153, h: 79 },
  { src: "Где теряет/Нет аналитики.svg", x: 454, y: 380, w: 145, h: 82 },
  { src: "Где теряет/Не заметил.svg", x: 649, y: 53, w: 69, h: 235 },
  { src: "Где теряет/Кривая между глазом и лупой.svg", x: 716, y: 97, w: 80, h: 56 },
  { src: "Где теряет/Не нашел ответы.svg", x: 795, y: 121, w: 61, h: 250 },
  { src: "Где теряет/Кривая между лупой и щитом.svg", x: 857, y: 164, w: 78, h: 55 },
  { src: "Где теряет/Не доверился.svg", x: 936, y: 183, w: 87, h: 226 },
  { src: "Где теряет/Кривая между щитом и заявкой.svg", x: 1020, y: 247, w: 79, h: 51 },
  { src: "Где теряет/Не оставил заявку.svg", x: 1098, y: 267, w: 70, h: 202 },
  { src: "Где теряет/Кривая между заявкой и записью.svg", x: 1168, y: 342, w: 72, h: 20 },
  { src: "Где теряет/Не пришел.svg", x: 1230, y: 321, w: 70, h: 171 },
  { src: "compiled/diagnostic-check.svg", x: 96, y: 506, w: 481, h: 70 },
  { src: "Где теряет/Кнопка.svg", x: 768, y: 526, w: 252, h: 44 },
];

export function DiagnosticSection() {
  return (
    <ReferenceImageSection ratio="1280 / 587" baseHeight={587} figmaBackground="Где теряет/фон.svg" figmaLayers={diagnosticLayers}>
      <a href="#cta" className="reference-hotspot diagnostic-hotspot" aria-label="Получить стратегический разбор" />
    </ReferenceImageSection>
  );
}
