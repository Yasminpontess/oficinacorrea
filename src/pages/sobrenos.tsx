import React, { useRef } from "react";
import { motion } from "framer-motion";

const SobreNos = () => {
  const ref = useRef(null);

  return (
    <div className="w-full flex flex-col items-center bg-black overflow-x-hidden">
      {/* Seção de capa com fundo do Mustang */}
      <section
        className="relative w-full min-h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-6"
        style={{
          backgroundImage: "url('/imagens/mustang6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gray-950/70 z-0"></div>
        <div className="relative z-10 max-w-5xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 drop-shadow-lg tracking-wide text-center">
            <span style={{ textShadow: "2px 2px 5px black" }}>Sobre Nós</span>
          </h1>
          <div className="my-4 border-t-4 border-white w-3/4 mx-auto"></div>
          <h5
            className="text-lg sm:text-xl font-bold md:text-2xl lg:text-3xl text-yellow-400 tracking-widest"
            style={{ textShadow: "1px 1px 4px black" }}
          >
            Serviços automotivos completos com confiança e qualidade
          </h5>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-24 bg-yellow-500 z-0"
          style={{ clipPath: "polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </section>

      {/* Seção de descrição da oficina */}
      <section className="bg-black py-12 px-4 md:px-20" id="sobre-nos">
        <div className="max-w-4xl mx-auto text-center">
          <h5 className="text-2xl md:text-4xl font-bold text-white mb-8">
            Oficina Mecânica em Cotia – SP | Corrêa 83
          </h5>

          <div className="flex justify-center mt-2 mb-6">
            <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
            <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
            <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
          </div>

          <p className="text-white text-lg leading-relaxed">
            Fundada em 2019, a Oficina Corrêa 83 está localizada em Cotia – São
            Paulo e se destaca por oferecer, há mais de 7 anos, soluções
            automotivas de alto padrão, com total dedicação à segurança e ao bom
            desempenho dos veículos de nossos clientes.
            <p className="text-white text-lg leading-relaxed">
              Realizamos serviços completos de manutenção preventiva e
              corretiva, com especialidade em freios, suspensão, motor,
              embreagem, troca de óleo, revisões gerais e muito mais.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Nossa missão é oferecer um atendimento de excelência, pautado na
              transparência, confiança e profissionalismo. Por isso, investimos
              constantemente na melhoria dos nossos processos, com foco na
              satisfação total de quem confia em nosso trabalho.
            </p>
          </p>
        </div>
      </section>

      <section
        className="w-full bg-black text-white py-20 relative overflow-hidden"
        ref={ref}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <motion.div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-8 sm:px-6 relative z-10">
          {/* Imagens */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <img
              src="/imagens/ygor.jpg"
              alt="Oficina"
              className="rounded-lg w-80 h-80 object-cover shadow-lg self-start"
            />
            <img
              src="/imagens/vds.jpg"
              alt="Carros na oficina"
              className="rounded-lg w-80 h-80 object-cover shadow-lg self-end"
            />
          </div>

          {/* Texto */}
          <div
            id="quemsomos"
            className="w-full md:w-1/2 text-left px-2 md:px-4 py-6 relative z-10"
          >
            <p className="text-lg mt-4 text-justify">
              Contamos com uma equipe de mecânicos experientes e altamente
              qualificados, preparados para diagnosticar e resolver qualquer
              tipo de problema com agilidade e precisão. Utilizamos tecnologia
              de ponta e peças de alta qualidade, assegurando durabilidade e
              eficiência em cada serviço prestado.
            </p>
            <p className="text-lg mt-4 text-justify">
              Na Corrêa 83, acreditamos que um bom atendimento faz toda a
              diferença. Trabalhamos com honestidade, atenção aos detalhes e um
              serviço personalizado para cada cliente, seja para uma simples
              revisão, troca de óleo, ou para reparos mais complexos. Estamos
              aqui para cuidar do seu veículo com o respeito e a seriedade que
              ele merece.
            </p>

            {/* Faixa amarela estilo pista de corrida */}
          </div>
        </motion.div>
        {/* FAIXA 1 */}
        <div className="absolute top-[48%] left-0 w-full h-10 bg-yellow-500 rotate-[-8deg] opacity-70 z-0" />

        {/* FAIXA 2 */}
        <div className="absolute top-[55%] left-0 w-full h-10 bg-yellow-500 rotate-[-8deg] opacity-70 z-0" />
      </section>
      <div className="w-full h-5 bg-yellow-500"></div>
    </div>
  );
};

export default SobreNos;
