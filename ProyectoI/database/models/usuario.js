module.exports = function(sequelize, DataTypes) {

    const Usuario = sequelize.define('Usuario', {
    // Model attributes are defined here
        id:{
            autoIncrement: true,
            primaryKey:true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        nombre:{
            type: DataTypes.STRING
        },
        apellido:{
            type: DataTypes.STRING
        },
        usuario:{
            type: DataTypes.STRING
        },
        contrasenia:{
            type: DataTypes.STRING
        },
        fecha_nacimiento:{
            type: DataTypes.DATE
        },
        numero_documento:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        foto:{
            type: DataTypes.STRING
        }
    }, {
    tableName: 'usuario', //di la tabla no se llama en plural como el modelo, por ejemplo nuestra tabla de jugadores osea PLAYER en modelo se tiene que llamar PLAYERS LA TABLA
    timestamps: true, //me lo devuelve solo, en la base la tabla no tiene timestamps, serian si no tiene campos createdAT y updatedAT
    underscored: false, 
    });

    Usuario.associate = (models) => {

        models.Usuario.hasMany(models.Posteo, { foreignKey: "id_usuario", as: "Posteos"});

        models.Usuario.hasMany(models.Comentario, { foreignKey: "id_usuario", as: "Comentarios"});

        models.Usuario.belongsToMany(models.Usuario, { 
            through: "seguidores",
            as: "Seguidores",
            foreignKey: "id_seguido",
            otherKey: "id_seguidor",
            timestamps: true
        })

      

    };

    // `sequelize.define` also returns the model
    return Usuario; 
}