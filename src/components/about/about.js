import styles from './style/about.module.css'
import Modal from '../re-usables/modal'
import {List } from 'semantic-ui-react'


export default function About () {

    return (
        <Modal width= '550px'>
            <div className= {styles.about}>
                <img src="https://firebasestorage.googleapis.com/v0/b/ceder-project.appspot.com/o/Adefisayomi2.jpg?alt=media&token=94af3a54-5186-4dc8-8b4f-1768754e8e80" alt="" />
                <div>
                <List>
                    <List.Item style= {{fontSize: '13px' }}>About me
                        <List.List style= {{ color: 'grey', fontSize: '11px' }}>
                            <List.Item>
                                I'm a full-stack web developer with a tech stack of Javascript, node.js, React js, Next.js, express, HTML, CSS, SCSS, mongoose && MongoDB.
I hail from and currently live in Nigeria, Lagos.
I love reading, and learning new things especially things in the line of software development as I am currently learning python.
I generally love engaging in challenging tasks that can improve my knowledge and that of the people around me.
when I'm not coding I'm designing clothes.
                            </List.Item>
                        </List.List>
                    </List.Item>
                </List>
                <List bulleted>
                    <List.Item style= {{fontSize: '13px' }}>
                    Tech-stack
                    <List.List style= {{ color: 'grey', fontSize: '11px' }}>
                        <List.Item >Javascript</List.Item>
                        <List.Item >node && express-js</List.Item>
                        <List.Item >React-js</List.Item>
                        <List.Item >Next-js</List.Item>
                        <List.Item >Python</List.Item>
                        <List.Item >Flask</List.Item>
                    </List.List>
                    </List.Item>

                    <List.Item style= {{fontSize: '13px' }}>
                    certificates
                    <List.List style= {{ color: 'grey', fontSize: '11px' }}>
                        <List.Item href= 'https://freecodecamp.org/certification/adefisayomi/javascript-algorithms-and-data-structures' target= '_blank' >Free code camp -- JavaScript Algorithms and Data Structures</List.Item>
                        <List.Item href= 'https://freecodecamp.org/certification/adefisayomi/responsive-web-design' target= '_blank' >Free code camp -- Responsive Web Design</List.Item>
                    </List.List>
                    </List.Item>
                </List>
                </div>
            </div>
        </Modal>
    )
}