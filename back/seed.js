// seed.js
require('dotenv').config();
const { Genre, Videogame, conn } = require('./src/db');
const axios = require('axios');
const { API_URL, API_KEY } = process.env;

const URL = `${API_URL}/genres?${API_KEY}`;


//---------------------------------------------------------------------
//!funcion para agregar los genres a la base de datos
const fillGenres = async () => {
  try {
    await conn.sync({ force: true });

    const { data } = await axios.get(`${URL}`);
    const { results } = data;

    const genresToCreate = results.map((genre) => ({
      id: genre.id,
      name: genre.name,
      juegos: genre.games.map((game) => ({ id: game.id, name: game.name })),
    }));

    const createdGenres = await Genre.bulkCreate(genresToCreate, {
      include: Videogame, // Incluir la asociación con Videogame
    });

    console.log('Géneros insertados en la base de datos.');

  } catch (error) {
    console.error('Error al insertar géneros en la base de datos:', error);
  } finally {
    await conn.close();
  }
};

fillGenres();
//---------------------------------------------------------------------------------------