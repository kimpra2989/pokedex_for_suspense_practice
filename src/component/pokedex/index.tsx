import useFetchPokemonData from '@/hooks/useFetchPokemonData'
import usePokedex from '@/hooks/usePokedex'
import ActionButtons from '../action-buttons'
import PokemonInfo from '../pokemon-info'
import SearchInput from '../search-input'
import { Container } from './styles'

function PokeDex() {
  const {
    inputValue,
    handleInputChange,
    searchNextPokemon,
    searchPrevPokemon,
    isFirstPokemon,
    isLastPokemon,
  } = usePokedex()

  const { PokemonData, isLoading, error } = useFetchPokemonData(inputValue)

  return (
    <Container>
      <PokemonInfo
        pokemonData={PokemonData}
        isLoading={isLoading}
        error={error}
      />

      <SearchInput value={inputValue} onChange={handleInputChange} />

      <ActionButtons
        disablePrev={isFirstPokemon}
        disableNext={isLastPokemon}
        searchPrevPokemon={searchPrevPokemon}
        searchNextPokemon={searchNextPokemon}
      />
    </Container>
  )
}
export default PokeDex
