const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Post = require('./models/Post')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/INSTA_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

const firstPost = {title: 'sample post title', caption: 'image caption' }

app.post('/api/posts', (req, res) => {
  const {title, caption} = req.body
  const newPost = {title, caption}
  Post(newPost).save((err, savedPost) => {
    if (err) {
      res.json({ error: err})
    } else {
      res.json({ msg: 'SUCCESS', data: savedPost})
    }
  })
})

app.get('/api/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      res.json({ error: err})
    } else {
      res.json({ msg: 'SUCCESS', posts: posts})
    }
  })
})

const server = app.listen(port, () => console.log(`🍦 Running on port: ${port} 🍦 `))

module.exports = server
