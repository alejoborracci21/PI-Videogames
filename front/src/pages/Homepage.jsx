import React from 'react';
import Navbar from '../components/navbar/Navbar'; // Importa tu componente Navbar aquí
import Searchbar from '../components/searchbar/Searchbar';// Importa tu componente SearchBar aquí
import GameList from '../components/gamelist/Gamelist';

const HomePage = () => {
  return (
 
      <div style={styles.container}>
        <div>
      <Searchbar/>
      <Navbar />  
      <GameList />
        </div>
      </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("https://img.freepik.com/vector-gratis/hexagono-fondo-abstracto-textura-negra_206725-413.jpg")', // Reemplaza con la ruta de tu imagen
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  },
};

export default HomePage;
