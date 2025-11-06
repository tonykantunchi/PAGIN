import foto from "../assets/FOTO PERSONAL.jpg";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 font-sans">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-10 sm:mb-12">
        Sobre mí
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 bg-[#fae8d2] border border-[#e0c2a5] p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg items-start">
        <div className="flex justify-center">
          <img
            src={foto}
            alt="Foto profesional"
            className="w-52 sm:w-64 md:w-full max-w-xs rounded-2xl shadow-md object-cover"
          />
        </div>
        <div className="md:col-span-2 space-y-5 text-[#0f172a]/90 leading-relaxed text-justify text-sm sm:text-base">
          <p>
            Soy psicólogo clínico con formación
            especializada en sólidos principios científicos y humanistas. Mi experiencia incluye la
            atención a niños, adolescentes y adultos. Mi compromiso es brindar un acompañamiento
            cercano y respetuoso, guiado por la convicción de que cada ser humano posee un potencial
            único de crecimiento y bienestar.
          </p>
          <p>
            Trabajo desde una perspectiva basada en la{" "}
            ética profesional, la intervención científica y la confidencialidad, 
            garantizando un espacio seguro donde cada persona pueda expresarse con libertad y
            confianza.
          </p>

          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f172a] mb-3">
              Datos académicos
            </h2>
            <ul className="space-y-2 text-[#0f172a]/90 text-sm sm:text-base">
              <li>
                <strong>Dra. Psic. Clínica</strong> — N.1054-07-740797
              </li>
              <li>
                <strong>Mg. Psic. Educativa</strong> — N.1010-09-699765
              </li>
              <li>
                <strong>Mg. Gestión del Talento Humano</strong> — N.1027-2023-2670999
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
