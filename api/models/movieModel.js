module.exports = (sequelize,DataTypes)=>{

    const Moviemodel = sequelize.define("moviemodel",{

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
        nameChar:{
            type:DataTypes.STRING,
        }
    },{
        timestamps: false
    })


    return Moviemodel
}