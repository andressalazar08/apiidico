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

//Models integration to the db object
db.characters = require ('./characterModel.js')(sequelize, DataTypes)
db.movies = require('./movieModel.js')(sequelize, DataTypes);
db.character_movies = require('./characterMovieModel.js')(sequelize, DataTypes)




db.sequelize.sync({force:true})
.then(()=>{
    console.log('Resync on DB done!')
})

//Many to Many relationships
db.characters.belongsToMany(db.movies, {through: db.character_movies})
db.movies.belongsToMany(db.characters, {through:db.character_movies})

module.exports = db