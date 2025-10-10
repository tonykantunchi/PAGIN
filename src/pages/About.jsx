import foto from "../assets/FOTO PERSONAL.jpg";

export default function About() {
  return (
    <section className="container" style={{ marginTop: "2rem" }}>
      <h1 className="page-title">Sobre mí</h1>

      <div
        className="card about-card"   
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
      
        <div style={{ textAlign: "center" }}>
          <img
            src={foto}
            alt="Foto profesional"
            className="about-photo"   
            style={{
              width: "100%",
              maxWidth: "280px",
              borderRadius: "12px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div>
          <p>
            Soy <strong>psicólogo clínico</strong> con formación especializada en
            sólidos principios científicos y humanistas. Mi experiencia incluye la
            atención a niños, adolescentes y adultos. Mi compromiso es brindar un
            acompañamiento cercano y respetuoso, guiado por la convicción de que cada
            ser humano posee un potencial único de crecimiento y bienestar.
          </p>

          <p style={{ marginTop: "1rem" }}>
            Trabajo desde una perspectiva basada en la{" "}
            <strong>
              ética profesional, la intervención científica y la confidencialidad
            </strong>
            , garantizando un espacio seguro donde cada persona pueda expresarse con
            libertad y confianza.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Datos académicos</h2>
          <ul style={{ marginTop: "0.5rem", lineHeight: "1.8" }}>
            <li><strong>Dra. Psic. Clínica</strong> — N.1054-07-740797</li>
            <li><strong>Mg. Psic. Educativa</strong> — N.1010-09-699765</li>
            <li><strong>Mg. Gestión del Talento Humano</strong> — N.1027-2023-2670999</li>
          </ul>
        </div>
      </div>
    </section>
  );
}