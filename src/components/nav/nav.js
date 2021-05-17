import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";
import styles from './style/nav.module.css'



export default function Nav () {

    const router = useRouter()

    return (
        <div className= {styles.nav}>
          <span>
            <Icon 
                name= 'home'
                color= 'black'
                circular
                link
                onClick= {() => router.push('/')}
            />
        </span>  
        </div>
        
    )
}