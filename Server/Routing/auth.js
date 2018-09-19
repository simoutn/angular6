
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
    res.send({user : result, message: 'you are sign in', userToken: token });

});
router.post('/alluser', async(req,res) => {
  var post = req.body;
  const result = await userModel.find;
  res.send({user : result , msg : "liste des utilisateurs"});
});

module.exports = router;
