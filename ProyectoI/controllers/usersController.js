const usersController = {
    miPerfil: function(req, res) {
        res.render('miPerfil', {  });
      },
    
   editarPerfil: function(req, res) {
        res.render('editarPerfil', {  });
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