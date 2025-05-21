function Footer() {
  return (
    <div className="w-full bg-black text-white">
      {/* Linha de separação no topo */}
      <div className="border-t border-white w-full" />

      <div className="flex justify-center items-center py-4">
        <div className="max-w-[1440px] w-full flex justify-center px-4 sm:px-6">
          {/* Logo e texto lado a lado no desktop, empilhados no mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-4 text-center sm:text-left">
            <img
              src="/imagens/2.png"
              alt="Logo Corrêa"
              className="h-10 sm:h-14"
            />
            <h1 className="text-xs sm:text-sm md:text-base">
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
