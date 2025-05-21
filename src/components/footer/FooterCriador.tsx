function Footer() {
  return (
    <div className="w-full bg-black text-white">
      {/* Linha de separação no topo */}
      <div className="border-t border-white w-full" />

      <div className="flex justify-center items-center py-4">
        <div className="max-w-[1440px] w-full flex justify-center px-6">
          {/* Logo e texto lado a lado */}
          <div className="flex flex-row items-center gap-x-4 text-center">
            <img
              src="/imagens/2.png"
              alt="Logo Corrêa"
              className="h-10 md:h-16"
            />
            <h1 className="text-sm md:text-base whitespace-nowrap">
              Oficina Corrêa 83 © Todos os direitos reservados | Desenvolvido
              por Yasmin Pontes - Desenvolvedora Web
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
