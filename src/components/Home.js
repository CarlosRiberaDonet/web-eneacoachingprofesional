import React from "react";
import "../styles/Home.css";
import SocialBar from "./SocialBar";
import Formaciones from "./Formaciones";
import SobreMi from "./SobreMi"; 
import Typing from "./Typing";
import HistoriaPersonal from "./HistoriaPersonal"
import Contacto from "./Contacto";

const Home = () => {
  return (
    <main>
      {/*  Franja de Redes Sociales y Teléfono */}
      <SocialBar />
      
      {/*  Nueva sección de Formaciones */}
      <Formaciones />

      {/*  Sección con información profesional de Vicente */}
      <SobreMi />

      {/*  Sección Typing */}
      <Typing />

      {/*  Sección personal de Sobre Mí */}
      <HistoriaPersonal />

      {/* 🔹 Formulario de Contacto */}
      <Contacto />
    </main>
  );
};

export default Home;
