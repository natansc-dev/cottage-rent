import { ProgressbarContainer } from "./styles";
import { Play } from 'phosphor-react'

interface ProgressbarProps {
  togglePlay: boolean
  handleClick: () => void
  currentWidth: number
}

export function Progressbar({ currentWidth, togglePlay, handleClick }: ProgressbarProps) {
  let c = Math.PI * (35 * 2); // 35 is circle r's value
  let pct = ((100 - currentWidth) / 100) * c;

  return (
    <ProgressbarContainer>
      <svg viewBox="0 0 80 80">
        <circle
          fill="transparent"
          stroke="rgba(255,255,255,0.2)"
        ></circle>
        <circle
          stroke="#fff"
          strokeDashoffset={pct}
        ></circle>
      </svg>

      <button>
        <Play size={32} />
      </button>
    </ProgressbarContainer>
  )
}