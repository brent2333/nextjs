import '../styles/globals.css'
import Nav from '../src/components/nav/nav'
import Footer from '../src/components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div id="page-container">
      <Nav />
      <div id="content-wrap">
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
  </div>
  )
}

export default MyApp
