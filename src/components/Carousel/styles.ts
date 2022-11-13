import { styled } from "../../styles";


export const SectionCarousel = styled('section', {
  backgroundColor: '#ffffff',
  padding: '4rem 0',
})

export const ContainerCarousel = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
})

export const GridCarousel = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '2rem',

  variants: {
    media: {
      md: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      }
    },
  },
})

export const DescritionCarousel = styled('div', {
  marginBottom: '4.8rem',
  padding: '0 1rem',

  variants: {
    media: {
      md: {
        padding: 0,
      }
    },
  },


  h3: {
    fontSize: '2.2rem',
    fontWeight: '500',
    lineHeight: 1.6
  },

  p: {
    fontSize: '1rem',
    marginTop: '1rem',
    color: '#343D58',
    lineHeight: 2.08,
  }
})

export const FeaturesCarousel = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  padding: '0 1rem',
  gap: '2rem',

  variants: {
    media: {
      md: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: 0,
      }
    },
  },

  svg: {
    color: '#E13B2F',
  },

  h3: {
    fontSize: '1.3rem',
    lineHeight: 2.5,
    fontWeight: 500,
  },

  p: {
    fontSize: '1rem',
    lineHeight: 1.48,
    color: 'rgba(52,61,72,0.75)',
  }
})

export const SwiperContent = styled('div', {
  maxWidth: '18rem',
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    media: {
      md: {
        maxWidth: '40rem',
        padding: 0,
      }
    },
  },

  '.swiper-pagination-bullets': {
    bottom: 20,
  },
  '.swiper-pagination-bullet': {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 10,
    height: 10,
    opacity: 1,
    mx: 5,
    ':focus': {
      outline: 0,
    },
  },
  '.swiper-pagination-bullet-active': {
    backgroundColor: 'rgba(255,255,255,1)',
  },
})

export const ImageContent = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  '> img': {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
  },
  figcaption: {
    backgroundColor: "$primary",
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 30,
    borderRadius: 5,
    color: '#fff',
    padding: '25px 25px 25px 90px',

    h4: {
      lineHeight: 1,
      fontWeight: 'bold',
      fontSize: [14, 18],
      letterSpacing: 'heading',
    },
  },
})
