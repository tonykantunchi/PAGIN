import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Consent() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccept = () => {
    if (!accepted) {
      alert("Debes aceptar los términos y condiciones antes de continuar.");
      return;
    }

    sessionStorage.setItem(
      "consentAccepted",
      JSON.stringify({ t: Date.now() })
    );

    navigate("/real-test", { replace: true, state: { fromConsent: true } });
  };

  return (
    <main style={{ padding: "4rem 1rem", flex: 1, minHeight: "80vh" }}>
      <h1>Consentimiento & Privacidad</h1>

      <div
        style={{
          padding: "1.5rem",
          marginTop: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        {location.state?.reason === "need-consent" && (
          <p style={{ color: "#b91c1c", fontWeight: 600 }}>
            Debes aceptar el consentimiento antes de realizar el test.
          </p>
        )}

        <p>
          Este sitio web no sustituye una atención psicológica profesional. El
          propósito del test es brindar una primera orientación gratuita para
          identificar el nivel de riesgo emocional.
        </p>
        <p>
          Tus respuestas serán utilizadas únicamente para el cálculo del
          resultado del test y no se almacenarán con fines distintos a la
          orientación inmediata.
        </p>
        <p>
          Al hacer uso de la página, aceptas que Ilarri es una herramienta de
          acompañamiento inicial y no un servicio clínico definitivo.
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <label
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={handleAccept}
            style={{
              background: accepted ? "#007bff" : "#ccc",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
              border: "none",
              cursor: accepted ? "pointer" : "not-allowed",
            }}
          >
            Iniciar test
          </button>
        </div>
      </div>
    </main>
  );
}
