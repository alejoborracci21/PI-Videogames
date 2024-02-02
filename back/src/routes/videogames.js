require('dotenv').config()
const {API_KEY, API_URL} = process.env;
const  axios  = require('axios')
const {Router} = require('express')
const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize');
const URL = `${API_URL}/games?${API_KEY}`


// https://api.rawg.io/api/games?key=6b708e85163f4d7faa6ddccd3381916b

const router = Router()


//!-------------RUTA GET ALL VIDEOGAMES--------------------------------------
router.get('/', async (req, res) => {
    try {
      const { data } = await axios.get(`${URL}`);
      const { results } = data;
  
      const gamesDb = await Videogame.findAll();
      const gamesApi = results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          released: game.released,
          rating: game.rating,
          genres: game.genres
        };
      });
  
      // Aplanar el array de juegos de la API
      const gamesApiFlat = gamesApi.flat();
  
      // Combinar los juegos de la base de datos con los de la API
      const response = [...gamesDb, ...gamesApiFlat];
      res.send(response);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });
  



//!------------------------RUTA GET VIDEOGAME ID------------------------------
// router.get('/:idVideogame', async (req, res) => {
//     try {
//       const { idVideogame } = req.params;
//       const URLID = `${API_URL}/games/${idVideogame}?${API_KEY}`;
  
//       try {
//         // Intentar obtener detalles del juego desde la API Rawg
//         const { data } = await axios.get(`${URLID}`);
//         res.send(data);
//       } catch (apiError) {
//         // Si hay un error al obtener detalles desde la API Rawg
//         if (apiError.response && apiError.response.status === 404) {
//           // Intentar buscar en la base de datos local
//           const dbGame = await Videogame.findByPk(idVideogame);
//           if (dbGame) {
//             // Si se encuentra en la base de datos, enviar esos detalles
//             res.send(dbGame);
//           } else {
//             // Si no se encuentra en la base de datos, entonces sí, enviar el 404
//             res.status(404).send({ detail: 'Not found.' });
//           }
//         } else {
//           // Si el error no es un 404, reenviar el error
//           throw apiError;
//         }
//       }
//     } catch (error) {
//       res.status(500).send('Internal Server Error');
//     }
//   });


//!----------------RUTA GET FOR NAME-----------------------------------------
// URL -> http://localhost:3001/videogames/name?name=asdasd
router.get('/name', async (req, res) => {
    try {
        const { name } = req.query;

        // Verificar si se proporcionó un nombre en la consulta
        if (!name) {
            return res.status(400).json({ error: 'Debe proporcionar un nombre para buscar.' });
        }

        // Buscar en la base de datos por nombre
      const dbResults = await Videogame.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`, // Consulta de búsqueda insensible a mayúsculas y minúsculas
            },
        },
    });
        

        // Buscar en la API por nombre
        const { data } = await axios.get(`${API_URL}/games?${API_KEY}&search=${name}`);
        const apiResults = data.results;

        if (dbResults.length === 0 && apiResults.length === 0) {
            return res.status(404).send({ message: 'No se encontraron resultados para la búsqueda.' });
        }
        console.log(dbResults)
        res.send([ ...dbResults, ...apiResults] );
    } catch (error) {
      console.error('Error en la ruta de búsqueda:', error);
      res.status(500).json({ error: 'Hubo un error en la búsqueda de videojuegos.' });
    }
});
//!-------------------RUTA POST VIDEOGAME------------------------------------------------
router.post('/', async (req, res) => {
  try {
    const { name, description, released, background_image, rating, genres } = req.body;

    // Crear el videojuego en la base de datos
    const nuevoVideogame = await Videogame.create({
      name: name,
      description: description,
      released: released,
      background_image: background_image || 'https://i.pinimg.com/originals/1d/2f/7a/1d2f7a9c6fb224ca63c8b79f4f055861.png',
      rating: rating,
      gameGenres: genres, // Cambia a 'gameGenres' o el alias que hayas utilizado
    });

    // Relacionar el videojuego con los géneros
    if (genres && genres.length > 0) {
      const genresInstances = await Genre.findAll({
        where: {
          id: genres,
        },
      });
      await nuevoVideogame.setGenres(genresInstances);
    }

    res.send(`Nuevo Videojuego creado: ${name}`);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router;
