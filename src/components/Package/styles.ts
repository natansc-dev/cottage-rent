import { styled } from "../../styles";

export const ContainerPackage = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '4rem 1.8rem 4rem 1.8rem',
  margin: '2rem auto',
  borderTop: '1px solid #E5ECF4',

  img: {
    width: 192,
    height: 'auto',
  },

  p: {
    margin: '1rem 0',
  },

  variants: {
    media: {
      lg: {
        maxWidth: 970,
      }
    }
  }
})

export const HeadingPackage = styled('div', {
  minWidth: 0,
  maxWidth: '490px',
  margin: '0 auto 4rem',
  textAlign: 'center',
  marginBottom: '2rem',

  h2: {
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.68,
    letterSpacing: 0.5,
  },

  p: {
    color: "$primary",
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: 2.22,
    marginBottom: '1rem',
  }
})

export const CarrosselPackage = styled('div', {
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

export const CardPackage = styled('div', {
  width: 318,
  padding: 38,
  border: '1px solid rgba(38, 78, 118, 0.1)',
  borderRadius: 6
})