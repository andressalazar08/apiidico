

module.exports = (sequelize, DataTypes)=>{
    const Char = sequelize.define("char", {
        image:{
            type: DataTypes.STRING,
            allownull: false
        },
        name:{
            type: DataTypes.STRING,
            primaryKey:true,
            allownull:false
        },
        age: {
            type: DataTypes.INTEGER
        },
        weight:{
            type: DataTypes.INTEGER
        },
        history:{
            type:DataTypes.TEXT
        },
        relatedmovieserie:{
            type: DataTypes.STRING
        }



    })

    return Char
}