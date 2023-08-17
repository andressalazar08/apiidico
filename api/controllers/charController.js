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



module.exports = {
    addChar,
    getAllChar,
    getOneChar,
    updateChar,
    deleteChar,
    queryCharacters
}