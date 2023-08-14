module.exports = (sequelize,DataTypes)=>{

    const Movieserie = sequelize.define("movieserie",{

        image:{
            type: DataTypes.STRING,
            allownull:false
        },
        title:{
            type:DataTypes.STRING,
            allownull:false
        },
        creationdate:{
            type:DataTypes.DATEONLY
        },
        starts:{
            type:DataTypes.INTEGER
        },
        relatedchar:{
            type:DataTypes.STRING
        }

    })


    return Movieserie
}