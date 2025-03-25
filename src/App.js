import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTopButton from './components/ScrollToTopButton';


import Home from './components/Home';
import Header from './components/Header';
import Eneagrama from './pages/Eneagrama';
import Coaching from './pages/Coaching';
import EneaCoaching from './pages/EneaCoaching';
import Vicente from './pages/Vicente';
import Contacto from './pages/ContactoPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eneagrama" element={<Eneagrama />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/eneacoaching" element={<EneaCoaching />} />
        <Route path="/vicente" element={<Vicente />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <ScrollToTopButton /> {/* El botón flotante de scroll al principio */}
    </Router>
  );
}

export default App;
