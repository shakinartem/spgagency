import { services } from "../../data/sharik-content";
import { assetPath, Button, Container, SectionTitle } from "./shared";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell relative overflow-hidden">
      <div className="section-watermark section-watermark-right">
        <img src={assetPath("logo-white-no-chars 1.svg")} alt="" className="h-full w-full object-contain" />
      </div>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(540px,1.2fr)]">
          <div>
            <SectionTitle
              title={
                <>
                  Собираем digital-систему для <span className="text-brand-accent">роста записей</span>
                </>
              }
              description="Берём не отдельный инструмент, а всю цепочку: от первого касания пациента до записи и повторного визита."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="service-card">
                <img src={assetPath(item.asset)} alt="" className="h-16 w-16" />
                <h3 className="service-card-title">{item.title}</h3>
                <div className="dotted-divider" />
                <p className="service-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-brand-line bg-brand-card p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <img src={assetPath("щит 1.svg")} alt="" className="mt-1 h-14 w-14 flex-none" />
            <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-brand-ink">
              Мы не настраиваем отдельные инструменты — мы строим стабильную систему, которая
              <span className="text-brand-accent"> приводит пациентов и растит записи.</span>
            </p>
          </div>
          <Button href="#cta" variant="secondary" className="justify-center lg:w-auto">
            Обсудить мой проект
          </Button>
        </div>
      </Container>
    </section>
  );
}
