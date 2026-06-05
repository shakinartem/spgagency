import { useEffect } from "react";
import { CTAFormSection } from "./components/sharik/CTAFormSection";
import { DigitalSystemSection } from "./components/sharik/DigitalSystemSection";
import { Header } from "./components/sharik/Header";
import { HeroSection } from "./components/sharik/HeroSection";
import { LossMapSection } from "./components/sharik/LossMapSection";
import { ProcessSection } from "./components/sharik/ProcessSection";
import { ResultsSection } from "./components/sharik/ResultsSection";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const frame = window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <DigitalSystemSection />
        <LossMapSection />
        <ProcessSection />
        <ResultsSection />
        <CTAFormSection />
      </main>
    </div>
  );
}

export default App;
