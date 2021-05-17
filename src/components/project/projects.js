import Modal from '../re-usables/modal'
import styles from './style/projects.module.css'
import Loading from '../re-usables/loading'
import { useKeenSlider } from 'keen-slider/react'
import {useState} from 'react'
import Navigation from './navigation'
import Header from './header'
import Project from './project'
import { Divider } from 'semantic-ui-react'

export default function Projects ({projects}) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
          setCurrentSlide(s?.details().relativeSlide)
        },
      })

    return (
        <Modal width= '550px'>
            {projects && projects.length > 0 ? 
                <div className= {styles.projects}>
                    <Header index= {currentSlide} projects= {projects} />
                    <Divider />

                    <div ref={sliderRef} className= {`${styles.projects_slider} keen-slider`} id= 'slider'>
                        {projects.map((project, index) => (
                            <div key= {index} className= {`${styles.projects_slider_child} keen-slider__slide`}>
                                <Project project= {project} />
                            </div>
                        ))}
                    </div>

                    <Divider />
                    <Navigation
                        leftClick= {(e) => e.stopPropagation() || slider.prev()} 
                        rightClick= {(e) => e.stopPropagation() || slider.next()}
                    />
                </div> : 
                <Loading title= 'fetching projects' />
            }
            
        </Modal>
    )
}