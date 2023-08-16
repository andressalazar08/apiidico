const db = require('../models');
const Users = db.users;
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'api/.env'});
//protection of routes

//checks if a user is authenticated or not
exports.isAuthenticatedUser = async(req, res, next)=>{
   const  token  = req.cookies['token']
   if(!token){
        return next(res.status(401).json({
            success:false,
            message:"Login first to access this resource"
        }))
   }
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   req.user = await Users.findByPk(decoded.id);
   next()
}
