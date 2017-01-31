/**
 * Created by user on 1/8/2017.
 */
//dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

/*//MOngoDB
var url = "mongodb://cobMDB:cob@ds054289.mlab.com:54289/cob";
mongoose.connect('url', function(err){
        if (err){
            console.log("Unable to connect to the server", err);
        }else {
            console.log("Connection Secured");
        }
    } );*/
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
app.listen(3002);
console.log("Api is working on port 3002");