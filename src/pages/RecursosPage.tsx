
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Book, FileText, Video, Link as LinkIcon } from "lucide-react";

// Datos de muestra para recursos educativos
const recursos = [
  {
    id: "1",
    titulo: "Informe de la Comisión de la Verdad sobre El Milagro",
    descripcion: "Extracto del Informe Final de la CVR donde se documenta la masacre.",
    tipo: "documento",
    enlace: "#",
    icono: FileText
  },
  {
    id: "2",
    titulo: "Contexto histórico del conflicto armado interno en Perú",
    descripcion: "Artículo académico sobre las causas y el desarrollo del conflicto.",
    tipo: "artículo",
    enlace: "#",
    icono: Book
  },
  {
    id: "3",
    titulo: "Testimonios audiovisuales de familiares",
    descripcion: "Colección de entrevistas realizadas a familiares de las víctimas.",
    tipo: "video",
    enlace: "#",
    icono: Video
  },
  {
    id: "4",
    titulo: "Material pedagógico para escuelas",
    descripcion: "Guía para docentes que desean abordar estos temas en clase.",
    tipo: "guía",
    enlace: "#",
    icono: FileText
  },
  {
    id: "5",
    titulo: "Base de datos de casos documentados",
    descripcion: "Repositorio de información sobre casos similares durante el conflicto armado.",
    tipo: "base de datos",
    enlace: "#",
    icono: LinkIcon
  },
  {
    id: "6",
    titulo: "Publicaciones relacionadas con Memoria Histórica",
    descripcion: "Libros, artículos y publicaciones sobre la importancia de la memoria colectiva.",
    tipo: "bibliografía",
    enlace: "#",
    icono: Book
  }
];

// Agrupar recursos por tipo
const tiposRecurso = Array.from(new Set(recursos.map(r => r.tipo)));

const RecursosPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-museo-beige py-12">
        <div className="museo-container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-playfair font-bold mb-4 text-museo-negro">Recursos Educativos</h1>
            <p className="text-lg text-museo-gris max-w-3xl mx-auto">
              Materiales y documentación para comprender mejor el contexto histórico y el impacto
              de la masacre de El Milagro.
            </p>
          </div>
          
          {/* Sección de recursos por tipo */}
          {tiposRecurso.map(tipo => (
            <div key={tipo} className="mb-12">
              <h2 className="text-2xl font-playfair font-bold mb-6 text-museo-negro capitalize">
                {tipo === "artículo" ? "Artículos" : tipo === "guía" ? "Guías" : `${tipo}s`.charAt(0).toUpperCase() + `${tipo}s`.slice(1)}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recursos.filter(r => r.tipo === tipo).map(recurso => (
                  <div key={recurso.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="mb-4 text-museo-naranja">
                      <recurso.icono size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-museo-negro">{recurso.titulo}</h3>
                    <p className="text-museo-gris mb-4">{recurso.descripcion}</p>
                    <a 
                      href={recurso.enlace} 
                      className="inline-flex items-center text-museo-azul hover:text-museo-naranja transition-colors"
                    >
                      <Download size={16} className="mr-2" />
                      <span>Descargar</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Sección de contribución */}
          <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-playfair font-bold mb-4 text-museo-negro">
              Contribuye con Recursos
            </h2>
            <p className="text-museo-gris mb-6">
              Si tienes documentos, fotografías, testimonios o cualquier otro material relacionado con la masacre de El Milagro
              y deseas contribuir a preservar la memoria histórica, por favor contacta con nosotros.
            </p>
            <a 
              href="mailto:memoriadelmilagro@ejemplo.com" 
              className="inline-block px-6 py-3 bg-museo-azul text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecursosPage;
