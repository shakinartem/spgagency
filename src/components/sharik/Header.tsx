import { figmaAssetPath } from "./shared";

const nav = [
  { href: "#system", label: "Услуги", src: "Услуги.svg", className: "ref-header__services" },
  { href: "#system", label: "Решения", src: "Решения.svg", className: "ref-header__solutions" },
  { href: "#results", label: "Кейсы", src: "Кейсы.svg", className: "ref-header__cases" },
  { href: "#process", label: "Процесс", src: "Процесс.svg", className: "ref-header__process" },
  { href: "#cta", label: "Контакты", src: "Контакты.svg", className: "ref-header__contacts" },
];

function headerAsset(name: string) {
  return figmaAssetPath(`Хедер/${name}`);
}

export function Header() {
  return (
    <header className="ref-header">
      <div className="ref-header__canvas">
        <a href="#top" className="ref-header__logo" aria-label="ШАРиК digital">
          <img src={headerAsset("Логотип.svg")} alt="ШАРиК digital" />
        </a>
        <img src={headerAsset("Хедер шарики.svg")} alt="" className="ref-header__dots" aria-hidden="true" />
        <nav aria-label="Основная навигация">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className={`ref-header__nav-item ${item.className}`} aria-label={item.label}>
              <img src={headerAsset(item.src)} alt={item.label} />
            </a>
          ))}
        </nav>
        <a href="#cta" className="ref-header__button" aria-label="Получить разбор">
          <img src={headerAsset("Кнопка.svg")} alt="Получить разбор" />
        </a>
      </div>
    </header>
  );
}
