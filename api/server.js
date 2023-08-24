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

//1. Routes on characters
const routerChar = require('./routes/characterRoute')
app.use('/api', routerChar)

//2. Routes on movies
const routerMov = require('./routes/movieRoute')
app.use('/api', routerMov)

//3. Routes on gender
const routerGender = require('./routes/genderRoute')
app.use('/api', routerGender)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})