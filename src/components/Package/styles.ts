import { styled } from "../../styles";

export const ContainerPackage = styled('section', {
  padding: '2rem 0 4rem 0',
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

  '.swiper-slide': {
    display: 'flex',
    justifyContent: 'center'
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

export const CardPackage = styled('div', {
  width: 318,
  padding: 38,
  border: '1px solid rgba(38, 78, 118, 0.1)',
  borderRadius: 6
})

export const CardHeader = styled('h2', {
  fontSize: '1.6rem',
  marginBottom: 38,
})

export const CardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  span: {
    fontSize: '0.975rem',
    color: '#343D48'
  },

  time: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',

    svg: {
      color: '$secundary'
    }
  }
})

export const CardFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 38,
})

export const CardButton = styled('button', {
  textAlign: 'center',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '10px',
  paddingBottom: '10px',
  color: 'white',
  backgroundColor: '$primary',
  border: '0',
  borderRadius: 6,
  fontSize: '1rem',
  padding: '12px 20px',
  cursor: 'pointer',
  lineHeight: 1.2,
  transition: 'all 0.25s',
  fontWeight: '500',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$secundary',
  }
})