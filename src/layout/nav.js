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
                <img src= 'https://firebasestorage.googleapis.com/v0/b/devbyclace-portfolio-images.appspot.com/o/Adefisayomi2.jpg?alt=media&token=cb3da03d-4fcf-4f2e-a1db-283797be56e1' alt="Profile picture"/>
                <h3>dolapo oluwole</h3>
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