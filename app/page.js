import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KitsariSection from "@/components/KitsariSection";
import YokaiCoinSection from "@/components/YokaiCoinSection";
import BuildTheRealmSection from "@/components/BuildTheRealmSection";
import SpeciesGrid from "@/components/SpeciesGrid";
import EcosystemPillars from "@/components/EcosystemPillars";
import MerchTeaser from "@/components/MerchTeaser";
import Roadmap from "@/components/Roadmap";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <KitsariSection />
        <YokaiCoinSection />
        <BuildTheRealmSection />
        <SpeciesGrid />
        <EcosystemPillars />
        <MerchTeaser />
        <Roadmap />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
