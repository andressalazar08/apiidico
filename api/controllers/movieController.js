const db = require('../models');

const Movie = db.movies;
const Character = db.characters;

//Main work

//1. Create a movie
// use /addMovie
const addMovie = async(req, res)=>{
    let movieInfo = {
        image:req.body.image,
        title: req.body.title,
        creationDate: req.body.creationDate,
        stars: req.body.stars
    }

    let characterInfo ={
        name: req.body.name
    }

    //Validate if movie info exists on table movies
    const movieExists = await Movie.findOne({where:{title:movieInfo.title}})
    if(!movieExists){
        const movie = await Movie.create(movieInfo)
    }

    //Validate if character info exist on table character
    const charExists = await Character.findOne({where:{name:characterInfo.name}})
    if(!charExists){
        const character = await Character.create(characterInfo)
    }

    const character = await Character.findOne({where:{name:characterInfo.name}})
    const movie = await Movie.findOne({where:{title:movieInfo.title}})
    await movie.addCharacter(character)



    const result = await Movie.findOne({
        where: {title:movieInfo.title},
        include: Character
    })

    res.status(200).json({
        message: "Movie created successfully",
        result
    })
}


//2. get al movies
//http://localhost:4000/movies
const getMovies = async(req, res)=>{

    const allMovies = await Movie.findAll({})

    res.status(200).json({
        message:"All movies retrieved",
        allMovies
    })

}

//3. get movie detail by param name
// use [Get] localhost:4000/movies/:name
const getMovieByTitle= async(req,res)=>{

    let title = req.params.title

    if(title){
        const movieToFind = await Movie.findOne({
            where:{title:title},
            include: Character

        })
        if(movieToFind){
            res.status(200).json({
                message:"Movie found correctly",
                movieToFind
            })
        }else{
            res.status(404).json({
                message:"Movie not found"
            })
        }
    }

}

module.exports={
    addMovie,
    getMovies,
    getMovieByTitle
}

