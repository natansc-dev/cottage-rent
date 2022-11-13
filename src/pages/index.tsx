import "swiper/css/bundle";

import { Hero } from '../components/Hero'
import { Carousel } from '../components/Carousel'
import { Gallery } from '../components/Gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <Gallery />
    </main>
  )
}
