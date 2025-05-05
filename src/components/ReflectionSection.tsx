
import { Link } from "react-router-dom";

const ReflectionSection = () => {
  return (
    <section className="museo-section bg-gradient-to-b from-white to-museo-beige">
      <div className="museo-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-museo-negro">
            Espacio de Reflexión
          </h2>
          
          <p className="text-lg mb-8 text-museo-gris">
            La memoria colectiva es una herramienta para sanar, para prevenir, y para construir una sociedad 
            más justa. Te invitamos a reflexionar sobre estos hechos y su significado para el presente.
          </p>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
            <p className="text-xl italic font-playfair text-museo-gris mb-4">
              "La memoria es un acto de justicia. Olvidar es permitir que los errores del pasado se repitan en el futuro."
            </p>
            
            <p className="text-museo-azul">
              — Comisión de la Verdad y Reconciliación del Perú
            </p>
          </div>
          
          <Link
            to="/reflexion"
            className="inline-block px-6 py-3 bg-museo-gris text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
          >
            Visitar el espacio de reflexión
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;
