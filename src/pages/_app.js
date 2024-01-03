import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Nav from '../components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Nav/>
       
        <Component {...pageProps} />
      </Provider>
      {/* <Footer/> */}
    </>
  )
}
