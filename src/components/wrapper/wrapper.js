import axios from 'axios'
import { GlobalState } from '../../contexts/GlobalStateContext'
import Alert from '../../utils/alert'
import Footer from '../nav/footer'
import Nav from '../nav/nav'
import Header from './header'
import styles from './style/wrapper.module.css'



export default function Wrapper ({children}) {

    const {UI, alert} = GlobalState()

    // ---axios settings ------
    axios.defaults.baseURL = 'http://localhost:3000/api'
    axios.defaults.headers['content-type'] = 'application/json'

    return (
        <div className= {styles.wrapper} style= {{ backgroundColor: UI.bgColor, color: UI.color }}>
            <Header />
            {alert?.message && <Alert />}
            <div className= {styles.wrapper_nav}>
                {/* <Nav/> */}
            </div>
            <div className= {styles.wrapper_body}>
                {children}
            </div>
            <div className= {styles.wrapper_footer}>
                <Footer />
            </div>
        </div>
    )
}