import { PokedexHookReturnType } from '@/hooks/usePokedex'
import useSuspensePokemonData from '@/hooks/suspense/useSuspensePokemonData'
import SuspensedImage from '../suspended-image'
import { PokemonDataType } from '@/types'

interface Props {
  pokemonId: PokedexHookReturnType['inputValue']
}

function SuspensePokemonInfo({ pokemonId }: Props) {
  const pokemonData = useSuspensePokemonData(pokemonId) as PokemonDataType

  return (
    <>
      {/* <img src={pokemonData?.image} alt="pokemon" className="pokemon_image" /> */}
      <SuspensedImage url={pokemonData.image} />

      <h1 className="pokemon_data">
        {pokemonData?.id}. {pokemonData?.name}
      </h1>
    </>
  )
}
export default SuspensePokemonInfo
