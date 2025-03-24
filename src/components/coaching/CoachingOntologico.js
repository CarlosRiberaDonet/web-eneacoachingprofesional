import React from "react";
import '../styles/global/ButtonStyles.css'; // Estilos globales para los botones

const CoachingOntologico = () => {
  return (
    <section className="section-container">
      <div className="coaching-ontologico-content">
        <div className="coaching-ontologico-text-content">
          <h1 className="coaching-ontologico-title">Coaching Ontológico</h1>
          <h2 className="coaching-ontologico-subtitle">¿Qué es?</h2>
          <p className="coaching-ontologico-description">
            El Coaching Ontológico es un enfoque profundo de transformación personal y profesional que se basa en la forma en que percibimos y damos sentido al mundo. "Ontología" significa el estudio del "ser", por lo que este tipo de coaching no solo se enfoca en lo que hacemos, sino en quiénes somos mientras lo hacemos.
          </p>

          <h3 className="coaching-ontologico-subtitle">
            - Transformación a través del lenguaje
          </h3>
          <p className="coaching-ontologico-description">
            El Coaching Ontológico parte de la idea de que el lenguaje no solo describe la realidad, sino que la crea. A través de conversaciones poderosas, se desafían creencias limitantes y se generan nuevas formas de interpretar la vida.
          </p>

          <h3 className="coaching-ontologico-subtitle">
            - Cuerpo, emoción y pensamiento en armonía
          </h3>
          <p className="coaching-ontologico-description">
            No somos solo razón, sino un equilibrio entre cuerpo, emoción y lenguaje. El coaching ontológico trabaja con estos tres aspectos para lograr una transformación profunda y sostenible.
          </p>

          <h3 className="coaching-ontologico-subtitle">
            - Expansión de posibilidades
          </h3>
          <p className="coaching-ontologico-description">
            A menudo, nos movemos en un mundo de interpretaciones limitadas. El Coaching Ontológico nos ayuda a cambiar nuestra forma de ver las cosas, abriendo nuevas oportunidades y caminos que antes no considerábamos posibles.
          </p>

          <h3 className="coaching-ontologico-subtitle">
            - Aplicación en la vida y en el trabajo
          </h3>
          <p className="coaching-ontologico-description">
            Este enfoque es útil para mejorar la comunicación, la inteligencia emocional, el liderazgo y la toma de decisiones. Se aplica en la vida personal, en empresas y en cualquier ámbito donde el crecimiento y la transformación sean necesarios.
          </p>

          <p className="coaching-ontologico-description">
            En definitiva, el Coaching Ontológico no solo busca mejorar lo que haces, sino transformar quién eres para vivir con mayor autenticidad, claridad y propósito.
          </p>

          <a href="/consultas" className="btn btn-primary coaching-ontologico-btn">
            Consulta más sobre Coaching Ontológico
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoachingOntologico;
