const db = require('../models');


//create main model
const Char = db.characters
const Mos = db.movieseries
const Movies = db.movie

//1. create character

const addChar = async(req,res)=>{
    try{
    let info={
        image:req.body.image,
        name:req.body.name,
        age:req.body.age,
        weight: req.body.weight,
        history:req.body.history,
        relatedmovieserie: req.body.relatedmovieserie
    }

    const char = await Char.create(info)

    //Add movies taken from the new character
    const moviesSet=[
        ...new Set(
            info.relatedmovieserie.split(',').sort()
        )
    ]

    for(let i=0; i<moviesSet.length;i++){
        const movieName = moviesSet[i].replace(" ", "")
        // let data={name:movieName}
        await Movies.findOrCreate({
            where:{
                name:movieName,
                nameChar:info.name
            }
        })
    }

    // console.log(moviesSet);
    res.status(200).send(char)
}catch(err){
    console.log(err)
}
}


//2. get all characters

const getAllChar = async(req,res)=>{

    let chars = await Char.findAll({
        attributes:[
            'image',
            'name',
            'id'
        ]
    })
    res.status(200).send(chars)
}


//3. get single character
const getOneChar = async(req,res)=>{

    let id = req.params.id
    let chars = await Char.findOne({where:{id:id}})
    res.status(200).send(chars)
}

//4. update char info
const updateChar = async(req,res)=>{

    let id= req.params.id
    const char = await Char.update(req.body, {where:{id:id}})
    res.status(200).send(char)
}

//5. delete char by id
const deleteChar = async(req,res)=>{

    let id= req.params.id
    await Char.destroy({where:{id:id}})
    res.status(200).send('Character is now deleted')
}


//6. characters search by query
const queryCharacters =  async(req,res)=>{

    let name = req.query.name
    let age = req.query.age
    let movies = req.query.movies

    if(movies){
        const findmovie = await Movies.findAll({where:{name:movies}})
        if(findmovie.length>0){
            res.status(200).send(findmovie)
        }else{
            res.status(404).json({
                success:false,
                message: 'Movie not found on DB'
            })
        }
    }

    if(name&&!age){
        const findChar = await Char.findOne({where:{name:name}})
        if(findChar){
            res.status(200).send(findChar)
        }else{
            res.status(404).json({
                success:false,
                message: 'Character not found'
            })
        }
    }

    if(name&&age){
        const findChar = await Char.findOne({where:{name:name, age:age}})
        if(findChar){
            res.status(200).send(findChar)
        }else{
            res.status(404).json({
                success:false,
                message: 'Character with that name and that age not found'
            })
        }
    }

    if(!name&&age){
        const findChar = await Char.findOne({where:{ age:age}})
        if(findChar){
            res.status(200).send(findChar)
        }else{
            res.status(404).json({
                success:false,
                message: 'Character with that age not found'
            })
        }
    }

}
//7. search a movie by its id
const moviesInfo= async(req,res)=>{

    let id = req.params.id

    const movies = await Mos.findAll({where:{id:id}})

    if(movies.length>0){
        res.status(200).send(movies)
    }else{
        res.status(200).json({
            message:"This movie is not found"
        })
    }
}

//8. find all movies in Db
const allMovies = async(req,res)=>{

    const movies = await Mos.findAll({})

        if(movies.length>0){
            res.status(200).send(movies)
        }else{
            res.status(200).json({
                message:"No movies found on DB"
            })
        }
}

//9. Find movies by querys
const queryMovie = async(req,res)=>{

    let title = req.query.title
    let stars = req.query.stars
    let order = req.query.order

    if(title){
        const movie = await Mos.findOne({where:{title:title}})
        if(movie){
            res.status(200).send(movie)
        }else{
            res.status(404).json({
                message:"Movie not found"
            })
        }
    }

    if(stars){
        const movies = await Mos.findAll({where:{starts:stars}})
        if(movies.length>0){
            res.status(200).send(movies)
        }else{
            res.status(404).json({
                message:"Not movies found with those stars"
            })
        }
    }

    if(order){
        const movies = await Mos.findAll({order:[['creationdate',order]]})
        if(movies.length>0){
            res.status(200).send(movies)
        }else{
            res.status(404).json({
                message: "There is not movies to order by"
            })
        }
    }

}

module.exports = {
    addChar,
    getAllChar,
    getOneChar,
    updateChar,
    deleteChar,
    queryCharacters,
    moviesInfo,
    allMovies,
    queryMovie

}