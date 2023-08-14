const db = require('../models');


//create main model
const Char = db.characters
const mos = db.movieseries

//1. create character

const addChar = async(req,res)=>{

    let info={
        image:req.body.image,
        name:req.body.name,
        age:req.body.age,
        weight: req.body.weight,
        history:req.body.history,
        relatedmovieserie: req.body.relatedmovieserie
    }

    const char = await Char.create(info)
    res.status(200).send(char)
}


//2. get all characters

const getAllChar = async(req,res)=>{

    let chars = await Char.findAll({
        attributes:[
            'image',
            'name'
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


module.exports = {
    addChar,
    getAllChar,
    getOneChar,
    updateChar,
    deleteChar
}