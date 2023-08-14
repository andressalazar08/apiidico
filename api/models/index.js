const dbConfig = require('../dbConfig');
require('dotenv').config({path: 'api/.env'});

const { Sequelize, DataTypes } = require('sequelize');

// console.log(` INITIAL HERE ${process.env.DB_USER}`)

const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:'localhost',
        dialect:dbConfig.dialect,
        operatorAliases: false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('DB connected')
})
.catch(err =>{
    console.log("Error on db: " + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.characters = require('./charModel.js')(sequelize, DataTypes)
db.movieseries = require('./movieserieModel.js')(sequelize, DataTypes)
db.typecontents = require('./typecontentModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force:false })
.then(()=>{
    console.log('Resync on DB done!')
})

module.exports =db