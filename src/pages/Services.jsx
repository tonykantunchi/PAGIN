// src/pages/Services.jsx
import { FaUserMd, FaComments, FaPhoneAlt, FaUser, FaUserFriends, FaChild, FaClipboardCheck, FaChalkboardTeacher } from "react-icons/fa";

export default function Services() {
  const servicios = [
    {
      icon: <FaClipboardCheck size={40} color="var(--brand)" />,
      titulo: "Test de bienestar",
      descripcion:
        "Cuestionario interactivo que permite identificar el nivel de riesgo emocional de acuerdo con un modelo tipo semáforo.",
    },
    {
      icon: <FaComments size={40} color="var(--brand-green)" />,
      titulo: "Orientación inicial",
      descripcion:
        "Según los resultados del test, recibirás consejos prácticos y sugerencias para el cuidado de tu bienestar emocional.",
    },
    {
      icon: <FaPhoneAlt size={40} color="var(--brand-red)" />,
      titulo: "Derivación profesional",
      descripcion:
        "En casos de riesgo elevado (nivel rojo), se proporcionan contactos y teléfonos de apoyo inmediato, así como la recomendación de buscar ayuda psicológica profesional.",
    },
    {
      icon: <FaUser size={40} color="var(--brand)" />,
      titulo: "Terapia individual",
      descripcion:
        "Sesiones personalizadas para el acompañamiento psicológico en situaciones de estrés, ansiedad, depresión u otros procesos emocionales.",
    },
    {
      icon: <FaUserFriends size={40} color="var(--brand-green)" />,
      titulo: "Terapia de pareja",
      descripcion:
        "Espacios de diálogo y orientación para fortalecer la comunicación, resolver conflictos y mejorar la convivencia en pareja.",
    },
    {
      icon: <FaChild size={40} color="var(--brand-amber)" />,
      titulo: "Psicología infantil",
      descripcion:
        "Atención especializada para niños y niñas, abordando temas de conducta, emociones, aprendizaje y desarrollo.",
    },
    {
      icon: <FaClipboardCheck size={40} color="var(--brand)" />,
      titulo: "Valoraciones psicopedagógicas y de Orientación Vocacional",
      descripcion:
        "Evaluaciones que permiten identificar fortalezas, áreas de oportunidad y acompañar procesos de elección vocacional.",
    },
    {
      icon: <FaChalkboardTeacher size={40} color="var(--brand-green)" />,
      titulo: "Talleres o capacitaciones en el área de psicología",
      descripcion:
        "Actividades grupales diseñadas para promover el bienestar, la resiliencia, la comunicación efectiva y otras habilidades en el ámbito personal o institucional.",
    },
  ];

  return (
    <main className="container" style={{ padding: "4rem 1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Servicios</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {servicios.map((servicio, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            }}
          >
            {servicio.icon}
            <h2 style={{ marginTop: "1rem" }}>{servicio.titulo}</h2>
            <p style={{ marginTop: "0.5rem", color: "#555" }}>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
