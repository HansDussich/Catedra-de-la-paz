
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

// Datos de muestra para testimonios
const testimonios = [
  {
    id: "1",
    cita: "\"Aún recuerdo esa noche. Los gritos, el sonido de los disparos, el miedo. Mi hermano tenía solo 19 años cuando se lo llevaron.\"",
    autor: "María L., familiar de víctima"
  },
  {
    id: "2",
    cita: "\"Nos acusaron sin pruebas. A día de hoy, más de 30 años después, sigo luchando para limpiar su nombre.\"",
    autor: "Carlos R., hermano de víctima"
  }
];

const TestimonySection = () => {
  return (
    <section className="museo-section bg-museo-azul text-white">
      <div className="museo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold">
            Voces de la Memoria
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-200">
            Testimonios de familiares, sobrevivientes y testigos que mantienen viva la memoria.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonios.map((testimonio) => (
            <div 
              key={testimonio.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 text-museo-naranja">
                <Quote size={32} />
              </div>
              <blockquote className="mb-4 text-lg italic">
                {testimonio.cita}
              </blockquote>
              <footer className="text-right text-gray-300">
                — {testimonio.autor}
              </footer>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link
            to="/testimonios"
            className="inline-block px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-museo-azul transition-colors"
          >
            Leer más testimonios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
