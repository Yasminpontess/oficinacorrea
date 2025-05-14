import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <img
          src="/imagens/logo.jpg"
          alt="logo"
          className="h-12 w-auto mb-4 md:mb-0"
        />

        {/* Menu de Navegação */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="#quemsomos"
            className="font-montserrat text-base font-bold hover:text-[#ead533]"
          >
            Sobre nós
          </a>
          <Link
            to="/servicos"
            className="font-montserrat text-base font-bold hover:text-[#ead533]"
          >
            Serviços
          </Link>

          {/* Botão Agendamento */}

          <a
            href="https://wa.me/5511992402147"
            className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition duration-200 text-sm font-semibold"
          >
            Agende nossos serviços
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
