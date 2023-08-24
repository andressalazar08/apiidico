module.exports = (sequelize, DataTypes)=>{

    const Gender = sequelize.define('Gender',{
        name:{
            type:DataTypes.STRING,
            primaryKey:true
        },
        image:{
            type:DataTypes.STRING

        }
    },
    {timestamps:false})


    return Gender
}