import '../styles/globals.css'
import Nav from '../src/components/nav/nav'

function MyApp({ Component, pageProps }) {
  return (
    <div id="page-container">
      <Nav />
  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
