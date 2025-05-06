
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemoryCard from "@/components/MemoryCard";

// Datos de muestra - En una aplicación real, estos vendrían de una API o base de datos
const galeriaItems = [
  {
    id: "1",
    title: "Los Rostros de Trujillo",
    description: "Fotografías y semblanzas de las víctimas de la masacre, preservando su memoria y humanidad.",
    imageSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    type: "galeria"
  },
  {
    id: "2",
    title: "El Contexto Histórico",
    description: "El conflicto armado en Colombia y sus consecuencias en la población civil de Trujillo, Valle del Cauca.",
    imageSrc: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    type: "galeria"
  },
  {
    id: "3",
    title: "El Municipio de Trujillo",
    description: "Historia y características del municipio donde ocurrieron los hechos.",
    imageSrc: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    type: "galeria"
  },
  {
    id: "4",
    title: "Documentos Históricos",
    description: "Recortes de periódicos, informes oficiales y otros documentos relacionados con la masacre.",
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    type: "galeria"
  },
  {
    id: "5",
    title: "La Lucha por Justicia",
    description: "El arduo camino de los familiares y activistas en busca de verdad y reparación.",
    imageSrc: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    type: "galeria"
  },
  {
    id: "6",
    title: "Parque Monumento",
    description: "El lugar de memoria construido para honrar a las víctimas y mantener vivo su recuerdo.",
    imageSrc: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    type: "galeria"
  }
];

const GaleriaPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-museo-beige py-12">
        <div className="museo-container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-playfair font-bold mb-4 text-museo-negro">Galería de Memorias</h1>
            <p className="text-lg text-museo-gris max-w-3xl mx-auto">
              Explorar las diferentes perspectivas, testimonios y documentos históricos relacionados 
              con la masacre de Trujillo, Valle del Cauca, Colombia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galeriaItems.map((item) => (
              <MemoryCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GaleriaPage;
