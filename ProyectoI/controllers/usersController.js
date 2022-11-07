const data = require('../data/index')
const db = require('../database/models')
const bcrypt = require('bcryptjs')
const usersController = {

  miPerfil: function (req, res) {
    //register
    let conHas = bcrypt.hashSync('123', 10);
    console.log(conHas);
    //login
    console.log(bcrypt.compareSync('123', conHas));
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
    if (req.body.password.length<3) {
      res.locals.error = 'La contrasena debe tener almenos tres caracteres'
           return res.render('login', {});
    }
    let filtro = {
      where: { email: req.body.email }
    }
    db.Usuario.findOne(filtro)
      .then((usuario) => {

        if (usuario != null) {
          let passEncriptada = bcrypt.compareSync(req.body.password, usuario.contrasenia)
          if (passEncriptada) {
            req.session.usuario = usuario.dataValues;
            res.locals.usuario  = usuario.dataValues;

            if (req.body.remember != undefined) {
              res.cookie('userId', usuario.dataValues.id, { maxAge: 1000 * 60 * 10 })
            }
            return res.redirect('/');
          } else {
            res.locals.error = 'La contrasena no coincide'
           return res.render('login', {});
          }

        }else {
          res.locals.error = 'El email no coincide'
           return res.render('login', {});
        }
        
        
        })
      .catch(error => {
        console.log(error)
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
      contrasenia: bcrypt.hashSync(req.body.password, 10),
      fecha_nacimiento: req.body.fecha,
      numero_documento: req.body.dni,
      email: req.body.email,
      foto: req.file.filename,
    })
      .then(() => res.redirect('/users/login'))
  }, 
  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie('userId')
    res.redirect('/users/login')
    
  }

}

module.exports = usersController

