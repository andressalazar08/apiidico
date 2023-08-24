const db = require('../models');


const Gender =db.genders;


const addGender = async (req, res)=>{

    let genderInfo = {
        name:req.body.name,
        image:req.body.image
    }

    const gender = await Gender.create(genderInfo)

    res.status(200).json({
        message:"Gender created successfully"
    })
}


module.exports = {
    addGender
}