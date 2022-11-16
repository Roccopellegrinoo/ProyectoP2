module.exports = function(sequelize, DataTypes) {

    const Posteo = sequelize.define('Posteo', {
    // Model attributes are defined here
        id:{
            autoIncrement: true,
            primaryKey:true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
    
        id_usuario:{
            type: DataTypes.INTEGER
        },
       texto:{
            type: DataTypes.STRING
        },
        texto_descriptivo:{
            type: DataTypes.STRING
        },
        imagen:{
            type: DataTypes.STRING
        },
       
    }, {
    tableName: 'posteos', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
    timestamps: true, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
    underscored: false, 
    });

    Posteo.associate = (models) => {
        models.Posteo.belongsTo( models.Usuario, {
            as : 'usuario',
            foreignKey : 'id_usuario',
            onDelete: 'cascade' 
        })

        models.Posteo.hasMany( models.Comentario, {
            as : 'Comentarios',
            foreignKey : 'id_post',
            onDelete: 'cascade' 
        })

    }

    // `sequelize.define` also returns the model
    return Posteo; 
}