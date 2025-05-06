
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import TestimonySection from "@/components/TestimonySection";
import ReflectionSection from "@/components/ReflectionSection";

const Index = () => {
  // Aquí actualizamos los metadatos del documento para reflejar la ubicación correcta
  document.title = "Memoria del Milagro - Museo Digital | Trujillo, Valle del Cauca, Colombia";
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Museo digital en memoria de las víctimas de la masacre de El Milagro, Trujillo, Valle del Cauca, Colombia');
  }
  
  const metaOgDescription = document.querySelector('meta[property="og:description"]');
  if (metaOgDescription) {
    metaOgDescription.setAttribute('content', 'Museo digital en memoria de las víctimas de la masacre de El Milagro, Trujillo, Valle del Cauca, Colombia');
  }

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
