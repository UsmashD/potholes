const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();


router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router
    .route('/')
    .get(userController.getAll)
    .post(userController.create);

router
    .route('/:id')
    .get(userController.getOne)
    .patch(userController.update)
    .delete(userController.delete);

  module.exports = router;