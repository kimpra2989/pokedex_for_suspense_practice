import { useState } from 'react'
import { Buttons, Container } from './styles'
import usePokemon from '@/hooks/usePokemon'
import usePokedex from '@/hooks/usePokedex'

function PokeDex() {
  const [searchKeyword, setSearchKeyword] = useState('1')
  const { pokemonData } = usePokemon(searchKeyword)

  const {
    inputValue,
    setInputValue,
    searchWithKeyword,
    searchNextPokemon,
    searchPrevPokemon,
  } = usePokedex(setSearchKeyword)

  return (
    <>
      <Container>
        <img src={pokemonData?.image} alt="pokemon" className="pokemon_image" />

        <h1 className="pokemon_data">
          {pokemonData?.id}. {pokemonData?.name}
        </h1>

        <form onSubmit={searchWithKeyword}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="search"
            placeholder="Name or Number"
          />
        </form>

        <Buttons>
          <button className="button btn-prev" onClick={searchPrevPokemon}>
            &lt; Prev
          </button>
          <button className="button btn-next" onClick={searchNextPokemon}>
            Next &gt;
          </button>
        </Buttons>
      </Container>
    </>
  )
}
export default PokeDex
