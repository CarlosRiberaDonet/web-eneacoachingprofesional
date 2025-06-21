import React from "react";

const EneaCoachingEsencial = () => {
  return (
    <section className="section-container">
      <h2>EneaCoaching Esencial</h2>
      <h3>¿Qué es EneaCoaching Esencial?</h3>
      <p>
        El EneaCoaching Esencial es un proceso único que combina el Eneagrama y el Coaching Ontológico para ayudarte a utilizar el mapa del Eneagrama como una herramienta para entender y trascender tu ego, liberando las creencias limitantes y los patrones de comportamiento que te impiden ser quien realmente eres.
      </p>
      <p>
        A través de este enfoque, aprenderás a conectar con tu esencia auténtica, lo que te permitirá vivir desde un lugar de mayor paz, claridad y propósito.
      </p>

      <h3>¿Te reconoces en alguna de estas situaciones?</h3>
      <ul>
        <li>Sientes que vives de forma automatizada, siguiendo patrones que no reflejan tu verdadero ser.</li>
        <li>Experimentas frustración o vacío interno, a pesar de tus logros o esfuerzos.</li>
        <li>Quieres comprender más profundamente tus emociones y cómo afectan tus decisiones.</li>
        <li>Te gustaría liberarte de los bloqueos emocionales y mentales que te limitan.</li>
      </ul>

      <p>
        Si es así, EneaCoaching Esencial es para ti.
      </p>

      <h3>Lo que conseguirás con el Pack de 10 sesiones:</h3>
      <ul>
        <li>1. Autoconocimiento profundo: con el Eneagrama, descubrirás tu tipo de personalidad y cómo este influye en tu forma de pensar, sentir y actuar. Comprenderás las motivaciones subyacentes de tu comportamiento, lo que te permitirá dar pasos conscientes hacia tu transformación personal.</li>
        <li>2. Trascender el ego: utilizando las herramientas del Coaching Ontológico, trabajarás en liberar las creencias limitantes y los patrones automáticos de pensamiento y comportamiento que te mantienen atrapado en el ego. Esto te permitirá vivir desde un lugar de autenticidad y alineación con tu verdadera esencia.</li>
        <li>3. Conexión con tu esencia: a medida que trabajamos en el desarrollo de la autoconciencia, aprenderás a conectar con tu esencia verdadera, ese núcleo interno que es independiente de las expectativas externas y de las presiones sociales. Este proceso de conexión te llevará a una vida más plena y satisfactoria.</li>
        <li>4. Transformación profunda: te acompañaré en un proceso gradual de transformación que no solo se enfocará en cambiar tus patrones, sino en el despertar de tu ser más auténtico. Podrás observar tus pensamientos, emociones y comportamientos desde una nueva perspectiva, lo que te permitirá tomar decisiones más conscientes y alineadas con tu propósito.</li>
      </ul>

      <h3>¿Por qué elegir EneaCoaching Esencial?</h3>
      <ul>
        <li>Un enfoque transformador y profundo: No solo buscamos alcanzar objetivos externos, sino que nos enfocamos en un cambio profundo y transformador en tu ser.</li>
        <li>Conexión con tu esencia: Este es un viaje hacia tu ser más auténtico, más allá del ego y de las expectativas sociales. Te acompañamos para que vivas desde tu verdad interior.</li>
        <li>Métodos comprobados y poderosos: El Eneagrama y el Coaching Ontológico son herramientas poderosas que han demostrado ser eficaces para el autoconocimiento, la transformación personal y la liberación de bloqueos emocionales.</li>
      </ul>

      <h3>Tu próximo paso:</h3>
      <p>
        Si estás listo para conectar con tu esencia, liberar tu ego y transformar tu vida de manera profunda, el Pack de 10 sesiones de EneaCoaching Esencial es el acompañamiento perfecto para ti. Cada sesión está diseñada para brindarte un espacio seguro y enriquecedor para tu crecimiento personal.
      </p>

      <p><strong>¡No dejes pasar más tiempo!</strong></p>

      {/* Botón de acción */}
       <button
            className="btn-contacto"
            onClick={() => {
                window.open(
                "https://wa.me/34696667110?text=Hola. Quiero información sobre EneaCoaching Esencial.",
                "_blank"
                );
            }}
            >
            Reserva Ahora tu Pack de 10 Sesiones
            </button>
        
    </section>
  );
};

export default EneaCoachingEsencial;
