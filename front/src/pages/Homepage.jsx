import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import Searchbar from '../components/searchbar/Searchbar';
import GameList from '../components/gamelist/GameList'; // Asegúrate de importar GameList correctamente

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

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

  const fetchAllGames = async () => {
    try {
      const { data } = await axios('http://localhost:3001/videogames');
      setAllGames(data);
      console.log(data);
    } catch (error) {
      console.error('Error al iniciar los juegos', error);
    }
  };

  useEffect(() => {
    fetchAllGames();
  }, []); // El array de dependencias está vacío para que se ejecute solo una vez al montar el componente

  return (
    <div style={styles.container}>
      <div>
        <Searchbar onSearch={onSearch} />
        <Navbar />
        {/* Usa allGames en lugar de games */}
        <GameList games={allGames} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("https://img.freepik.com/vector-gratis/hexagono-fondo-abstracto-textura-negra_206725-413.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  },
};

export default HomePage;
