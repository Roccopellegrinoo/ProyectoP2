module.exports = function(sequelize, DataTypes) {

    

        let alias = "Comentario";

        let cols ={
        id:{
            autoIncrement: true,
            primaryKey:true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
    
        id_post:{
            type: DataTypes.INTEGER
        },
       id_usuario:{
            type: DataTypes.INTEGER
        },
        texto:{
            type: DataTypes.STRING
        },
      }
       
     let config = {
    tableName: 'comentarios', 
    timestamps: true, 
    underscored: false, 
    };
    const Comentario = sequelize.define(alias, cols, config )

    Comentario.associate = (models) => {
        Comentario.belongsTo(models.Posteo,{
            foreignKey: 'id_post',
            as: 'post'
        })
        Comentario.belongsTo(models.Usuario,{
            foreignKey: 'id_usuario',
            as: 'usuario'
        })


       

    };

    // `sequelize.define` also returns the model
    return Comentario; 
}