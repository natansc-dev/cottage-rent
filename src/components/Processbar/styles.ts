import { styled } from "../../styles";


export const ProgressbarContainer = styled('section', {
  backgroundColor: '#F3F3',
  display: 'inline-flex',
  position: 'relative',

  svg: {
    height: '50px',
    width: '50px',
    maxWidth: '50px',
  },
  circle: {
    r: '35',
    cx: '40',
    cy: '40',
    fill: 'transparent',
    strokeWidth: '5px',
    strokeDasharray: '219.91',
  },
  button: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    left: '50%',
    padding: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    ':focus': {
      outline: 0,
    },
  },
})
