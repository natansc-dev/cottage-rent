import { styled } from "../../styles";


export const SectionHero = styled('section', {
  backgroundSize: 'cover',
  backgroundColor: '#f3f3f3',
  backgroundImage: `url(/bg-hero.jpg)`,
  backgroundRepeat: 'no-repeat',

  '&::before': {
    content: '',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    position: 'absolute',
    zIndex: 1,
  }
})

export const ContainerHero = styled('div', {
  maxWidth: '1120px',
  padding: '0 1rem',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
})

export const ContentHero = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
})

export const CardHero = styled('div', {
  width: '100%',
  maxWidth: '528px',
  padding: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.90)',
  borderRadius: '6px',
  boxShadow: '0px 10px 16px rgba(255, 255, 255, 0.30)',
  margin: '2rem 0',

  h1: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.4,
  },

  p: {
    fontSize: '1rem',
    lineHeight: 2,
    margin: '1.2rem 0',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const FormHero = styled('form', {
  label: {
    margin: 0,
    minWidth: 0,
    width: '100%',
    display: 'flex',
    fontSize: '0.8rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },

  input: {
    minHeight: '60px',
    color: 'black',
    backgroundColor: '#EFF3F7',
    borderRadius: '6px',
    flexGrow: 1,
    padding: '0 24px',
    height: 'auto',
    width: '100%',
    border: 0,
    marginBottom: '0.8rem',
  },

  'input + input': {
    marginTop: '1rem',
  },

  button: {
    border: 0,
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    height: 58,
    marginTop: '1.4rem',
    backgroundColor: "$primary",
    color: 'white',
    fontWeight: '700',
    fontSize: '1.2rem',
  }
})

export const FormGroup = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',

  variants: {
    media: {
      lg: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
      }
    }
  }
})