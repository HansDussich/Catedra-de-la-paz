
const IntroductionSection = () => {
  return (
    <section id="main-content" className="museo-section bg-white">
      <div className="museo-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-museo-negro text-center">
            La Masacre de Trujillo
          </h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="mb-4 text-museo-gris">
              Entre 1988 y 1994, en el contexto del conflicto armado colombiano, en el municipio de Trujillo, Valle del Cauca,
              se cometió una serie de homicidios, torturas y desapariciones forzadas contra la población civil, perpetrados por una alianza
              entre narcotraficantes, paramilitares y miembros de la fuerza pública.
            </p>
            
            <p className="mb-4 text-museo-gris">
              Este hecho, que permanece en la memoria colectiva de la región, es uno de los emblemas de la violencia sociopolítica
              que ha marcado la historia reciente de Colombia, dejando más de 340 víctimas documentadas.
            </p>
            
            <p className="mb-8 text-museo-gris">
              Este espacio digital busca preservar la memoria de estos acontecimientos, educar a las nuevas generaciones y 
              rendir un homenaje a las víctimas, como parte de un proceso necesario de memoria, verdad, justicia y no repetición.
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
