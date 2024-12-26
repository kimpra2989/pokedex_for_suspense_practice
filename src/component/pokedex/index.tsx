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

  return (
    <Container>
      <PokemonInfo pokemonId={inputValue} />

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
