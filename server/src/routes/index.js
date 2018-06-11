const express = require('express');
const router = express.Router();

let userController = require('../controllers/userController')
let projectController = require('../controllers/projectController')

router.get('/', (req,res)=>{
    res.send('ayy lmao')
});

router.get('/users', userController.index);

router.get('/projects', projectController.index)

module.exports = router;
