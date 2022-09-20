const data = require('../data/index')
const usersController = {
    miPerfil: function(req, res) {
      let id = req.params.id;
      let usuario = {}
      for (let index = 0; index < data.usuarios.length; index++) {
        if (id==data.usuarios[index].id) { 
          usuario=data.usuarios[index]
        }
      }
        res.render('miPerfil', { usuario:usuario,posteos:data.posteos} );
      },
    
   editarPerfil: function(req, res) {
        res.render('editarPerfil', { info:data.usuarios, indice:req.params.id});
      },
    //// REVISAR DETTALLE
      detalleUsuario: function (req,res) {
        let id = req.params.id;
        let usuario = {}
        for (let index = 0; index < data.usuarios.length; index++) {
          if (id==data.usuarios[index].id) { 
            usuario=data.usuarios[index]
          }
        }
        console.log(data.posteos);
        res.render('detalleUsuario', {usuario,posteos:data.posteos});
  
    },
      login: function(req, res) {
        res.render('login', {  });
      },
    
     register: function(req, res) {
        res.render('registracion', {  });
      },
    }
    
    module.exports = usersController

