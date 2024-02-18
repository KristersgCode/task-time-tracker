import DeleteIcon from '../assets/icons/delete.svg'
import TimeIcon from '../assets/icons/time.svg'

type RadioButtonProps = {
  label: string
  time: number
  checked: boolean
  onClick: () => void
  options: string[]
}

export function RadioButton({
  label,
  checked,
  time, // Time in seconds
  onClick
}: RadioButtonProps) {
  return (
    <div
      className="
      flex
      justify-between
      cursor-pointer
      bg-red-200
      p-3
      border-b-2
      "
    >
      <label>
        <input onChange={onClick} type="radio" value={'label'} checked={checked} />
        {label}
      </label>
      <div className="flex justify-center items-center ">
        <img src={TimeIcon} alt="Time" />
        <label style={{ marginLeft: 16 }}>{time}</label>
        <label style={{ marginLeft: 16 }}>02.12.24</label>
        <div style={{ marginLeft: 16 }}>
          <img src={DeleteIcon} alt="Time" />
        </div>
      </div>
    </div>
  )
}

type RadioButtonListProps = {
  label: string
  options: string[]
  onChange: (value: string) => void
  disabled?: boolean
  optionTimes: { [key: string]: number }
  value: string
}

export function RadioButtonList({
  label,
  options,
  value,
  optionTimes,
  onChange
}: RadioButtonListProps) {
  return (
    <div>
      <div>{label}</div>
      {options.map((option) => (
        <div>
          <RadioButton
            time={optionTimes[option]}
            key={option}
            label={option}
            checked={value === option}
            onClick={() => onChange(option)}
            options={options}
          />
        </div>
      ))}
    </div>
  )
}
