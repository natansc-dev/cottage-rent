import { styled } from "../../styles";

export const SectionGallery = styled('section', {
  padding: '2rem 0 4rem 0'
})

export const ContainerGallery = styled('div', {
  minWidth: 0,
  width: '100%',
  maxWidth: '100%',
  paddingLeft: '1.8rem',
  paddingRight: '1.8rem',
  margin: '0 auto',
})

export const HeadingGallery = styled('div', {
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
    mb: '1rem',
  }
})

export const MasonryContentGallery = styled('div', {
  figure: {
    position: 'relative',
    padding: '0.4rem',

    img: {
      width: '100%',
      height: 'auto'
    },

    figcaption: {
      color: 'white',
      position: 'absolute',
      left: 30,
      bottom: 20,
      fontWeight: 700,
      fontSize: '1.2rem',
      lineHeight: 1.68,
    }
  }
})