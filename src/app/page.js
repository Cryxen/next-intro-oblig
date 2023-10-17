import Layout from './components/Layout'
import Navigation from './components/Navigation'
import styles from './page.module.css'

export default function Home({ Component, pageProps }) {
  return (
    <Layout>
      <Navigation />
    </Layout>
  )
}
