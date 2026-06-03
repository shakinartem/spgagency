import { cases } from "../../data/sharik-content";
import { Container, SectionTitle } from "./shared";

export function CasesSection() {
  return (
    <section id="cases" className="section-shell">
      <Container>
        <SectionTitle
          title="Кейсы и направления работы"
          description="Компактно показываем типы задач и digital-связки, которые используем для стоматологий и околомедицинских проектов: сайт, карты, репутация, контент, CRM и аналитика."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {cases.map((item) => (
            <article key={item.niche} className="case-card">
              <span className="case-badge">{item.niche}</span>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="case-label">Задача</p>
                  <p className="case-copy">{item.task}</p>
                </div>
                <div>
                  <p className="case-label">Что усиливали</p>
                  <p className="case-copy">{item.focus}</p>
                </div>
                <div>
                  <p className="case-label">На что влияет</p>
                  <p className="case-copy">{item.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
