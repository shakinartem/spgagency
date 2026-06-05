import { navigation } from "../../data/sharik-reference-content";
import { Container } from "./shared";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <a href="#top" className="brand-mark brand-mark--footer" aria-label="ШАРиК digital">
          <span className="brand-mark__orb" aria-hidden="true" />
          <span>
            <strong>ШАРиК</strong>
            <em>digital</em>
          </span>
        </a>

        <nav className="footer-nav" aria-label="Навигация в подвале">
          {navigation.slice(0, 4).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-legal">
          <a href="/privacy.html">Политика конфиденциальности</a>
          <span>© 2026 ШАРиК digital</span>
        </div>
      </Container>
    </footer>
  );
}
