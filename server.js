/**
 * Created by user on 1/8/2017.
 */
//dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var port =process.env.PORT || 3002;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://cobMDB:cob@ds054289.mlab.com:54289/cob');


//Exprepss
var app = express();
app.use(bodyParser.urlencoded( {extended: true}));
/*app.get('/', function (req, res) {
    res.send("working");
});*/
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//start server
app.listen(port, function () {
    console.log("Api is working on port 3002");
});
