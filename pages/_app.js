import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import GlobalStateContext from './../src/contexts/GlobalStateContext'
import Wrapper from '../src/components/wrapper/wrapper'
import 'keen-slider/keen-slider.min.css'

export default function App ({Component, pageProps}) {
  return (
    <GlobalStateContext>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </GlobalStateContext>
  )
}