import { useMemo } from "react";
import { Cases } from "./components/Cases";
import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Preloader } from "./components/Preloader";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { getEnrichedCaseStudies } from "./data/enriched-cases";
import { createBrandLogoSources } from "./lib/assets";

type CasesPageAppProps = {
  basePath: string;
};

export function CasesPageApp({ basePath }: CasesPageAppProps) {
  const brandLogoPaths = createBrandLogoSources(basePath);
  const allCases = useMemo(() => getEnrichedCaseStudies(), []);

  return (
    <div className="grain-layer relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-100" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <Preloader />
      <CustomCursor />
      <Header
        links={[
          { label: "Главная", href: `${basePath}#top` },
          { label: "Экспертиза", href: `${basePath}#expertise` },
          { label: "Процесс", href: `${basePath}#process` },
          { label: "Калькулятор", href: `${basePath}#calculator` },
          { label: "Контакты", href: `${basePath}#cta` },
        ]}
        primaryHref={`${basePath}#cta`}
        logoPaths={brandLogoPaths}
      />
      <main className="pt-28">
        <section className="relative overflow-hidden px-4 pb-8 pt-16">
          <div className="spotlight" />
          <div className="mx-auto max-w-7xl">
            <h1 className="editorial-title max-w-6xl text-[4.2rem] text-paper sm:text-[6.5rem] lg:text-[8rem]">
              Все проекты
              <span className="block text-ember">SPG</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-sand/75">
              Здесь собраны все проекты SPG: стоматологии, медицина, локальный сервис, экспертные и коммерческие направления с разной глубиной работ.
            </p>
          </div>
        </section>
        <Cases
          items={allCases}
          limit={0}
          heading="Все проекты SPG."
          description="Каждая карточка ведет на отдельную страницу проекта с задачей, контекстом, решениями и результатом."
        />
      </main>
      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        extraLinks={[
          { label: "Главная", href: basePath },
          { label: "Все проекты", href: `${basePath}cases.html` },
        ]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}
