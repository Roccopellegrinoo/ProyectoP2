const index = require('../data/index')
const db = require('../database/models')
const postsController = {
  agregarPost: function (req, res) {
    if(req.session.usuario){
      res.render('agregarPost', { title: 'Express' });
    }
    else{
      res.redirect('/users/login')
    }
  },
  //hacer misma validacion que editar perfil//

  detallePost: function (req, res) {
    db.Posteo.findOne({
      include: {
        all: true, 
        nested: true
      }
    },{
      where: {
        id: req.params.id
      }
    })
    .then((post)=> {
     // res.send(post)
      res.render('detallePost', { post:post});
    })
  },
  crearPost : function (req, res) {
    db.Posteo.create({
      id_usuario: req.session.usuario.id,
      texto: req.body.texto,
      texto_descriptivo: req.body.descriptivo,
      imagen: req.file.filename
    })
    .then((posteo)=> res.redirect('/posts/detallePost/'+posteo.id))
    
  },
  agregarComentario : function (req, res) {

    db.Comentario.create({
      id_post: req.params.id, 
      id_usuario: req.session.usuario.id,
      texto: req.body.comentario,
    })
    .then(()=> res.redirect('/posts/detallePost/'+req.params.id))
  }






}

module.exports = postsController;