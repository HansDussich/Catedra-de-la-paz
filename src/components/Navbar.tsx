
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-museo-beige shadow-md">
      <div className="museo-container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-playfair text-lg md:text-xl font-bold text-museo-negro">
            Memoria del Milagro
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-museo-negro focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-museo-negro hover:text-museo-naranja transition-colors">
              Inicio
            </Link>
            <Link to="/galeria" className="text-museo-negro hover:text-museo-naranja transition-colors">
              Galería
            </Link>
            <Link to="/cronologia" className="text-museo-negro hover:text-museo-naranja transition-colors">
              Cronología
            </Link>
            <Link to="/testimonios" className="text-museo-negro hover:text-museo-naranja transition-colors">
              Testimonios
            </Link>
            <Link to="/recursos" className="text-museo-negro hover:text-museo-naranja transition-colors">
              Recursos
            </Link>
            <Link to="/reflexion" className="text-museo-negro hover:text-museo-naranja transition-colors">
              Reflexión
            </Link>
            <Link to="/monumento" className="text-museo-negro hover:text-museo-naranja transition-colors">
              Monumento
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 py-2 border-t border-gray-200 contenido-fade">
            <Link to="/" className="block py-2 text-museo-negro hover:text-museo-naranja" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
            <Link to="/galeria" className="block py-2 text-museo-negro hover:text-museo-naranja" onClick={() => setIsOpen(false)}>
              Galería
            </Link>
            <Link to="/cronologia" className="block py-2 text-museo-negro hover:text-museo-naranja" onClick={() => setIsOpen(false)}>
              Cronología
            </Link>
            <Link to="/testimonios" className="block py-2 text-museo-negro hover:text-museo-naranja" onClick={() => setIsOpen(false)}>
              Testimonios
            </Link>
            <Link to="/recursos" className="block py-2 text-museo-negro hover:text-museo-naranja" onClick={() => setIsOpen(false)}>
              Recursos
            </Link>
            <Link to="/reflexion" className="block py-2 text-museo-negro hover:text-museo-naranja" onClick={() => setIsOpen(false)}>
              Reflexión
            </Link>
            <Link to="/monumento" className="block py-2 text-museo-negro hover:text-museo-naranja" onClick={() => setIsOpen(false)}>
              Monumento
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
