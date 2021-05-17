import { Message } from "semantic-ui-react";
import {useState} from 'react'
import { useEffect } from "react";
import { GlobalState } from "../contexts/GlobalStateContext";
import styles from './style/alert.module.css'



export default function Alert () {

    const {alert, setAlert} = GlobalState()
    // // 
    useEffect(() => {
        setTimeout(() => setAlert({...alert, message: ''}), 10000)
    }, [alert])
    
    return(
        <>
        {alert.message && 
        <div className= {styles.alert}>
            <Message 
                success = {!alert.type || alert.type === 'success' ? true : false}
                error= {alert.type === 'error' ? true : false}
                content= {alert.message}
                style= {{ width: '100%', fontSize: '12px' }}
            />
        </div>}
        </>
    )
}