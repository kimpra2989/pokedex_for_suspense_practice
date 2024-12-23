import { FetchPokemonHookReturnType } from '@/hooks/useFetchPokemonData'
import Warning_Icon from '/warning.svg'

interface Props {
  isLoading: FetchPokemonHookReturnType['isLoading']
  error: FetchPokemonHookReturnType['error']
  pokemonData?: FetchPokemonHookReturnType['pokemonData']
  retry: FetchPokemonHookReturnType['retry']
}

function PokemonInfo({ pokemonData, isLoading, error, retry }: Props) {
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
