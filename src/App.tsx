import { useCallback, useState } from "react";
import BootSequence from "./components/BootSequence";
import AmbientBackdrop from "./components/AmbientBackdrop";
import ScrollRail from "./components/ScrollRail";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import SystemStructure from "./components/SystemStructure";
import Archive from "./components/Archive";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import { useLang } from "./context/LanguageContext";
import { useParallax } from "./hooks/useParallax";

export default function App() {
  const { lang } = useLang();
  const [booted, setBooted] = useState(false);
  useParallax();

  const onBootDone = useCallback(() => {
    try {
      sessionStorage.setItem("livunis-booted", "1");
    } catch {
      /* storage unavailable — ignore */
    }
    setBooted(true);
  }, []);

  return (
    <div className="scanlines relative min-h-screen text-cold">
      {/* deep-space sheet behind every section */}
      <AmbientBackdrop />
      {!booted && <BootSequence onDone={onBootDone} />}
      <Nav />
      <ScrollRail />
      {/* key={lang} re-runs a soft fade when the language switches */}
      <main key={lang} className="animate-[fadeIn_0.45s_ease-out_both]">
        <Hero />
        <Concept />
        <SystemStructure />
        <Archive />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}
