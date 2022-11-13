import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import 'swiper/swiper-bundle.min.css';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
