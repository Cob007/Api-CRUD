/**
 * Created by user on 1/8/2017.
 */
//dependencies
var express = require('express');

//router for our api
var router = express.Router();

//Models
var Product = require('../models/product');

//routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');
/*
testing if the api is connected
router.get('/products', function(req, res) {
    res.send('api is working');
});*/

//return router
module.exports = router;