import React from 'react';

import '../../styles/eneagrama/Eneagrama.css';

const TiposEneagrama = () => {
    return (
        <div className="section-container">
            <h2>Los 9 Eneatipos: Descubre tu Personalidad Profunda</h2>
            <p>
                Los eneatipos son nueve patrones de personalidad que reflejan distintas formas en que interpretamos y reaccionamos ante el mundo.
                Estos patrones se forman en la infancia, como una respuesta a experiencias emocionales y defensivas.
                Cada eneatipo tiene una pasión dominante y una fijación mental que afectan cómo percibimos la vida y cómo nos comportamos.
            </p>

            <p>
                Los eneatipos no son etiquetas fijas, sino mapas que nos ayudan a comprender nuestras motivaciones internas y cómo nos relacionamos
                con el entorno. Claudio Naranjo, reconocido experto en el tema, estudió profundamente estos patrones y los vinculó con diferentes
                trastornos de personalidad desde la psicología clínica. Conocer nuestro eneatipo puede ser el primer paso para lograr una mayor
                autenticidad y libertad personal.
            </p>

            <p>
                Aunque los 9 eneatipos ofrecen una visión útil, la naturaleza humana es compleja. Naranjo, por eso, subdividió cada eneatipo en tres subtipos
                (según nuestros instintos: conservación, social y sexual), lo que permite una mayor comprensión de las dinámicas de cada persona.
                Esta es una de las razones por las que cada ser humano, incluso dentro del mismo eneatipo, es único.
            </p>

            <h3>A continuación, te presento una breve descripción de los 9 eneatipos:</h3>

            <div className="eneatipo">
                <h4>Eneatipo 1: Perfección y Justicia</h4>
                <p>El Eneatipo 1 busca la perfección y la justicia, tanto en sí mismo como en los demás. Son personas exigentes, muy morales y con un fuerte deseo de corregir el mundo. Su principal miedo es cometer errores, lo que puede llevarlos a reprimir su ira y volverse tensos. A medida que evolucionan, aprenden a relajarse y aceptar la vida con serenidad.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 2: Indispensable y Amado</h4>
                <p>El Eneatipo 2 necesita sentirse indispensable y amado. Ofrecen su afecto para recibirlo a cambio, sin reconocer su propia necesidad. A menudo se desgastan ayudando a los demás y pueden volverse invasivos. Su crecimiento implica aprender a amarse a sí mismos y ayudar de forma más equilibrada y genuina.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 3: Imagen y Éxito</h4>
                <p>El Eneatipo 3 está obsesionado con la imagen y el éxito. Se adapta a las expectativas externas para ser admirado, evitando mostrarse vulnerable. Su miedo al fracaso y la falta de reconocimiento los impulsa a ser competitivos y eficientes. Su evolución implica conectar con su ser auténtico, sin depender de la aprobación ajena.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 4: Singularidad y Melancolía</h4>
                <p>El Eneatipo 4 se siente único y diferente. Emocionalmente intensos, a menudo oscilan entre la melancolía y la idealización. Su principal desafío es aceptar la realidad tal y como es, sin compararse ni idealizar lo inalcanzable.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 5: Conocimiento y Observación</h4>
                <p>El Eneatipo 5 valora el conocimiento y la observación. Son reservados, se distancian emocionalmente y temen ser invadidos. Acumulan información, pero evitan involucrarse. Su evolución implica aprender a compartir y confiar en la vida, superando el miedo a la invasión y la soledad.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 6: Seguridad y Duda</h4>
                <p>El Eneatipo 6 vive en constante duda y ansiedad, buscando seguridad externa. Temen la incertidumbre y la traición, y a menudo oscilan entre la obediencia y la rebeldía. Su crecimiento personal implica confiar en sí mismos y actuar con valentía, sin depender de la validación externa.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 7: Diversión y Evitación</h4>
                <p>El Eneatipo 7 busca la diversión y la distracción para evitar el dolor. Son entusiastas, pero a menudo se sienten abrumados por demasiados planes y evitan compromisos. Su miedo a la limitación les lleva a escapar de las profundidades de la vida.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 8: Fuerza y Protección</h4>
                <p>El Eneatipo 8 es fuerte, dominante y protector. Temen la vulnerabilidad y la traición, por lo que tienden a imponer su voluntad. Su desarrollo personal radica en conectar con su lado tierno y usar su poder con compasión.</p>
            </div>

            <div className="eneatipo">
                <h4>Eneatipo 9: Paz y Adaptación</h4>
                <p>El Eneatipo 9 tiende a adaptarse a los demás para evitar conflictos, lo que a menudo los lleva a olvidar sus propias necesidades. Su deseo de paz los hace caer en la inercia y la pasividad.</p>
            </div>

             {/* Contenedor de Imagen */}
             <div className="image-container">
                <img src="/images/eneagrama2.png" alt="eneagrama" className="eneagrama2-image" />
            </div>

            <p>Conocer tu eneatipo no solo te permite entenderte mejor a ti mismo, sino que también puede ser una herramienta poderosa para el crecimiento personal.</p>
            <p>Al comprender estas estructuras de carácter, podemos tomar conciencia de los patrones limitantes que nos impiden vivir de manera auténtica. El primer paso hacia el cambio es la conciencia, y el Eneagrama nos proporciona un mapa claro para emprender este viaje hacia nuestra mejor versión.</p>
        </div> 
    );
};

export default TiposEneagrama;


