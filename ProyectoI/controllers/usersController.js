const data = require('../data/index')
const usersController = {
    miPerfil: function(req, res) {
        res.render('miPerfil', { data:data});
      },
    
   editarPerfil: function(req, res) {
        res.render('editarPerfil', { data:data});
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