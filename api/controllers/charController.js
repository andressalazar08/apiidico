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


//todo:3. get single character


//todo:4. update char info

//todo:5. delete char by id


module.exports = {
    addChar,
    getAllChar,

}