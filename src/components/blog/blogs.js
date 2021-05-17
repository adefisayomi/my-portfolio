import styles from './style/blogs.module.css'
import Modal from '../re-usables/modal'
import { Divider, Icon } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { GlobalState } from '../../contexts/GlobalStateContext'


export default function Blogs () {

    const {UI} = GlobalState()

    return (
        <Modal width= '700px'>
            <div className= {styles.blogs}>
                <header>
                    <h1>Blogs</h1>
                    <Divider />
                </header>
                <div className= {styles.blogs_body}>
                    <div className= {styles.blogs_main}>
                       <Blog />
                       <Blog />
                       <Blog />
                       <Blog />
                    </div>
                    <div className= {styles.blogs_aside}>
                        <div className= {styles.blogs_aside_notification} style= {{ border: UI.border }}> </div>
                    </div>
                </div>
            </div>
        </Modal>
        
    )
}


export const Blog = () => {

    const router = useRouter()

    return (
        <div className= {styles.blog}>
            <div className= {styles.blog_header}>
                <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <span>
                    <h3>@oluwole dolapo</h3>
                    <p>{new Date().toDateString()}</p>
                </span>
                <Icon 
                    name= 'caret down'
                    color= 'grey'
                    link
                    circular
                />
            </div>
            <Divider />

            <div className= {styles.blog_body}>
                <h2>how to reverse a binary tree</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, nisi. Repudiandae accusantium fugit rem harum nihil totam, deserunt reprehenderit nulla. Hic delectus dolorum quia quod architecto nisi repellat magni! Magni eius,...<a onClick= {() => router.push(`${router.asPath}/123`)}>Read more</a></p>
            </div>
        </div>
    )
}

