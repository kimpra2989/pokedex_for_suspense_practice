import { FIRST_POKEMON_INDEX, LAST_POKEMON_INDEX } from '@/constants'
import { ChangeEventHandler, useState } from 'react'

const usePokedex = () => {
  const [inputValue, setInputValue] = useState<number>(1)

  const isFirstPokemon = inputValue === FIRST_POKEMON_INDEX
  const isLastPokemon = inputValue === LAST_POKEMON_INDEX

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = +e.target.value
    if (value > LAST_POKEMON_INDEX) return setInputValue(LAST_POKEMON_INDEX)
    if (value < FIRST_POKEMON_INDEX) return setInputValue(FIRST_POKEMON_INDEX)

    setInputValue(value)
  }

  const searchPrevPokemon = () => {
    if (isFirstPokemon) return
    setInputValue((prev) => prev - 1)
  }

  const searchNextPokemon = () => {
    if (isLastPokemon) return
    setInputValue((prev) => prev + 1)
  }

  return {
    inputValue,
    handleInputChange,
    searchNextPokemon,
    searchPrevPokemon,
    isFirstPokemon,
    isLastPokemon,
  }
}

export default usePokedex
