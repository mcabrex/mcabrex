const express = require('express');
const router = express.Router();

let userController = require('../controllers/userController')
let listController = require('../controllers/listController')

router.get('/', (req,res)=>{
    res.send('ayy lmao')
});

router.get('/users', userController.index);

router.get('/lists', listController.index)

module.exports = router;
