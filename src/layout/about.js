import styles from '../../styles/about.module.css'
import {Progress} from 'semantic-ui-react'
import {Icon} from 'semantic-ui-react'
import Link from 'next/link'
import {v4 as uuid} from 'uuid'

const About = () => {

    const navs = [
        {icon: 'linkedin', path: ''},
        {icon: 'twitter', path: ''},
        {icon: 'instagram', path: ''},
        {icon: 'github', path: ''}
    ]

    return (
        <div className= {styles.about}>
            <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            <div className= {styles.about_details}>
                <h1>A little about me.</h1>
                <p>I'm a full-stack web developer with a tech stack of Javascript, node.js, React js, Next.js, express, HTML, CSS, SCSS, mongoose && MongoDB.
I hail from and currently live in Nigeria, Lagos.
I love reading, and learning new things especially things in the line of software development as I am currently learning python.
I generally love engaging in challenging tasks that can improve my knowledge and that of the people around me.
when I'm not coding I'm designing clothes. </p>
                <ul>
                    <h4>reach me here.</h4>
                {navs.map(nav => (
                    <Link href= {nav.path} key= {uuid()}><li><Icon name= {nav.icon} link size= 'large' color= 'blue' /></li></Link>
                ))}
            </ul>
            </div>
        </div>
    )
}
export default About


export const Skills = () => {

    return(
        <div className= {styles.skills}>
            <header>
                <h1>My dev skills</h1>
            </header>
            <section>
                <div className= {styles.skills_front_end}>
                <h4>front-end</h4>
                <ul>
                    <li>javascript</li>
                    <li>html</li>
                    <li>css</li>
                    <li>scss</li>
                    <li>react js</li>
                    <li>next js</li>
                </ul>
            </div>
            <div className= {styles.skills_back_end}>
                <h4>back-end</h4>
                <ul>
                    <li>express</li>
                    <li>node js</li>
                    <li>python</li>
                    <li>django</li>
                    <li>mongoose</li>
                </ul>
            </div>
            </section>
            
            {/* <div> <h4>Javascript</h4> <span> <Progress percent={70} size='small' color= 'blue' progress active /></span></div> */}
        </div>
    )
}
