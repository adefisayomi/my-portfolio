import styles from './style/header.module.css'
import {Icon} from 'semantic-ui-react'


export default function Header ({index, projects}) {


    return (
        <div className= {styles.header}>
            <Icon 
                    name= 'linkify'
                    link
                    className= {styles.header_link}
                />
            <a href= { index && projects && projects.length > 0 ? projects[index].link : '#'} target= '_blank'>Live preview</a>
            <span className= {styles.header_counter}>
                {`${index + 1 || '0'} of -- ${projects.length || '0'} Projects --`}
            </span>
        </div> 
    )
}