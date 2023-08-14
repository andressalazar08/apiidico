module.exports = (sequelize, DataTypes)=>{

    const Typecontent = sequelize.define("typecontent",{

        name:{
            type:DataTypes.STRING,
            allownull:false
        },
        image:{
            type:DataTypes.STRING,
            allownull:false
        },
        relatedms:{
            type:DataTypes.STRING
        }


    })


    return Typecontent
}