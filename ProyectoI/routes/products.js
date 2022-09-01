const express = require('express');
const router = express.Router();

const productController = require('/product')

router.get('/index/:index',productController.index)
router.get('/agregarProduct/:agregarProduct',productController.buscarPorId)
router.get('/detalle/:detalle',productController.buscarPorGenero)
router.get('/miPerfil/:miPerfil',productController.buscarPorGenero)
router.get('/Login/Login',productController.buscarPorGenero)
router.get('/register/:register',productController.buscarPorGenero)
router.get('/resultadoDeBusqueda/:resultadoDeBusqueda',productController.buscarPorGenero)

module.exports=router;
