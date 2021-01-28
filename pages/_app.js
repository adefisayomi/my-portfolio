import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import StateProvider from './../src/contexts/stateprovider'
import AppWrapper from './../src/layout/appwrapper'
import axios from 'axios'


const App = ({Component, pageProps}) => {

  axios.defaults.baseURL = (process.env.NODE_ENV).toLowerCase() === 'development' ? 'http://localhost:3000/api' : 'https://devbyclace.com/api'
  axios.defaults.headers.post['content-type'] = 'application/json'
  axios.defaults.headers['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`
  // axios.interceptors.request.use(function (config) {
  //   config.headers.Authorization = process.env.ACCESS_TOKEN
  // })

  return (
    <StateProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </StateProvider>
  )
}
export default App
