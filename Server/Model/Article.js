const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Article Schema
 */
let Article = new Schema({
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    image: { type: String, default: '' },
    date_add: {type: Date},
    date_update : {type: Date},
    author : {type : Schema.ObjectId, ref:'users'},
  });
  
  module.exports = Article ;