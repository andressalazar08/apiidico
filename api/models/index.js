const dbConfig = require('../dbConfig.js');
const dotenv =  require('dotenv').config();

const { Sequelize, DataTypes } =require('sequelize')

const sequelize = new Sequelize (
    process.env.DB_2,
    process.env.DB_USER_2,
    process.env.PASSWORD_2,
    {
        host: process.env.HOST_2,
        dialect: 'mysql',
        operatorAliases: false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:30000,
            idle: 10000
        }
    }

)

sequelize.authenticate()
.then(()=>{
    console.log('DB connected to fixes')
})
.catch(err=>{
    console.log('Erron on db: '+err)
})

const db={}



db.Sequelize = Sequelize
db.sequelize = sequelize

db.characters = require ('./characterModel.js')(sequelize, DataTypes)

db.sequelize.sync({force:true})
.then(()=>{
    console.log('Resync on DB done!')
})


module.exports = db