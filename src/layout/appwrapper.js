import Nav from './nav'
import styles from './../../styles/layout.module.css'
import Header from './header'
import {GlobalState} from './../contexts/stateprovider'
import MobileFooter from './mobile-footer'
import MobileNav from './mobile-nav'

const AppWrapper = ({children}) => {

    const {UI} = GlobalState()

    return(
        <>
        <Header />
        <section className= {styles.appWrapper} style= {{backgroundColor: UI.bgColor, color: UI.color}}>
            <aside>
               <MobileNav />
               <Nav />
            </aside>
            <main>
                {children}
            </main>
            <footer>
                <MobileFooter />
            </footer>
        </section>
        </>
    )
}

export default AppWrapper