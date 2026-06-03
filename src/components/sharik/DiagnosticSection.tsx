import { diagnosticItems } from "../../data/sharik-content";
import { assetPath, Button, Container, SectionTitle } from "./shared";

export function DiagnosticSection() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="section-blur section-blur-left" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)]">
          <div>
            <SectionTitle
              title={
                <>
                  Где клиника <span className="text-brand-accent">теряет</span> пациентов?
                </>
              }
              description="Часто проблема не в одной рекламе. Пациент может потеряться на сайте, в карточках, отзывах, переписке, звонке или CRM."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {diagnosticItems.map((item) => (
                <article key={item.title} className="soft-card">
                  <h3 className="soft-card-title">{item.title}</h3>
                  <p className="soft-card-text">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="cta-band mt-8">
              <div className="flex items-center gap-4">
                <img src={assetPath("Group 1.svg")} alt="" className="h-14 w-14 flex-none" />
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">Проверьте, где именно вы теряете пациентов</h3>
                  <p className="mt-1 text-brand-copy">На разборе покажем точки потерь и приоритеты для первой очереди.</p>
                </div>
              </div>
              <Button href="#cta" className="justify-center sm:w-auto">
                Получить стратегический разбор
              </Button>
            </div>
          </div>

          <div className="illustration-panel">
            <img src={assetPath("Блоки где теряются.svg")} alt="Карта потерь на пути пациента." className="h-auto w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
