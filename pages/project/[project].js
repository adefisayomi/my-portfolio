import styles from './../../styles/project.module.css'
import useSwr from 'swr'
import {Modal, Button, Loader, Segment, Dimmer, Image} from 'semantic-ui-react'
import {useState} from 'react'
import fetcher from '../../src/layout/fetcher'
import {useRouter} from 'next/router'
import Projects from './index'
import { useEffect } from 'react'


const Project = () => {
    const router = useRouter()
    const id = router.query.para
    //const id = router.query ? router.query.project : ''

    const url = (process.env.NODE_ENV).toLowerCase() === 'development' ? `http://localhost:3000/api/project/${id}` : `https://devbyclace.com/api/project/${project}`
    
    const {data, error, isValidating} = useSwr(url, fetcher)

    const [open, setOpen] = useState(true)
    const closeProject = () => {
        setOpen(false)
        router.push('/project')
    }
    const openProject = () => setOpen(true)
    useEffect(() => {
        openProject()
    }, [])

    return(
        <Projects>
            {data && data.message ? 
               <Modal
                closeIcon
                open= {open}
                onClose= {closeProject}
                onOpen= {openProject}
                size= 'small'
                dimmer= 'blurring'
            >
                <Modal.Header style= {{textTransform: 'upperCase', fontWeight: 900}}>{data.message.title}</Modal.Header>
                <div className= {styles.single_project_image}>
                <img src= {data.message.image} alt=""/>  
                </div>
                <Modal.Content>{data.message.details}</Modal.Content>
                <Modal.Actions >
                    <Button content= 'Close' negative onClick= {closeProject}/>
                    <a href= {data.message.link} target= '_blank'><Button content= 'Live Preview' primary onClick= {closeProject}/></a>
                    
                </Modal.Actions>
            </Modal>  : <Modal
                closeIcon
                open= {open}
                onClose= {closeProject}
                onOpen= {openProject}
                size= 'small'
                dimmer= 'blurring'
            >
                <Modal.Header></Modal.Header>
                <Modal.Content>
                <Segment>
                <Dimmer active>
                    <Loader content='Loading Project' />
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment>
                </Modal.Content>
            </Modal>
            }
           
        </Projects>
    )
}

export default Project
