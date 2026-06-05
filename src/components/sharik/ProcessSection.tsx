import { ReferenceCanvas } from "./shared";

const processLayers = [
  { src: "поток пациентов/Аудит.svg", x: 86, y: 189, w: 271, h: 216 },
  { src: "поток пациентов/Стратегия.svg", x: 322, y: 189, w: 278, h: 216 },
  { src: "поток пациентов/Упаковка.svg", x: 558, y: 189, w: 279, h: 216 },
  { src: "поток пациентов/Внедрение.svg", x: 792, y: 189, w: 285, h: 216 },
  { src: "поток пациентов/Рост.svg", x: 1030, y: 189, w: 174, h: 216 },
  { src: "поток пациентов/logo-clear 3.svg", x: 595, y: 455, w: 75, h: 106 },
];

export function ProcessSection() {
  return (
    <ReferenceCanvas id="process" height={619} background="поток пациентов/фон.svg" layers={processLayers} className="process-ref">
      <div className="ref-text process-title">
        Как мы выстраиваем <span>поток пациентов</span>
      </div>
      <p className="ref-text process-copy">
        Сначала разбираем систему, потом усиливаем точки, которые реально влияют на запись.
      </p>
    </ReferenceCanvas>
  );
}
