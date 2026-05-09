import { useMemo } from "react";
import { Cases } from "./components/Cases";
import { CTA } from "./components/CTA";
import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  CalculatorLeadBlock,
  DealApproachBlock,
  DifferenceBlock,
  ExpertiseBlock,
  PricingBlock,
  SummerPromo,
  TeamPlaceholderBlock,
  WhyUsBlock,
  WorkProcessBlock,
} from "./components/LandingBlocks";
import { Preloader } from "./components/Preloader";
import { Problems } from "./components/Problems";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { getEnrichedCaseStudies } from "./data/enriched-cases";
import { contacts, heroFacts } from "./data/site-content";
import { createBrandLogoSources } from "./lib/assets";

function App() {
  const basePath = import.meta.env.BASE_URL;
  const enrichedCaseStudies = useMemo(() => getEnrichedCaseStudies(), []);
  const clinicCaseStudies = useMemo(
    () =>
      enrichedCaseStudies.filter((item) => {
        const category = String(item.category).toLowerCase();
        return category.includes("стомат") || category.includes("мед") || category.includes("clinic");
      }),
    [enrichedCaseStudies],
  );

  const brandLogoPaths = createBrandLogoSources(basePath);
  const casesHref = `${basePath}cases.html`;
  const navigationWithCases = [
    { label: "Экспертиза", href: "#expertise" },
    { label: "Проблемы", href: "#problems" },
    { label: "Процесс", href: "#process" },
    { label: "Проекты", href: "#cases" },
    { label: "Калькулятор", href: "#calculator" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="grain-layer relative min-h-screen overflow-x-hidden bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-100" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <Preloader />
      <CustomCursor />
      <Header links={navigationWithCases} primaryHref="#cta" logoPaths={brandLogoPaths} />
      <main>
        <Hero facts={heroFacts} casesHref={casesHref} />
        <ExpertiseBlock />
        <SummerPromo />
        <Problems />
        <WhyUsBlock />
        <WorkProcessBlock />
        <DifferenceBlock />
        <Cases items={clinicCaseStudies.slice(0, 4)} />
        <DealApproachBlock />
        <TeamPlaceholderBlock />
        <PricingBlock />
        <CalculatorLeadBlock />
        <FAQ />
        <CTA contacts={contacts} />
      </main>
      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        extraLinks={[
          { label: "Экспертиза", href: "#expertise" },
          { label: "Проблемы", href: "#problems" },
          { label: "Процесс", href: "#process" },
          { label: "Все проекты", href: casesHref },
          { label: "Калькулятор", href: "#calculator" },
          { label: "FAQ", href: "#faq" },
        ]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
