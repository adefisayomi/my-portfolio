import Modal from '../re-usables/modal'
import styles from './style/blog.module.css'


export default function Blog () {

    return (
        <Modal width= '550px'>
            <div className= {styles.blog}>
            <h2>how to reverse a binary tree</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nisi. Repudiandae accusantium fugit rem harum nihil totam, deserunt reprehenderit nulla. Hic delectus dolorum quia quod architecto nisi repellat magni! Magni eius,...<a onClick= {() => router.push(`${router.asPath}/123`)}>Read more</a></p>
            </div>    
        </Modal>
    )
}