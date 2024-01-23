require('dotenv').config();
const { Router } = require('express');
const { Genre } = require('../db');
const axios = require('axios')
const {API_URL, API_KEY} = process.env;
//-----------------------------------------------

const URL = `${API_URL}/genres?${API_KEY}`
const router = Router();




router.get('/', async (req, res, next) => {
    //trae un objeto con todos los generos, sus id y un arreglo de objetos donde estan todos los juegos de ese genero
    
    
    try {
        const { data } = await axios(`${URL}`);
        const { results } = data;

        const response = results.map((genero) => {
            const { id, name } = genero;
            const juegos = genero.games.map((juego) => {
                const { id: juegoId, name: juegoName } = juego;
                return { id: juegoId, name: juegoName };
            });

            return { id, name, juegos };
        });

        res.send(response);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router
