const db = require('../models');

const Character = db.characters;
const Movie = db.movies;

//Main work

//1. Create a character
// use /addCharacter
const addCharacter = async (req,res)=>{
    let characterInfo = {
        image:req.body.image,
        name:req.body.name,
        age:req.body.age,
        weight: req.body.weight,
        history: req.body.history
    }

    let movieInfo = {
        title:req.body.title
    }

    const character = await Character.create(characterInfo)
    const movie = await Movie.create(movieInfo)
    await character.addMovie(movie)

    const result = await Character.findOne({
        where: {name:characterInfo.name},
        include: Movie
    })

    //res.status(200).send(character)
    res.status(200).json({
        message: "Character and Movie created successfully",
        result
    })
}


module.exports= {
    addCharacter
}