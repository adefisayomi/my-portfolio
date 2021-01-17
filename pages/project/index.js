import styles from './../../styles/project.module.css'
import ProjectLayout from '../../src/layout/projectLayout'
import useSwr from 'swr'
import fetcher from '../../src/layout/fetcher'
import LoadingPage from '../../src/layout/loadingPage'


const Projects = () => {
    const url = (process.env.NODE_ENV).toLowerCase() === 'development' ? 'http://localhost:5000/api/project' : 'https://devbyclace.com/api/project'
    
    const {data, error, isValidating} = useSwr(url, fetcher)

    return(
        <div className= {styles.projects}>
            <div className= {styles.projects_header}>
                <h1>Some of my projects.</h1>
            </div>
            <div className= {styles.projects_body}>
                <ProjectLayout />
                <ProjectLayout />
                <ProjectLayout />
            </div>
            
        </div>
        // <div className= {styles.projects}>
        //     {data && data.message ? 
        //     data.message.map(pro => (
        //        <ProjectLayout
        //             title= {pro.title}
        //             details= {pro.details}
        //         /> 
        //     ))
        //      : <LoadingPage/>}
            
        // </div>
    )
}

export default Projects