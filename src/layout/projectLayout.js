import styles from './../../styles/project.module.css'
import { Button} from 'semantic-ui-react'
import {GlobalState} from '../contexts/stateprovider'
import SingleProject from './singleProject'
import { useState } from 'react'
import {useRouter} from 'next/router'
import { useEffect } from 'react'


const ProjectLayout = ({image, details, title, date, id}) => {

    const {UI} = GlobalState()

    const router = useRouter()

    return(
        <div className= {styles.projectLayout}>
            <span className= {styles.projectLayout_image}>
                <img src= {image} alt=""/>
            </span>
            <span className= {styles.projectLayout_details}>
                <h1>{title}</h1>
                <p>{details.slice(0, 100)}...</p>
                <Button
                    content= 'view'
                    onClick={() => router.push(`/project/${id}`)}
                    color= {UI.btn}
                />
                <h4>{date}</h4>
            </span>
        </div>
    )
}

export default ProjectLayout