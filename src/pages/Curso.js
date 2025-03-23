import React from 'react';
import CursoBasico from '../components/eneagrama/curso/CursoBasico';
import EneagramaEmpresas from '../components/eneagrama/curso/EneagramaEmpresas';
import Otros from '../components/eneagrama/curso/Otros';

import '../styles/global/ButtonStyles.css';

const Curso = () => {
    return (
        <div className="cursos-page">
            <div id="curso-basico">
                <CursoBasico />
            </div>
            <div id='eneagrama-empresas'>
                <EneagramaEmpresas />
            </div>
            <div id='otros'>
                <Otros />
            </div>
        </div>
    );
};

export default Curso;
