import AppContext from '../components/common/AppContext'
import AppLayout from '../components/common/AppLayout'

import { getCategoryList } from '../lib/api'

import '../assets/styles/main.less'

const MyApp = ({ Component, pageProps, categoryList }) => {
  return (
    <AppContext.Provider value={{ categoryList }}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppContext.Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  let categoryList = await getCategoryList()

  return {
    pageProps,
    categoryList
  }
}

export default MyApp