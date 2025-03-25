import React from 'react';

import QueEsCoaching from "../components/coaching/QueEsCoaching";
import ParaQueCoaching from "../components/coaching/ParaQueCoaching";
import SesionesIndividuales from "../components/coaching/SesionesIndividuales";
import CoachingParaEmpresas from "../components/coaching/CoachingParaEmpresas";

import '../styles/eneagrama/TiposEneagrama.css';
import '../styles/global/ButtonStyles.css';


const Coaching = () => {
 return(
    <div className="coaching-page">
        <div id="que-es-coaching">
            <QueEsCoaching />
        </div>
        <div id="para-que-coaching">
            <ParaQueCoaching/>
        </div>
        <div id ="sesiones-individuales">
            <SesionesIndividuales />
        </div>
        <div id ="coaching-empresas">
            <CoachingParaEmpresas />
        </div>
    </div>
 )

};

export default Coaching;