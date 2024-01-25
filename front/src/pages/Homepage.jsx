import React from 'react';
import Navbar from '../components/navbar/Navbar'; // Importa tu componente Navbar aquí
import Searchbar from '../components/searchbar/Searchbar';// Importa tu componente SearchBar aquí
import GameList from '../components/gamelist/Gamelist';
import { useState } from 'react';
import axios from 'axios';

const HomePage = () => {

  const [games, setGames] = useState([]);

  const onSearch = async (index) => {
    try {
      const { data } = await axios(`http://localhost:3001/videogames/${index}`);
      const { id, name, background_image, rating } = data;
  
      // Verificar si el juego ya está en la lista
      const isGameAdded = games.some((game) => game.id === id);
  
      if (isGameAdded) {
        window.alert('¡El juego ya está en la lista!');
        // Puedes mostrar un mensaje de error o tomar la acción que prefieras
      } else {
        // Si el juego no está en la lista, agregarlo
        setGames((oldgames) => [
          ...oldgames,
          { id: id, name: name, image: background_image, rating: rating },
        ]);
      }
    } catch (error) {
      window.alert('No existe un juego con ese ID');
    }
  };
  


  return (
      <div style={styles.container}>
        <div>
      <Searchbar onSearch={onSearch} />
      <Navbar />  
      <GameList games={games}/>
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
