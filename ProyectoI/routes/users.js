const usersController = require('../controllers/usersController')

var express = require('express');
var router = express.Router();
let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});

router.get('/login',usersController.login)
router.post('/login',usersController.sesion)
router.get('/register',usersController.register)
router.post('/register',upload.single('foto'),usersController.registerUser)
router.get('/editarPerfil/:id',usersController.editarPerfil)
router.get('/detalleUsuario/:id',usersController.detalleUsuario)
router.get('/miPerfil/:id',usersController.miPerfil)
router.get('/logout',usersController.logout)

module.exports = router;
