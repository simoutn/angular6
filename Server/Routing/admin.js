const router = require('express').Router();
const Article = require('../Model/Article');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
mongoose.connect('mongodb://localhost:27017/haythemdb');
const articleModel = mongoose.model('articles',Article);

router.post('/admin/newarticle', async(req,res) => {
    var post = req.body;
    const result = await articleModel.create(post);
   // var id = result.author ;
    await userModel.findOneAndUpdate({_id: id},{ $addToSet: {articles: result._id}}).exec();
    res.send({article : result , msg : "saved"});
});
module.exports = router;