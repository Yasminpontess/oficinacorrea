import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="w-full bg-black text-white flex justify-center items-center py-10">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 px-6">
        {/* Logo e descrição */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center">
          <img
            src="/imagens/logo oficial.jpg"
            alt="Logo Corrêa"
            className="h-30 mb-4"
          />
          <p className="text-sm text-amber-400 font-bold max-w-sm">
            Oficina Corrêa 83 <br />
            Qualidade, confiança e tecnologia para manter seu carro sempre em
            movimento. Conte com uma equipe especializada e atendimento
            personalizado!
          </p>
        </div>

        {/* Compania */}
        <div className="w-full md:w-1/3 flex justify-center text-sm">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">Companhia</h3>
            <a
              href="/Sobre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Sobre nós
            </a>
            <a
              href="https://linktr.ee/linkedingrupo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Contatos
            </a>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h3 className="font-bold text-xl mb-2">Social Media Link</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/oficina_correa_83?igsh=MTVya2UweWMyaHR6bQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              <InstagramLogo size={30} weight="bold" />
            </a>
            <a
              href="https://wa.me/5511992402147"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              <WhatsappLogo size={30} weight="bold" />
            </a>
            <a
              href="https://www.facebook.com/share/16A4EAKAVd/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              <FacebookLogo size={30} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
