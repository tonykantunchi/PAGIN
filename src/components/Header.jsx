import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

const NavLink = ({ to, children, onClick }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        color: active ? "var(--brand)" : "var(--text)",
        fontWeight: active ? 700 : 500,
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTestClick = (e) => {
    e.preventDefault();
    navigate("/consent");
    setMenuOpen(false); 
  };

  return (
    <header
      style={{
        background: "linear-gradient(90deg, #ff9800, #f44336)", 
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "0.5rem 1rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ height: "70px" }} />
        </Link>

        <nav
          className="nav-desktop"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/about">Sobre mí</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
          <NavLink to="/consent">Consentimiento</NavLink>
        </nav>

        <button
          onClick={handleTestClick}
          className="button primary"
          style={{
            border: "none",
            cursor: "pointer",
            padding: "0.6rem 1.2rem",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          Iniciar test
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div
          className="nav-mobile"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
            background: "rgba(255,255,255,0.95)",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>Sobre mí</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Servicios</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
          <NavLink to="/consent" onClick={() => setMenuOpen(false)}>Consentimiento</NavLink>
        </div>
      )}
    </header>
  );
}
