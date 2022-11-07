const index = require('../data/index')
const db = require('../database/models')
const postsController = {
  agregarPost: function (req, res) {
    res.render('agregarPost', { title: 'Express' });
  },
  //hacer misma validacion que editar perfil//

  detallePost: function (req, res) {
    let post = {}
      for (let i = 0; i < index.posteos.length; i++) {
        if (req.params.id==index.posteos[i].id_posteo) { 
          post=index.posteos[i]
        }
      }
    console.log (req.params.id)
    res.render('detallePost', { post:post});
  },
  crearPost : function (req, res) {
    db.Posteo.create({
      id_usuario: req.session.usuario.id,
      texto: req.body.texto,
      texto_descriptivo: req.body.descriptivo,
      imagen: req.file.filename
    })
    .then((posteo)=> res.redirect('/posts/detallePost/'+posteo.id))
    
  }






}

module.exports = postsController;