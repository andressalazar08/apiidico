const db = require('../models');

const Movies = db.movies;

//Main work

//1. Create a movie
// use /addMovie
const addMovie = async(req, res)=>{
    let info = {
        image:req.body.image,
        title: req.body.title,
        creationDate: req.body.creationDate,
        stars: req.body.stars
    }

    const movie = await Movies.create(info)
    res.status(200).send(movie)
}

module.exports={
    addMovie
}

