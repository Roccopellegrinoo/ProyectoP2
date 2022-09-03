const usersController = require('../controllers/usersController')

var express = require('express');
var router = express.Router();

router.get('/miPerfil',usersController.miPerfil)
router.get('/editarPerfil',usersController.editarPerfil)
router.get('/detalleUsuario/:id',usersController.detalleUsuario)
router.get('/Login',usersController.login)
router.get('/register',usersController.register)

module.exports = router;
