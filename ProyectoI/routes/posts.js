const postsController = require('../controllers/postsController')
const express = require('express');
const router = express.Router();


router.get('/agregarPost',postsController.agregarPost);
router.get('/detallePost/:id',postsController.detallePost);

module.exports = router;
