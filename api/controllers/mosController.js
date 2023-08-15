const db = require('../models')

//import the model sequelized
const Mos = db.movieseries


//functions

//1. Add movie or serie

const addMoS = async(req,res)=>{

    let data = {
        image: req.body.image,
        title: req.body.title,
        creationdate:req.body.creationdate,
        starts:req.body.starts,
        relatedchar:req.body.relatedchar
    }

    const mos = await Mos.create(data)
    res.status(200).send(mos)
}

//2. Get all movies or series
const getAllMoS = async(req,res)=>{

    const mos = await Mos.findAll({})
    res.status(200).send(mos)
}


module.exports = {
    addMoS,
    getAllMoS
}