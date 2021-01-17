import nc from 'next-connect'
import EmailValidator from 'email-validator'
import NodeMailer from 'nodemailer'

const mail = nc();
mail.post( async(req, res) => {

    const {email, name, company, message, subject} = req.body

    try{
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
            const Transporter = await NodeMailer.createTransport({
                host: 'smtp.gmail.com',
                auth: {
                    user: 'claceey@gmail.com',
                    pass: 'expand101SURE'
                }})
            Transporter.sendMail({
                from: email,
                to: 'devbyclace@gmail.com',
                subject: subject,
                html: `<div>
                            <p><b>NAME:</b> ${name}</p>
                            <p><b>COMPANY:</b> ${company}</p>
                            <p><b>EMAIL:</b> ${email}</p>
                            <p><b>MESSAGE:</b> ${message}</p>
                            <p><b>DATE:</b> ${new Date().toUTCString()}</p>
                        </div>`,}, (err, mail) => {
                            if(err){
                                res.status(200).json({success: false, message: 'Failure sending message.'})
                            }
                            else{res.status(200).json({success: true, message: 'Message successfuly sent.'})}
                        })
        }
    }
    catch(err){
        res.status(500).end({success: false, message: err})
    }
})

export default mail