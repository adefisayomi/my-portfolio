import emailValidator from 'email-validator'
import User from '../../config/schema/user'
import dbConnect from '../../config/connection'
import bcrypt from 'bcryptjs'
dbConnect()


export default async function (req, res) {
    res.send({username: 'dolapo', id: 12344})
    // try{
    //     const {username, password} = req.body
    //     if(!username || !password || !emailValidator.validate(username)) throw new Error('Invalid request.')
    //     // check username and password
    //     const user = await User.findOne({email: username})
    //     if(!user) throw new Error ('invalid request.')

    //     const validPass = await bcrypt.compare(user.password)
    //     if (!validPass) throw new Error ('Invalid request.')
    //     res.send({success: true, message: 'Successfuly logged in', data: user})
    // }
    // catch(err) {
    //     res.send({success: false, message: err.message, data: null})
    // }
}