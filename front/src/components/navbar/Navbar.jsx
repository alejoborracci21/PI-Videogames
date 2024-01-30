// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa la hoja de estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link to="/home" className="navLink">
            Inicio
          </Link>
        </li>
        <li className="navItem">
          <Link to="/create" className="navLink">
            Crear videojuego
          </Link>
        </li>
        <li className="navItem">
          <Link to="/about" className="navLink">
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
