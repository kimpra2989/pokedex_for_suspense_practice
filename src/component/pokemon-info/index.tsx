import { PokemonDataType } from '@/types'

interface Props {
  isLoading: boolean
  error: string | null
  pokemonData?: PokemonDataType
}

function PokemonInfo({ pokemonData, isLoading, error }: Props) {
  if (isLoading) return <p>Loading...</p>
  if (error || !pokemonData) return <p>Error: {error}</p>

  return (
    <>
      <img src={pokemonData.image} alt="pokemon" className="pokemon_image" />

      <h1 className="pokemon_data">
        {pokemonData.id}. {pokemonData.name}
      </h1>
    </>
  )
}
export default PokemonInfo
