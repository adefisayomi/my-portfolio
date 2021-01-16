import styles from './../../styles/layout.module.css'
import {Loader, Dimmer, Image} from 'semantic-ui-react'
import {useRouter} from 'next/router'

const LoadingPage = () => {
    const {pathname} = useRouter()
    const path = pathname.replace(/[/]/g, '')

    return (
        <div className= {styles.loadingPage}>
                <Dimmer active>
                    <Loader><h1>{path}</h1></Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </div>
    )
}

export default LoadingPage