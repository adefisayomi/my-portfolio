import {Modal, Button, Header} from 'semantic-ui-react'
import styles from '../../styles/project.module.css'
import {useRouter} from 'next/router'

const SingleProject = ({open, details, title, openState, close, image, link}) => {

    const router = useRouter()

    return(
        <div className= {styles.single_project}>
        <Modal
            closeIcon
            open= {openState}
            onClose= {close}
            onOpen= {open}
            size= 'small'
            dimmer= 'blurring'
        >
            <Modal.Header style= {{textTransform: 'upperCase', fontWeight: 900}}>{title}</Modal.Header>
            <div className= {styles.single_project_image}>
            <img src= {image} alt=""/>  
            </div>
            <Modal.Content>{details}</Modal.Content>
            <Modal.Actions >
                <Button content= 'Close' negative onClick= {close}/>
                <a href= {link} target= '_blank'><Button content= 'Live Preview' primary onClick= {close}/></a>
                 
            </Modal.Actions>
        </Modal>
</div>
    )
}

export default SingleProject