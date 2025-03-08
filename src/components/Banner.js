import React from "react";
import "../styles/Banner.css"; // Archivo CSS del banner

const Banner = () => {
  return (
    <section className="banner">
      <h2 className="banner-title">Próximas Formaciones</h2>
      <div className="banner-container">
        <div className="banner-card">
          <img src="/images/eneagrama.png" alt="Morfo & Eneagrama" />
          <div className="card-content">
            <h3>Morfo & Eneagrama</h3>
            <p>7 de mayo</p>
            <button className="btn">Ver más →</button>
          </div>
        </div>

        <div className="banner-card">
          <img src="/images/eneagrama2.png" alt="Psicoterapia & Eneagrama" />
          <div className="card-content">s
            <h3>Psicoterapia & Eneagrama</h3>
            <p>10 de septiembre</p>
            <button className="btn">Ver más →</button>
          </div>
        </div>

        <div className="banner-card">
          <img src="/images/eneagrama3.png" alt="Experto en Eneagrama" />
          <div className="card-content">
            <h3>Experto en Eneagrama</h3>
            <p>Septiembre 2025</p>
            <button className="btn">Ver más →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
