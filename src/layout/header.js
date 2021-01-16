import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Header = () => {

    const {pathname} = useRouter()

    const [path, setPath] = useState('Home')

    const getPathname = () => {
        if(pathname === '/'){
            setPath('Home')
        }else{
            setPath(pathname.replace(/[/]/g, ''))
        }
    }
    useEffect(() => {
        getPathname()
    }, [pathname])

    return (
        <Head>
            <title>Devby-clace | {path} </title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"/>
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-next-app" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
    )
    
}

export default Header