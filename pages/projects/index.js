import axios from 'axios'
import useSWR from 'swr'
import Projects from '../../src/components/project/projects'


export async function getStaticProps() {
    const res = await axios.get('/projects')
    if(res && res.data && res.data.success) {
       const data = res.data.data
       return {
           props: {data}
       }
    }
    else {
        return {}
    }
  }

export default function projects ({data}) {

    // const {data} = useSWR('/projects', {initialData: []})

    return <Projects projects= {data} />
}