import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:  String, 
    password: String
})

if(!mongoose.models.user) {
    module.exports = mongoose.model('user', userSchema)
}
else mongoose.models.user
