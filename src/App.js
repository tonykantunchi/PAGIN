import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Consent from "./pages/Consent";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";

import Results from "./pages/Results"; // ✅ NUEVO


import "./styles.css";

function ProtectedRoute({ children }) {
  const location = useLocation();

  const raw = sessionStorage.getItem("consentAccepted");
  let validByStorage = false;
  if (raw) {
    try {
      const { t } = JSON.parse(raw); 
      const MAX_AGE = 1000 * 60 * 60 * 2;
      if (Date.now() - Number(t) < MAX_AGE) validByStorage = true;
    } catch {
      
      validByStorage = false;
    }
  }

  const validByState = location.state?.fromConsent === true;

  if (!validByStorage && !validByState) {
    
    return (
      <Navigate
        to="/consent"
        replace
        state={{ reason: "need-consent", from: location.pathname }}
      />
    );
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consent" element={<Consent />} />

    
          <Route path="/test" element={<Navigate to="/consent" replace />} />

        
          <Route
            path="/real-test"
            element={
              <ProtectedRoute>
                <Test />
              </ProtectedRoute>
            }
          />
          {/* ✅ NUEVA RUTA PARA RESULTADOS */}
  <Route path="/results" element={<Results />} />

  <Route path="*" element={<NotFound />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}