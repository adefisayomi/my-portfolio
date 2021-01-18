import {Form, Button, Message} from 'semantic-ui-react'
import { useState, useEffect} from 'react'
import styles from './../styles/contact.module.css'
import {GlobalState} from './../src/contexts/stateprovider'
import {useRouter} from 'next/router'
import { v4 as uuid } from 'uuid';
import emailJs from 'emailjs-com'
import EmailValidator from 'email-validator'


const Contact = () => {

    const router = useRouter()

    const {UI} = GlobalState()

    const [form, setForm] = useState({email: '', name: '', company: '', subject: '', message: ''})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value}) 
    const restForm = () => setForm({email: '', name: '', company: '', subject: '', message: ''})

    const [err, setErr] = useState({isError: false, msg: ''})
    const [success, setSuccess] = useState(false)
    const [submiting, setSubmiting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validEmail = await EmailValidator.validate(form.email)
          if(!form.email || !form.name || !form.company || !form.message || !form.subject){
               setSubmiting(false)
               return setErr({isError: true, msg: 'All fields are required.'})
          }
          if(!validEmail){
               setSubmiting(false)
               return setErr({isError: true, msg: 'Email is invalid.'})
          }
          else{
               setSubmiting(true)
               setErr({isError: false, msg: ''})

               const templateParams = {
                    'name': form.name, 'email': form.email, 'message': form.message,
                    'subject': form.subject, 'company': form.company, 'date': new Date().toDateString()
               }
               emailJs.send('service_9p7axjp', 'template_psjeoop', templateParams, "user_Ivx6RGDFZ8p3Q1emROZo0").then(res => {
                    setSuccess(true)
                    setSubmiting(false)
                    restForm()
                    setTimeout(() => router.push('/'), 3000)
                    
               }, err => {
                    setSubmiting(false)
                    setErr({isError: true, msg: 'Error sending message'})
               })

          }
    }

    return (
        <div className= {styles.contact}>
            <h1>Get in touch</h1>
            <p>Please send your message below, i will get back to you at the earliest.</p>
            { success && <Message
                              key= {uuid()}
                            style = {{width: '100%', maxWidth: '600px'}}
                            success
                            header= 'Message sent successfully'
                            content="Thank you for the message will get back to you soonest."
                        />}
            <div className= {styles.form} style= {{display: success ? 'none' : 'block'}}>
                 <Form inverted= {UI.inverted} onSubmit= {handleSubmit} success= {success}>
               <Form.Input 
                    type= 'email'
                    placeholder= 'Email'
                    required
                    onChange= {getForm}
                    name= 'email'
                    value= {form.email}
               />
               <Form.Input 
                    type= 'text'
                    placeholder= 'Name'
                    onChange= {getForm}
                    name= 'name'
                    value= {form.name}
               />
               <Form.Group widths='equal'>
               <Form.Input
                    type= 'text'
                    placeholder= 'Subject'
                    icon= 'pencil alternate'
                    iconPosition= 'left'
                    onChange= {getForm}
                    name= 'subject'
                    value= {form.subject}
               />
               <Form.Input 
                    type= 'text'
                    placeholder= 'Company'
                    icon= 'warehouse'
                    iconPosition= 'left'
                    onChange= {getForm}
                    name= 'company'
                    value= {form.company}
               />
               </Form.Group>
               <Form.TextArea
                    placeholder= 'Your message...'
                    style= {{minHeight: 200}}
                    required
                    type= 'text'
                    onChange= {getForm}
                    name= 'message'
                    value= {form.message}
                    />
               <Button
                    type= 'submit'
                    content= 'send'
                    color= {UI.icon}
                    icon= {{name: 'send',
                    color: UI.inverted ? 'white' : 'blue'}}
                    loading= {submiting}
                    onClick= {handleSubmit}
                    />
               {err.isError && <Message
                              negative
                              style = {{width: '100%', maxWidth: '600px'}}
                              header= 'Error'
                              content= {err.msg}
                        />}
           </Form>
            </div>
         
        </div>
    )
}

export default Contact