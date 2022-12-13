import { styled } from "../../styles";

export const ContainerFooter = styled('footer', {
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
