import styles from './style/projects.module.css'
import { Icon, Divider} from 'semantic-ui-react'
import { useKeenSlider } from 'keen-slider/react'
import Modal from '../re-usables/modal'
import {useState} from 'react'
import { GlobalState } from "../../contexts/GlobalStateContext"


export default function Projects ({data}) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
          setCurrentSlide(s?.details().relativeSlide)
        },
      })
console.log(data)
    return(
        <Modal width= '550px'>
            <Header index= {currentSlide} data= {data && data || ''} />
            <Divider />

            <div ref={sliderRef} className= {`${styles.projects_slider} keen-slider`} id= 'slider'>
                {data && data.length > 0 && data.map((post, index) => (
                   <div key= {index}  className= {`${styles.projects_slider_child} keen-slider__slide`}>
                        <Project post= {post} />
                    </div> 
                ))}
            </div>

            <Divider />
            <Navigation 
                leftClick= {(e) => e.stopPropagation() || slider.prev()} 
                rightClick= {(e) => e.stopPropagation() || slider.next()}
            />
        </Modal>
    )
}

export const Project = ({post}) => {

    const {UI} = GlobalState()

    return (
        <div className= {styles.project_details}>
            <img src= {post && post.image ? post.image : 'https://image.flaticon.com/icons/png/512/1087/1087927.png'} alt="" />
            <div>
                <h1>{post.title || ''}</h1>
                <p>{post.description || ''}</p>
            </div>
        </div>
    )
}

export const Navigation = ({leftClick, rightClick}) => {

    const icons = [
        {name: 'arrow circle left', link: '', path: 'left'},
        {name: 'arrow circle right', link: '', path: 'right'},
    ]

    return (
        <div className= {styles.project_navigation}>
            {icons.map((icon, index) => (
                <span key= {index}>
                    <Icon
                        color= 'grey'
                        onClick= {icon.path === 'left' ? leftClick : rightClick}
                        link
                        name= {icon.name}
                        style={{ fontSize: '16px' }}
                    />
                </span>
            ))}
    </div> 
    )
}

export const Header = ({index, data}) => {

    const {UI} = GlobalState()

    return (
        <div className= {styles.project_header}>
            <Icon 
                    name= 'linkify'
                    link
                    // color= {UI.color}
                    className= {styles.project_link}
                />
            <a href= {data[index].link || ''} target= '_blank'>Live preview</a>
            <span className= {styles.project_header_counter}>
                {`${index + 1} of -- ${data.length || 0} Projects --`}
            </span>
        </div> 
    )
}