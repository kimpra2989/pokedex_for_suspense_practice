import { PokedexHookReturnType } from '@/hooks/usePokedex'

interface Props {
  value: PokedexHookReturnType['inputValue']
  onChange: PokedexHookReturnType['handleInputChange']
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
