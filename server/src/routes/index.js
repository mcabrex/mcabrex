const express = require('express');
const router = express.Router();

let userController = require('../controllers/userController')
let projectController = require('../controllers/projectController')

router.get('/', (req,res)=>{
    res.send('ayy lmao')
});

router.get('/users', userController.index);

router.get('/projects', (req,res)=> {
    res.json([
        {
            "title": "Crossover",
            "description": "Web application for building comics with friends",
        },
        {
            "title": "Jokes On You!",
            "description": "An android application for generating silly daily jokes!",
        }
    ])
})

module.exports = router;
