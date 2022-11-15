const indexController = require('../controllers/indexController')
var express = require('express');
const db = require('../database/models');
var router = express.Router();

router.get('/',indexController.home);

router.get('/resultadoDeBusqueda',indexController.search);

///router.get('/prueba',async(req, res) =>{
   /// res.send(await db.Usuario.findAll())
///})


module.exports = router;
