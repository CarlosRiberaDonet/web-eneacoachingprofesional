import React from 'react';

import QueEsEneaCoaching from '../components/eneacoaching/QueEsEneaCoaching';
import BeneficiosEneaCoaching from '../components/eneacoaching/BeneficiosEneaCoaching';
import EneaCoachingProfesional from '../components/eneacoaching/EneaCoachingProfesional';
import EneaCoachingEsencial from '../components/eneacoaching/EneaCoachingEsencial';
import EneaCoachingParejas from '../components/eneacoaching/EneaCoachingParejas';

import '../styles/eneagrama/TiposEneagrama.css';
import '../styles/coaching/Coaching.css';
import '../styles/global/ButtonStyles.css';

const EneaCoaching = () => {
    return(
       <div className="coaching-page">
           <div id="que-es-eneacoaching">
               <QueEsEneaCoaching />
           </div>
           <div id="para-que-eneacoaching">
               <BeneficiosEneaCoaching/>
           </div>
           <div id ="eneacoaching-profesional">
               <EneaCoachingProfesional />
           </div>
           <div id ="eneacoaching-esencial">
               <EneaCoachingEsencial />
           </div>
           <div id ="eneacoaching-parejas">
               <EneaCoachingParejas  />
           </div>
       </div>
    )
   
   };
   
   export default EneaCoaching;