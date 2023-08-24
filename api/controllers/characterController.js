const db = require('../models');

const Character = db.characters;
const Movie = db.movies;
const Charactermovie =db.character_movies;

//Main work

//1. Create a character
// use [POST] localhost:4000/characters/addCharacter
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


//2. Get all characters
// use [Get] localhost:4000/characters/
const getCharacters = async (req,res)=>{

    let name = req.query.name
    let age = req.query.age
    let movie = req.query.movie

    if(!name&&!age&&!movie){
        const result= await Character.findAll({
            attributes:[
                'image',
                'name'
            ],
            include:Movie,
            //paranoid:false  este argumento permitiría consultar incluso los que tengan borrado soft con paranoid
        })
        res.status(200).json({
            message:"All characters retrieved",
            result
        })
    }

    if(name){
        const result= await Character.findAll({
            where:{name:name},
            // attributes:[
            //     'image',
            //     'name'
            // ],
            include:Movie,
            //paranoid:false  este argumento permitiría consultar incluso los que tengan borrado soft con paranoid
        })
        if(result.length>0){
            res.status(200).json({
                message:"The character you requested is:",
                result
            })
        }else{
            res.status(404).json({
                message:"The character you requested is not found",
             })
        }
    }



    if(age){
        const result= await Character.findAll({
            where:{age:age},
            // attributes:[
            //     'image',
            //     'name'
            // ],
            include:Movie,

        })
        if(result.length>0){
            res.status(200).json({
                message:"The character you requested is:",
                result
            })
        }else{
            res.status(404).json({
                message:"The character you requested by age is not found",
             })
        }
    }


    if(movie){
        const result= await Movie.findAll({
            where:{title:movie},

            include:Character

        })
        if(result.length>0){
            res.status(200).json({
                message:"The character and movies related you requested are:",
                result
            })
        }else{
            res.status(404).json({
                message:"The character you requested by movie is not found",
             })
        }
    }
}

//3. edit a character
// use [PUT] localhost:4000/characters/:name
const updateCharacter = async (req,res)=>{

    let name=req.params.name
    let charFound = await Character.findOne({where:{name:name}})

    if(name&&charFound){
        const character = await Character.update(req.body, {where:{name:name}}) //update(req.body) actualiza el (los) parametro(s) entregados por body
        res.status(200).json({
            message: "Character updated successfully"
        })
    }else{
        res.status(404).json({
            message:"Please indicate a character to update"
        })
    }


}

//4. delete a character
// use [DELETE] localhost:4000/characters/:name
const deleteCharacter = async(req,res)=>{

    let name = req.params.name
    let charFound = Character.findOne({where:{name:name}})

    if(name&&charFound){
        //paraonoid:true permite no borrar el registro, solo agrega una columna para rastrear la petición
        await Character.destroy({where:{name:name}})
        res.status(200).json({
            message:"Character deleted successfully"
        })

    }else{
        res.status(404).json({
            message:"Character not found, nothing to delete"
        })
    }
}


//5. Get detail of a character by name
// use [Get] localhost:4000/characters/:name
const getCharacterByName = async (req, res)=>{

    let name= req.params.name
    const charFound = await Character.findOne({
        where:{name:name},
        include:Movie
    })
    if(name&&charFound){
        res.status(200).json({
            message:"Character found",
            charFound
        })
    }else{
        res.status(404).json({
            message:"Please review the character to find"
        })
    }

}


module.exports= {
    addCharacter,
    getCharacters,
    updateCharacter,
    deleteCharacter,
    getCharacterByName
}