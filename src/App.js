import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Eneagrama from "./pages/Eneagrama";
import Vicente from "./pages/Vicente";
import Contacto from "./pages/ContactoPage";
import Curso from "./pages/Curso";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eneagrama" element={<Eneagrama />} />
        <Route path="/vicente" element={<Vicente />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
