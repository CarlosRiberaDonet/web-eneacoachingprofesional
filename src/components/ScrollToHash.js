import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          const headerOffset = 0; // Ajusta si tienes un header fijo
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        // Si no hay hash, hacer scroll hacia arriba
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };

    // Espera un pequeño intervalo para asegurarse de que el DOM esté completamente cargado
    setTimeout(scrollToElement, 100);
  }, [location]);

  return null;
};

export default ScrollToHash;
