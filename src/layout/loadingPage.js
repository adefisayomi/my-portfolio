import styles from './../../styles/layout.module.css'
import {Loader, Dimmer, Image, Container} from 'semantic-ui-react'
import {useRouter} from 'next/router'

const LoadingPage = () => {
    const {pathname} = useRouter()
    const path = pathname.replace(/[/]/g, '').toUpperCase()


    return (
        <div className= {styles.loadingPage}>
              <Container>
                    <Dimmer active>
                      <Loader content= {path} />
                    </Dimmer>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' style= {{paddingTop: '30px' }}/>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' style= {{paddingTop: '30px' }}/>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' style= {{paddingTop: '30px' }}/>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' style= {{paddingTop: '30px' }}/>
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' style= {{paddingTop: '30px' }}/>
                  </Container>
        </div>
    )
}

export default LoadingPage