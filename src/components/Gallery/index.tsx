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
import Image from 'next/image'

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


import { ContainerGallery, HeadingGallery, MasonryContentGallery, SectionGallery } from './styles'


export function Gallery() {
  return (
    <SectionGallery>
      <ContainerGallery media={{ '@lg': 'lg' }}>
        <HeadingGallery>
          <p>Chácara</p>
          <h2>Deixe te apresenta o seu condomínio</h2>
        </HeadingGallery>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry>
            <MasonryContentGallery>
              <figure>
                <Image
                  src={piscinaImg01}
                  alt=""
                />

                <figcaption>
                  Piscina
                </figcaption>
              </figure>
            </MasonryContentGallery>

            <MasonryContentGallery>
              <figure>
                <Image
                  src={churrasqueiraImg01}
                  alt=""
                />

                <figcaption>
                  Piscina
                </figcaption>
              </figure>
            </MasonryContentGallery>

            <MasonryContentGallery>
              <figure>
                <Image
                  src={salaoImg01}
                  alt=""
                />

                <figcaption>
                  Piscina
                </figcaption>
              </figure>
            </MasonryContentGallery>

            <MasonryContentGallery>
              <figure>
                <Image
                  src={quartoImg}
                  alt=""
                />

                <figcaption>
                  Piscina
                </figcaption>
              </figure>
            </MasonryContentGallery>

            <MasonryContentGallery>
              <figure>
                <Image
                  src={banheiroImg01}
                  alt=""
                />

                <figcaption>
                  Piscina
                </figcaption>
              </figure>
            </MasonryContentGallery>

            <MasonryContentGallery>
              <figure>
                <Image
                  src={visaoImg01}
                  alt=""
                />

                <figcaption>
                  Piscina
                </figcaption>
              </figure>
            </MasonryContentGallery>
          </Masonry>
        </ResponsiveMasonry>
      </ContainerGallery>
    </SectionGallery>
  )
}