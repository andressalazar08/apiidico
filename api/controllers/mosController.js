const db = require('../models')

//import the model sequelized
const Mos = db.movieseries
const Movies = db.movie

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

    //Add characters taken from the new movie
    const charSet=[
        ...new Set(
            data.relatedchar.split(',').sort()
        )
    ]

    for(i=0;i<charSet.length;i++){
        const charName = charSet[i].replace(" ","")
        await Movies.findOrCreate({
            where:{
                name: data.title,
                nameChar:charName

            }
        })
    }


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