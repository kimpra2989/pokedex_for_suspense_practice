import usePokedex from '@/hooks/usePokedex'
import ActionButtons from '../../action-buttons'
import SearchInput from '../../search-input'
import SuspensePokemonInfo from '../suspense-pokemon-info'
import { Container } from './styles'
import { Suspense } from 'react'

function SuspensePokeDex() {
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
      <Suspense fallback={<div className="dimmed" />}>
        <SuspensePokemonInfo pokemonId={inputValue} />
      </Suspense>

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
export default SuspensePokeDex
