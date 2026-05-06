import HeroSection       from "@/components/HeroSection";
import TechStrip          from "@/components/TechStrip";
import SolutionsSection   from "@/components/SolutionsSection";
import VisionSection      from "@/components/VisionSection";
import MethodologySection from "@/components/MethodologySection";
import FaqSection         from "@/components/FaqSection";
import GuaranteeBanner    from "@/components/GuaranteeBanner";
import ContactSection     from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#020617]">
      <HeroSection />
      <TechStrip />
      <SolutionsSection />
      <VisionSection />
      <MethodologySection />
      <FaqSection />
      <GuaranteeBanner />
      <ContactSection />
    </main>
  );
}
