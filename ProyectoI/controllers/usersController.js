const { usuarios } = require('../data/index');
const data = require('../data/index')
const usersController = {
    miPerfil: function(req, res) {
        res.render('miPerfil', { data:data, indice:req.params.id} );
      },
    
   editarPerfil: function(req, res) {
        res.render('editarPerfil', { info:data.usuarios, indice:req.params.id});
      },
    //// REVISAR DETTALLE
      detalleUsuario: function (req,res) {
        let id = req.params.id;
        let resultado = data.detalleUsuario(id);
        console.log(resultado); 
        return res.render('detalleUsuario', {data:usuarios.posteos});
       

    },
      login: function(req, res) {
        res.render('login', {  });
      },
    
     register: function(req, res) {
        res.render('registracion', {  });
      },
    }
    
    module.exports = usersController