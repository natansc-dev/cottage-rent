import { Carousel } from '../components/Carousel'
import { Hero } from '../components/Hero'
import "swiper/css/bundle";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
    </main>
  )
}
