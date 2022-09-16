const data = require('../data/index')
const indexController = {
home: function(req, res) {

    res.render('index', { info:data.usuarios, data: data.posteos });
  },

search: function(req, res) {
  let texto = req.query.texto;
  let info = data.posteos;
 

  
    res.render('resultadoBusqueda', {info:data.usuarios ,posteo: data.posteos});
  }





}

module.exports = indexController