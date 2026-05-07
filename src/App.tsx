import { useMemo } from "react";
import { Cases } from "./components/Cases";
import { CTA } from "./components/CTA";
import { CookieBanner } from "./components/CookieBanner";
import { CustomCursor } from "./components/CustomCursor";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MetricsResults } from "./components/MetricsResults";
import { Preloader } from "./components/Preloader";
import { Process } from "./components/Process";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { getEnrichedCaseStudies } from "./data/enriched-cases";
import { contacts, dentalClients, heroFacts, missionStats, navigation, processSteps, services } from "./data/site-content";
import { createBrandLogoSources } from "./lib/assets";

function App() {
  const basePath = import.meta.env.BASE_URL;
  const enrichedCaseStudies = useMemo(() => getEnrichedCaseStudies(), []);
  const clinicCaseStudies = useMemo(
    () => enrichedCaseStudies.filter((item) => item.category === "Стоматологии" || item.category === "Медицина"),
    [enrichedCaseStudies],
  );

  const totals = useMemo(() => {
    const reach = clinicCaseStudies.reduce((sum, item) => sum + (item.stats.reach ?? 0), 0);
    const leads = clinicCaseStudies.reduce((sum, item) => sum + (item.stats.leads ?? 0), 0);

    return {
      reach: Math.round(reach / 100000) / 10,
      leads,
    };
  }, [clinicCaseStudies]);

  const statsWithAggregate = [
    ...missionStats,
    {
      title: "Охват по медицинским и стоматологическим кейсам",
      value: totals.reach,
      suffix: " млн",
      decimals: 1,
      note: "Сумма по кейсам, где метрика раскрыта публично и может быть показана на сайте.",
    },
    {
      title: "Заявок и обращений в профильных кейсах",
      value: totals.leads,
      suffix: "",
      note: "Суммарный показатель по проектам, где заявки или обращения описаны в кейсах.",
    },
  ];

  const brandLogoPaths = createBrandLogoSources(basePath);
  const casesHref = `${basePath}cases.html`;
  const navigationWithCases = navigation.map((link) => (link.href === "#cases" ? { ...link, href: casesHref } : link));

  return (
    <div className="grain-layer relative min-h-screen bg-ink text-paper">
      <div className="fixed inset-0 -z-20 bg-noise opacity-100" />
      <div className="grid-overlay fixed inset-0 -z-10" />
      <Preloader />
      <CustomCursor />
      <Header links={navigationWithCases} primaryHref="#cta" logoPaths={brandLogoPaths} />
      <main>
        <Hero facts={heroFacts} casesHref={casesHref} />
        <Services items={services} />
        <MetricsResults stats={statsWithAggregate} dentalClients={dentalClients} />
        <Process items={processSteps} />
        <Cases items={clinicCaseStudies.slice(0, 6)} />
        <Testimonials items={clinicCaseStudies} />
        <FAQ />
        <CTA contacts={contacts} />
      </main>
      <Footer
        privacyHref={`${basePath}privacy.html`}
        termsHref={`${basePath}terms.html`}
        extraLinks={[{ label: "Кейсы", href: casesHref }]}
      />
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
