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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut omnis, necessitatibus, maiores maxime, placeat nostrum voluptates deleniti molestias atque aliquam impedit ullam officia cupiditate quia voluptatum. Eum corrupti officia animi ipsum quae. Dignissimos sit temporibus quas dolores? Molestias odio, numquam natus optio sapiente corporis soluta hic eaque, animi architecto distinctio </p>
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
