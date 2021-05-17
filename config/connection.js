import mongoose from 'mongoose'

const connection = {}

export default async function dbConnect () {
    try{
        if(!connection) {
                const connect = await mongoose.connect(process.env.DB_CONNECT, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
            if(connect && connect.connection.readyState === 1) {
                connection.connected = connect.connection.readyState
                console.log('Connection successfuly established' + connect.connection.readyState)
                return ({success: true, message: 'Connection successfuly established', data: null})
            }
            else throw new Error('Unable to create database connection')
        }
        else return
        
    }
    catch(err) {
        console.log(err.message)
        return ({success: false, message: err.message, data: null})
    }
    
}

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