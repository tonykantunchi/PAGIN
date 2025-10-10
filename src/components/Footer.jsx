export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #a9943dff, #b77e59ff, #ac2929ff)", 
        color: "#fff",
        padding: "3rem 1rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <strong>Ilarri</strong> — Decide resplandecer
        <br />
        © 2025 Ilarri. Todos los derechos reservados.
        <br />
        <a href="/consent" style={{ color: "#ffe082" }}>
          Consentimiento & privacidad
        </a>{" "}
        ·{" "}
        <a href="/test" style={{ color: "#ffe082" }}>
          Test de bienestar
        </a>
      </div>
    </footer>
  );
}
