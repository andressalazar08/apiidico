module.exports = (sequelize, DataTypes )=>{

    const Movies = sequelize.define('Movies',{
        image:{
            type:DataTypes.STRING,

        },
        title:{
            type:DataTypes.STRING,
            primaryKey:true
        },
        creationDate:{
            type:DataTypes.DATE
        },
        stars:{
            type:DataTypes.INTEGER
        }


    },
    {timestamps:false}

    )
    return Movies

}

