
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReflexionPage = () => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState<string[]>([
    "La memoria es nuestra resistencia contra el olvido",
    "Que nunca más vuelva a ocurrir",
    "Por un futuro donde se respeten los derechos de todos",
    "Justicia y verdad para sanar"
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mensaje.trim()) {
      setMensajes([...mensajes, mensaje]);
      setMensaje("");
    }
  };

  // Frases para la reflexión
  const frases = [
    {
      cita: "El olvido está lleno de memoria.",
      autor: "Mario Benedetti"
    },
    {
      cita: "La memoria es un ejercicio de justicia.",
      autor: "Comisión de la Verdad y Reconciliación"
    },
    {
      cita: "Un pueblo sin memoria está condenado a repetir sus errores.",
      autor: "Proverbio"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[url('/lovable-uploads/f2794358-3211-4470-8eea-987a5e9f5c71.png')] bg-cover bg-center py-12">
        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-museo-negro bg-opacity-70 z-0"></div>
        
        <div className="museo-container relative z-10">
          <div className="mb-10 text-center text-white">
            <h1 className="text-4xl font-playfair font-bold mb-4">Espacio de Reflexión</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Un lugar para honrar la memoria de las víctimas y reflexionar sobre el significado de estos hechos para nuestra sociedad.
            </p>
          </div>
          
          {/* Frases para la reflexión */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {frases.map((frase, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                  <blockquote className="text-lg italic text-white mb-4">
                    "{frase.cita}"
                  </blockquote>
                  <footer className="text-right text-gray-300">
                    — {frase.autor}
                  </footer>
                </div>
              ))}
            </div>
          </div>
          
          {/* Muro de mensajes */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-playfair font-bold mb-6 text-white text-center">
              Muro de Reflexiones
            </h2>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mensajes.map((msg, index) => (
                  <div 
                    key={index} 
                    className="bg-museo-beige bg-opacity-80 p-4 rounded-md shadow-md transform rotate-[-1deg] hover:rotate-0 transition-transform"
                  >
                    <p className="text-museo-negro italic">{msg}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Formulario para añadir mensajes */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-white mb-2">
                  Deja tu reflexión
                </label>
                <textarea
                  id="mensaje"
                  rows={3}
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-museo-naranja focus:border-transparent"
                  placeholder="Escribe un mensaje de reflexión, memoria u homenaje..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-museo-naranja text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Compartir mensaje
                </button>
              </div>
            </form>
          </div>
          
          {/* Vela virtual */}
          <div className="max-w-xs mx-auto text-center">
            <h2 className="text-xl font-playfair font-bold mb-4 text-white">
              Enciende una vela virtual
            </h2>
            <div className="w-20 h-32 mx-auto relative animate-pulse">
              <div className="absolute w-4 h-4 bg-yellow-300 rounded-full left-1/2 top-3 transform -translate-x-1/2 shadow-lg shadow-yellow-300/50"></div>
              <div className="w-full h-full bg-gradient-to-t from-museo-naranja to-yellow-300 rounded-t-full"></div>
            </div>
            <p className="mt-4 text-white text-sm italic">
              En memoria de quienes ya no están con nosotros
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReflexionPage;
