const fetcher = url => fetch(url).then(r => r.json())
export default fetcher

// const fetcher = async ({method, url, body}) => {
//     const baseUrl = `https://devbyclace.com/api${url}`
//     const config = {
//         method: method,
//         body: JSON.stringify(body),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }
//     if(method){
//         const res = await fetch(baseUrl, config)
//         const data = await res.json()
//         return data
//     }
//     if(!method || method === 'GET'){
//         const res = await fetch(baseUrl)
//         const data = await res.json()
//         return data
//     }
// }

// export default fetcher