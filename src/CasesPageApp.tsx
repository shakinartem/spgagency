import { useMemo } from "react";
import { Cases } from "./components/Cases";
import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { getEnrichedCaseStudies } from "./data/enriched-cases";
import { createBrandLogoSources } from "./lib/assets";

type CasesPageAppProps = {
  basePath: string;
};

export function CasesPageApp({ basePath }: CasesPageAppProps) {
  const brandLogoPaths = createBrandLogoSources(basePath);
  const clinicCases = useMemo(
    () => getEnrichedCaseStudies().filter((item) => item.category === "Стоматологии" || item.category === "Медицина"),
    [],
  );

  return (
    <div className="grain-layer relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-100" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <CustomCursor />
      <Header
        links={[
          { label: "Главная", href: `${basePath}#top` },
          { label: "Услуги", href: `${basePath}#services` },
          { label: "Процесс", href: `${basePath}#process` },
          { label: "Контакты", href: `${basePath}#cta` },
        ]}
        primaryHref={`${basePath}#cta`}
        logoPaths={brandLogoPaths}
      />
      <main className="pt-28">
        <section className="relative overflow-hidden px-4 pb-8 pt-16">
          <div className="spotlight" />
          <div className="mx-auto max-w-7xl">
            <div className="label-chip">Кейсы SPG</div>
            <h1 className="editorial-title mt-7 max-w-6xl text-[4.2rem] text-paper sm:text-[6.5rem] lg:text-[8rem]">
              Стоматология
              <span className="block text-ember">и медицина</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-sand/75">
              Оставили только профильные кейсы: стоматологии и медицинские проекты, где важны доверие, запись пациента,
              карты, отзывы, сайт и управляемый маркетинг.
            </p>
          </div>
        </section>
        <Cases items={clinicCases} />
      </main>
      <Footer privacyHref={`${basePath}privacy.html`} termsHref={`${basePath}terms.html`} extraLinks={[{ label: "Главная", href: basePath }]} />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
