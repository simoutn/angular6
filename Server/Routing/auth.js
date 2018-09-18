
var express = require('express');

const router = require('express').Router();
const User = require('../Model/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
mongoose.connect('mongodb://localhost:27017/haythemdb');
const userModel = mongoose.model('users',User);

const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.post('/register', async(req,res) => {
    var post = req.body;
    const result = await userModel.create(post);
    res.send({user : result , msg : "saved"});
});
//
/*passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));*/
//



router.post('/login', async(req,res) => {
    const result = await userModel.findOne({ email: req.body.email });
    if (!result) {
        res.status(403).send({ message: 'user not found' });
    }
    if (result.password !== req.body.password) {
        res.status(402).send({ message: 'invalid password' });
    }
    result['password'] = '';
    delete result.password;
    const token = jwt.sign({data:result},'my_secret_key');
   /* res.redirect('/admin/newaricle');*/
   //res.redirect('http://localhost:4200/admin/newarticle');
    res.send({user : result, message: 'you are sign in', userToken: token });

});
/*router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });*/

router.post('/list', async(req,res) => {
  var post = req.body;
  const result = await userModel.find;
  res.send({user : result , msg : "saved"});
});

module.exports = router;
