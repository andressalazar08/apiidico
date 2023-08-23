//This is the model for the intermediary table
module.exports = (sequelize, DataTypes)=>{

    const Character_Movie = sequelize.define('Character__Movie',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }
    },
    {timestamps:false}
    )



    return Character_Movie
}
