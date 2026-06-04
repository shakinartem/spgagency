import { CTAFooterSection } from "./components/sharik/CTAFooterSection";
import { DiagnosticSection } from "./components/sharik/DiagnosticSection";
import { Header } from "./components/sharik/Header";
import { HeroSection } from "./components/sharik/HeroSection";
import { ProcessSection } from "./components/sharik/ProcessSection";
import { ResultsSection } from "./components/sharik/ResultsSection";
import { ServicesSection } from "./components/sharik/ServicesSection";

function App() {
  return (
    <div className="min-h-screen bg-page text-brand-ink">
      <Header />
      <main>
        <HeroSection />
        <DiagnosticSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <CTAFooterSection />
      </main>
    </div>
  );
}

export default App;
