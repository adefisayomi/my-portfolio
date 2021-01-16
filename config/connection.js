const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.DB_CONNECT, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(connection => {
        console.log('Connection extablished')
    }).catch(err => {
        console.log(err)
    })
}