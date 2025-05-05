
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import TestimonySection from "@/components/TestimonySection";
import ReflectionSection from "@/components/ReflectionSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IntroductionSection />
        <GallerySection />
        <TimelineSection />
        <TestimonySection />
        <ReflectionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
