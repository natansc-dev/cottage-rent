import { ContainerPackage, CarrosselPackage, HeadingPackage, CardPackage } from './styles'
import SwiperCore, { Autoplay, Pagination, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

export function Package() {
  return (
    <ContainerPackage>
      <HeadingPackage>
        <p>Chácara</p>
        <h2>Pacotes</h2>
      </HeadingPackage>

      <CarrosselPackage>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
        >
          <SwiperSlide>
            <CardPackage>
              <h2>Pacote A</h2>
            </CardPackage>
          </SwiperSlide>
          <SwiperSlide>
            <CardPackage>
              <h2>Pacote B</h2>
            </CardPackage>
          </SwiperSlide>
          <SwiperSlide>
            <CardPackage>
              <h2>Pacote C</h2>
            </CardPackage>
          </SwiperSlide>
        </Swiper>
      </CarrosselPackage>

    </ContainerPackage>
  )
}