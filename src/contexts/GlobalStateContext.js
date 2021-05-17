import { createContext, useState, useEffect, useContext, useReducer } from 'react'
import {themeObject, themeReducer} from './reducers/theme'


const StateContext = createContext()

export default function GlobalStateContext ({children}) {

    // ---set global alert
    const [alert, setAlert] = useState({message: '', type: ''})

    // ------theme -----
    const [theme, dispatchTheme] = useReducer(themeReducer, themeObject)
    const UI = theme.isDark ? theme.dark : theme.light
    const toggleUI = () => dispatchTheme({type: 'TOGGLE_UI'})


    return (
        <StateContext.Provider value= {{ UI, toggleUI, setAlert, alert }}>
            {children}
        </StateContext.Provider>
    )
}

export const GlobalState = () => useContext(StateContext)