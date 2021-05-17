import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    link: String,
    title: String,
    description: String,
    image: String,
    date: {
        type: String,
        default: new Date().toDateString()
    }
})

if(mongoose.models.projects) {
    module.exports = mongoose.models.projects
}
else module.exports = mongoose.model('projects', projectSchema)
