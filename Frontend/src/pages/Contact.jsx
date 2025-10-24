export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 font-sans text-[#0f172a]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10">
        Contacto
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed mb-12 max-w-3xl mx-auto text-[#2d2d2d]">
         Si deseas agendar una cita profesional o recibir información
        sobre los servicios psicológicos, puedes comunicarte directamente a través de{" "}
        WhatsApp. <br />
        <br />
        En caso de encontrarte en una{" "}
        situación de crisis emocional o emergencia, te recomendamos
        utilizar los números de apoyo inmediato que aparecen más abajo.
      </p>
      <div className="text-center mb-12">
        <a
          href="https://wa.me/593995663740"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#28a745] to-[#34d058] hover:from-[#22a03a] hover:to-[#2ed066] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
        >
          💬 Contactar por WhatsApp
        </a>
      </div>
      <div className="bg-[#fae8d2] border border-[#e6c8aa] rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 text-center max-w-3xl mx-auto">
        <div className="bg-[#fff6ea] border border-[#f0d7bc] rounded-2xl shadow-md p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-2 text-[#0f172a]">
            <span className="bg-gradient-to-r from-[#e6644a] to-[#f59763] text-transparent bg-clip-text">
              📞
            </span>{" "}
            Teléfonos de apoyo inmediato
          </h2>

          <div className="space-y-3 text-[#2d2d2d] text-sm sm:text-base">
            <p>
              <strong>Línea de la vida (México): </strong>
              <a
                href="tel:8009112000"
                className="text-blue-600 hover:text-blue-700 font-medium underline-offset-2 hover:underline"
              >
                800 911 2000
              </a>
            </p>
            <p>
              <strong>Teléfono de emergencias: </strong>
              <a
                href="tel:911"
                className="text-blue-600 hover:text-blue-700 font-medium underline-offset-2 hover:underline"
              >
                911
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
