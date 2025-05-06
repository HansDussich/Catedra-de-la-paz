
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Datos de la cronología actualizada para Trujillo, Valle del Cauca, Colombia
const timelineEvents = [
  {
    year: "1980s",
    title: "Inicio del Conflicto Armado",
    description: "Colombia atraviesa un periodo de violencia intensificada con la presencia de grupos guerrilleros, paramilitares y narcotraficantes en varias regiones del país.",
  },
  {
    year: "1986-1987",
    title: "Escalada de la Violencia en el Valle del Cauca",
    description: "La región del Valle del Cauca, incluyendo Trujillo, comienza a sufrir la violencia relacionada con el narcotráfico y la lucha territorial entre diversos actores armados.",
  },
  {
    year: "1988-1990",
    title: "Masacre de Trujillo",
    description: "En el municipio de Trujillo, Valle del Cauca, se inicia una serie de asesinatos selectivos, desapariciones forzadas y actos de tortura contra la población civil, perpetrados por una alianza entre narcotraficantes, paramilitares y miembros de la fuerza pública.",
    destacado: true,
  },
  {
    year: "1990-1991",
    title: "Continuación de la Violencia",
    description: "Los asesinatos y desapariciones continúan en Trujillo, alcanzando su punto más crítico con la desaparición y posterior asesinato del padre Tiberio Fernández y tres acompañantes.",
  },
  {
    year: "1994-1995",
    title: "Primera Comisión de Investigación",
    description: "Se conforma una Comisión de Investigación que documenta los hechos ocurridos en Trujillo, presionada por organizaciones de derechos humanos.",
  },
  {
    year: "1995",
    title: "Reconocimiento de Responsabilidad Estatal",
    description: "El presidente Ernesto Samper reconoce la responsabilidad del Estado colombiano en los hechos y se compromete a una reparación integral.",
  },
  {
    year: "1997",
    title: "Formación de AFAVIT",
    description: "Se crea la Asociación de Familiares de Víctimas de Trujillo (AFAVIT), organización clave en la lucha por memoria, verdad y justicia.",
  },
  {
    year: "2000-2005",
    title: "Construcción del Parque Monumento",
    description: "Se diseña y construye el Parque Monumento en memoria de las víctimas, convertido en símbolo de resistencia y memoria colectiva.",
  },
  {
    year: "2008",
    title: "Informe del Centro Nacional de Memoria Histórica",
    description: "El CNMH publica el informe 'Trujillo: una tragedia que no cesa', documentando a profundidad los hechos ocurridos.",
  },
  {
    year: "2010-presente",
    title: "Búsqueda Continua de Justicia",
    description: "Continúan los procesos judiciales y la lucha contra la impunidad, mientras se fortalecen las iniciativas de memoria histórica.",
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
