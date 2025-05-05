
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-museo-beige py-12">
        <div className="text-center px-4">
          <h1 className="text-6xl font-playfair font-bold mb-4 text-museo-negro">404</h1>
          <p className="text-xl text-museo-gris mb-6">Página no encontrada</p>
          <p className="text-museo-gris mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido removida.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-museo-naranja text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
