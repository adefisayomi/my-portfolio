import styles from './style/create_blog.module.css'
import {GlobalState} from '../../contexts/GlobalStateContext'
import { Divider, Icon } from 'semantic-ui-react'
import { useState } from 'react'
import Modal from '../re-usables/modal'
import Markdown from 'markdown-to-jsx'
import { useRef } from 'react'

export default function CreateBlog () {

    const [form, setForm] = useState({})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
    const [preview, setPreview] = useState(false)
    const getImage = (e) => {
        const type = ['image/jpeg', 'image/png' ]
        if(e.target.files[0] && type.includes(e.target.files[0].type)) {
          setForm({...form, image: e.target.files[0]})  
        }
    } 
    

    const {UI} = GlobalState()

    return (
        <div className= {styles.create_blog}>
            <h1>create blog post</h1>
            <Divider />

            <div className= {styles.create_blog_body}>
                <div className= {styles.create_blog_main} style= {{ border: UI.border }}>
                    <BlogTemplate getForm= {getForm} setPreview= {setPreview} getImage= {getImage} form= {form} setForm= {setForm} />
                </div>
            </div>
            {preview && <Preview setPreview= {setPreview} form= {form} />}
        </div>
    )
}


export const BlogTemplate = ({form, getImage, setForm, setPreview, getForm}) => {

    return (
        <div className= {styles.blog_template}>
            <ul>
                <li>
                   <label>title
                       <input type="text" placeholder= 'post title...'/> 
                    </label> 
                </li>
                <li>
                   <label>description
                       <textarea type="text" placeholder= 'post description...'/> 
                    </label> 
                </li>
                <li className= {styles.blog_template_input_file}>
                   <label htmlFor= 'input-file'>banner
                       <input type="file" id= 'input-file' onChange= {getImage} />
                       <span>
                           <Icon onChange= {getImage} name= 'camera' link color= 'blue' />
                           {form && form.image && <Icon name= 'cancel' link color= 'red' onClick= {() => setForm({...form, image: ''})} />}
                        </span>
                    </label>
                    {form && form.image && <img src= {URL.createObjectURL(form.image)} alt="" />}
                </li>
                <MarkdownControl setForm= {setForm} setPreview= {setPreview} form= {form} getForm= {getForm} />
            </ul>
        </div>
    )
}


const Preview = ({form, setPreview}) => {

    return (
       <Modal width= '650px' onClose= {() => setPreview(false)}>
            <Markdown options={{ forceBlock: true }} className= {styles.preview}>
                {form.markdown}
            </Markdown>
        </Modal>
    )
}


const MarkdownControl = ({setPreview, form, getForm, setForm}) => {

    const marks = {
        h1: '# ', h2: '## ', h3: '## ', code: 	'```language \n ...code \n```', bold: '	**bold text**', itlc: '*italicized text*',
        bquote: '> ', ul: '-', ol: '1.', link: '[title](https://www.exa.com)', img: '![alt text](image.jpg)'
    }

    return (
        <div className= {styles.markdown}>
            <label htmlFor="markdown">markdown</label>
            <ul>
                {Object.entries(marks).map((mark, index) => (
                  <li key= {index} onClick= {() => setForm({...form, markdown: form.markdown + mark[1]})}> {mark[0]} </li>  
                ))}
                <li>
                    <Icon name= 'eye' color= 'blue' link onClick= {() => setPreview(true)} />
                </li>
            </ul>
               <textarea name="markdown" id= 'markdown' value= {form.markdown || ''} onChange= {getForm} />
        </div>
    )
}