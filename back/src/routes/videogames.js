require('dotenv').config()
const {API_KEY, API_URL} = process.env;
const  axios  = require('axios')
const {Router} = require('express')
const { Videogame } = require('../db');
const URL = `${API_URL}/games?${API_KEY}`


// https://api.rawg.io/api/games?key=6b708e85163f4d7faa6ddccd3381916b

const router = Router()


//!-------------RUTA GET ALL VIDEOGAMES--------------------------------------
router.get('/', async(req, res) => {
    //ya trae todos los juegos de la DB y de la api
    try {
        const {data} = await axios.get(`${URL}`);
        const { results } = data
        
        const gamesDb = await Videogame.findAll();
        const gamesApi = results.map((game) => {
            return{
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                released: game.released,
                rating: game.rating,
                platforms: game.platforms,
                genres: game.genres
            }
        })
        const response = [...gamesDb, gamesApi ];
        res.send(response);
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
})



//!------------------------RUTA GET VIDEOGAME ID------------------------------
router.get('/:idVideogame', async(req, res) => {
    try {
        //debe traer el detalle de un videojuego especifico
        //el videojuego es recibido por parametro id
        //debe incluir los datos del genero
        //debe funcionar tanto para los juegos de la api como para los de la DB
        // https://api.rawg.io/api/games/3498?key=6b708e85163f4d7faa6ddccd3381916b
        const { idVideogame } = req.params;
        const URLID = `${API_URL}/games/${idVideogame}?${API_KEY}`

        const {data} = await axios.get(`${URLID}`)

        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
})



//!----------------RUTA GET FOR NAME-----------------------------------------
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
                    [Op.iLike]: `%${name}%`, // Consulta de búsqueda insensible a mayúsculas y minúsculas
                },
            },
        });

        // Buscar en la API por nombre
        const { data } = await axios.get(`${API_URL}/games?${API_KEY}&search=${name}`);
        const apiResults = data.results;

        const response = [...dbResults, ...apiResults];

        if (response.length === 0) {
            return res.status(404).send({ message: 'No se encontraron resultados para la búsqueda.' });
        }

        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

//!-------------------RUTA POST VIDEOGAME------------------------------------------------
router.post('/', async (req, res) => {
//Ruta post ya crea el videojuego en la base de datos
    try {

        // Recibirá los datos necesarios para crear un videojuego y relacionarlos con los géneros solicitados.
        // Toda la información debe ser recibida por el body.
        // Debe crear un videojuego en la base de datos y este debe estar relacionado con sus géneros indicados.
        const { name, description, released, image, rating } = req.body;
//------------------------------------------------------------------------
// Función para crear videojuego


        const nuevoVideogame = await Videogame.create({
            name: `${name}`,
            description: `${description}`,
            released: `${released}`,
            image: `${image}`,
            rating: `${rating}`,
        });
        res.send(`Nuevo Videojuego creado: ${name}`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;
