module.exports = function(sequelize, DataTypes) {

    
    let alias = "Posteo";

        let cols = {
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
    }
       
    
    let config = {
    tableName: 'posteos', 
    timestamps: true, 
    underscored: false
    };

    const Posteo = sequelize.define(alias, cols, config);


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