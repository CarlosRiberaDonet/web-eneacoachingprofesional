import React from "react";
import "../styles/Banner.css";
import bannerImage from "../assets/images/banner.png"; // 🔹 Asegúrate de que aquí dice `.png`

const Banner = () => {
  return (
    <section 
      className="banner" 
      style={{ backgroundImage: `url(${bannerImage})` }} // 🔹 Usamos la imagen en JSX
    >
      <div className="banner-content">
        <h1>Bienvenido a tu espacio de bienestar</h1>
        <p>Apoyo psicológico personalizado para alcanzar tu equilibrio emocional.</p>
        <button className="cta-btn">Conocer más</button>
      </div>
    </section>
  );
};

export default Banner;
