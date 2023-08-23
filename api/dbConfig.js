const dotenv = require('dotenv').config();


module.exports ={
    HOST: process.env.HOST_2,
    USER: process.env.DB_USER_2,
    PASSWORD: '',
    DB: process.env.DB_2,
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle: 10000
    }

}