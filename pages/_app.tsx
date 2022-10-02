import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Flower({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Flower
