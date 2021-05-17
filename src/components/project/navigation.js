import styles from './style/navigation.module.css'
import {Icon} from 'semantic-ui-react'


export default function Navigation ({leftClick, rightClick}) {

    const icons = [
        {name: 'arrow circle left', link: '', path: 'left'},
        {name: 'arrow circle right', link: '', path: 'right'},
    ]

    return (
        <div className= {styles.navigation}>
            {icons.map((icon, index) => (
                <span key= {index}>
                    <Icon
                        color= 'grey'
                        onClick= {icon.path === 'left' ? leftClick : rightClick}
                        link
                        name= {icon.name}
                        style={{ fontSize: '17px' }}
                    />
                </span>
            ))}
    </div> 
    )
}