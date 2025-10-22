import {
  FaComments,
  FaPhoneAlt,
  FaUser,
  FaUserFriends,
  FaChild,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaLaptop,
  FaCreditCard,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Services() {
  const servicios = [
    {
      icon: <FaClipboardCheck size={42} className="text-blue-600" />,
      titulo: "Test de bienestar",
      descripcion:
        "Cuestionario interactivo que permite identificar el nivel de riesgo emocional de acuerdo con un modelo tipo semáforo.",
    },
    {
      icon: <FaComments size={42} className="text-green-600" />,
      titulo: "Orientación inicial",
      descripcion:
        "Según los resultados del test, recibirás consejos prácticos y sugerencias para el cuidado de tu bienestar emocional.",
    },
    {
      icon: <FaPhoneAlt size={42} className="text-red-600" />,
      titulo: "Derivación profesional",
      descripcion:
        "En casos de riesgo elevado (nivel rojo-naranja), se proporcionan contactos y teléfonos de apoyo inmediato, así como la recomendación de buscar ayuda psicológica profesional.",
    },
    {
      icon: <FaUser size={42} className="text-blue-600" />,
      titulo: "Terapia individual",
      descripcion:
        "Sesiones personalizadas para el acompañamiento psicológico en situaciones de estrés, ansiedad, depresión u otros procesos emocionales.",
    },
    {
      icon: <FaUserFriends size={42} className="text-green-600" />,
      titulo: "Terapia de pareja",
      descripcion:
        "Espacios de diálogo y orientación para fortalecer la comunicación, resolver conflictos y mejorar la convivencia en pareja.",
    },
    {
      icon: <FaChild size={42} className="text-amber-500" />,
      titulo: "Psicología infantil",
      descripcion:
        "Atención especializada para niños y niñas, abordando temas de conducta, emociones, aprendizaje y desarrollo.",
    },
    {
      icon: <FaClipboardCheck size={42} className="text-blue-600" />,
      titulo: "Valoraciones psicopedagógicas y de orientación vocacional",
      descripcion:
        "Evaluaciones que permiten identificar fortalezas, áreas de oportunidad y acompañar procesos de elección vocacional.",
    },
    {
      icon: <FaChalkboardTeacher size={42} className="text-green-600" />,
      titulo: "Talleres o capacitaciones en psicología",
      descripcion:
        "Actividades grupales diseñadas para promover el bienestar, la resiliencia, la comunicación efectiva y otras habilidades personales e institucionales.",
    },
  ];

  return (
    <main className="px-5 sm:px-6 md:px-10 py-12 sm:py-16 bg-transparent min-h-screen font-sans">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-10 sm:mb-14">
        Servicios
      </h1>
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-[#fae8d2] border border-[#e0c2a5] rounded-2xl shadow-md hover:shadow-xl p-5 sm:p-6 text-center transition-transform transform hover:-translate-y-2 duration-300"
          >
            <div className="flex justify-center mb-3 sm:mb-4">{servicio.icon}</div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#0f172a] mb-2">
              {servicio.titulo}
            </h2>
            <p className="text-[#0f172a]/80 leading-relaxed text-sm sm:text-base">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-[#fae8d2] border border-[#e0c2a5] rounded-3xl shadow-lg p-8 sm:p-10 max-w-4xl mx-auto text-center hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center justify-center gap-3 text-[#0f172a]">
          <FaLaptop className="text-[#e6644a]" />
          Opciones de modalidad, pago y ubicación
          <FaCreditCard className="text-[#e6644a]" />
        </h2>

        <div className="space-y-5 text-[#2d2d2d] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          <p>
            Las sesiones pueden realizarse de manera{" "}
            presencial u online a través de plataformas como{" "}
            Zoom, Google Meet y otras opciones seguras de videollamada.
          </p>

          <p>
            Además, contamos con pago en línea mediante{" "}
            PayPal, tarjeta o{" "}
            transferencia bancaria, brindándote comodidad y seguridad.
          </p>

          <p className="flex items-center justify-center gap-2 mt-6 text-[#0f172a] font-medium">
            <FaMapMarkerAlt className="text-[#e6644a]" />
            <span>
              <strong>Ubicación:</strong> Tonsupa, Ecuador
            </span>
          </p>
          <div className="mt-5 rounded-2xl overflow-hidden shadow-md border border-[#e0c2a5]">
            <iframe
              title="Ubicación en Tonsupa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.949722029963!2d-79.795!3d0.864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902390b4321b0d8f%3A0x5e19cb0e6b3b80cf!2sTonsupa%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
