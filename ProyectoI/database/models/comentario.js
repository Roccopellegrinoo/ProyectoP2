module.exports = function(sequelize, DataTypes) {

    const Comentario = sequelize.define('Comentario', {
    // Model attributes are defined here
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
      
       
    }, {
    tableName: 'comentarios', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
    timestamps: true, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
    underscored: false, 
    });

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