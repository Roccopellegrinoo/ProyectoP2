const index = require('../data/index')
const postsController = {
  agregarPost: function (req, res) {
    res.render('agregarPost', { title: 'Express' });
  },

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






}

module.exports = postsController;