// Import Express and burger.js
var express = require('express');
var router = express.Router();

// create a route
router.get('/', function(req, res){
    res.render('index');
})

module.exports = router;
