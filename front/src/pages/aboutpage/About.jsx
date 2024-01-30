import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import imagen from "./imagen.jpg"
import "./AboutStyles.css"
const About = () => {
    return (
        <div>

        <Navbar></Navbar>
        <div className="about-container"> 
            <img src={imagen} alt="Alejo Borracci" className="profile-image" />
            <h1>Alejo Borracci</h1>
            <p>
                Hola, mi nombre es Alejo, vivo en la ciudad de Rosario en Santa Fe.
                Soy estudiante de Henry, este es mi proyecto individual de la etapa de Labs.
                Espero que les guste.
            </p>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/alejo-borracci-2323a6199/" target="_blank" rel="noopener noreferrer">
                    <img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" alt="LinkedIn" className="social-icon" />  
                </a>
                <a href="https://github.com/alejoborracci21" target="_blank" rel="noopener noreferrer">
                    <img src="https://foundations.projectpythia.org/_images/GitHub-logo.png" alt="GitHub" className="social-icon" />  
                </a>
            </div>
        </div>
    </div>
    );
};

export default About;
