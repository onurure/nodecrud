const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Posts', PostSchema)