
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-museo-negro text-white py-8">
      <div className="museo-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Memoria del Milagro</h3>
            <p className="text-sm text-gray-300 mb-4">
              Un espacio digital para preservar la memoria histórica y honrar a las víctimas de la 
              masacre de El Milagro ocurrida en Trujillo, Perú.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/galeria" className="text-gray-300 hover:text-white transition-colors">Galería</Link></li>
              <li><Link to="/cronologia" className="text-gray-300 hover:text-white transition-colors">Cronología</Link></li>
              <li><Link to="/testimonios" className="text-gray-300 hover:text-white transition-colors">Testimonios</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-gray-300">
              Para contribuir con testimonios, fotografías o información, por favor contactar a través de:
            </p>
            <p className="text-sm text-gray-300 mt-2">
              memoriadelmilagro@ejemplo.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} Memoria del Milagro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
