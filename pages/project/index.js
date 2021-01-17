import styles from './../../styles/project.module.css'
import ProjectLayout from '../../src/layout/projectLayout'
import useSwr from 'swr'
import {v4 as uuid} from 'uuid'
import {Modal, Header, Button, Icon} from 'semantic-ui-react'
import {useState} from 'react'
import fetcher from '../../src/layout/fetcher'
import LoadingPage from '../../src/layout/loadingPage'
import {useRouter} from 'next/router'


const Projects = () => {

    const url = (process.env.NODE_ENV).toLowerCase() === 'development' ? 'http://localhost:3000/api/project' : 'https://devbyclace.com/api/project'
    
    const {data, error, isValidating} = useSwr(url, fetcher)

    const [open, setOpen] = useState(false)
    const closeProject = () => setOpen(false)
    const openProject = () => setOpen(true)

    return(
        <div className= {styles.projects}>
            <div className= {styles.projects_header}>
                <h1>Some of my projects.</h1>
            </div>
            <div className= {styles.projects_body}>
                {
                    data && data.message ? 
                    data.message.map(data => (
                        <ProjectLayout
                        key= {uuid()}
                        date= {data.date}
                        open= {openProject}
                        title= {data.title}
                        details= {data.details}
                        link= {data.link}
                        image= {data.image}
                        close= {closeProject}
                        openState= {open}
                    />
                    )) : 
                   <LoadingPage />
                }
            </div>
        </div>
    )
}

export default Projects
