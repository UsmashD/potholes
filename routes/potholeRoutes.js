const express = require('express');
const potholeController = require('./../controllers/potholeController');
const authController = require('./../controllers/authController');
const router = express.Router();


router
    .route('/nearMe')
    .get(potholeController.getPotholesNearUser)
    .post(potholeController.getPotholesNearUser);

router
    .route('/')
    .get(potholeController.getAll);
    
router.use(authController.protect);

router
    .route('/')
    .post(authController.protect,
        potholeController.uploadPotholePhoto,
        potholeController.resizePotholePhoto,
        potholeController.create);

router
    .route('/:id')
    .get(potholeController.getOne)
    .patch(potholeController.uploadPotholePhoto,
        potholeController.resizePotholePhoto,
        potholeController.update)
    .delete(potholeController.delete);

  module.exports = router;