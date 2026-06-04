import { ReferenceImageSection } from "./shared";

const processLayers = [
  { src: "compiled/process-title.svg", x: 218, y: 52, w: 845, h: 40, alt: "Как мы выстраиваем поток пациентов" },
  { src: "compiled/process-desc.svg", x: 406, y: 116, w: 467, h: 44 },
  { src: "поток пациентов/Аудит.svg", x: 70, y: 273, w: 142, h: 133 },
  { src: "поток пациентов/Стратегия.svg", x: 280, y: 273, w: 154, h: 133 },
  { src: "поток пациентов/Упаковка.svg", x: 492, y: 273, w: 155, h: 134 },
  { src: "поток пациентов/Внедрение.svg", x: 706, y: 273, w: 170, h: 135 },
  { src: "поток пациентов/Рост.svg", x: 986, y: 273, w: 171, h: 134 },
  { src: "поток пациентов/logo-clear 3.svg", x: 602, y: 488, w: 75, h: 106 },
];

export function ProcessSection() {
  return (
    <ReferenceImageSection
      id="process"
      ratio="1280 / 619"
      baseHeight={619}
      figmaBackground="поток пациентов/фон.svg"
      figmaLayers={processLayers}
    />
  );
}
