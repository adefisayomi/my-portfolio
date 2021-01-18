import styles from './../../styles/project.module.css'
import ProjectLayout from '../../src/layout/projectLayout'
import useSwr from 'swr'
import {v4 as uuid} from 'uuid'
import fetcher from '../../src/layout/fetcher'
import LoadingPage from '../../src/layout/loadingPage'


const Projects = ({children}) => {

    const url = (process.env.NODE_ENV).toLowerCase() === 'development' ? 'http://localhost:3000/api/project' : 'https://devbyclace.com/api/project'
    
    const {data, error, isValidating} = useSwr(url, fetcher)

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
                        title= {data.title}
                        details= {data.details}
                        image= {data.image}
                        id= {data._id}
                    />
                    )) : 
                   <LoadingPage />
                }
            </div>
            {children}
        </div>
    )
}

export default Projects
