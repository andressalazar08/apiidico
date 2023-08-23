module.exports = (sequelize, DataTypes )=>{

    const Movies = sequelize.define('Movies',{
        image:{
            type:DataTypes.STRING,
            allownull:false
        },
        title:{
            type:DataTypes.STRING
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

