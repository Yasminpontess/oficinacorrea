import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const marcas = [
  { nome: "chevrolet", altura: "h-16" },
  { nome: "ford", altura: "h-14" },
  { nome: "fiat", altura: "h-12" },
  { nome: "honda", altura: "h-16" },
  { nome: "hyundai", altura: "h-14" },
  { nome: "kia", altura: "h-14" },
  { nome: "mitsubishi", altura: "h-16" },
  { nome: "nissan", altura: "h-14" },
  { nome: "peugeot", altura: "h-12" },
  { nome: "renault", altura: "h-14" },
  { nome: "toyota", altura: "h-16" },
  { nome: "volkswagen", altura: "h-16" },
];

export default function CarrosselMarcas() {
  const [indice, setIndice] = useState(0);
  const [tamanhoGrupo, setTamanhoGrupo] = useState(4);

  // Responsividade baseada na largura da tela
  useEffect(() => {
    const atualizarTamanhoGrupo = () => {
      const largura = window.innerWidth;
      if (largura < 640) {
        setTamanhoGrupo(1); // celular
      } else if (largura < 768) {
        setTamanhoGrupo(2); // tablet pequeno
      } else if (largura < 1024) {
        setTamanhoGrupo(3); // tablet maior
      } else {
        setTamanhoGrupo(4); // desktop
      }
    };

    atualizarTamanhoGrupo(); // define ao carregar

    window.addEventListener("resize", atualizarTamanhoGrupo);
    return () => window.removeEventListener("resize", atualizarTamanhoGrupo);
  }, []);

  const proximo = () => {
    if (indice + tamanhoGrupo < marcas.length) {
      setIndice(indice + tamanhoGrupo);
    }
  };

  const anterior = () => {
    if (indice - tamanhoGrupo >= 0) {
      setIndice(indice - tamanhoGrupo);
    }
  };

  const grupoVisivel = marcas.slice(indice, indice + tamanhoGrupo);

  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-6 px-4">
        Trabalhamos com todas essas marcas
      </h2>

      <div className="flex justify-center items-center gap-4 px-4">
        <button
          onClick={anterior}
          className="text-white hover:text-gray-400 disabled:opacity-30"
          disabled={indice === 0}
        >
          <ChevronLeft size={36} />
        </button>

        <motion.div
          key={indice}
          className="flex gap-6 sm:gap-8 md:gap-10 justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {grupoVisivel.map((marca, index) => (
            <img
              key={index}
              src={`/imagens/marcas/${marca.nome}.png`}
              alt={marca.nome}
              className={`${marca.altura} object-contain max-w-[100px] sm:max-w-[120px]`}
            />
          ))}
        </motion.div>

        <button
          onClick={proximo}
          className="text-white hover:text-gray-400 disabled:opacity-30"
          disabled={indice + tamanhoGrupo >= marcas.length}
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}
