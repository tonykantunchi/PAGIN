// src/pages/Contact.jsx
export default function Contact() {
  return (
    <main className="container" style={{ padding: "4rem 1rem" }}>
      <h1>Contacto</h1>
      <p>
        Si deseas mayor información sobre el proyecto o ponerte en contacto para recibir atención
        profesional, utiliza las siguientes opciones:
      </p>

      
      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <a
          href="https://wa.me/593995663740"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          💬 Contactar por WhatsApp
        </a>
      </div>

      
      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "#f9fafb",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>📞 Teléfonos de apoyo inmediato</h2>
        <p><strong>Línea de la vida (México):</strong> <a href="tel:8009112000">800 911 2000</a></p>
        <p><strong>Teléfono de emergencias:</strong> <a href="tel:911">911</a></p>
      </div>
    </main>
  );
}
