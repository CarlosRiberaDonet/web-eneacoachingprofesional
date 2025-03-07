import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner"; // Importamos el nuevo componente
import Footer from "./components/Footer";
import "./index.css"; // Estilos globales

function App() {
  return (
    <div>
      <Header />
      <Banner /> {/* Agregamos el Banner aquí */}
      <main>
        <h1>Bienvenido a tu espacio de bienestar</h1>
        <p>Apoyo psicológico personalizado para alcanzar tu equilibrio emocional.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;