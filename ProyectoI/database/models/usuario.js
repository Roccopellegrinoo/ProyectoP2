module.exports = function(sequelize, DataTypes) {

     
        let alias = "Usuario";


        let cols = {
    
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
    }
     
    let config = {
    tableName: 'usuario', 
    timestamps: true, 
    underscored: false, 
    };

    const Usuario = sequelize.define(alias, cols, config);

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
        models.Usuario.belongsToMany(models.Usuario, { 
            through: "seguidores",
            as: "Seguidos",
            foreignKey: "id_seguidor",
            otherKey: "id_seguido",
            timestamps: true
        })

    };

   
    return Usuario; 
}