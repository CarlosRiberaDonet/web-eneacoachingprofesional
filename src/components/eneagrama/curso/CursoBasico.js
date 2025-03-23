import React from 'react';
import '../../../styles/eneagrama/cursos/EneagramaEmpresas.css';
import '../../../styles/global/ButtonStyles.css';


const CursoBasico = () => {
    return (
        <div className="section-container">
            <h2>Curso Básico de Eneagrama</h2>
            <p>
                Es una introducción estructurada para profundizar en esta poderosa herramienta de autoconocimiento y desarrollo personal. 
                Su objetivo es ayudar a los participantes a comprender mejor su personalidad, patrones de comportamiento y motivaciones profundas, 
                lo que facilita el crecimiento personal y la mejora en sus relaciones.
            </p>
            
            <h3>Contenido del Curso</h3>
            <ul>
                <li><strong>Sesión 1:</strong> ¿Qué es y para qué sirve el Eneagrama</li>
                <li><strong>Sesión 2:</strong> Los 3 Centros de Inteligencia</li>
                <li><strong>Sesión 3:</strong> Los Eneatipos Emocionales</li>
                <li><strong>Sesión 4:</strong> Los Eneatipos Mentales</li>
                <li><strong>Sesión 5:</strong> Los Eneatipos Viscerales</li>
                <li><strong>Sesión 6:</strong> Los Instintos en el Eneagrama</li>
                <li><strong>Sesión 7:</strong> Trabajando las Virtudes</li>
                <li><strong>Sesión 8:</strong> Las Flechas como Camino de Transformación</li>
                <li><strong>Sesión 9:</strong> Los Eneatipos en Esencia</li>
                <li><strong>Sesión 10:</strong> Revisión y Cierre</li>
            </ul>

            <p>
                Este curso va dirigido a todas aquellas personas interesadas en el autoconocimiento, crecimiento personal, coaching, 
                psicología y liderazgo empresarial. Puedo personalizar este curso a tus intereses, al ámbito de aplicación donde quieras 
                implementarlo y al tiempo que dispongas.
            </p>

            <div className="btn">
                <a href="/contacto">Consultar</a>
            </div>
        </div>
    );
};

export default CursoBasico;
