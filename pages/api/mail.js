import nc from 'next-connect'
import EmailValidator from 'email-validator'
import NodeMailer from 'nodemailer'
import emailJs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_Ivx6RGDFZ8p3Q1emROZo0");

const mail = nc();

mail.post( async(req, res) => {

    const {email, name, company, message, subject} = req.body

        const isValidEmail = await EmailValidator.validate(email)

        if(!email || !name || !company || !message || !subject){
            res.status(200).json({ success: false, message: 'All fields are required.' })
            return
        }
        if(!isValidEmail){
            res.status(200).json({ success: false, message: 'Email is invalid.' })
            return 
        }
        else{
            const templateParams =  {'email': email,
                                     'name': name,
                                     'company': company,
                                     'message': message,
                                     'subject': subject,
                                     'date': new Date().toDateString()
                                    }

            emailJs.send('service_9p7axjp', 'template_psjeoop', templateParams).then(response => {
                res.status(200).json({success: true, message: response.text})
            }, err => {
                console.log({templateError: err})
            })
            
        }
})

export default mail