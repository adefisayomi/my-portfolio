import {Loader} from 'semantic-ui-react'
import { GlobalState } from '../../contexts/GlobalStateContext'
import styles from './style/loading.module.css'


export default function loader ({title}) {

    const {UI} = GlobalState()

    return(
        <div className= {styles.loading} style= {{ color: UI.color, backgroundColor: UI.bgColor }}>
            <Loader 
                active 
                indeterminate
                size= 'small' 
                inverted= {UI.dark ? true : false}
                content= {title}
            />
        </div>
    )
}