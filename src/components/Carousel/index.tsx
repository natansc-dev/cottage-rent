import { ContainerCarousel, SectionCarousel, GridCarousel, DescritionCarousel, FeaturesCarousel, GridRightContent, GridLeftContent, ImageContent } from "./styles";

import { Toilet, WifiHigh, Drop, Balloon, Shower, Fire } from 'phosphor-react'

import Image from "next/image";

import SwiperCore, { Autoplay, Pagination, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Progressbar } from "../Processbar";

import piscinaImg01 from '../../assets/piscina01.png'
import piscinaImg02 from '../../assets/piscina02.png'
import piscinaImg03 from '../../assets/piscina03.png'
import churrasqueiraImg01 from '../../assets/churrasqueira01.png'
import churrasqueiraImg02 from '../../assets/churrasqueira02.png'
import salaoImg01 from '../../assets/salao01.png'
import salaoImg02 from '../../assets/salao02.png'
import quartoImg from '../../assets/quarto.png'
import banheiroImg01 from '../../assets/banheiro01.png'
import banheiroImg02 from '../../assets/banheiro02.png'
import visaoImg01 from '../../assets/visao01.png'
import visaoImg02 from '../../assets/visao02.png'

SwiperCore.use([Autoplay, Pagination, EffectFade]);

export function Carousel() {
  return (
    <SectionCarousel>
      <ContainerCarousel media={{ '@lg': 'lg' }}>
        <GridCarousel media={{ '@lg': 'lg' }}>
          <GridLeftContent>
            <DescritionCarousel media={{ '@lg': 'lg' }}>
              <h2>Um bom lugar para onde você pode construir sua memórias</h2>

              <p>Excelente chácara para diversas ocasiões, venha aproveitar essa chácara aconchegante, seja para o seu lazer ou para sua festa.</p>
            </DescritionCarousel>

            <FeaturesCarousel media={{ '@md': 'md' }}>
              <div>
                <WifiHigh size={32} />
                <h3>Wifi</h3>
              </div>

              <div>
                <Drop size={32} />
                <h3>Piscina</h3>
              </div>

              <div>
                <Toilet size={32} />
                <h3>Banheiros</h3>
              </div>
              <div>
                <Shower size={32} />
                <h3>Suítes</h3>
              </div>

              <div>
                <Balloon size={32} />
                <h3>Salão</h3>
              </div>

              <div>
                <Fire size={32} />
                <h3>Churrasqueira</h3>
              </div>
            </FeaturesCarousel>
          </GridLeftContent>

          <GridRightContent>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={piscinaImg01}
                    alt=""
                  />

                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>

                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={piscinaImg02}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={piscinaImg03}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={churrasqueiraImg01}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={churrasqueiraImg02}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={salaoImg01}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={salaoImg02}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={quartoImg}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={banheiroImg01}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={banheiroImg02}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={visaoImg01}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContent>
                  <Image
                    src={visaoImg02}
                    alt=""
                  />
                  <figcaption>
                    <div>
                      <h4>Sala Conjugada</h4>
                      <p>Apartamento</p>
                    </div>
                  </figcaption>
                </ImageContent>
              </SwiperSlide>
            </Swiper>
          </GridRightContent>
        </GridCarousel>
      </ContainerCarousel>
    </SectionCarousel>
  )
}