
var passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
/**
 * User Schema
 */

let User = new Schema({
  name: { type: String, default: '' },
  email: { type: String, required : true,unique : true},
  username: { type: String, default: '' },
  password: {type: String},
   role: {type: String}
});
User.plugin(passportLocalMongoose);
/*
module.exports = mongoose.model('User', User);
*/
module.exports=User;
