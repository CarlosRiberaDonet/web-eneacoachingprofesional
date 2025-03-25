import React from 'react';
import QueEsEneagrama from '../components/eneagrama/QueEsEneagrama';
import ParaQueEneagrama from '../components/eneagrama/ParaQueEneagrama';
import TiposEneagrama from '../components/eneagrama/TiposEneagrama';
import CursoBasico from '../components/eneagrama/CursoBasicoEneagrama';
import EneagramaEmpresas from '../components/eneagrama/EneagramaEmpresasEneagrama';
import OtrasAplicacionesEneagrama from '../components/eneagrama/OtrasAplicacionesEneagrama';
import '../styles/eneagrama/TiposEneagrama.css';
import '../styles/global/SeccionContainer.css';


const Eneagrama = () => {
    return (
        <div className="eneagrama-page">
            <div id="que-es-eneagrama">
                <QueEsEneagrama />
            </div>
            <div id="para-que-eneagrama">
                <ParaQueEneagrama />
            </div>
            <div id="tipos-eneagrama">
                <TiposEneagrama />
            </div>
            <div id="curso-basico">
                <CursoBasico />
            </div>
            <div id="eneagrama-empresas">
                <EneagramaEmpresas />
            </div>
            <div id='otras-aplicaciones'>
                <OtrasAplicacionesEneagrama  />
            </div>
        </div>
    );
};

export default Eneagrama;

