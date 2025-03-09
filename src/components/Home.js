import React from "react";
import "../styles/Home.css";
import SobreMi from "./SobreMi";
import Servicios from "./Servicios";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";
import Formaciones from "./Formaciones";
import SocialBar from "./SocialBar"; //
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      {/* 🔹 Franja de Redes Sociales y Teléfono */}
      <SocialBar />
      
      {/* 🔹 Nueva sección de Formaciones */}
      <Formaciones />

      {/* 🔹 Secciones adicionales */}
      <SobreMi />
      <Servicios />
      <Testimonios />
      <Contacto />
    </main>
  );
};

export default Home;