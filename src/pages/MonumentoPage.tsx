import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MonumentoPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-museo-beige py-12">
        <div className="museo-container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-playfair font-bold mb-4 text-museo-negro">Monumento Histórico</h1>
            <p className="text-lg text-museo-gris max-w-3xl mx-auto mb-8">
              El símbolo de memoria y resistencia que honra las víctimas de la masacre de Trujillo (Valle del Cauca, Colombia)
            </p>
            
            <div className="relative bg-black/50 rounded-xl p-6 backdrop-blur-sm transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <img 
                src="/img/img.png" 
                alt="Monumento a las Víctimas de Trujillo" 
                className="mx-auto rounded-lg shadow-2xl max-w-4xl w-full h-auto"
              />
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none" />
            </div>

            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MonumentoPage;