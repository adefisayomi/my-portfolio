import styles from './../../styles/project.module.css'
import Link from 'next/link'
import { Button, Icon } from 'semantic-ui-react'
import {GlobalState} from '../contexts/stateprovider'

const ProjectLayout = ({image, link, details, title}) => {

    const {UI} = GlobalState()

    return(
        <div className= {styles.projectLayout}>
            <div className= {styles.projectLayout_image}>
                <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e5646e1d2111200062ef3aa%2F0x0.jpg" alt="blog image"/>
            </div>
            <div className= {styles.projectLayout_details}>
                <h1>
                    {title}
                </h1>
                <p>{details}<Link to= '/project/:id'>Read more</Link></p>
                <Link href= '/project/${}'>
                    <Button animated color= {UI.btn}>
                        <Button.Content visible>View</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                            Open project
                        </Button.Content>
                    </Button>
                </Link>
                    
            </div>
        </div>
    )
}

export default ProjectLayout