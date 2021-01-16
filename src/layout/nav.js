import {Icon} from 'semantic-ui-react'
import {GlobalState} from './../contexts/stateprovider'
import Link from 'next/link'
import styles from './../../styles/layout.module.css'
import {v4 as uuid} from 'uuid'

const Nav = () => {

    const navs = [
        {path: '/', name:'home', icon: 'home'},
        {path: '/project', name:'projects', icon: 'settings'},
        {path: '/blog', name:'blogs', icon: 'blogger b'},
        {path: '/contact', name:'contact', icon: 'envelope'}
    ]
    const social = [
        {icon: 'linkedin', path: ''},
        {icon: 'twitter', path: ''},
        {icon: 'instagram', path: ''},
        {icon: 'github', path: ''}
    ]

    const {toggleUI, UI} = GlobalState()

    return (
        <section className= {styles.nav}>
            <span>
                <img src= 'https://thumbs.dreamstime.com/b/side-portrait-handsome-young-black-man-leaning-wall-outside-close-up-92169422.jpg' alt="Profile picture"/>
                <h3>Adefisayomi</h3>
                <h4>FULL-STACK WEB DEVELOPER</h4>
            </span>
            
            <ul>
                {navs.map(nav => (
                    <Link href= {nav.path} key= {uuid()}>
                        <li>{nav.name} <Icon name= {nav.icon}/></li>
                    </Link>
                ))}
            </ul>

            <footer>
                <span>
                        <Icon
                            name= 'lightbulb outline'
                            color= {UI.inverted ? '' : 'blue'}
                            size= 'big'
                            link
                            onClick= {toggleUI}
                        />
                        <p>Toggle-UI</p>
                </span>
                <ul>
                    {social.map(nav => (
                        <Link href= {nav.path} key= {uuid()}><li><Icon name= {nav.icon} link size= 'large' /></li></Link>
                    ))}
                </ul>
                <p>
                © 2021 Developed by clace. All rights reserved
                </p>
            </footer>
            
        </section>
    )
}

export default Nav