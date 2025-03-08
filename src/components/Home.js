import React from "react";
import "../styles/Home.css";
import SobreMi from "./SobreMi";
import Servicios from "./Servicios";
import Testimonios from "./Testimonios";
import Contacto from "./Contacto";
import Formaciones from "./Formaciones";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      {/* Sección del Banner */}
      <section className="home-banner">
        <div className="banner-content">
          <h1>Bienvenido a Eneacoaching Profesional</h1>
          <p>Descubre el poder del Eneagrama para transformar tu vida.</p>
          <button className="cta-btn">Saber más</button>

          {/* 🔹 Sección de Redes Sociales */}
          <div className="social-icons">
            <a href="#" target="_blank"><FaFacebook /></a>
            <a href="#" target="_blank"><FaInstagram /></a>
            <a href="#" target="_blank"><FaLinkedin /></a>
            <a href="#" target="_blank"><FaTwitter /></a>
          </div>
        </div>
      </section>

      {/* Nueva sección de Formaciones */}
      <Formaciones />

      {/* Secciones adicionales */}
      <SobreMi />
      <Servicios />
      <Testimonios />
      <Contacto />
    </main>
  );
};

export default Home;
