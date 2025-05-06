
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Search } from "lucide-react";

// Datos de muestra para testimonios actualizados para el contexto colombiano
const testimoniosCompletos = [
  {
    id: "1",
    nombre: "María L.",
    relacion: "Hermana de víctima",
    anio: "2003",
    cita: "Aún recuerdo esa noche. Los gritos, el sonido de los disparos, el miedo. Mi hermano tenía solo 19 años cuando se lo llevaron. Era estudiante de bachillerato y trabajaba en una finca. Nunca estuvo involucrado con ningún grupo armado. Simplemente estaba en el lugar equivocado. Han pasado tantos años y el dolor sigue intacto.",
    categoria: "familiar"
  },
  {
    id: "2",
    nombre: "Carlos R.",
    relacion: "Hermano de víctima",
    anio: "2008",
    cita: "Nos acusaron de colaborar con la guerrilla sin ninguna prueba. A día de hoy, más de 30 años después, sigo luchando para limpiar su nombre. Mi hermano era un buen hombre, un padre de familia. Cuando ocurrió la masacre, dejó huérfanos a dos niños pequeños que crecieron preguntando por su padre.",
    categoria: "familiar"
  },
  {
    id: "3",
    nombre: "Jorge M.",
    relacion: "Vecino de Trujillo",
    anio: "2000",
    cita: "Esa noche nadie durmió en el pueblo. Se escuchaban vehículos, disparos, gritos. Al día siguiente todo estaba en silencio, un silencio terrible. Nadie quería hablar por miedo. Todos sabíamos lo que había pasado, pero el miedo nos paralizó durante años.",
    categoria: "testigo"
  },
  {
    id: "4",
    nombre: "Dra. Patricia S.",
    relacion: "Investigadora de Derechos Humanos",
    anio: "2015",
    cita: "La masacre de Trujillo representa uno de los patrones de violencia del conflicto armado colombiano: la alianza entre narcotraficantes, paramilitares y agentes del Estado. La estigmatización de campesinos y líderes sociales como 'guerrilleros' fue la justificación para acciones que violaban todo principio de derechos humanos.",
    categoria: "experto"
  },
  {
    id: "5",
    nombre: "Luis V.",
    relacion: "Sobreviviente",
    anio: "2010",
    cita: "Me salvé porque logré escapar por el río Cauca. Vi cómo se llevaban a mis vecinos. No pude hacer nada. Viví con esa culpa durante años. Ahora entiendo que contar lo que vi es mi manera de honrar su memoria y buscar justicia para ellos.",
    categoria: "sobreviviente"
  },
  {
    id: "6",
    nombre: "Rosa T.",
    relacion: "Madre de víctima",
    anio: "2005",
    cita: "Esperé a mi hijo toda la noche. Nunca regresó. Al día siguiente fui a buscarlo por la estación de policía, por el hospital, incluso pregunté a los militares. Nadie me daba razón. Pasaron semanas hasta que un pescador encontró restos en el río. Toda madre sabe lo que es amar a un hijo, pero no todas saben lo que es buscar sus restos en un río.",
    categoria: "familiar"
  }
];

const TestimoniosPage = () => {
  const [filtro, setFiltro] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  
  const categorias = [
    { id: "todos", nombre: "Todos" },
    { id: "familiar", nombre: "Familiares" },
    { id: "sobreviviente", nombre: "Sobrevivientes" },
    { id: "testigo", nombre: "Testigos" },
    { id: "experto", nombre: "Expertos" }
  ];
  
  // Filtrar testimonios según categoría y búsqueda
  const testimoniosFiltrados = testimoniosCompletos.filter(testimonio => {
    const coincideCategoria = categoriaActiva === "todos" || testimonio.categoria === categoriaActiva;
    const coincideBusqueda = filtro === "" || 
      testimonio.cita.toLowerCase().includes(filtro.toLowerCase()) ||
      testimonio.nombre.toLowerCase().includes(filtro.toLowerCase());
    
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white py-12">
        <div className="museo-container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-playfair font-bold mb-4 text-museo-negro">Testimonios</h1>
            <p className="text-lg text-museo-gris max-w-3xl mx-auto">
              Voces de quienes vivieron los hechos, familiares de las víctimas y expertos que han 
              investigado el caso.
            </p>
          </div>
          
          {/* Filtros y búsqueda */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              {/* Categorías */}
              <div className="flex flex-wrap gap-2">
                {categorias.map(categoria => (
                  <button
                    key={categoria.id}
                    className={`px-4 py-2 rounded-md text-sm ${categoriaActiva === categoria.id 
                      ? 'bg-museo-naranja text-white' 
                      : 'bg-gray-100 text-museo-gris hover:bg-gray-200'}`}
                    onClick={() => setCategoriaActiva(categoria.id)}
                  >
                    {categoria.nombre}
                  </button>
                ))}
              </div>
              
              {/* Buscador */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar testimonios..."
                  className="w-full md:w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-museo-naranja"
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Lista de testimonios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimoniosFiltrados.length > 0 ? (
              testimoniosFiltrados.map(testimonio => (
                <div
                  key={testimonio.id}
                  className="bg-museo-beige p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    <Quote size={24} className="text-museo-naranja flex-shrink-0 mr-2" />
                    <blockquote className="text-museo-gris italic">
                      {testimonio.cita}
                    </blockquote>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-museo-negro">{testimonio.nombre}</p>
                    <p className="text-sm text-museo-gris">{testimonio.relacion}, {testimonio.anio}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 lg:col-span-2 py-12 text-center">
                <p className="text-lg text-museo-gris">No se encontraron testimonios que coincidan con tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimoniosPage;
