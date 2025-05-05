
const IntroductionSection = () => {
  return (
    <section id="main-content" className="museo-section bg-white">
      <div className="museo-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-museo-negro text-center">
            La Masacre de El Milagro
          </h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="mb-4 text-museo-gris">
              En 1988, en el contexto del conflicto armado interno en el Perú, en el distrito de El Milagro, Trujillo,
              fuerzas del Estado cometieron una masacre contra jóvenes que fueron acusados sin pruebas de tener vínculos
              con grupos subversivos.
            </p>
            
            <p className="mb-4 text-museo-gris">
              Este hecho, que permanece en la memoria colectiva de la ciudad, fue parte de una serie de violaciones a los 
              derechos humanos que ocurrieron durante esta época oscura de la historia peruana.
            </p>
            
            <p className="mb-8 text-museo-gris">
              Este espacio digital busca preservar la memoria de estos acontecimientos, educar a las nuevas generaciones y 
              rendir un homenaje a las víctimas, como parte de un proceso necesario de memoria, verdad y justicia.
            </p>
            
            <div className="border-l-4 border-museo-naranja pl-4 italic">
              <p className="text-museo-gris">
                "Recordar para no repetir. La memoria es el camino para sanar las heridas del pasado y construir un 
                futuro donde la dignidad de todas las personas sea respetada."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
