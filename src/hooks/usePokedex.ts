import { Dispatch, FormEventHandler, SetStateAction, useState } from 'react'

const usePokedex = (setSearchKeyword: Dispatch<SetStateAction<string>>) => {
  const [inputValue, setInputValue] = useState('')

  const searchWithKeyword: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setSearchKeyword(inputValue)
    setInputValue('')
  }

  const searchPrevPokemon = () => {
    setSearchKeyword((prev) => String(+prev - 1))
  }

  const searchNextPokemon = () => {
    setSearchKeyword((prev) => String(+prev + 1))
  }

  return {
    inputValue,
    setInputValue,
    searchWithKeyword,
    searchPrevPokemon,
    searchNextPokemon,
  }
}

export default usePokedex
