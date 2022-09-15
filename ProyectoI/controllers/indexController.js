const data = require('../data/index')
const indexController = {
home: function(req, res) {

    res.render('index', { info:data.usuarios, data: data.posteos });
  },

search: function(req, res) {
  let texto = req.query.texto;
  let info = data.posteos;
  let post= {}
  
  for (let i = 0; i < info.length; i++) {
    if (info[i].texto == texto) {
      post = info[i]
   
    }
    
  }
    res.render('resultadoBusqueda', { posteo: post });
  }





}

module.exports = indexController