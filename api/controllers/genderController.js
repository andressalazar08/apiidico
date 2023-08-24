const db = require('../models');


const Gender =db.genders;
const Movie = db.movies;


const addGender = async (req, res)=>{

    let genderInfo = {
        name:req.body.name,
        image:req.body.image
    }

    let movieInfo = {
        title: req.body.title
    }

    //Validate if gender exists
    const genderExists = await Gender.findOne({where:{name:genderInfo.name}})
    if(!genderExists){
        await Gender.create(genderInfo)
    }

    //Validate if movie exists
    const movieExists = await Movie.findOne({where:{title:movieInfo.title}})
    if(!movieExists){
        await Movie.create(movieInfo)
    }

    //Get movie and gender and make the connection
    const gender = await Gender.findOne({where:{name:genderInfo.name}})
    const movie = await Movie.findOne({where:{title:movieInfo.title}})
    await gender.addMovie(movie)


    //Result
    const result = await Gender.findOne({
        where:{name:genderInfo.name},
        include:Movie
    })


    res.status(200).json({
        message:"Gender created successfully",
        result
    })
}


module.exports = {
    addGender
}