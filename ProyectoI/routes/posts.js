const postsController = require('../controllers/postsController')
const express = require('express');
const router = express.Router();

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/posteos'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});
router.get('/agregarPost',postsController.agregarPost);
router.post('/agregarPost',upload.single('imagen'),postsController.crearPost);
router.get('/detallePost/:id',postsController.detallePost);
router.post('/agregarComentario/:id',postsController.agregarComentario);
router.get('/eliminarPost/:id',postsController.eliminarPost);


module.exports = router;
