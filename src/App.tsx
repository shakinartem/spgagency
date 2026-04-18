import { useMemo } from "react";
import { About } from "./components/About";
import { Cases } from "./components/Cases";
import { CTA } from "./components/CTA";
import { CookieBanner } from "./components/CookieBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Niches } from "./components/Niches";
import { Process } from "./components/Process";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { casePlaceholders } from "./data/case-placeholders";
import { caseStudies } from "./data/cases";
import { contacts, heroFacts, missionStats, navigation, niches, processSteps, reasons, services } from "./data/site-content";
import { createBrandLogoSources } from "./lib/assets";

function App() {
  const basePath = import.meta.env.BASE_URL;
  const enrichedCaseStudies = useMemo(() => caseStudies.map((item) => ({ ...casePlaceholders[item.id], ...item })), []);

  const totals = useMemo(() => {
    const reach = enrichedCaseStudies.reduce((sum, item) => sum + (item.stats.reach ?? 0), 0);
    const leads = enrichedCaseStudies.reduce((sum, item) => sum + (item.stats.leads ?? 0), 0);

    return {
      reach: Math.round(reach / 100000) / 10,
      leads,
    };
  }, [enrichedCaseStudies]);

  const statsWithAggregate = [
    ...missionStats,
    {
      title: "Совокупный охват по открытым кейсам",
      value: totals.reach,
      suffix: " млн",
      decimals: 1,
      note: "Сумма по кейсам, где метрика раскрыта публично и может быть показана на сайте.",
    },
    {
      title: "Заявок и обращений в открытых кейсах",
      value: totals.leads,
      suffix: "",
      note: "Суммарный показатель по проектам, где заявки или обращения описаны в кейсах.",
    },
  ];

  const brandLogoPaths = createBrandLogoSources(basePath);

  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-80" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <Header links={navigation} primaryHref="#cta" logoPaths={brandLogoPaths} />
      <main>
        <Hero facts={heroFacts} />
        <About stats={statsWithAggregate} />
        <Niches items={niches} />
        <Services items={services} />
        <Process items={processSteps} />
        <Cases items={enrichedCaseStudies} />
        <WhyUs items={reasons} />
        <CTA contacts={contacts} />
      </main>
      <Footer privacyHref={`${basePath}privacy.html`} termsHref={`${basePath}terms.html`} />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
