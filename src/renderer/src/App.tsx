import { useState } from 'react'
import Button from './components/button'
import { RadioButtonList } from './components/radio-button'
import Timer from './components/timer'

export function App() {
  const [action, setAction] = useState<'Play' | 'Pause' | 'Stop'>('Stop')
  const [time, setTime] = useState(0) // Manage time state here

  const [selectedOption, setSelectedOption] = useState<string>('Option 1') // This state tracks the initial selected option.
  // This state tracks the elapsed time for each option.
  type OptionTimes = { [key: string]: number }

  const [optionTimes, setOptionTimes] = useState<OptionTimes>({})
  console.log(optionTimes)
  const [startingDate, setStartingDate] = useState<Date | null>(null)
  const [options, setOptions] = useState<string[]>([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ])
  const handleAddOption = (newOption: string) => {
    const trimmedOption = newOption.trim()
    if (trimmedOption && !options.includes(trimmedOption)) {
      // Add the new option to the list of options
      setOptions((prevOptions) => [...prevOptions, trimmedOption])

      // Initialize the time for the new option in optionTimes
      setOptionTimes((prevTimes) => ({
        ...prevTimes,
        [trimmedOption]: 0 // Initialize time for the new option
      }))

      // Reset the input field
      setNewOptionName('')
    }
  }

  const handlePlay = () => {
    if (action !== 'Play') {
      setAction('Play')
      console.log('Play')
      setStartingDate(new Date()) // Capture the start time
    }
  }

  const handlePause = () => {
    if (action === 'Play' && startingDate) {
      const endTime = new Date()
      const startMilliseconds = startingDate.getTime()
      const elapsed = (endTime.getTime() - startMilliseconds) / 1000

      if (!isNaN(elapsed)) {
        // Check if elapsed is a number
        setOptionTimes((prevTimes) => ({
          ...prevTimes,
          [selectedOption]: (prevTimes[selectedOption] || 0) + elapsed
        }))
      } else {
        console.error('Elapsed time is NaN')
      }

      setAction('Pause')
      setStartingDate(null)
    }
  }

  const handleStop = () => {
    setAction('Stop')
    setStartingDate(null)
  }
  const [newOptionName, setNewOptionName] = useState('')

  return (
    <div
      className="flex
    flex-col
    items-center
    "
    >
      <Timer action={action} time={time} setTime={setTime} />
      <div
        style={{
          width: 400
        }}
      >
        <div>
          <input
            className="bg-gray-100 p-2 w-full rounded-md mb-3 border-none"
            type="text"
            value={newOptionName}
            onChange={(e) => setNewOptionName(e.target.value)}
          />
          <button
            className="
          bg-blue-500
          text-white
          p-2
          rounded-md
          w-full
          "
            onClick={() => handleAddOption(newOptionName)}
          >
            Add Option
          </button>
        </div>
        <RadioButtonList
          optionTimes={optionTimes}
          value={selectedOption}
          onChange={(option) => {
            setSelectedOption(option)
          }}
          label="Radio Button List"
          options={options}
        />
      </div>
      <div className={'flex gap-3'}>
        <Button label="Play" onClick={handlePlay} />
        <Button label="Pause" onClick={handlePause} />
        <Button label="Stop" onClick={handleStop} />
      </div>
    </div>
  )
}
