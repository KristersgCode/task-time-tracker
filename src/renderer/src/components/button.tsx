type ButtonProps = {
  label: 'Play' | 'Pause' | 'Stop' | 'Export'
  onClick: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
  // const iconPaths = {
  //   Play: require('../assets/icons/play.svg').default,
  //   Pause: require('../assets/icons/pause.svg').default,
  //   Stop: require('../assets/icons/stop.svg').default,
  //   Export: require('../assets/icons/export.svg').default
  // }

  return (
    <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {/* <img src={iconPaths[label]} alt={label} /> */}
      {/* <img src={iconPaths[label]} alt={label} /> */}
      {label}
    </button>
  )
}
