import { ContainerPackage, CarrosselPackage, HeadingPackage, CardPackage, CardBody, CardButton, CardFooter, CardHeader } from './styles'
import SwiperCore, { Autoplay, Pagination, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';
import { format, formatDistance } from 'date-fns'
import { Clock, ClockClockwise, ClockCounterClockwise } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR'


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
                    <div>
                      <span>Data de Entrada:</span>
                      <time dateTime={format(new Date(i.start_at), 'yyyy-MM-dd')}>
                        <ClockClockwise size={18} /> {format(new Date(i.start_at), 'dd/MM/yyyy')}
                      </time>
                    </div>

                    <div>
                      <span>Data de Saída:</span>
                      <time dateTime={format(new Date(i.end_at), 'yyyy-MM-dd')}>
                        <ClockCounterClockwise size={18} /> {format(new Date(i.end_at), 'dd/MM/yyyy')}
                      </time>
                    </div>

                    <div>
                      <span>Estadia:</span>
                      <time>
                        <Clock size={18} /> {formatDistance(new Date(i.start_at), new Date(i.end_at), {
                          locale: ptBR,
                        })}
                      </time>
                    </div>
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