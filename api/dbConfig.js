require('dotenv').config({path: 'api/.env'});


// console.log(` INITIAL ${process.env.DB_USER}`)

module.exports = {
    HOST: 'localhost',
    USER: process.env.DB_USER,
    PASSWORD: process.env.PASSWORD,
    DB:process.env.DB,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}