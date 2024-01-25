// Gamelist.jsx
import React from 'react';
import Gamecard from '../gamecard/gamecard';

const GameList = () => {
  // Tu lógica para mostrar la lista de videojuegos
  return (
    <div style={styles.contain}>
      <h1>gamelist</h1>
      <Gamecard />
    </div>
  );
};
const styles = {
  contain:{
    backgroundColor: 'white'
  }
}
export default GameList;  // Exportar el componente como exportación predeterminada
