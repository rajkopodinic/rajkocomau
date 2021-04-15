import Layout from '../components/Layout'
import '../styles/globals.css'
import GoogleTagManager from '../components/GoogleTagManager'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleTagManager>
  )
}

export default MyApp
