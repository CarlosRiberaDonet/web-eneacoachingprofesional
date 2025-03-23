import React from 'react';
import QueEs from '../components/eneagrama/QueEs';
import ParaQue from '../components/eneagrama/ParaQue';
import TiposEneagrama from '../components/eneagrama/TiposEneagrama';
import '../styles/global/ButtonStyles.css';


const Eneagrama = () => {
    return (
        <div className="eneagrama-page">
            <div id="que-es">
                <QueEs />
            </div>
            <div id="para-que-sirve">
                <ParaQue />
            </div>
            <div id="tipos-eneagrama">
                <TiposEneagrama />
            </div>
        </div>
    );
};

export default Eneagrama;

