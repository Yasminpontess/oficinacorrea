import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const marcas = [
  { nome: "chevrolet", altura: "h-20" },
  { nome: "ford", altura: "h-14" },
  { nome: "fiat", altura: "h-12" },
  { nome: "honda", altura: "h-20" },
  { nome: "hyundai", altura: "h-14" },
  { nome: "kia", altura: "h-14" },
  { nome: "mitsubishi", altura: "h-18" },
  { nome: "nissan", altura: "h-18" },
  { nome: "peugeot", altura: "h-18" },
  { nome: "renault", altura: "h-22" },
  { nome: "toyota", altura: "h-22" },
  { nome: "bmw", altura: "h-18" },
  { nome: "citroen", altura: "h-25" },
  { nome: "audi", altura: "h-18" },
  { nome: "jeep", altura: "h-18" },
  { nome: "mercedes", altura: "h-18" },
  { nome: "ranger", altura: "h-18" },
];

export default function CarrosselMarcas() {
  const [indice, setIndice] = useState(0);
  const [tamanhoGrupo, setTamanhoGrupo] = useState(4);

  // Ajuste responsivo
  useEffect(() => {
    const atualizarTamanhoGrupo = () => {
      const largura = window.innerWidth;
      if (largura < 640) {
        setTamanhoGrupo(1);
      } else if (largura < 768) {
        setTamanhoGrupo(2);
      } else if (largura < 1024) {
        setTamanhoGrupo(3);
      } else {
        setTamanhoGrupo(4);
      }
    };

    atualizarTamanhoGrupo();
    window.addEventListener("resize", atualizarTamanhoGrupo);
    return () => window.removeEventListener("resize", atualizarTamanhoGrupo);
  }, []);

  // Avanço automático a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prevIndice) => {
        if (prevIndice + 1 + tamanhoGrupo > marcas.length) {
          return 0; // Volta pro começo
        }
        return prevIndice + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [tamanhoGrupo]);

  const proximo = () => {
    if (indice + tamanhoGrupo < marcas.length) {
      setIndice(indice + 1);
    } else {
      setIndice(0); // Reinicia se chegar no final
    }
  };

  const anterior = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  const grupoVisivel = marcas.slice(indice, indice + tamanhoGrupo);

  return (
    <div className="w-full bg-black py-25 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-6 px-4 ">
        Trabalhamos com todas essas marcas
        <div className="flex justify-center mt-2 ">
          <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
          <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
          <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
        </div>
      </h2>

      <div className="flex justify-center items-center gap-4 px-5">
        <button
          onClick={anterior}
          className="text-white hover:text-gray-400 disabled:opacity-30"
          disabled={indice === 0}
        >
          <ChevronLeft size={36} />
        </button>

        <motion.div
          key={indice}
          className="flex gap-6 sm:gap-8 md:gap-10 justify-center items-center min-h-[100px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {grupoVisivel.map((marca, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-24 w-28 sm:w-32 md:w-36"
            >
              <img
                src={`/imagens/marcas/${marca.nome}.png`}
                alt={marca.nome}
                className={`${marca.altura} max-w-full object-contain`}
              />
            </div>
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
