
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center bg-gradient-to-b from-museo-beige via-museo-beige to-white">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f2794358-3211-4470-8eea-987a5e9f5c71.png')] bg-cover bg-center opacity-20"></div>
      <div className="museo-container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-museo-negro">
          Memoria de Trujillo
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair text-museo-gris mb-8">
          Un espacio para no olvidar
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-museo-gris mb-10">
          Un museo digital en homenaje a las víctimas de la masacre de Trujillo, 
          Valle del Cauca, Colombia, 1988-1994
        </p>
        <button
          onClick={scrollToContent}
          className="animate-bounce mt-8 p-2 rounded-full border border-museo-naranja text-museo-naranja hover:bg-museo-naranja hover:text-white transition-colors"
          aria-label="Desplazarse hacia abajo"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
