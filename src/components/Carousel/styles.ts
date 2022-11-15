import { styled } from "../../styles";


export const SectionCarousel = styled('section', {
  backgroundColor: '#ffffff',
  padding: '4rem 0',
})

export const ContainerCarousel = styled('div', {
  minWidth: 0,
  width: '100%',
  maxWidth: '100%',
  paddingLeft: '1.8rem',
  paddingRight: '1.8rem',
  margin: '0 auto',

  variants: {
    media: {
      lg: {
        maxWidth: '970px',
      }
    },
  },
})

export const GridCarousel = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gridTemplateColumns: 'unset',

  variants: {
    media: {
      lg: {
        gap: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }
    },
  },
})

export const GridLeftContent = styled('div', {
})

export const DescritionCarousel = styled('div', {
  minWidth: 0,
  maxWidth: '490px',
  margin: '0 auto 4rem',
  textAlign: 'center',

  h2: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: 0.5,
  },

  p: {
    color: "#343D48",
    fontSize: '1rem',
    lineHeight: 2.06,
    marginBottom: '1rem',
  },

  variants: {
    media: {
      lg: {

        h2: {
          fontSize: '2rem',
          textAlign: 'left'
        },

        p: {
          marginTop: '2rem',
          textAlign: 'left'
        }
      }
    },
  },
})

export const FeaturesCarousel = styled('div', {
  margin: 0,
  minWidth: 0,
  gap: '2.6rem 1.4rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',

  variants: {
    media: {
      md: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'center',
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

export const GridRightContent = styled('div', {
  margin: 0,
  minWidth: 0,
  position: 'relative',
  marginTop: '48px',
  maxWidth: '100%',

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
