import { figmaAssetPath } from "./shared";

const headerItems = [
  { href: "#services", label: "Услуги", image: "Услуги.svg", className: "header-link-services" },
  { href: "#results", label: "Решения", image: "Решения.svg", className: "header-link-solutions" },
  { href: "#cases", label: "Кейсы", image: "Кейсы.svg", className: "header-link-cases" },
  { href: "#process", label: "Процесс", image: "Процесс.svg", className: "header-link-process" },
  { href: "#cta", label: "Контакты", image: "Контакты.svg", className: "header-link-contacts" },
];

function headerAsset(name: string) {
  return figmaAssetPath(`Хедер/${name}`);
}

export function Header() {
  return (
    <header className="header-exact">
      <div className="header-exact-canvas">
        <a href="#top" className="header-exact-logo" aria-label="ШАРиК digital">
          <img src={headerAsset("Логотип.svg")} alt="ШАРиК digital" />
        </a>

        <img src={headerAsset("Хедер шарики.svg")} alt="" className="header-exact-dots" aria-hidden="true" />

        <nav className="header-exact-nav" aria-label="Основная навигация">
          {headerItems.map((item) => (
            <a key={item.href} href={item.href} className={`header-exact-link ${item.className}`} aria-label={item.label}>
              <img src={headerAsset(item.image)} alt={item.label} />
            </a>
          ))}
        </nav>

        <a href="#cta" className="header-exact-cta" aria-label="Получить разбор">
          <img src={headerAsset("Кнопка.svg")} alt="Получить разбор" />
        </a>
      </div>
    </header>
  );
}
