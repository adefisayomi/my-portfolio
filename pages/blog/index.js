import styles from '../../styles/blog.module.css'
import BlogLayout from '../../src/layout/blogLayout'

const Blogs = () => {

    return (
        <div className= {styles.blogs}>
            <BlogLayout />
            <BlogLayout />
            <BlogLayout />
        </div>
    )
}

export default Blogs