import { ChangeEventHandler } from 'react'

interface Props {
  value: number
  onChange: ChangeEventHandler<HTMLInputElement>
}

function SearchInput({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      type="number"
      min={1}
      max={649}
      placeholder="input Number"
    />
  )
}
export default SearchInput
