import React from 'react';

const QueEsCoaching = () => {
  return (
    <div className="section-container">
      <h2>Coaching Ontológico</h2>
      <h3>¿Qué es?</h3>
      <p>
        El Coaching Ontológico es un enfoque profundo de transformación personal y profesional que se basa en la forma en que percibimos y damos sentido al mundo. "Ontología" significa el estudio del "ser", por lo que este tipo de coaching no solo se enfoca en lo que hacemos, sino en quiénes somos mientras lo hacemos.
      </p>

      <div className="tipos-eneagrama-container">
        <h4>- Transformación a través del lenguaje</h4>
        <p>
          El Coaching Ontológico parte de la idea de que el lenguaje no solo describe la realidad, sino que la crea. A través de conversaciones poderosas, se desafían creencias limitantes y se generan nuevas formas de interpretar la vida.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>- Cuerpo, emoción y pensamiento en armonía</h4>
        <p>
          No somos solo razón, sino un equilibrio entre cuerpo, emoción y lenguaje. El coaching ontológico trabaja con estos tres aspectos para lograr una transformación profunda y sostenible.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>- Expansión de posibilidades</h4>
        <p>
          A menudo, nos movemos en un mundo de interpretaciones limitadas. El Coaching Ontológico nos ayuda a cambiar nuestra forma de ver las cosas, abriendo nuevas oportunidades y caminos que antes no considerábamos posibles.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>- Aplicación en la vida y en el trabajo</h4>
        <p>
          Este enfoque es útil para mejorar la comunicación, la inteligencia emocional, el liderazgo y la toma de decisiones. Se aplica en la vida personal, en empresas y en cualquier ámbito donde el crecimiento y la transformación sean necesarios.
        </p>
      </div>

      <p>
        En definitiva, el Coaching Ontológico no solo busca mejorar lo que haces, sino transformar quién eres para vivir con mayor autenticidad, claridad y propósito.
      </p>

      <button
            className="btn-contacto"
            onClick={() => {
                window.open(
                "https://wa.me/34696667110?text=Hola. Quiero información de Coaching Ontológico.",
                "_blank"
                );
            }}
            >
            Consulta una sesión gratuita
            </button>
    </div>
  );
};

export default QueEsCoaching;
