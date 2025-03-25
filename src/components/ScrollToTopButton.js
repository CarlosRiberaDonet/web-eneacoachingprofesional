// src/components/ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';  // Usamos el icono de la flecha arriba
import '../styles/ScrollToTopButton.css'; 

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Detecta si se hace scroll para mostrar el botón
    const checkScrollTop = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Agrega el evento de scroll para manejar la visibilidad del botón
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    // Función para hacer scroll hacia el principio de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        )
    );
};

export default ScrollToTopButton;
