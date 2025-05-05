
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Datos de muestra para la cronología completa
const timelineEvents = [
  {
    year: "1980",
    title: "Inicio del Conflicto Armado Interno",
    description: "El grupo Sendero Luminoso inicia su lucha armada contra el Estado peruano, declarando una 'guerra popular'.",
  },
  {
    year: "1983-1984",
    title: "Escalada de la Violencia",
    description: "El conflicto se intensifica con la entrada de las Fuerzas Armadas a las zonas de emergencia.",
  },
  {
    year: "1986-1987",
    title: "Expansión del Conflicto",
    description: "La violencia política se extiende a más regiones del país, incluyendo la costa norte.",
  },
  {
    year: "1988",
    title: "Masacre de El Milagro",
    description: "En el distrito de El Milagro, Trujillo, fuerzas del Estado realizan ejecuciones extrajudiciales de jóvenes acusados sin pruebas de vínculos con la subversión.",
    destacado: true,
  },
  {
    year: "1988-1990",
    title: "Impunidad Inicial",
    description: "Las denuncias realizadas por familiares son ignoradas por las autoridades en un contexto de normalización de la violencia.",
  },
  {
    year: "1992",
    title: "Captura de Abimael Guzmán",
    description: "El líder de Sendero Luminoso es capturado, marcando un punto de inflexión en el conflicto.",
  },
  {
    year: "1995-2000",
    title: "Creación de Organizaciones de Víctimas",
    description: "Se forman asociaciones de familiares que buscan verdad y justicia por los crímenes cometidos durante el conflicto.",
  },
  {
    year: "2001-2003",
    title: "Comisión de la Verdad y Reconciliación",
    description: "Se crea la CVR para investigar los crímenes y violaciones a los derechos humanos cometidos durante el conflicto armado interno.",
  },
  {
    year: "2003",
    title: "Informe Final de la CVR",
    description: "Se publica el informe que documenta los crímenes cometidos, incluyendo las masacres como la de El Milagro.",
  },
  {
    year: "2005-presente",
    title: "Búsqueda de Justicia",
    description: "Continúan los procesos legales y la lucha de los familiares por obtener justicia y reconocimiento.",
  },
];

const CronologiaPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white py-12">
        <div className="museo-container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-playfair font-bold mb-4 text-museo-negro">Cronología Histórica</h1>
            <p className="text-lg text-museo-gris max-w-3xl mx-auto">
              Línea de tiempo que contextualiza la masacre de El Milagro dentro del conflicto armado interno peruano.
            </p>
          </div>
          
          {/* Línea de tiempo vertical */}
          <div className="max-w-4xl mx-auto relative pb-10">
            {/* Línea vertical central */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-museo-naranja md:transform md:-translate-x-1/2"></div>
            
            {/* Eventos */}
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-12">
                {/* Círculo en la línea temporal */}
                <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full md:transform md:-translate-x-1/2 ${event.destacado ? 'bg-museo-naranja border-2 border-museo-azul' : 'bg-museo-azul'}`}></div>
                
                <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                  {/* Año - a la izquierda en desktop */}
                  <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12 md:pr-0'}`}>
                    <div className="text-xl font-playfair font-bold text-museo-naranja mb-1">
                      {event.year}
                    </div>
                    <h3 className={`text-lg font-bold ${event.destacado ? 'text-museo-naranja' : 'text-museo-negro'}`}>
                      {event.title}
                    </h3>
                  </div>
                  
                  {/* Descripción - a la derecha en desktop */}
                  <div className={`mt-2 md:mt-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
                    <p className="text-museo-gris">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CronologiaPage;
