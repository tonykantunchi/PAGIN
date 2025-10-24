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
      className={`px-3 py-2 rounded-md font-medium transition-all duration-200 ${
        active
          ? "text-[#0f172a] bg-white/70 shadow-sm"
          : "text-[#0f172a]/80 hover:text-[#0f172a] hover:bg-black/5"
      }`}
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
    <header className="relative z-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-3">
        <div className="bg-[#ffe9d1]/95 backdrop-blur border border-[#f0c9a4]/40 rounded-2xl shadow-md px-6 py-3 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-12 sm:h-14" />
            <span className="hidden sm:inline font-semibold text-[#0f172a]">
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-5">
            <nav className="flex gap-2">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/about">Sobre mí</NavLink>
              <NavLink to="/services">Servicios</NavLink>
              <NavLink to="/contact">Contacto</NavLink>
              <NavLink to="/consent">Consentimiento</NavLink>
            </nav>
            <button
              onClick={handleTestClick}
              className="ml-2 bg-[#ea6e4a] hover:bg-[#e5623c] text-white font-semibold rounded-full px-5 py-2 shadow hover:shadow-md transition"
            >
              Iniciar test →
            </button>
          </div>
          <button
            className="md:hidden text-[#0f172a] text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fae8d2] border-t border-white/50 shadow-inner">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2 text-center">
            {[
              ["Inicio", "/"],
              ["Sobre mí", "/about"],
              ["Servicios", "/services"],
              ["Contacto", "/contact"],
              ["Consentimiento", "/consent"],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-[#0f172a]/80 hover:bg-black/5"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={handleTestClick}
              className="w-full rounded-full px-6 py-2 font-semibold text-white bg-[#ea6e4a] hover:bg-[#e5623c] shadow transition"
            >
              Iniciar test →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
