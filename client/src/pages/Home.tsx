import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FreePreview from "@/components/FreePreview";
import PricingPlans from "@/components/PricingPlans";
import Recommendations from "@/components/Recommendations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <FreePreview />
        <Recommendations xp={0} completedMissions={0} />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
}
