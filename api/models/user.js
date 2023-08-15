const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'api/.env'});

module.exports = (sequelize,DataTypes)=>{

    const User = sequelize.define("user",{

        id:{
            type:DataTypes.INTEGER,
            // allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            // allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING,
        }

    },



    {
        timestamps: false
    }
    )

    User.prototype.getJwtToken = function(){
        return jwt.sign({id:this.id}, process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRES_TIME
        });
    }


    return User
}