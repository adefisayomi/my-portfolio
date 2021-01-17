import styles from './../../styles/project.module.css'
import { Button} from 'semantic-ui-react'
import {GlobalState} from '../contexts/stateprovider'
import SingleProject from './singleProject'
import { useState } from 'react'
import { useEffect } from 'react'


const ProjectLayout = ({image, link, details, title, open, close, openState, date}) => {

    const {UI} = GlobalState()

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
                    onClick={open}
                    color= {UI.btn}
                />
                <h4>{date}</h4>
            </span>
                <SingleProject 
                close= {close}
                open= {open}
                openState= {openState}
                title= {title}
                details= {details}
                link= {link}
                image= {image}
            />
        </div>
    )
}

export default ProjectLayout