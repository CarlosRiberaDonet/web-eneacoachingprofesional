import React from "react";
import "../styles/Home.css";
import SocialBar from "./SocialBar";
import Formaciones from "./Formaciones";
import Vicente from "./Vicente"; // 🔹 Sección con la foto de Vicente
import SobreMi from "./SobreMi";  // 🔹 Sección más personal
import Contacto from "./Contacto";

const Home = () => {
  return (
    <main>
      {/* 🔹 Franja de Redes Sociales y Teléfono */}
      <SocialBar />
      
      {/* 🔹 Nueva sección de Formaciones */}
      <Formaciones />

      {/* 🔹 Sección con información profesional de Vicente */}
      <Vicente />

      {/* 🔹 Sección personal de Sobre Mí */}
      <SobreMi />

      {/* 🔹 Formulario de Contacto */}
      <Contacto />
    </main>
  );
};

export default Home;
