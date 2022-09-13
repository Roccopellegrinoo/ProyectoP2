const data = require('../data/index')
const indexController = {
home: function(req, res) {
    res.render('index', { data: data.posteos });
  },

search: function(req, res) {
    res.render('resultadoBusqueda', { title: 'Express' });
  }





}

module.exports = indexController