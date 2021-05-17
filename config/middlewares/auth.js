import jwt from 'jsonwebtoken'
import ip from 'ip'

export default function Auth (req, res) {
    // check if the token is still valid
    const myIp = ip()
    console.log(myIp)
    jwt.verify(req.cookie.authToken, process.env.ACCESS_TOKEN, (err, valid) => {
        if(err || !valid) {
            return ({success: false, message: 'Unauthorized request', data: null})
        }
        else {
            return({success: true, message: null, data: null})
        }
    })
}