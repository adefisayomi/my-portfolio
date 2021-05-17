import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { GlobalState } from '../../contexts/GlobalStateContext'
import styles from './style/upload.module.css'


export default function UploadProject () {

    const router = useRouter()
    const {UI, setAlert} = GlobalState()
    const [form, setForm] = useState({})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
    // const getImage = (e) => {
    //     const type = ['image/jpeg', 'image/png']
    //     if(e.target.files && type.includes(e.target.files[0].type)) {
    //         setForm({...form, image: e.target.files[0]})
    //     }
    // }
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try{
            const res = await axios.post('/projects', form)
            if(res && !res.data.success) throw new Error(res.data.message)
            setAlert({message: res.data.message})
            router.push('/')
        }
        catch(err) {
            setAlert({message: err.message, type: 'error'})
            return setLoading(false)
        }
    }

    return (
        <div className= {styles.upload_project}>
            <Form onSubmit= {handleSubmit}>
                <Form.Field>
                    <label htmlFor="title" style= {{ color: 'grey' }}>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder= 'project title...'
                        value= {form.title || ''}
                        onChange= {getForm}
                        style= {{outline: 'none', backgroundColor: 'black', 
                        fontSize: '12px', padding: '10px', color: 'grey', 
                        border: 'none', fontFamily: 'Roboto mono' }}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="link" style= {{ color: 'grey' }}>Link</label>
                    <input 
                        type="text" 
                        name="link" 
                        id="link"
                        placeholder= 'link'
                        value= {form.link || ''}
                        onChange= {getForm}
                        style= {{outline: 'none', backgroundColor: 'black', 
                         fontSize: '12px', padding: '10px', color: 'grey', 
                         border: 'none', fontFamily: 'Roboto mono' }}
                    />
                </Form.Field>
                {/* <span className= {styles.upload_project_file}> */}
                    {/* <label htmlFor="file" onChange= {getImage} > <Icon link name= 'plus' color= 'blue' circular /> <input onChange= {getImage} type="file" id= 'file' /></label> */}
                    <Form.Field>
                        <label htmlFor="image" style= {{ color: 'grey' }}>image url</label>
                        <input type="text"
                            name="image" 
                            placeholder= 'image url...'
                            value= {form.image || ''}
                            onChange= {getForm}
                            style= {{outline: 'none', backgroundColor: 'black',
                                fontSize: '12px', padding: '10px', color: 'grey',
                                border: 'none', fontFamily: 'Roboto mono' }}
                        />
                    </Form.Field>
                {/* </span> */}
                {form.image && <img src= {form.image} alt="" />}
                <Form.Field>
                    <label htmlFor="description" style= {{ color: 'grey' }}>Description</label>
                    <textarea 
                        type="text"
                        name="description" 
                        placeholder= 'description...'
                        value= {form.description || ''}
                        onChange= {getForm}
                        style= {{outline: 'none', backgroundColor: 'black',
                            fontSize: '12px', padding: '10px', color: 'grey',
                            border: 'none', fontFamily: 'Roboto mono' }}
                        />
                </Form.Field>
                <Button 
                    icon= {{ name: loading ? 'spinner' : 'cloud upload', loading: loading }}
                    color= 'black'
                    content= {loading ? 'uploading...' : 'upload'}
                    type= 'submit'
                />
            </Form>
        </div>
    )
}