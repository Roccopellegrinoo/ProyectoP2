const data = require('../data/index')
const usersController = {
    miPerfil: function(req, res) {
        res.render('miPerfil', { data:data});
      },
    
   editarPerfil: function(req, res) {
        res.render('editarPerfil', { info:data.usuarios, indice:req.params.id});
      },
    
      detalleUsuario: function(req, res) {
        res.render('detalleUsuario', {  });
      },
    
      login: function(req, res) {
        res.render('login', {  });
      },
    
     register: function(req, res) {
        res.render('registracion', {  });
      },
    }
    
    module.exports = usersController