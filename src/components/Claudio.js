import React from "react";
import "../styles/Claudio.css";
import vicente from "../assets/images/claudio.png"; 


const Claudio = () => {
  return (
    <section className="Claudio">
      <div className="claudio-content">

        {/* Sección de Imagen */}
        <div className="image-container">
        <img src={vicente} alt="claudio" />
        </div>
        
        {/* Sección de Texto */}
        <div className="text-content">
          <h1>GRACIAS, CLAUDIO</h1>
          <p>
            No sería justo si no hablara de la importancia que tiene la figura del gran maestro Claudio Naranjo en mi trabajo. Descubrir su vida y su obra fue un antes y un después en mi vida. 
            Claudio Naranjo (1932-2019) fue un psiquiatra, escritor y maestro espiritual chileno, reconocido por su trabajo en el Eneagrama de la personalidad y la psicoterapia integrativa. Estudió medicina en la Universidad de Chile y se especializó en psiquiatría, formándose con maestros como Fritz Perls en la terapia Gestalt.
            En los años 70, tras su experiencia con Oscar Ichazo en Arica, profundizó en el Eneagrama y desarrolló el Eneagrama de las pasiones y las fijaciones, un modelo que relaciona la personalidad con la psicología, la espiritualidad y la neurociencia. Su trabajo se enfocó en la transformación del ser y la evolución de la conciencia.
            Fundó el Programa SAT, un enfoque terapéutico y educativo que integra meditación, psicoterapia y autoconocimiento. Escribió obras clave como Carácter y Neurosis, La mente patriarcal y Cambiar la educación para cambiar el mundo, donde abordó la crisis educativa y social.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Claudio;