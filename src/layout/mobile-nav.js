import styles from './../../styles/mobile.module.css'
import {Icon} from 'semantic-ui-react'
import {GlobalState} from './../contexts/stateprovider'
import { useState } from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'

const MobileNav = () => {
    const {UI, toggleUI} = GlobalState()

    const navs = [
        {path: '/', name:'home', icon: 'home'},
        {path: '/project', name:'projects', icon: 'settings'},
        {path: '/blog', name:'blogs', icon: 'blogger b'},
        {path: '/contact', name:'contact', icon: 'envelope'}
    ]

    const [animate, setAnimate] = useState(true)

    const doAnimation = () => {
        if(animate){
            setAnimate(false)
        }else{
            setAnimate(true)
        }
    }

    return (
        <>
        <div className= {styles.mobile_nav}>
            <span>
               <Icon
                name= 'lightbulb outline'
                color= {UI.inverted ? '' : 'blue'}
                size= 'big'
                link
                onClick= {toggleUI}
            />
            <h1>Devby-clace</h1>
            </span>
            <Icon 
                name= 'th large'
                link
                color= {UI.inverted ? 'blue' : ''}
                size= 'big'
                onClick= {doAnimation}
            />
        </div>

        <div className= {styles.mobile_nav_dropDown} style= {{transform: animate ? 'translateY(-100%)' : 'translateY(0%)'}}>
            <ul>
                {navs.map(nav => (
                    <Link href= {nav.path} key= {uuid()}>
                        <li onClick= {doAnimation}>{nav.name} <Icon name= {nav.icon}/></li>
                    </Link>
                ))}
            </ul>
        </div>
        </>
    )
}

export default MobileNav