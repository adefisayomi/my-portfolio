import { useState } from 'react';
import Typical from 'react-typical'
import styles from './style/welcome_text.module.css'


export default function WelcomeText () {

    const [text, setText] = useState({intro: 'Hi! my name is Dolapo oluwole.', paragraph: 'welcome to my portfolio'})
    const step ={ 
        intro : ['Hi!', 1000, 'Hi! my name is Dolapo oluwole.', 2500],
        welcome: ['...', 3500, '...and welcome to my portfolio', 2500],
    }



    return (
        <div className= {styles.welcome}>
            <Typical
                style= {{ color: 'grey' }}
                steps={step.intro}
                loop={Infinity}
                wrapper="p"
            />
            <Typical
                style= {{ color: 'grey' }}
                steps={step.welcome}
                loop={Infinity}
                wrapper="p"
            />
        </div>
    )
}