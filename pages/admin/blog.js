import axios from 'axios'
import CreateBlog from '../../src/components/admin/createBlog'

// export async function getServerSideProps (ctx) {
//     console.log(ctx)
//     return
// // }
// export async function getServerSideProps(context) {
//     const res = await axios.get('/login')

//     if(res && res.data.username) {
//         return {
//             redirect: {
//               destination: '/',
//               permanent: false,
//             },
//           }
//     }
//     // return {
//     //   props: res.data, // will be passed to the page component as props
//     // }
//   }
export default function blog (props) {
    return <CreateBlog />
}