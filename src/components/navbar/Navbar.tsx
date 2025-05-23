import { Link } from "react-router-dom";

function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function gtag_report_conversion(arg0: string): void {
    throw new Error("Function not implemented.");
  }

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
            href="/"
            className="font-montserrat text-base font-bold hover:text-[#ead533]"
          >
            Home
          </a>
          <a
            href="/sobrenos"
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
            onClick={() =>
              gtag_report_conversion("https://wa.me/5511992402147")
            }
            className="bg-amber-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-amber-500 transition duration-200 text-sm"
          >
            Agende nossos serviços
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
