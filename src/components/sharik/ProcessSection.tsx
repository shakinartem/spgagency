import { processSteps } from "../../data/sharik-content";
import { assetPath, Container, SectionTitle } from "./shared";

export function ProcessSection() {
  return (
    <section id="process" className="section-shell relative overflow-hidden">
      <div className="section-watermark section-watermark-top">
        <img src={assetPath("logo-white-no-chars 2.svg")} alt="" className="h-full w-full object-contain" />
      </div>
      <Container>
        <SectionTitle
          className="mx-auto max-w-5xl text-center"
          title={
            <>
              Как мы выстраиваем <span className="text-brand-accent">поток пациентов</span>
            </>
          }
          description="Сначала разбираем систему, потом усиливаем точки, которые реально влияют на запись."
        />

        <div className="mt-10 hidden lg:block">
          <img src={assetPath("Иконки поток пациентов.svg")} alt="" className="mx-auto w-full max-w-[980px]" />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {processSteps.map((item) => (
            <article key={item.step} className="process-card">
              <p className="process-step">{item.step}</p>
              <h3 className="process-title">{item.title}</h3>
              <div className="dotted-divider" />
              <p className="process-text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <img src={assetPath("Под шаром.svg")} alt="" className="h-36 w-auto opacity-95" />
        </div>
      </Container>
    </section>
  );
}
