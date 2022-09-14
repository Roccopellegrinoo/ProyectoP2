const data = require('../data/index')
const indexController = {
home: function(req, res) {
  for (let i = 0; i < data.usuarios.length; i++) {
    console.log (data.usuarios[i].foto)
    
  }
    res.render('index', { info:data.usuarios,data: data.posteos });
  },

search: function(req, res) {
    res.render('resultadoBusqueda', { title: 'Express' });
  }





}

module.exports = indexController