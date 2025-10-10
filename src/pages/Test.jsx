import Chatbot from "../components/Chatbot";

export default function Test() {
  return (
    <section>
      <h1>Test de Bienestar</h1>
      <p>
        Responde las siguientes preguntas para conocer tu nivel de riesgo emocional.
        Al finalizar recibirás un mensaje orientativo y, si es necesario, contactos
        de apoyo inmediato.
      </p>
      <div className="chatbot-container">
        <Chatbot />
      </div>
    </section>
  );
}
