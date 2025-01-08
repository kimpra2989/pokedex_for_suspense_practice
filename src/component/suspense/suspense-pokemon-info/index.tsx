import { PokedexHookReturnType } from '@/hooks/usePokedex'
import useSuspensePokemonData from '@/hooks/suspense/useSuspensePokemonData'

interface Props {
  pokemonId: PokedexHookReturnType['inputValue']
}

function SuspensePokemonInfo({ pokemonId }: Props) {
  const pokemonData = useSuspensePokemonData(pokemonId)

  return (
    <>
      <img src={pokemonData?.image} alt="pokemon" className="pokemon_image" />

      <h1 className="pokemon_data">
        {pokemonData?.id}. {pokemonData?.name}
      </h1>
    </>
  )
}
export default SuspensePokemonInfo
