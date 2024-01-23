const { Router } = require('express');

//--------------------------------------------------------------
//importo los routers
const videogamesRoutes = require('./videogames');
const genresRoutes = require('./genres');


//--------------------------------------------------------------

const router = Router();

//--------------------------------------------------------------
//Configuracion de los routers
router.use('/videogames', videogamesRoutes);
router.use('/genres', genresRoutes);

//--------------------------------------------------------------

module.exports = router;