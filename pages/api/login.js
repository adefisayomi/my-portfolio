import jwt from 'jsonwebtoken'
import cookie from 'cookie'


export default async function (req, res) {
    try{
        const {username, password} = req.body
        if(!username || !password ) throw new Error('Invalid request.')
        // check username and password
        if(username !== process.env.USERNAME && password !== process.env.PASSWORD) throw new Error('Invalid credentials.')
        //    //create a token
        const user = {
            username,
            _id: process.env.ID
        }
        const authToken = await jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: '1h'})
             //set http only cookie that expires in 30 minutes
        res.setHeader('Set-Cookie', cookie.serialize('authToken', authToken, {
        httpOnly: true,
        maxAge: 60 * 60 // 1 hour
        }));
        res.json({success: true, message: null, data: user})
    }
    catch(err) {
        res.json({success: false, message: err.message, data: null})
    }
}