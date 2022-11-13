import { ContainerCarousel, SectionCarousel, GridCarousel, DescritionCarousel, FeaturesCarousel, GridRightContent, GridLeftContent, ImageContent } from "./styles";

import { Toilet } from 'phosphor-react'

import Image from "next/image";

import SwiperCore, { Autoplay, Pagination, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Progressbar } from "../Processbar";

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
            <DescritionCarousel>
              <h2>Um bom lugar para onde você pode construir sua história</h2>

              <p>Co-working offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in multiple cities.</p>
            </DescritionCarousel>

            <FeaturesCarousel media={{ '@md': 'md' }}>
              <div>
                <Toilet size={48} />
                <h3>4 Banheiros</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div>
                <Toilet size={48} />
                <h3>4 Banheiros</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div>
                <Toilet size={48} />
                <h3>4 Banheiros</h3>
                <p>Lorem ipsum dolor sit amet.</p>
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