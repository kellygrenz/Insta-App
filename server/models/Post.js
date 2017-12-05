const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  title: String,
  caption: String
})

module.exports = mongoose.model('Post', Post)