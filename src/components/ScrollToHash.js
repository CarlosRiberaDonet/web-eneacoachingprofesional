// src/components/ScrollToHash.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Desplazamiento a la parte superior en rutas sin hash
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Ejecutar el desplazamiento tan pronto como cambie la ubicación
    scrollToElement();
  }, [location]);

  return null;
};

export default ScrollToHash;
