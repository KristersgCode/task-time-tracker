import PauseIcon from '../assets/icons/pause.svg'
import PlayIcon from '../assets/icons/play.svg'
import StopIcon from '../assets/icons/stop.svg'

type ButtonProps = {
  label: 'Play' | 'Pause' | 'Stop'
  onClick: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
  const iconPaths = {
    Play: PlayIcon,
    Pause: PauseIcon,
    Stop: StopIcon
  }

  return (
    <button
      onClick={onClick}
      className="
    flex
    bg-green-600
    p-2
    text-white
    rounded-md
    "
    >
      <img src={iconPaths[label]} alt={label} />
      {label}
    </button>
  )
}
