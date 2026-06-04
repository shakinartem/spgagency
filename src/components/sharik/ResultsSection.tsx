import { ReferenceImageSection } from "./shared";

const resultsLayers = [
  { src: "Результаты/РЕЗУЛЬТАТЫ И ВЫВОДЫ.svg", x: 50, y: 44, w: 179, h: 13 },
  { src: "compiled/results-title.svg", x: 50, y: 72, w: 588, h: 122, alt: "Показываем не красивые отчёты, а точки роста клиники" },
  { src: "compiled/results-desc.svg", x: 50, y: 215, w: 314, h: 54 },
  { src: "Результаты/Повысить доверие.svg", x: 50, y: 309, w: 198, h: 88 },
  { src: "Результаты/Упростить.svg", x: 264, y: 309, w: 174, h: 88 },
  { src: "Результаты/Усилить.svg", x: 454, y: 309, w: 200, h: 88 },
  { src: "Результаты/Снизить.svg", x: 128, y: 417, w: 238, h: 87 },
  { src: "Результаты/Понять.svg", x: 382, y: 417, w: 238, h: 87 },
  { src: "Результаты/Подложка графиков и диаграм.svg", x: 648, y: 48, w: 603, h: 429 },
  { src: "Результаты/Источники обращений.svg", x: 684, y: 76, w: 232, h: 168 },
  { src: "Результаты/Путь пациента.svg", x: 940, y: 76, w: 318, h: 168 },
  { src: "Результаты/Карта потерь.svg", x: 684, y: 264, w: 289, h: 203 },
  { src: "Результаты/План работ.svg", x: 994, y: 264, w: 263, h: 203 },
  { src: "Результаты/Подложка под кнопки и результат.svg", x: 34, y: 512, w: 1213, h: 111 },
  { src: "Результаты/Результат.svg", x: 93, y: 530, w: 469, h: 85 },
  { src: "Результаты/Кнопка.svg", x: 634, y: 543, w: 250, h: 50 },
  { src: "Результаты/Кнопка-1.svg", x: 920, y: 543, w: 202, h: 50 },
];

export function ResultsSection() {
  return (
    <ReferenceImageSection id="results" ratio="1280 / 619" baseHeight={619} figmaBackground="Результаты/фон.svg" figmaLayers={resultsLayers}>
      <a href="#cta" className="reference-hotspot results-hotspot-primary" aria-label="Получить разбор" />
      <a href="#services" className="reference-hotspot results-hotspot-secondary" aria-label="Посмотреть пример разбора" />
    </ReferenceImageSection>
  );
}
