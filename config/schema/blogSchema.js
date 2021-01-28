const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:  String, 
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: String, default: new Date().toDateString() },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
})

mongoose.models = {}

const Blog = mongoose.model('blogs', blogSchema)

module.exports = Blog
