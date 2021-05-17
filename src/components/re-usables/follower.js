import { Icon } from 'semantic-ui-react'
import { GlobalState } from '../../contexts/GlobalStateContext'
import styles from './style/follower.module.css'


export default function Follower () {

    const {UI} = GlobalState()
    const socials = [
        {name: 'facebook', icon: 'facebook', path: ''},
        {name: 'instagram', icon: 'instagram', path: 'https://www.instagram.com/adefisayomi.dev/'},
        {name: 'linkedin', icon: 'linkedin alternate', path: 'https://linkedin.com/in/dolapo-oluwole-6674ba1ab '},
        {name: 'twitter', icon: 'twitter', path: 'https://twitter.com/_adefisayomi'}
    ]

    return (
        <div className= {styles.follower}>
            <h4>Follow me: </h4>
            <div>
                {socials.map((social, index) => (
                    <a href= {social.path} target= '_blank' key= {index}>
                        <Icon 
                            name= {social.icon}
                            circular
                            inverted
                            // color= 'black'
                            link
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}