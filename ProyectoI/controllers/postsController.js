const index = require('../data/index')
const postsController = {
  agregarPost: function (req, res) {
    res.render('agregarPost', { title: 'Express' });
  },

  detallePost: function (req, res) {
    let post = index.posteos.find(posteo=>posteo.id_posteo==req.params.id)
    console.log (req.params.id)
    res.render('detallePost', { post:post});
  },






}

module.exports = postsController;