const data = require('../data/index')
const db = require('../database/models')
const op = db.Sequelize.Op;
const indexController = {
home: function(req,res){
db.Posteo.findAll({
  include:[
    {
      model:db.Usuario,
      as:'comentarios_post',
      through:{
        attributes:["texto"],
      }
    },
    {
      model:db.Usuario,
      as:'usuario'
    }
  ]
})
.then((posteos)=>{
  res.render('index',{posteos: posteos});
})
},

search: function(req, res) {
  let texto = req.query.texto;
  let info = data.posteos;
 

  
    res.render('resultadoBusqueda', {results:data.usuarios ,posteo: data.posteos});
  }





}

module.exports = indexController