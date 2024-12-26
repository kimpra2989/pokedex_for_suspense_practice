import useFetchPokemonData from '@/hooks/useFetchPokemonData'
import { PokedexHookReturnType } from '@/hooks/usePokedex'
import Warning_Icon from '/warning.svg'

interface Props {
  pokemonId: PokedexHookReturnType['inputValue']
}

function PokemonInfo({ pokemonId }: Props) {
  const { pokemonData, isLoading, error, retry } =
    useFetchPokemonData(pokemonId)

  if (isLoading) return <div className="dimmed" />

  if (error || !pokemonData)
    return (
      <>
        <div className="dimmed error" />
        <div className="error-message">
          <img src={Warning_Icon} alt="warning-icon" />
          오류 발생
          <img src={Warning_Icon} alt="warning-icon" />
          <br />
          <button onClick={retry} className="reset-button">
            재시도하기
          </button>
        </div>
      </>
    )

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
