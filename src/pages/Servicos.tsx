import { motion } from "framer-motion";

function Servicos() {
  const categorias = [
    {
      titulo: "🔧 Mecânica Geral",
      imagem: "motor.jpeg",
      servicos: [
        "Troca de óleo e filtros",
        "Troca da correia dentada",
        "Substituição de velas de ignição",
        "Ajustes e regulagens do motor",
        "Revisão geral do veículo",
        "Troca de fluido de arrefecimento (radiador)",
        "Troca do fluido da direção hidráulica",
        "Troca do fluido de freio",
        "Diagnósticos, medições e testes",
        "Virabrequim",
        "Cabeçote",
        "Bloco do motor",
      ],
    },
    {
      titulo: "⚙️ Sistema de Freios",
      imagem: "sistema-freios.jpg",
      servicos: [
        "Troca de pastilhas de freio",
        "Troca de discos de freio",
        "Revisão de tambor e lonas",
        "Reparo ou troca de cilindros mestre e de roda",
        "Sangria e troca do fluido de freio",
        "Verificação e reparo do ABS",
      ],
    },
    {
      titulo: "🚘 Suspensão e Direção",
      imagem: "mecanica.jpg",
      servicos: [
        "Troca de amortecedores",
        "Substituição de molas",
        "Troca de pivôs, buchas e bandejas",
        "Verificação da caixa de direção",
        "Troca de terminais e barras de direção",
      ],
    },
    {
      titulo: "⚡ Serviços Elétricos",
      imagem: "vds.jpg",
      servicos: [
        "Teste e substituição de bateria",
        "Revisão do sistema de carga (alternador)",
        "Revisão do motor de partida",
        "Instalação de alarmes e travas elétricas",
        "Reparo de sistema de iluminação",
        "Diagnóstico eletrônico com scanner",
      ],
    },
    {
      titulo: "🧯 Sistema de Segurança",
      imagem: "abss.jpeg",
      servicos: [
        "Verificação e manutenção de airbags",
        "Reparos no sistema de ABS",
        "Testes de sensores e módulos de segurança",
      ],
    },
    {
      titulo: "🔥 Injeção e Alimentação",
      imagem: "ygor.jpg",
      servicos: [
        "Limpeza de bicos injetores",
        "Troca de bomba de combustível",
        "Substituição de filtros de combustível",
        "Verificação do corpo de borboleta e TBI",
        "Diagnóstico da sonda lambda",
      ],
    },

    {
      titulo: "🛠️ Outros Serviços",
      imagem: "embreagem.jpg",
      servicos: [
        "Troca de embreagem",
        "Reparo em câmbio manual",
        "Vistoria preventiva para viagens",
        "Inspeção e verificação de pré-compra",
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="absolute top-16 left-6 z-50">
        <a
          href="/"
          className=" text-yellow-400 text-3xl hover:text-yellow-500 transition duration-300"
          title="Voltar para a página inicial"
        >
          ←
        </a>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {categorias.map((categoria, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="space-y-6"
          >
            {/* Imagem da categoria */}
            <img
              src={`src/assets/imagens/${categoria.imagem}`}
              alt={categoria.titulo}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />

            {/* Título da categoria */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-400">
              {categoria.titulo}
            </h2>

            {/* Lista de serviços */}
            <ul className="list-disc list-inside text-lg space-y-1 px-4 sm:px-10">
              {categoria.servicos.map((servico, idx) => (
                <li key={idx}>{servico};</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      {/* Botão para voltar à Home */}
      <div className="mt-16 flex justify-center">
        <a
          href="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          ← Voltar à Página Inicial
        </a>
      </div>
    </div>
  );
}

export default Servicos;
