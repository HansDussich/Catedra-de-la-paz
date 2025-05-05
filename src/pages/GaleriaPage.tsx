
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemoryCard from "@/components/MemoryCard";

// Datos de muestra - En una aplicación real, estos vendrían de una API o base de datos
const galeriaItems = [
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
    title: "El Distrito del Milagro",
    description: "Historia y características del distrito donde ocurrieron los hechos.",
    imageSrc: "/placeholder.svg",
    type: "galeria"
  },
  {
    id: "4",
    title: "Documentos Históricos",
    description: "Recortes de periódicos, informes oficiales y otros documentos relacionados con la masacre.",
    imageSrc: "/placeholder.svg",
    type: "galeria"
  },
  {
    id: "5",
    title: "La Lucha por Justicia",
    description: "El arduo camino de los familiares y activistas en busca de verdad y reparación.",
    imageSrc: "/placeholder.svg",
    type: "galeria"
  },
  {
    id: "6",
    title: "Manifestaciones y Conmemoraciones",
    description: "Cómo la comunidad ha mantenido viva la memoria a lo largo de los años.",
    imageSrc: "/placeholder.svg",
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
              con la masacre de El Milagro.
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
