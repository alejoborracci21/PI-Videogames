// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/home" style={styles.navLink}>
            Inicio
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/genres" style={styles.navLink}>
            Generos
          </Link>
        </li>
        {/* Agrega más elementos según sea necesario */}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '10px',
    marginBottom: '20px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column', // Mostrar elementos en columna
    alignItems: 'flex-start', // Alinear a la izquierda
  },
  navItem: {
    marginBottom: '10px', // Espacio entre elementos
  },
  navLink: {
    color: '#fff', // Color del texto de los enlaces
    textDecoration: 'none',
    fontSize: '1.2em',
  },
};

export default Navbar;
