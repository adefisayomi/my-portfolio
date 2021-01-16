import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import StateProvider from './../src/contexts/stateprovider'
import AppWrapper from './../src/layout/appwrapper'


const App = ({Component, pageProps}) => {
  return (
    <StateProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </StateProvider>
  )
}
export default App
