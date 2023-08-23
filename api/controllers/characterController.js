const db = require('../models');

const Character = db.characters;

//Main work

//1. Create a character
// use /addCharacter
const addCharacter = async (req,res)=>{
    let info = {
        image:req.body.image,
        name:req.body.name,
        age:req.body.age,
        weight: req.body.weight,
        history: req.body.history
    }

    const character = await Character.create(info)
    res.status(200).send(character)
}


module.exports= {
    addCharacter
}