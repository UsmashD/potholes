const express = require('express');
const photoController = require('./../controllers/photoController');

const router = express.Router();


router.get(
    '/:photo',
    photoController.getPhoto);


module.exports = router;

