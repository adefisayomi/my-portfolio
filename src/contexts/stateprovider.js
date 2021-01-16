import { createContext, useState, useEffect, useContext, useReducer } from 'react'

const StateContext = createContext()

const StateContextProvider = ({children}) => {

    // theme
    const themeValue = {
        isLight: true, 
        dark: {
            bgColor: 'black',
            color: 'rgb(184, 184, 184)',
            btn: 'blue',
            icon: 'blue',
            inverted: true,
            white: 'black'
        },
        light: {
            bgColor: '#FBFAFD',
            color: 'black',
            btn: 'black',
            icon: 'black',
            inverted: false,
            white: 'white'
        },
    }
    const [theme, setTheme] = useState(themeValue)

    const UI = theme.isLight ? theme.light : theme.dark

    const toggleUI = () => { theme.isLight ? setTheme({...theme, isLight: false}) : setTheme({...theme, isLight: true}) }
    
    // ========================================================

    return (
        <StateContext.Provider value= {{ UI, toggleUI }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContextProvider

export const GlobalState = () => useContext(StateContext)