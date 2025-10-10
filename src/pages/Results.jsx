// src/pages/Results.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Results() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("lastResult");
    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, []);

  if (!result) {
    return (
      <div className="card" style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
        <p>No hay resultados disponibles. Realiza el test primero.</p>
        <Link to="/test" className="button">Ir al test</Link>
      </div>
    );
  }

  const colorMap = {
    red: "#ef4444",      
    yellow: "#facc15",   
    green: "#22c55e"     
  };

  return (
    <div className="card" style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Resultado del Test
      </h2>

      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: colorMap[result.color],
          margin: "0 auto 1rem auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)"
        }}
      />

      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: ".5rem" }}>
        Nivel: {result.level}
      </h3>

      <p style={{ marginBottom: "1.5rem", color: "#374151" }}>
        {result.reason}
      </p>

      <Link to="/test" className="button">
        Volver a realizar el test
      </Link>
    </div>
  );
}