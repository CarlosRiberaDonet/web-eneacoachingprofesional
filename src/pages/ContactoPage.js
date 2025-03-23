import React from 'react';
import '../styles/ContactoPage.css';
import '../styles/global/ButtonStyles.css';


const ContactoPage = () => {
    return (
        <div className="contacto-page">
            <div className="contacto-header">
                <h1>Contacto</h1>
                <p className="contacto-description">
                    ¿Tienes alguna duda o necesitas más información? ¡Estamos aquí para ayudarte!
                </p>
            </div>

            <div className="contacto-wrapper">
                <form className="contacto-form">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" placeholder="Introduce tu nombre" />

                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder="Introduce tu correo electrónico" />

                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" placeholder="Escribe tu mensaje"></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ContactoPage;