import { useRouter } from 'next/router'
import { memo } from 'react'
import WelcomeText from '../animation/welcomeText'
import Follower from '../re-usables/follower'
import styles from './style/home.module.css'



const Home = memo(() => {
    
    const router = useRouter()
    const paths = [
        {name: 'about', path: '/about'},
        {name: 'projects', path: '/projects'},
        {name: 'blogs', path: '/blogs'},
        {name: 'contact', path: '/contact'}
    ]

    return (
        <div className= {styles.home}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ceder-project.appspot.com/o/Adefisayomi2.jpg?alt=media&token=94af3a54-5186-4dc8-8b4f-1768754e8e80" alt="profile-picture" />
            <ul>
                {paths.map((path, index) => (
                   <li onClick= {() => router.push(path.path)} key= {index}>/{path.name}</li> 
                ))}
            </ul>
            <div className= {styles.home_welcome}>
               <WelcomeText /> 
            </div>
            <Follower />
        </div>
    )
})

export default Home