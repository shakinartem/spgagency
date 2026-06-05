import { navigation } from "../../data/sharik-reference-content";
import { Button, Container } from "./shared";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a href="#top" className="brand-mark" aria-label="ШАРиК digital">
          <span className="brand-mark__orb" aria-hidden="true" />
          <span>
            <strong>ШАРиК</strong>
            <em>digital</em>
          </span>
        </a>

        <span className="header-divider" aria-hidden="true" />

        <nav className="main-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#cta" className="site-header__cta">
          Получить разбор
        </Button>
      </Container>
    </header>
  );
}
