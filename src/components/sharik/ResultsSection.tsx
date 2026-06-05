import { ReferenceCanvas } from "./shared";

const resultsLayers = [
  { src: "Результаты/РЕЗУЛЬТАТЫ И ВЫВОДЫ.svg", x: 50, y: 36, w: 178, h: 14 },
  { src: "Результаты/Повысить доверие.svg", x: 54, y: 282, w: 183, h: 76 },
  { src: "Результаты/Упростить.svg", x: 250, y: 282, w: 164, h: 76 },
  { src: "Результаты/Усилить.svg", x: 425, y: 282, w: 195, h: 76 },
  { src: "Результаты/Снизить.svg", x: 108, y: 367, w: 232, h: 78 },
  { src: "Результаты/Понять.svg", x: 350, y: 367, w: 232, h: 78 },
  { src: "Результаты/Подложка графиков и диаграм.svg", x: 647, y: 24, w: 598, h: 422 },
  { src: "Результаты/Источники обращений.svg", x: 670, y: 47, w: 226, h: 162 },
  { src: "Результаты/Путь пациента.svg", x: 910, y: 47, w: 312, h: 162 },
  { src: "Результаты/Карта потерь.svg", x: 670, y: 228, w: 280, h: 195 },
  { src: "Результаты/План работ.svg", x: 965, y: 228, w: 257, h: 195 },
  { src: "Результаты/Подложка под кнопки и результат.svg", x: 37, y: 477, w: 1208, h: 104 },
  { src: "Результаты/Результат.svg", x: 73, y: 491, w: 476, h: 77 },
];

export function ResultsSection() {
  return (
    <ReferenceCanvas id="results" height={620} background="Результаты/фон.svg" layers={resultsLayers} className="results-ref">
      <div className="ref-text results-title">
        Показываем не красивые отчёты, а <span>точки роста клиники</span>
      </div>
      <p className="ref-text results-copy">
        На разборе видно, какие элементы мешают пациенту дойти по записи и что стоит усилить в первую очередь.
      </p>
      <a href="#cta" className="ref-live-button results-primary">
        Получить разбор
      </a>
      <a href="#system" className="ref-live-button ref-live-button--light results-secondary">
        Посмотреть пример разбора
      </a>
    </ReferenceCanvas>
  );
}
