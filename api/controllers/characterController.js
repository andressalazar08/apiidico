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

    //Validate if character info exist on table character
    const charExists = await Character.findOne({where:{name:characterInfo.name}})
    if(!charExists){
        const character = await Character.create(characterInfo)
    }

    //Validate if movie info exists on table movies
    const movieExists = await Movie.findOne({where:{title:movieInfo.title}})
    if(!movieExists){
        const movie = await Movie.create(movieInfo)
    }

    const character = await Character.findOne({where:{name:characterInfo.name}})
    const movie = await Movie.findOne({where:{title:movieInfo.title}})
    await character.addMovie(movie) //This is the new method that comes with many to many relationships

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