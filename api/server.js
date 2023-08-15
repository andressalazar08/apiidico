const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bp = require('body-parser')

const app = express();


// var corOptions = {
//     origin: 'http://localhost:8081'
// }




//middlewares
// app.use(cors(corOptions))
app.use(express.json())


//routers
const router = require('./routes/charRouter.js')
app.use('/api/characters', router )

//simple api test
app.get('/', (req,res)=>{
    res.json({
        message:'API for IDICO connected - Andres Salazar'
    })
})

const PORT = process.env.PORT



app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})