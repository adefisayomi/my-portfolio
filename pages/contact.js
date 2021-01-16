import {Form, Button, Message} from 'semantic-ui-react'
import { useState} from 'react'
import styles from './../styles/contact.module.css'
import {GlobalState} from './../src/contexts/stateprovider'
import {useRouter} from 'next/router'
import { v4 as uuid } from 'uuid';


const Contact = () => {

    const router = useRouter()

    const {UI} = GlobalState()

    const [form, setForm] = useState({email: '', name: '', company: '', subject: '', message: ''})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
    const restForm = () => setForm({email: '', name: '', company: '', subject: '', message: ''})

    const [serverErr, setServerErr] = useState('')
    const [success, setSuccess] = useState(false)
    const [submiting, setSubmiting] = useState(false)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmiting(true)
         const url = (process.env.NODE_ENV).toLowerCase() === 'development' ? 'http://localhost:3000/api/mail' : 'https://devby-clace.com/api/mail'
        console.log(url)

        const config = {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        }
        const res = await fetch(url, config)
        const data = await res.json()
         if(data.success === false) {
            setSubmiting(false)
            setServerErr(data.message)
         }
         else {
            setSubmiting(false)
            setServerErr('')
            setSuccess(true)
            restForm()
            setTimeout(() => router.push('/'), 3000 )
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
               {serverErr && <Message
                              negative
                              style = {{width: '100%', maxWidth: '600px'}}
                              header= 'Error'
                              content= {serverErr}
                        />}
           </Form>
            </div>
         
        </div>
    )
}

export default Contact