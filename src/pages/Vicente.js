import React from 'react';
import '../styles/Vicente.css';

const Vicente = () => {
    return (
        <div className="vicente-container">     
            <h1>Sobre mí: Un viaje de transformación y propósito</h1>
            <img src="/images/vicente.png" alt="Vicente Montolío" className="vicente-image" />
            <p>
                ¿Te suena eso que llaman "crisis de los 40"? Yo sé bien lo que es porque la viví en primera persona. 
                Pero lejos de ser un obstáculo, se convirtió en la puerta hacia mi verdadero propósito: acompañar a 
                personas y empresas a transformar su malestar en crecimiento, convirtiendo su vida en una auténtica obra de arte.
            </p>
            
            <h2>🌿 Del sufrimiento al despertar</h2>
            <p>
                Tras atravesar un trastorno ansioso-depresivo, sin ganas de vivir, me sumergí en el mundo del desarrollo personal 
                y psicoespiritual. Buscaba respuestas para encontrar sentido a mi vida, hasta que, en un retiro espiritual, experimenté 
                algo que no se puede explicar con palabras. Conecté con un profundo amor hacia mí mismo, hacia los demás y hacia la vida. 
                Y, con una certeza indescriptible, entendí mi misión:
            </p>
            <blockquote>
                💡 "Había nacido para acompañar a quienes atraviesan una crisis, ayudándoles a trascender su sufrimiento, 
                comprendiéndolos y aceptándolos con autenticidad, amor y compasión."
            </blockquote>

            <h2>🔄 El camino del ego a la esencia</h2>
            <p>
                La transformación no es lineal; es un vaivén entre ego y esencia. A veces me descentro, me estreso y cometo errores. 
                Pero en lugar de castigarnos, podemos aprender a mirar nuestra sombra con valentía, aceptarla y trascenderla, 
                reconectando con nuestra verdadera naturaleza.
            </p>

            <h2>📚 Formación y herramientas para el cambio</h2>
            <p>
                Desde 2010, me he formado en Pedagogía, Conductas Adictivas, Coaching y Liderazgo, acompañando a personas y equipos 
                a desarrollar su máximo potencial. Pero había algo que me faltaba... Entonces, a través de mi hermana y un libro de 
                Borja Vilaseca, descubrí el Eneagrama de la Personalidad, una herramienta que me cambió la vida. Me formé en la Escuela 
                Internacional de Eneagrama Aplicado con Gema de la Rosa y Gonzalo Morán, y profundicé en la obra de mi gran referente 
                espiritual, Claudio Naranjo.
            </p>

            <h2>✨ Todo pasa por algo. Di sí a la vida.</h2>
            <p>
                Si estás en un momento de cambio, quiero acompañarte en este viaje de autoconocimiento y transformación. 
                Contacta conmigo y empecemos juntos.
            </p>
            <div className="button-container">
            <button
                className="contact-button"
                onClick={() => {
                window.open("https://wa.me/34696667110", "_blank");
                }}
            >
                CONTACTA AQUÍ
            </button>
            </div>
        </div>
    );
};

export default Vicente;