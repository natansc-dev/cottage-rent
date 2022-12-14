import { ContainerPackage, CarrosselPackage, HeadingPackage, CardPackage, CardBody, CardButton, CardFooter, CardHeader } from './styles'
import SwiperCore, { Autoplay, Pagination, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns'
import { ClockClockwise, ClockCounterClockwise } from 'phosphor-react';


SwiperCore.use([Autoplay, Pagination, EffectFade]);

interface PackagesProps {
  id: string
  start_at: string
  end_at: string
  title: string
}

export function Package() {
  const [packages, setPackages] = useState<PackagesProps[]>([])

  async function getPackages() {
    try {
      const response = await api.get('/packages/available')

      setPackages(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPackages()
  }, [])

  return (
    <ContainerPackage>
      <HeadingPackage>
        <p>Chácara</p>
        <h2>Pacotes</h2>
      </HeadingPackage>

      <CarrosselPackage>
        <Swiper
          slidesPerView={packages.length < 3 ? 1 : 3}
          spaceBetween={30}
        >
          {packages.map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <CardPackage>
                  <CardHeader>
                    {i.title}
                  </CardHeader>

                  <CardBody>
                    <time dateTime={format(new Date(i.start_at), 'yyyy-MM-dd')}><ClockClockwise size={18} /> {format(new Date(i.start_at), 'dd/MM/yyyy')}</time>
                    <time dateTime={format(new Date(i.end_at), 'yyyy-MM-dd')}><ClockCounterClockwise size={18} /> {format(new Date(i.end_at), 'dd/MM/yyyy')}</time>
                  </CardBody>

                  <CardFooter>
                    <CardButton>Reservar</CardButton>
                  </CardFooter>
                </CardPackage>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </CarrosselPackage>

    </ContainerPackage>
  )
}