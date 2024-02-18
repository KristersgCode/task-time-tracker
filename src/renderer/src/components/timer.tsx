import React, { useEffect, useRef } from 'react'

type TimerProps = {
  action: 'Play' | 'Pause' | 'Stop'
  time: number
  setTime: React.Dispatch<React.SetStateAction<number>>
}

export default function Timer({ action, time, setTime }: TimerProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (action === 'Play') {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setTime((prevTime) => prevTime + 1)
        }, 1000)
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (action === 'Stop') {
        setTime(0)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [action, setTime])

  const formatTime = () => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
      }}
    >
      <h1>Timer</h1>
      <h1>{formatTime()}</h1>
    </div>
  )
}
