import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ComparisonSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
