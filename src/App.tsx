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
import { SocialProof } from "./components/SocialProof";
import { WhyUs } from "./components/WhyUs";
import { caseStudies } from "./data/cases";
import {
  contacts,
  evidenceHighlights,
  heroFacts,
  missionStats,
  navigation,
  niches,
  processSteps,
  reasons,
  services,
  socialEvidence,
} from "./data/site-content";

function App() {
  const totals = useMemo(() => {
    const reach = caseStudies.reduce((sum, item) => sum + (item.stats.reach ?? 0), 0);
    const leads = caseStudies.reduce((sum, item) => sum + (item.stats.leads ?? 0), 0);

    return {
      reach: Math.round(reach / 100000) / 10,
      leads,
    };
  }, []);

  const statsWithAggregate = [
    ...missionStats,
    {
      title: "Совокупный охват по открытым кейсам",
      value: totals.reach,
      suffix: " млн",
      decimals: 1,
      note: "сумма по кейсам, где метрика раскрыта публично",
    },
    {
      title: "Заявок и обращений в открытых кейсах",
      value: totals.leads,
      suffix: "",
      note: "сумма по проектам, где показатель раскрыт в материалах кейса",
    },
  ];

  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-80" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <Header links={navigation} primaryHref="#cta" />
      <main>
        <Hero facts={heroFacts} />
        <About stats={statsWithAggregate} />
        <Niches items={niches} />
        <Services items={services} />
        <Process items={processSteps} />
        <Cases items={caseStudies} />
        <WhyUs items={reasons} />
        <SocialProof brands={socialEvidence} notes={evidenceHighlights} />
        <CTA contacts={contacts} />
      </main>
      <Footer privacyHref={`${basePath}privacy.html`} termsHref={`${basePath}terms.html`} />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
