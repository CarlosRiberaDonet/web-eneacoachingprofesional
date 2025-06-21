import React from "react";

const ParaQueCoaching = () => {
  return (
    <div className="section-container">
      <h2>¿Para qué sirve el Coaching Ontológico?</h2>
      <p>
        El Coaching Ontológico es una herramienta poderosa de transformación que ayuda a las personas y organizaciones a descubrir nuevas formas de interpretar la vida, superar bloqueos y expandir su potencial. Su enfoque va más allá de la acción y se centra en la forma en que percibimos la realidad, generando cambios sostenibles desde dentro hacia afuera.
      </p>

      <h3>Principales beneficios del Coaching Ontológico:</h3>

      <div className="tipos-eneagrama-container">
        <h4>Autoconocimiento profundo</h4>
        <p>
          Ayuda a comprender cómo pensamos, sentimos y actuamos, identificando patrones que pueden estar limitando nuestro crecimiento personal y profesional.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>Mejora la comunicación y las relaciones</h4>
        <p>
          Nos permite desarrollar una comunicación más efectiva, basada en la escucha activa, la empatía y la claridad, mejorando nuestras relaciones en todos los ámbitos.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>Desbloqueo de creencias limitantes</h4>
        <p>
          Muchas veces, lo que nos detiene no son las circunstancias externas, sino nuestras propias creencias. El Coaching Ontológico ayuda a replantear esas creencias y abrir nuevas posibilidades de acción.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>Gestión emocional y resiliencia</h4>
        <p>
          Trabaja con la conexión entre lenguaje, cuerpo y emoción, permitiendo gestionar mejor el estrés, la ansiedad y los desafíos de la vida con mayor inteligencia emocional.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>Desarrollo del liderazgo y la toma de decisiones</h4>
        <p>
          Es una herramienta clave para líderes, emprendedores y profesionales que desean potenciar sus habilidades de liderazgo, motivación y toma de decisiones conscientes.
        </p>
      </div>

      <div className="tipos-eneagrama-container">
        <h4>Mayor sentido de propósito y bienestar</h4>
        <p>
          Facilita la alineación entre lo que pensamos, sentimos y hacemos, ayudando a vivir con mayor autenticidad, propósito y plenitud.
        </p>
      </div>

      {/* Lista de aplicaciones del Coaching Ontológico */}
      <h3>📍 Aplicaciones del Coaching Ontológico:</h3>
      <ul className="coaching-applications">
        <li>Crecimiento personal y autoconocimiento</li>
        <li>Desarrollo profesional y liderazgo</li>
        <li>Coaching para empresas y equipos</li>
        <li>Educación y relaciones interpersonales</li>
        <li>Gestión del cambio y adaptación a nuevas realidades</li>
      </ul>

      <p>
        En resumen, el Coaching Ontológico no solo ayuda a cambiar lo que hacemos, sino a transformar nuestra manera de ser y percibir el mundo, creando una vida más plena, consciente y alineada con nuestro propósito.
      </p>

      <button
            className="btn-contacto"
            onClick={() => {
                window.open(
                "https://wa.me/34696667110?text=Hola. Quiero información sobre aplicaciones del Coaching Ontológico.",
                "_blank"
                );
            }}
            >
            Consulta una sesión gratuita
            </button>
    </div>
  );
};

export default ParaQueCoaching;
