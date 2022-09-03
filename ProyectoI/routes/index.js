const indexController = require('../controllers/indexController')
var express = require('express');
var router = express.Router();

router.get('/',indexController.home);

router.get('/resultadoDeBusqueda/:id',indexController.search);




module.exports = router;
