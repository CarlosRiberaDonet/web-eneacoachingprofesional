import React from "react";
import "../styles/Home.css";
import SocialBar from "./SocialBar";
import Formaciones from "./Formaciones";
import SobreMi from"./SobreMi";
import Typing from "./Typing";
import Claudio from "./Claudio";
import Contacto from "./Contacto";
import EneaCoaching from "./EneaCoaching";

<a href="/contacto" className="btn-contacto">Contacta</a>



const Home = () => {
  return (
    <main>
      {/*  Franja de Redes Sociales y Teléfono */}
      <SocialBar />
      
      {/*  Nueva sección de Formaciones */}
      <Formaciones />

      {/*  Sección con información profesional de Vicente */}
      <SobreMi />

       {/*  Sección EneaCoachingProfesional */}
       <EneaCoaching />

      {/*  Sección Typing */}
      <Typing />

      {/*  Sección personal de Sobre Mí */}
      <Claudio />

      {/*  Formulario de Contacto */}
      <Contacto />
    </main>
  );
};

export default Home;
