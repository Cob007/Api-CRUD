/**
 * Created by user on 1/8/2017.
 */
//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var productSchema = new mongoose.Schema({
    email: String,
    password: String,
    phone : Number
});



//return model
module.exports = restful.model('Products', productSchema);