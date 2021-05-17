// import { useKeenSlider } from 'keen-slider/react'
// import { useState, useEffect } from 'react'
// import styles from './style/slider.module.css'
// import {Placeholder, Image, Icon} from 'semantic-ui-react'
// import { GlobalState } from '../../contexts/GlobalStateContext'

// const Slider = ({tag, dot= true, images}) => {

//   const {UI} = GlobalState()
//   const [loading, setLoading] = useState(true)
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [sliderRef, slider] = useKeenSlider({
//     slidesPerView: 3,
//     initial: 0,
//     slideChanged(s) {
//       setCurrentSlide(s.details().relativeSlide)
//     },
//   })

//   return (
//     <div ref={sliderRef} className= {`keen-slider ${styles.slider_container}`}>
//       {
//         images && images.length > 0 ?
//           images.map((img, index) => (
//             <div key= {index} className="keen-slider__slide" >
//                   <Image src= {img.url} alt="product-image" key={index} />
//             </div>
//           )) : 
//           <Placeholder fluid style= {{ minHeight: '50vh', minwidth: '100%' }} inverted= {UI.dark ? true : false}>
//             <Placeholder.Image/>
//           </Placeholder>
//       }
//       {
//         dot && slider && 
//           <div className= {styles.slider_dots}>
//               {[...Array(slider.details().size).keys()].map((index) => {
//                   return (
//                     <span className= {`${currentSlide === index ? styles.dot_active : styles.dot}`} key= {index}>
//                       <Icon
//                       name= 'circle'
//                       size='mini'
//                       key={index}
//                       onClick={() => slider.moveToSlideRelative(index)}
//                     />
//                     </span>
//                   )
//               })}
//           </div>
//       }
//   </div>
//   )
// }

// export default Slider
import { useKeenSlider } from "keen-slider/react"
import styles from './style/slider.module.css'

export default function Slider ({slides}) {
  const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 5 })

  return (
    <div ref={sliderRef} className= {`${styles.slider} keen-slider`}>
      {/* <div className="keen-slider__slide number-slide5">5</div> */}
    </div>
  )
}