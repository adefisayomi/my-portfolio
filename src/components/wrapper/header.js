import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Header = () => {

    const {asPath} = useRouter()
    const [path, setPath] = useState('Home')

    // 
    useEffect(() => {
        const getPathname = () => asPath !== '/' && setPath(asPath.replace(/[/]/g, ''))
        getPathname()
    }, [asPath])

    return (
        <Head>
            <title>Dolapo oluwole | {path} </title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"/>
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-next-app" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
        </Head>
    )
    
}

export default Header