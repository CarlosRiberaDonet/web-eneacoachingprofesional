import React from "react";
import "../styles/home/Claudio.css";

const Claudio = () => {
  return (
    <section className="claudio">
      <div className="claudio-content">
        
        {/* Contenedor de Texto */}
        <div className="text-content">
          <h2>Gracias, Claudio: Un Maestro que Transformó Caminos</h2>
          <p>🙏 Un legado de sabiduría y transformación</p>

           {/* Contenedor de Imagen */}
          <div className="image-container-claudio">
            <img src="/images/claudio.png" alt="Claudio Naranjo" className="claudio-image" />
          </div>

          <p>
            Mi trabajo no sería el mismo sin la influencia de Claudio Naranjo. 
            Descubrir su vida y su obra marcó un antes y un después en mi camino personal y profesional. 
            Su enfoque integrador del Eneagrama, la psicoterapia y la espiritualidad sigue siendo una fuente inagotable de inspiración.
          </p>

          <p>📖 El hombre que revolucionó el autoconocimiento</p>
          <p>
            Claudio Naranjo (1932-2019) fue un visionario. Psiquiatra, escritor y maestro espiritual chileno, 
            estudió medicina en la Universidad de Chile y se especializó en psiquiatría. 
            Se formó con grandes maestros como Fritz Perls, pionero de la terapia Gestalt.
          </p>

          <p>
            En los años 70, tras su aprendizaje con Oscar Ichazo en Arica, llevó el Eneagrama de la personalidad a otro nivel, 
            desarrollando el Eneagrama de las pasiones y las fijaciones. Su modelo profundizó en la conexión entre personalidad, 
            psicología, espiritualidad y neurociencia, convirtiéndose en una herramienta de transformación del ser.
          </p>

          <p>🌍 El SAT: Un método para despertar la consciencia</p>
          <p>
            Naranjo fundó el Programa SAT, un proceso terapéutico y educativo que integra meditación, psicoterapia y autoconocimiento.
            Su visión trascendía el ámbito individual; quería una revolución de la consciencia colectiva que impactara la educación y la sociedad.
          </p>

          <p>📚 Un legado imperecedero</p>
          <p>
            Sus libros, como <em>Carácter y Neurosis</em>, <em>La mente patriarcal</em> y <em>Cambiar la educación para cambiar el mundo</em>, 
            siguen inspirando a quienes buscan un desarrollo humano más profundo.
          </p>

          <p>
            💡 Su enseñanza sigue viva en cada sesión, en cada transformación y en cada persona que elige despertar. Gracias, Claudio.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Claudio;
