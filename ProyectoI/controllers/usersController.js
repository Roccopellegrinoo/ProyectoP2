const usersController = {
    miPerfil: function(req, res) {
        res.render('agregarPost', { title: 'Express' });
      },
    
   editarPerfil: function(req, res) {
        res.render('detallePost', { title: 'Express' });
      },
    
      detalleUsuario: function(req, res) {
        res.render('detallePost', { title: 'Express' });
      },
    
      login: function(req, res) {
        res.render('detallePost', { title: 'Express' });
      },
    
     register: function(req, res) {
        res.render('detallePost', { title: 'Express' });
      },
    }
    
    module.exports = usersController