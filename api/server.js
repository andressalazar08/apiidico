const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();


var corOptions = {
    origin: 'http://localhost:8081'
}

//middlewares
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req,res)=>{
    res.json({
        message:'API for IDICO connected - Andres Salazar'
    })
})

const PORT = process.env.PORT
const DB_USER = process.env.DB_USER


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT} and user is : ${DB_USER}`)
})