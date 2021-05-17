import { Button, Form } from 'semantic-ui-react'
import styles from './style/admin.module.css'
import Model from '../re-usables/modal'
import { GlobalState } from '../../contexts/GlobalStateContext'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


export default function Admin () {

    const {UI, setAlert} = GlobalState()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post('/login', form)
            if(res && !res.data.success) throw new Error(res.data.message)
            setAlert({message: res.data.message})
            return router.push('/admin/edit')
        }
        catch(err) {
            setAlert({message: err.message, type: 'error'})
            return setLoading(false)
        }
    }

    return (
        <Model width= '500px'>
            <div className= {styles.admin}>
                <Form onSubmit= {handleSubmit}>
                    <input 
                        placeholder= 'username'
                        name= 'username'
                        type= 'text'
                        value= {form.username || ''}
                        onChange= {getForm}
                        style= {{outline: 'none', backgroundColor: 'black', 
                                            fontSize: '12px', padding: '10px', color: 'grey', 
                                            border: 'none', fontFamily: 'Roboto mono', marginBottom: '10px' }}
                    />
                    <input 
                        placeholder= 'password'
                        name= 'password'
                        type= 'password'
                        value= {form.password || ''}
                        onChange= {getForm}
                        style= {{outline: 'none', backgroundColor: 'black', 
                                            fontSize: '12px', padding: '10px', color: 'grey', 
                                            border: 'none', fontFamily: 'Roboto mono', marginBottom: '10px' }}
                    />
                    <Button 
                        type= 'submit'
                        content= {loading ? 'logging in' : 'login'}
                        icon=  {{ name: loading ? 'spinner' : 'lock', loading: loading }}
                        color= 'black'
                        style= {{ color: UI.color }}
                    />
                </Form>
            </div>
        </Model>
    )
}