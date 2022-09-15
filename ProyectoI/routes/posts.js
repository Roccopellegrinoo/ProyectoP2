const postsController = require('../controllers/postsController')
const express = require('express');
const router = express.Router();


router.get('/agregarPost',postsController.agregarPost);
router.get('/detallePost/:Id',postsController.detallePost);

module.exports = router;
