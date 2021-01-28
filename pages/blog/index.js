import styles from '../../styles/blog.module.css'
import BlogLayout from '../../src/layout/blogLayout'
import axios from 'axios'

const Blogs = () => {

    axios.get('/blog').then(data => {
        console.log(data)
    })

    return (
        <div className= {styles.blogs}>
            <BlogLayout />
            <BlogLayout />
            <BlogLayout />
        </div>
    )
}

export default Blogs