const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    link: String,
    title: String,
    details: String,
    image: String,
    date: {
        type: String,
        default: new Date().toDateString()
    }
})

mongoose.models = {}

const ProSchema = mongoose.model('projects', projectSchema)

module.exports = ProSchema
