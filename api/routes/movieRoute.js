const movieController = require('../controllers/movieController')
const router = require('express').Router()


//1. create a movie
//use http://localhost:4000/movies/addMovie
router.post('/addMovie', movieController.addMovie)

//2. get all movies
//use http://localhost:4000/movies
router.get('/', movieController.getMovies)

//3. get a movie by title (params)
//use http://localhost:4000/movies/:title
router.get('/:title', movieController.getMovieByTitle)

module.exports= router