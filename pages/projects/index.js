import axios from 'axios'
import Projects from '../../src/components/project/project'


export async function getStaticProps (ctx) {

    try {
        const res = await axios.get('/projects')
        if(res && !res.data.success) throw new Error(res.data.message)
        return {
            props: {
                data: res.data.data
            },
            revalidate: 1
        }
    }
    catch(err) {
        return ({})
    }
}


export default function projects ({data}) {
    return <Projects data= {data} />
}