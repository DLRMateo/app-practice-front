import {
  LayoutHydrated,
} from '@/components'

import '../style/global.css'
import ProviderQuery from '@/components/providerQuery'


export function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <ProviderQuery>
      <LayoutHydrated>
        {getLayout(<Component {...pageProps} />)}
      </LayoutHydrated>
    </ProviderQuery>
  )
}

export default App
