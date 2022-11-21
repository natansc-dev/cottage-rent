import "swiper/css/bundle";

import { Hero } from '../components/Hero'
import { Carousel } from '../components/Carousel'
import { Gallery } from '../components/Gallery';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aluguel de Chácara | Chácara Kairós</title>
        <meta name="description" content="Chácara localizada em Piracicaba, excelente para diversas ocasiões, venha aproveitar essa chácara aconchegante, seja para o seu lazer ou para sua festa." />
      </Head>
      <main>
        <Hero />
        <Carousel />
        <Gallery />
      </main>
    </>
  )
}
