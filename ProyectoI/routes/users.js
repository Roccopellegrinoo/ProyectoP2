const usersController = require('../controllers/usersController')

var express = require('express');
var router = express.Router();

router.get('/miPerfil',usersController.miPerfil)
router.get('/editarPerfil',usersController.editarPerfil)
router.get('/Login',usersController.login)
router.get('/register',usersController.register)
router.get('/detalleUsuario/:id',usersController.detalleUsuario)

module.exports = router;
