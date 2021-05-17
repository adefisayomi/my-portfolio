import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import GlobalStateContext from './../src/contexts/GlobalStateContext'
import Wrapper from '../src/components/wrapper/wrapper'
import 'keen-slider/keen-slider.min.css'
import useSWR, { SWRConfig } from 'swr'
import axios from 'axios'

export default function App ({Component, pageProps}) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        revalidateOnFocus: true,
        fetcher: (...args) => axios(...args).then(res => res.data.data)
      }}
    >
      <GlobalStateContext>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </GlobalStateContext>
    </SWRConfig>
  )
}