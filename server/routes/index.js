const express = require('express');
const router = express.Router();

let userController = require('../controllers/userController')
let listController = require('../controllers/listController')

router.get('/', listController.index);

router.get('/users', userController.index);

module.exports = router;
