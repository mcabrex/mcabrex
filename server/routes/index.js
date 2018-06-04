const express = require('express');
const router = express.Router();

let userController = require('../controllers/userController')

router.get('/', function(req, res) {
    res.redirect('/catalog');
});

router.get('/users', userController.index);

module.exports = router;
