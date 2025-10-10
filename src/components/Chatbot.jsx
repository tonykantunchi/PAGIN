import { useState } from "react";
import questions from "../data/questions";
import { computeRisk } from "../utils/risk";

export default function Chatbot() {
  const [cursor, setCursor] = useState(0);
  const [answers, setAnswers] = useState({});
  const [mensajes, setMensajes] = useState([
    { tipo: "bot", texto: "👋 Hola, soy Ilarri. Estoy aquí para acompañarte. Responde unas preguntas y juntos veremos cómo te encuentras." },
    { tipo: "bot", texto: questions[0].text }
  ]);
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState(null);

  const q = questions[cursor];

  const handleAnswer = (value, textoRespuesta) => {
    const nuevasRespuestas = { ...answers, [q.id]: value };
    setAnswers(nuevasRespuestas);

    const nuevosMensajes = [
      ...mensajes,
      { tipo: "user", texto: textoRespuesta }
    ];

    if (cursor + 1 < questions.length) {
      nuevosMensajes.push({
        tipo: "bot",
        texto: questions[cursor + 1].text
      });
      setCursor(cursor + 1);
    } else {
      const r = computeRisk(nuevasRespuestas);
      setResult(r);
      setFinished(true);
      nuevosMensajes.push({ tipo: "bot", texto: "✅ Hemos terminado, aquí tienes tus resultados:" });
    }

    setMensajes(nuevosMensajes);
  };

  return (
    <div className="chat-container">
      {mensajes.map((m, i) => (
        <div key={i} className={`message ${m.tipo}`}>
          {m.texto}
        </div>
      ))}

      {!finished && (
        <div className="options">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              className="option-btn"
              onClick={() => handleAnswer(idx + 1, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {finished && result && (
        <div className="message bot result">
          <h3>📊 Resultados</h3>
          <p><strong>Nivel:</strong> {result.level}</p>
          <p>{result.suggestion}</p>

          <div
            style={{
              margin: "1rem auto",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor:
                result.avg <= 1 ? "red" :
                result.avg <= 2 ? "orange" :
                result.avg === 3 ? "yellow" :
                "green",
            }}
          ></div>

          {result.avg <= 2 && (
            <button
              className="button danger"
              onClick={() => window.location.href = "tel:8009112000"}
            >
              📞 Contactar apoyo inmediato
            </button>
          )}
        </div>
      )}
    </div>
  );
}
