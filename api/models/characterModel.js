module.exports = (sequelize, DataTypes)=>{

    const Character = sequelize.define('Character',{
        image:{
            type:DataTypes.STRING,
            allownull:false
        },
        name:{
            type:DataTypes.STRING,
            primaryKey: true,
            allownull:false
        },
        age:{
            type: DataTypes.INTEGER
        },
        weight:{
            type:DataTypes.INTEGER
        },
        history:{
            type:DataTypes.TEXT
        }
    },
    {timestamps:false}
    )

    return Character

}