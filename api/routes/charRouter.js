const charController = require('../controllers/charController.js');
const mosController = require('../controllers/mosController.js')

//router
const router = require('express').Router();

//use routers
router.post('/addChar', charController.addChar)
router.get('/allCharacters', charController.getAllChar)
//route to find characters by query
router.get('/findCharacter', charController.queryCharacters)
//route to get all movies info by id
router.get('/allMovies', charController.allMovies)
//route to find movies by query
router.get('/findMovie', charController.queryMovie)

//routes with ids
//route to get a movie by id
router.get('/movie/:id', charController.moviesInfo)
router.get('/character/:id', charController.getOneChar)
router.put('/character/:id', charController.updateChar)
router.delete('/character/:id', charController.deleteChar)


//Movies or series routes
router.post('/addMovie',mosController.addMoS)
router.get('/allmovies', mosController.getAllMoS)


module.exports = router