import emailValidator from 'email-validator'
import SendMessage from '../../config/nodemailer'


export default async function (req, res) {
    try{
        const {name, message, email} = req.body 
        //---validate form ---
        if(!name) throw new Error ('name is required.')
        if(!email) throw new Error ('email is required.')
        if(email && !emailValidator.validate(email)) throw new Error ('email is invalid.')
        if(!message) throw new Error ('message is required.')
        // Enter data to my email
        await SendMessage({message: message, from: email, sender: name, to: 'claceey@gmail.com'})
        res.send({success: true, message: 'message successfuly sent.', data: null}) 
    }
    catch(err) {
        res.send({success: false, message: err.message, data: null})
    }
}