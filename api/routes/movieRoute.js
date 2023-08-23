const movieController = require('../controllers/movieController')
const router = require('express').Router()


//1. create a movie
router.post('/addMovie', movieController.addMovie)



module.exports= router