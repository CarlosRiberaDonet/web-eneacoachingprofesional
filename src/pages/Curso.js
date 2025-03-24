import React from 'react';
import CursoBasico from '../components/eneagrama/curso/CursoBasico';
import EneagramaEmpresas from '../components/eneagrama/curso/EneagramaEmpresas';
import OtrasAplicaciones from '../components/eneagrama/curso/OtrasAplicaciones';


const Curso = () => {
    return (
        <div className="cursos-page">
            <div id="curso-basico">
                <CursoBasico />
            </div>
            <div id='eneagrama-empresas'>
                <EneagramaEmpresas />
            </div>
            <div id='otras-aplicaciones'>
                <OtrasAplicaciones  />
            </div>
        </div>
    );
};

export default Curso;

