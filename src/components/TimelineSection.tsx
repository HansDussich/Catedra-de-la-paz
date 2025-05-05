
import { Link } from "react-router-dom";

// Datos de muestra para la línea de tiempo
const timelineEvents = [
  {
    year: "1980",
    title: "Inicio del Conflicto Armado",
    description: "El grupo Sendero Luminoso inicia su lucha armada contra el Estado peruano."
  },
  {
    year: "1988",
    title: "Masacre de El Milagro",
    description: "Fuerzas estatales realizan ejecuciones extrajudiciales en el distrito de El Milagro, Trujillo."
  },
  {
    year: "1990s",
    title: "Búsqueda de Justicia",
    description: "Familiares de las víctimas comienzan a organizarse para exigir verdad y justicia."
  },
  {
    year: "2000s",
    title: "Comisión de la Verdad",
    description: "La Comisión de la Verdad y Reconciliación investiga los crímenes del conflicto armado interno."
  }
];

const TimelineSection = () => {
  return (
    <section className="museo-section bg-white">
      <div className="museo-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-museo-negro">
            Cronología Histórica
          </h2>
          <p className="mt-3 text-museo-gris max-w-2xl mx-auto">
            Los principales acontecimientos relacionados con la masacre de El Milagro y su contexto histórico.
          </p>
        </div>
        
        {/* Línea de tiempo simplificada */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-museo-naranja"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Punto en la línea temporal */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -ml-0.5 mt-6 w-4 h-4 rounded-full bg-museo-azul border-4 border-museo-naranja"></div>
                
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Año - visible solo en móvil */}
                  <div className="md:hidden mb-2 text-xl font-playfair font-bold text-museo-naranja">
                    {event.year}
                  </div>
                  
                  {/* Contenido */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    {/* Año - visible solo en desktop */}
                    <div className="hidden md:block mb-2 text-xl font-playfair font-bold text-museo-naranja">
                      {event.year}
                    </div>
                    <h3 className="text-lg font-bold text-museo-negro">{event.title}</h3>
                    <p className="text-museo-gris">{event.description}</p>
                  </div>
                  
                  {/* Espacio al otro lado de la línea */}
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link
              to="/cronologia"
              className="inline-block px-6 py-3 bg-museo-azul text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Explorar la cronología completa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
