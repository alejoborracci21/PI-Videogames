import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Searchbar from '../../components/searchbar/Searchbar';
import GameList from '../../components/gamelist/GameList';
import './HomePage.css';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

  const onSearch = async (searchTerm) => {
    try {
      const { data } = await axios(`http://localhost:3001/videogames/${searchTerm}`);

      if (data.length > 0) {
        setGames(data);
        console.log(games)
      } else {
        window.alert('No se encontraron juegos con ese nombre.');
      }
    } catch (error) {
      console.error('Error al realizar la búsqueda', error);
    }
  };

  const fetchAllGames = async () => {
    try {
      const { data } = await axios('http://localhost:3001/videogames');
      setAllGames(data);
    } catch (error) {
      console.error('Error al iniciar los juegos', error);
    }
  };

  useEffect(() => {
    fetchAllGames();
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <Searchbar onSearch={onSearch} />
        <Navbar />
        <h1 className="home-heading">Videojuegos:</h1>
        <GameList games={games.length > 0 ? games : allGames} />
      </div>
    </div>
  );
};

export default HomePage;
