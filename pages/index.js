import styles from '../styles/Home.module.css'
import {Skills} from '../src/layout/about'
import About from '../src/layout/about'
import axios from 'axios'

const Home =  () => {
  axios.get('/project').then(data => {
    console.log(data)
  })

  return (
    <div className={styles.home}>
      <div className= {styles.home_welcome}>
        <h1>Full-stack web developer.</h1>
        </div>
        <About />
        <Skills />
    </div>
  )
}

export default Home