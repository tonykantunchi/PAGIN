import { Link } from "react-router-dom";
import fondo from "../assets/IMG1.jpg";
import sol from "../assets/sol.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <section
          className="relative overflow-hidden rounded-3xl shadow-2xl border border-[#e8cdbb]/60 text-center text-white"
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60 rounded-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 sm:py-24">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-lg">
              Ilarri — Decide resplandecer
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/95">
              Plataforma de acompañamiento emocional inicial donde podrás realizar un test de 
              bienestar y recibir orientación de acuerdo con tu estado. Además, se ofrecen
              intervenciones psicológicas en el área educativa y clínica, así como investigación en
              psicología, valoraciones psicopedagógicas y orientación vocacional.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/test"
                className="rounded-full px-6 py-3 bg-[#2251e7] hover:bg-[#1f46c7] text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Iniciar test
              </Link>
              <Link
                to="/about"
                className="rounded-full px-6 py-3 bg-[#1f9d43] hover:bg-[#178a39] text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                Conocer a la profesional
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[#fae8d2] rounded-3xl shadow-lg border border-[#e0c2a5] mt-12 p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
            Bienestar a tu alcance
          </h2>
          <p className="text-[#0f172a]/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Ilarri es un espacio diseñado para acompañarte en tu proceso emocional,
            brindándote herramientas y orientación inicial de manera profesional,
            empática y accesible.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-left max-w-md">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                ¿Por qué Ilarri?
              </h3>
              <p className="text-[#0f172a]/80">
               Ilarri significa “amanecer” o “resplandecer”, símbolos del inicio de un nuevo día y 
               de la esperanza que vuelve a brillar. Representa la idea de renacer, de encontrar luz 
               incluso en los momentos de oscuridad.
               Nuestro objetivo es acompañarte en ese proceso, ayudándote a redescubrir tu bienestar 
               emocional y personal.
              </p>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-radial from-orange-300/40 via-orange-100/10 to-transparent blur-3xl animate-pulse-slow" />
              <img
                src={sol}
                alt="Amanecer"
                className="w-56 h-auto object-contain drop-shadow-xl rounded-2xl transition-transform duration-500 hover:scale-105 relative z-10"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
