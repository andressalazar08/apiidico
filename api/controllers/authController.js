const db = require('../models');

const Users = db.users;
const bcrypt = require('bcryptjs');
const sendToken = require('../utils/jwtToken');

exports.registerUser =async(req, res)=>{

    const { name, email, password } =req.body;

    // let salt = bcrypt.genSaltSync(10);
    // password = bcrypt.hashSync(password, salt)
    let passwordHash = await bcrypt.hash(password, 10)

    const user = await Users.create({
        name,
        email,
        password:passwordHash
    })
    sendToken(user, 200, res)
}


exports.loginUser =async(req, res)=>{

    const { email, password } = req.body;
    //checks if email and password is entered by user
    if(!email || !password){
        return res.status(401).json({
            success:false,
            message:"Please enter email & password"
        })
    }
    //finding user in database
    const user = await Users.findOne({where:{ email:email }});

    if(!user){
        return res.status(401).json({
            success:false,
            message:"Invalid Email"
        })
    }
    //Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched){
        return res.status(401).json({
            success:false,
            message:"Invalid Password"
        })
    }
    sendToken(user, 200, res)
}


exports.logout = async(req, res)=>{
    res.cookie('token', null, {
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message: 'Logged out'
    })
}


exports.allUsers = async(req, res, next)=>{

    const users = await Users.findAll();

    res.status(200).json({
        success:true,
        users
    })
}