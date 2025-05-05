
import { Link } from "react-router-dom";
import MemoryCard from "./MemoryCard";

// Datos de muestra - En una aplicación real, estos vendrían de una API o base de datos
const featuredMemories = [
  {
    id: "1",
    title: "Los Rostros del Milagro",
    description: "Fotografías y semblanzas de las víctimas de la masacre, preservando su memoria y humanidad.",
    imageSrc: "/placeholder.svg",
    type: "galeria"
  },
  {
    id: "2",
    title: "El Contexto Histórico",
    description: "El conflicto armado interno en Perú y sus consecuencias en la población civil de Trujillo.",
    imageSrc: "/placeholder.svg",
    type: "galeria"
  },
  {
    id: "3",
    title: "Testimonios de Sobrevivientes",
    description: "Relatos en primera persona de quienes vivieron los acontecimientos y sus consecuencias.",
    imageSrc: "/placeholder.svg",
    type: "testimonios"
  }
];

const GallerySection = () => {
  return (
    <section className="museo-section bg-museo-beige">
      <div className="museo-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-museo-negro">
            Galería de Memorias
          </h2>
          <p className="mt-3 text-museo-gris max-w-2xl mx-auto">
            Explorar las diferentes perspectivas, testimonios y documentos históricos relacionados con la masacre de El Milagro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMemories.map((memory) => (
            <MemoryCard
              key={memory.id}
              id={memory.id}
              title={memory.title}
              description={memory.description}
              imageSrc={memory.imageSrc}
              type={memory.type}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/galeria" 
            className="inline-block px-6 py-3 bg-museo-naranja text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
          >
            Ver toda la galería
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
