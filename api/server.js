const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bp = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();


// var corOptions = {
//     origin: 'http://localhost:8081'
// }




//middlewares
//corOptions
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//routers
const router = require('./routes/charRouter.js')
app.use('/api/characters', router )

//auth routes
const auth = require('./routes/auth.js')
app.use('/auth', auth)

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