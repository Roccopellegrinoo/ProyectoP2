const data = require('../data/index')
const db = require('../database/models')
const bcrypt = require('bcryptjs')
const usersController = {
  miPerfil: function (req, res) {
    let id = req.params.id;
    let usuario = {}
    for (let index = 0; index < data.usuarios.length; index++) {
      if (id == data.usuarios[index].id) {
        usuario = data.usuarios[index]
      }
    }
    res.render('miPerfil', { usuario: usuario, posteos: data.posteos });
  },

  editarPerfil: function (req, res) {
    if (req.session.usuario) {
     return res.render('editarPerfil', { info: data.usuarios, indice: req.params.id });
    }
    res.redirect('/users/login')
  },
  //// REVISAR DETTALLE
  detalleUsuario: function (req, res) {
    let id = req.params.id;
    let usuario = {}
    for (let index = 0; index < data.usuarios.length; index++) {
      if (id == data.usuarios[index].id) {
        usuario = data.usuarios[index]
      }
    }
    console.log(data.posteos);
    res.render('detalleUsuario', { usuario, posteos: data.posteos });

  },
  login: function (req, res) {
    res.render('login', {});
  },
  sesion: function (req, res) {
    db.Usuario.findOne({
      where:{email:req.body.email}
    })
    .then((usuario)=>{
      
      if (usuario == null ) {
      res.locals.error = 'usuario invalido'
       return res.render('login', {});
      } 
      req.session.usuario = usuario
      res.locals.usuario = req.session.usuario;
      res.cookie('userId',usuario.id,{maxAge:1000*60*100})
      res.redirect('/')
    })
  },

  register: function (req, res) {
    res.render('registracion', {});
  },
  registerUser: function (req, res) {
    db.Usuario.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      usuario: req.body.username,
      contrasenia:bcrypt.hashSync(req.body.password,10),
      fecha_nacimiento: req.body.fecha,
      numero_documento: req.body.dni,
      email: req.body.email,
      foto: req.file.filename,
    })
    .then(()=>res.redirect('/users/login'))
  }

}

module.exports = usersController

