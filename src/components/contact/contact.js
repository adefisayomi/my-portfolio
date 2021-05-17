import axios from 'axios'
import { useState } from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'
import { GlobalState } from '../../contexts/GlobalStateContext'
import styles from './style/contact.module.css'
import Modal from '../re-usables/modal'


export default function Contact () {

    const {UI, setAlert} = GlobalState()
    const [form, setForm] = useState({})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        // 
        try{
            const res = await axios.post('/contact', form)
            if(res && !res.data.success) throw new Error (res.data.message)
            setAlert({message: res.data.message, type: 'success'})
            setForm({})
            return setLoading(false)
        }
        catch(err) {
            setAlert({message: err.message, type: 'error'})
            return setLoading(false)
        }
    }
    
    return (
        <Modal width= '550px'>
            <div className= {styles.contact}>
                <h1 style= {{ color: 'grey' }}>Lets work together</h1>
                <Divider fitted />
                <Form onSubmit= {handleSubmit}>
                    <Form.Group widths= '16' style= {{ margin: '0', padding: '0' }}>

                        <Form.Field width= '6' style= {{ marginBottom: '15px' }} >
                            <label style= {{ color: UI.color }}>Name</label>
                            <input
                                placeholder= 'name'
                                name= 'name'
                                value= {form.name || ''}
                                onChange= {getForm}
                                style= {{outline: 'none', backgroundColor: 'black', 
                                        fontSize: '12px', padding: '10px', color: 'grey', 
                                        border: 'none', fontFamily: 'Roboto mono' }}
                            />
                        </Form.Field>

                        <Form.Field width= '10' style= {{ marginBottom: '15px' }} >
                            <label style= {{ color: UI.color }}>Email</label>
                            <input
                                placeholder= 'email'
                                name= 'email'
                                value= {form.email || ''}
                                onChange= {getForm}
                                style= {{outline: 'none', backgroundColor: 'black', 
                                        fontSize: '12px', padding: '10px', color: 'grey', 
                                        border: 'none', fontFamily: 'Roboto mono' }}
                            />
                        </Form.Field>

                    </Form.Group>

                    <Form.Group style= {{ margin: '0', padding: '0' }} widths= '16'>
                        <Form.Field width= '16' style= {{ marginBottom: '15px' }}>
                            <label style= {{ color: UI.color }}>Message</label>
                            <textarea 
                                placeholder= 'your message...'
                                name= 'message'
                                value= {form.message || ''}
                                onChange= {getForm}
                                style= {{outline: 'none',height: '80px', minHeight: '50px', fontFamily: 'Roboto mono', 
                                        fontSize: '11.5px', backgroundColor: 'black', color: 'grey', 
                                        border: 'none' }}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Button
                        type= 'submit'
                        content= {loading ? 'sending' : 'send'}
                        icon=  {{ name: loading ? 'spinner' : 'envelope', loading: loading }}
                        color= 'black'
                        style= {{ color: UI.color}}
                    />
                </Form>
            </div>
        </Modal>
    )
}