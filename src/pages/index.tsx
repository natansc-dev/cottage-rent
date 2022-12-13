import "swiper/css/bundle";

import Head from "next/head";

import { Hero } from '../components/Hero'
import { Carousel } from '../components/Carousel'
import { Gallery } from '../components/Gallery';
import { Package } from "../components/Package";
import { Footer } from "../components/Footer";

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
        <Package />
        <Footer />
      </main>
    </>
  )
}
