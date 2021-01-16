import styles from '../../styles/blog.module.css'
import { Icon, Input, Popup } from 'semantic-ui-react'
import { useState } from 'react'


const BlogLayout = () => {

    const [comment, setComment] = useState('')
    const getComment = (e) => setComment(e.target.value)


    return (
        <div className= {styles.blogSchema}>
            <div className= {styles.blogSchema_header}>
                <div className= {styles.blogSchema_author}>
                    <img
                        src="https://www.efinancialcareers.co.uk/binaries/content/gallery/efinancial-careers/articles/2018/12/Tangle.jpg"
                        alt="profile image"
                    />
                    <span>
                        <p>Solomon lane</p>
                        <p>Jul, 23 2010</p>
                    </span>
                </div>
                <div>
                    <Icon 
                        name= 'ellipsis horizontal'
                        link
                        circular
                    />
                </div>
            </div>
            <div className= {styles.blogSchema_body}>
                    <h3>The fowlers method</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni dolorem voluptate fugit, velit maiores architecto cum corrupti id. Porro ab tempora quae, quos totam ea a voluptatibus libero alias corrupti quas architecto mollitia assumenda necessitatibus sunt nisi quis. Esse laboriosam ipsa praesentium eum commodi nemo saepe, <a href="#">Read more...</a></p>
                   <img 
                    src="https://previews.123rf.com/images/alexshutter95/alexshutter951703/alexshutter95170300096/74997645-bearded-man-in-white-shirt-reading-a-big-book-lying-in-his-bedroom-happy-guy-is-holding-it-with-both.jpg"
                    alt="blogSchema image"
                /> 
            </div>
            <div className= {styles.blogSchema_action}>
                <div className= {styles.blogSchema_action_btn}>
                    <span>
                        <Popup
                            trigger={<Icon size='large' name='arrow up' link />}
                            content='Upvote'
                            position='top center'
                            inverted
                        />
                        <p></p>
                    </span>
                    <span>
                        <Popup
                            trigger={<Icon size='large' name='share square outline' link />}
                            content='Share'
                            position='top center'
                            inverted
                        />
                        <p></p>
                    </span>
                    <span>
                        <Popup
                            trigger={<Icon size='large' name='comments outline' link />}
                            content='Comments'
                            position='top center'
                            inverted
                        />
                        <p></p>
                    </span>
                </div>
                <Popup
                    trigger={<Icon size='large' name='ellipsis horizontal' link />}
                    content='more options'
                    position='top center'
                    inverted
                />
        
            </div>
                <div className= {styles.blogSchema_comments}>

                </div>
            <div className= {styles.blogSchema_comment_form}>
                <Input 
                    placeholder= 'Post your comment...'
                    fluid
                    icon= {{ name: 'bullhorn', color: 'blue', link: true, circular: true }}
                    onChange= {getComment}
                />
            </div>
        </div>
    )
}

export default BlogLayout