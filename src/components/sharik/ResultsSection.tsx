import { resultDirections } from "../../data/sharik-content";
import { assetPath, Button, Container, SectionTitle } from "./shared";

export function ResultsSection() {
  return (
    <section id="results" className="section-shell relative overflow-hidden">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(480px,1.1fr)]">
          <div>
            <SectionTitle
              eyebrow="Результаты и выводы"
              title={
                <>
                  Показываем не красивые отчёты, а <span className="text-brand-accent">точки роста клиники</span>
                </>
              }
              description="На разборе видно, какие элементы мешают пациенту дойти до записи и что стоит усилить в первую очередь."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {resultDirections.map((item) => (
                <article key={item.title} className="direction-card">
                  <img src={assetPath("Щит.svg")} alt="" className="h-12 w-12 flex-none" />
                  <p className="direction-card-text">{item.title}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="illustration-panel">
            <img
              src={assetPath("График точки роста.svg")}
              alt="Диаграммы источников обращений, пути пациента и карты потерь."
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="result-band mt-10">
          <div className="flex items-center gap-4">
            <img src={assetPath("Group 1.svg")} alt="" className="h-16 w-16 flex-none" />
            <p className="text-[clamp(1.55rem,2.4vw,2.2rem)] font-semibold leading-tight tracking-[-0.03em] text-brand-ink">
              Результат разбора — конкретные <span className="text-brand-accent">выводы и приоритеты.</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#cta">Получить разбор</Button>
            <Button href="#cases" variant="secondary">
              Посмотреть пример разбора
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
