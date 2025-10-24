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
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 font-sans text-[#0f172a]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10">
        Consentimiento & Privacidad
      </h1>

      <div className="bg-[#fae8d2] border border-[#e0c2a5] rounded-2xl shadow-md hover:shadow-lg p-6 sm:p-8 md:p-10 space-y-5 text-sm sm:text-base leading-relaxed transition-all duration-300">
        {location.state?.reason === "need-consent" && (
          <p className="text-red-600 font-semibold text-center">
            Debes aceptar el consentimiento antes de realizar el test.
          </p>
        )}

        <p>
          Este sitio web no sustituye una atención psicológica profesional. El propósito del test es
          brindar una primera orientación gratuita para identificar el nivel de riesgo emocional.
        </p>

        <p>
          Tus respuestas serán utilizadas únicamente para el cálculo del resultado del test y no se
          almacenarán con fines distintos a la orientación inmediata.
        </p>

        <p>
          Al hacer uso de la página, aceptas que <strong>Ilarri</strong> es una herramienta de
          acompañamiento inicial y no un servicio clínico definitivo.
        </p>

        <div className="mt-6">
          <label className="flex flex-col sm:flex-row sm:items-center gap-3 text-base sm:text-lg">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-5 h-5 accent-blue-600 cursor-pointer"
            />
            <span>Acepto los términos y condiciones</span>
          </label>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleAccept}
            className={`w-full sm:w-auto ${
              accepted
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300`}
          >
            Iniciar test
          </button>
        </div>
      </div>
    </main>
  );
}
