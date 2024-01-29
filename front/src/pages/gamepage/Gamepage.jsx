// GamePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Detail from '../../components/detail/Detail';
const GamePage = () => {
  // Obtén el parámetro de la URL para el ID del juego
  const { gameId } = useParams();

  // Lógica para cargar detalles del juego con el ID gameId
  // Puedes usar este gameId para hacer una solicitud a tu API y obtener detalles específicos del juego

  return (
    <div className="container"> {/* Aplica el contenedor principal con estilos */}
      <Navbar className="navbar" />
      <Detail className="detail" />
    </div>
  );
};

export default GamePage;
