export default function Footer() {
  return (
    <footer className="bg-[#0b1b34] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-3">
        <p className="text-lg font-semibold text-white">
          Ilarri — Decide resplandecer
        </p>
        <p className="text-sm opacity-80">
          © 2025 Ilarri. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/consent" className="hover:text-white transition">
            Privacidad
          </a>
          <a href="/test" className="hover:text-white transition">
            Test de bienestar
          </a>
        </div>
      </div>
    </footer>
  );
}
