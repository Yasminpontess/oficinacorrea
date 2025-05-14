import { Button } from "@/components/ui/button.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Instagram, PhoneCall, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import CarrosselMarcas from "@/components/carrosselmarcas/CarrosselMarcas";

function Home() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const avaliacoes = [
    "/imagens/avaliacao1.png",
    "/imagens/avaliacao2.png",
    "/imagens/avaliacao3.png",
    "/imagens/avaliacao4.png",
    "/imagens/avaliacao5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % avaliacoes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-black overflow-x-hidden">
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-6"
        style={{
          backgroundImage: "url('/imagens/mustang6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gray-950/70 z-0"></div>
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 drop-shadow-lg tracking-wide text-center">
            <span style={{ textShadow: "2px 2px 5px black" }}>
              OFICINA CORRÊA 83
            </span>
          </h1>
          <div className="my-4 border-t-4 border-white w-3/4 mx-auto"></div>
          <p
            className="text-lg sm:text-xl font-bold md:text-2xl lg:text-3xl text-yellow-400 tracking-widest"
            style={{ textShadow: "1px 1px 4px black" }}
          >
            AUTO ELÉTRICO, INJEÇÃO ELETRÔNICA
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-24 bg-yellow-500 z-0"
          style={{ clipPath: "polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </section>
      <div className="w-screen flex flex-col items-center bg-black">
        <div className="w-full flex justify-center items-center mt-24 px-4 mb-12mt-24 mb-24 relative z-10">
          <div className="bg-neutral-600/30 backdrop-blur-md p-10 rounded-xl z-5 max-w-2xl w-full border border-white/10 shadow-lg text-white text-center">
            <h1 className="text-5xl font-bold">Manutenção Automotiva</h1>
            <p className="text-lg mt-4">
              Serviços especializados para manter seu carro sempre novo
            </p>
            <a
              href="https://wa.me/5511992402147"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-yellow-500 text-black px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Agendar Serviço
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full bg-black text-white py-20">
          <h2 className="text-3xl font-bold text-center">
            NOSSAS ESPECIALIDADES
          </h2>
          <div className="flex justify-center mt-2 ">
            <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
            <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
            <div className="w-10 h-2 bg-yellow-500 mx-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              "Auto Elétrico",
              "Air-bag",
              "Suspensão",
              "Sistema de Freios",
              "Embreagem",
              "ABS",
              "Mecânica em Geral",
              "Diagnósticos e Testes",
            ].map((titulo, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={`/imagens/${titulo
                    .toLowerCase()
                    .replace(/ /g, "_")}.jpg`}
                  alt={titulo}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{titulo}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/servicos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block  text-black px-6 py-2 bg-yellow-500 hover:bg-yellow-600  font-bold  rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Nossos Serviço
            </a>
          </div>
        </div>

        {/* Faixa amarela */}
        <div
          className="w-full h-24 bg-yellow-500"
          style={{ clipPath: "polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
      <div>
        {/* Outros componentes da Home */}

        <CarrosselMarcas />

        {/* Outros conteúdos */}
      </div>
      );
      <section
        className="w-full bg-black text-white py-20 relative overflow-hidden"
        ref={ref}
        style={{
          backgroundImage: "url('/imagens/Design sem nome (4).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 relative z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          {/* Imagens */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-start flex-wrap gap-4">
            <img
              src="/imagens/ygor.jpg"
              alt="Oficina"
              className="rounded-lg w-50 h-64 object-cover shadow-lg -mt-4"
            />
            <img
              src="/imagens/vds.jpg"
              alt="Carros na oficina"
              className="rounded-lg w-50 h-64 object-cover shadow-lg mt-6"
            />
          </div>

          {/* Texto */}
          <div
            id="quemsomos"
            className="w-full md:w-1/2 text-left px-2 md:px-4 py-6"
          >
            <h2 className="text-3xl font-bold text-white text-center md:text-left">
              QUEM SOMOS
            </h2>

            <div className="flex justify-center md:justify-start items-center mt-4 mb-6">
              <div className="w-10 h-2 bg-yellow-500 mr-2 hover:bg-yellow-600 transition-all duration-300"></div>
              <div className="w-10 h-2 bg-yellow-500 mr-2 hover:bg-yellow-600 transition-all duration-300"></div>
              <div className="w-10 h-2 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300"></div>
            </div>

            <p className="text-lg mt-4 text-justify">
              Nossa equipe é formada por mecânicos altamente qualificados,
              prontos para diagnosticar e solucionar qualquer problema no seu
              veículo, garantindo segurança e desempenho. Utilizamos tecnologia
              de ponta e peças de alta qualidade para assegurar a satisfação e a
              durabilidade dos reparos.
            </p>
            <p className="text-lg mt-4 text-justify">
              Na Oficina Corrêa 83, acreditamos que um bom atendimento faz toda
              a diferença. Por isso, trabalhamos com honestidade, qualidade e um
              serviço personalizado para cada cliente. Seja para uma revisão
              preventiva, troca de óleo, freios, suspensão ou reparos mais
              complexos, estamos aqui para ajudar!
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-lg">
                Saiba Mais
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
      <div className="w-full h-5 bg-yellow-500"></div>
      <section className="w-full bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">AVALIAÇÕES DOS CLIENTES</h2>
          <div className="relative w-full flex justify-center items-center">
            <button
              onClick={() =>
                setIndex((index - 1 + avaliacoes.length) % avaliacoes.length)
              }
              className="absolute left-[-60px]  text-black px-4 py-2 rounded-lg"
            >
              ◀
            </button>
            <img
              src={avaliacoes[index]}
              alt={`Avaliação ${index + 1}`}
              className="rounded-lg shadow-lg max-h-[500px] object-contain transition-all duration-500"
            />
            <button
              onClick={() => setIndex((index + 1) % avaliacoes.length)}
              className="absolute right-[-60px]  text-black px-4 py-2 rounded-lg"
            >
              ▶
            </button>
          </div>
          <a
            href="https://www.google.com/search?sca_esv=896bc82726dbc1e3&hl=pt-BR&sxsrf=AHTn8zpIm_5iaR80p5TqZXBiCwNSHzd-cQ:1746729938580&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzcTeu0mY3xc1n77kYEL_MTtMPnyBXCNqdxt61Zb1j-MNJmp5yXXkFDvkc5kYRKocW56EMNyBvgFx3kFrGizrvieMlk3mzpjxJA5NRZqoD1gW-vT1qIhK0QK97oBGV8YuA8gWf78JYcD-ki5Wn9KNlU1exS06MHOMrHlGQNivnAGigxgd_YF38638IH4KYNj6pi4TrOrwQYIeok9i8m6DSHfygvui&q=Oficina+Corr%C3%AAa+83+Auto+El%C3%A9trico,+Inje%C3%A7%C3%A3o+Eletr%C3%B4nica,+ABS,+Diagn%C3%B3stico,+Mec%C3%A2nica+Geral.+Coment%C3%A1rios&sa=X&ved=2ahUKEwiTyYeMxJSNAxW-lZUCHQC0E4wQ0bkNegQIIhAD&biw=1536&bih=730&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block   bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Ver todas as avaliações
          </a>
        </div>
      </section>
      <div className="w-full h-5 bg-yellow-500"></div>
      <section
        className="w-full h-screen flex flex-col justify-center items-center text-white text-center p-6 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagens/mecanica.jpg')",
        }}
      >
        <div className="bg-black/40 backdrop-blur-md p-10 rounded-lg text-white max-w-2xl w-full">
          <h2 className="text-4xl font-bold">PRECISA DE AJUDA?</h2>
          <p className="text-lg mt-2 font-semibold">
            Fale com um de nossos especialistas
          </p>
          <p className="mt-4">
            Se você tem alguma dúvida sobre os nossos serviços, entre em contato
            por telefone ou WhatsApp! Estamos prontos para atender e buscar as
            melhores soluções para o seu veículo.
          </p>
          <a
            href="https://wa.me/5511992402147"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Agende Pelo WhatsApp
          </a>
        </div>
      </section>
      <div
        className="w-full h-24 bg-yellow-500"
        style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 0%, 100% 0%)" }}
      ></div>
      <div className="bg-black py-10 px-4 text-center ">
        <h2 className="text-2xl text-amber-50 font-bold mb-2">
          Siga a gente nas redes sociais!
        </h2>
        <p className="text-white mb-6">
          Acompanhe nosso trabalho e novidades pelo Instagram.
        </p>

        {/* Ícones de redes sociais */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/oficina_correa_83?igsh=MTVya2UweWMyaHR6bQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.facebook.com/seupagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              alt="Facebook"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Feed do Instagram embutido */}
        <div className="flex justify-center">
          <img src="/imagens/instagram.jpg" alt="feed" className=" h-100" />
        </div>
      </div>
      <div
        className="w-full h-24 bg-yellow-500"
        style={{ clipPath: "polygon(0% 0%, 50% 50%, 100% 100%, 0% 100%)" }}
      ></div>
      <section className="w-full bg-black text-white py-20 flex flex-col md:flex-row items-center justify-center px-10">
        {/* Mapa ocupando a metade direita */}
        <div className="w-full md:w-4/12 h-96 md:max-h-11/12">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.526420056375!2d-46.9381131!3d-23.6037464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf07b47330ab5f%3A0xb0b9ccb89fa4dfa8!2sOficina%20Corr%C3%AAa%2083!5e0!3m2!1sen!2sbr!4v1712030400000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 bg-black p-10 rounded-lg text-left text-lg font-medium">
          <h2 className="text-3xl font-bold mb-4">Onde Estamos</h2>
          <div className="border-l-4 text-white pl-10 space-y-2">
            <p className="flex items-center gap-2">
              <MapPin className="text-yellow-500" />{" "}
              <strong>
                R. Aratiba, 56 - Granja Carolina, Cotia - SP, 06700-193
              </strong>
            </p>
            <p className="flex items-center gap-2">
              <Instagram className="text-yellow-500" />
              <a
                href="https://www.instagram.com/oficina_correa_83/"
                className="text-white hover:text-amber-400"
              >
                <strong>oficina_correa_83</strong>
              </a>
            </p>
            <p className="flex items-center gap-2">
              <PhoneCall className="text-yellow-500" />
              <a
                href="tel:+5511992402147"
                className="text-white hover:text-amber-400"
              >
                <strong>11 99240-2147</strong>
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="text-yellow-500" />
              <a
                href="https://wa.me/5511992402147"
                className="text-white hover:text-amber-400"
              >
                <strong>11 9 9240-2147</strong>
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-5 bg-yellow-500"></div>
    </div>
  );
}

export default Home;
