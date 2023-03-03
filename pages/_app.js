import Header from '@/components/header'
import Rodape from '@/components/rodape'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Rodape/>
    </>
  )
}
