import styles from './../../styles/mobile.module.css'
import {Icon} from 'semantic-ui-react'
import Link from 'next/link'
import {v4 as uuid} from 'uuid'

const MobileFooter = () => {

    const navs = [
        {icon: 'linkedin', path: ''},
        {icon: 'twitter', path: ''},
        {icon: 'instagram', path: ''},
        {icon: 'github', path: ''}
    ]

    return (
        <div className= {styles.mobile_footer}>
            <ul>
                {navs.map(nav => (
                    <Link href= {nav.path} key= {uuid()}><li><Icon name= {nav.icon} link size= 'large' /></li></Link>
                ))}
            </ul>
            <p>
            © 2021 Developed by clace. All rights reserved
            </p>
        </div>
    )
}

export default MobileFooter