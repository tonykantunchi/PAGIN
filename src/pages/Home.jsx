import { Link } from "react-router-dom";
import fondo from "../assets/fondo.png";

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          padding: "6rem 2rem",
          color: "white",
          textAlign: "center",
          position: "relative",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          marginBottom: "3rem",
        }}
      >
       
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
            borderRadius: "20px",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Ilarri — Decide resplandecer
          </h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem", lineHeight: "1.8" }}>
            Plataforma de acompañamiento emocional inicial, donde podrás realizar un test de
            bienestar y recibir orientación de acuerdo con tu estado.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              to="/test"
              className="button"
              style={{
                background: "#007bff",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              Iniciar test
            </Link>
            <Link
              to="/about"
              className="button"
              style={{
                background: "#28a745",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              Conocer a la profesional
            </Link>
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Bienestar a tu alcance</h2>
        <p style={{ fontSize: "1.1rem", color: "#444", maxWidth: "700px", margin: "0 auto" }}>
          Ilarri es un espacio diseñado para acompañarte en tu proceso emocional,
          brindándote herramientas y orientación inicial de manera profesional,
          empática y accesible.
        </p>
        <div
          style={{
            marginTop: "2rem",
            background: "#fff",
            borderRadius: "12px",
            padding: "1.5rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>¿Por qué Ilarri?</h3>
          <p style={{ color: "#555" }}>
            Porque significa <strong>"amanecer"</strong> o <strong>"resplandecer"</strong>. 
            Nuestro objetivo es ayudarte a encontrar luz en los momentos difíciles.
          </p>
        </div>
      </section>
    </>
  );
}
