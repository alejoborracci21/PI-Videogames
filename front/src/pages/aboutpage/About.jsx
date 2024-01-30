import React from 'react';
import Navbar from '../../components/navbar/Navbar';
const About = () => {
    return (
        <div>

        <Navbar></Navbar>
        <div className="about-container"> 
            <h1>Alejo Borracci</h1>
            <img src="/ruta/de/tu/imagen.jpg" alt="Alejo Borracci" className="profile-image" />
            <p>
                Hola, mi nombre es Alejo, vivo en la ciudad de Rosario en Santa Fe.
                Soy estudiante de Henry, este es mi proyecto individual de la etapa de Labs.
                Espero que les guste.
            </p>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/alejo-borracci-2323a6199/" target="_blank" rel="noopener noreferrer">
                    <img src="/ruta/de/linkedin-icon.png" alt="LinkedIn" className="social-icon" />  
                </a>
                <a href="https://github.com/alejoborracci21" target="_blank" rel="noopener noreferrer">
                    <img src="/ruta/de/linkedin-icon.png" alt="GitHub" className="social-icon" />  
                </a>
            </div>
        </div>
    </div>
    );
};

export default About;
