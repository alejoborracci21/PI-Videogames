// Genres.jsx
import axios from 'axios';
import React from 'react';




const Genres = () => {

    const genres = async () => {
    try {
    const data = await axios('http://localhost:3001/genres')
    console.log(data) 
    } catch (error) {
        console.log(error)
    }
    genres()
}
  return (
    <div>  

    </div>
  );
};

export default Genres;  // Exportar el componente como exportación predeterminada
