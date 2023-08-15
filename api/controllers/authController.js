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