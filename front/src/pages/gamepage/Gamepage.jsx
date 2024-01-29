// GamePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
const GamePage = () => {
  // Obtén el parámetro de la URL para el ID del juego
  const { gameId } = useParams();

  // Lógica para cargar detalles del juego con el ID gameId
  // Puedes usar este gameId para hacer una solicitud a tu API y obtener detalles específicos del juego

  return (
    <div>
      <Navbar/>
      <h1>Detalles del juego con ID: {gameId}</h1>
    </div>
  );
};

export default GamePage;
