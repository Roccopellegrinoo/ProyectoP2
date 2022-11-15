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

search: function (req, res) {
  let texto = req.query.texto;

  db.Posteo.findAll({
    include: [
      {
        model: db.Usuario,
        as: 'comentarios_post',
        through: {
          attributes: ["texto"],
        },
      },
      {
        model: db.Usuario,
        as: 'usuario'
      }
    ],
    order : [["createdAt", "DESC"]],
    where: [
      {texto: {[op.like] : "%" + texto + "%"}}
    ]

  })
  .then((posteos) => {
    //res.send(posteos)
    res.render('resultadoBusqueda',  { posteos: posteos });
  })

}}
module.exports = indexController