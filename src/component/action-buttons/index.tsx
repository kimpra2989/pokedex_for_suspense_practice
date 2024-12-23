import { PokedexHookReturnType } from '@/hooks/usePokedex'
import Buttons from './styles'

interface Props {
  disablePrev?: PokedexHookReturnType['isFirstPokemon']
  disableNext?: PokedexHookReturnType['isLastPokemon']
  searchPrevPokemon: PokedexHookReturnType['searchPrevPokemon']
  searchNextPokemon: PokedexHookReturnType['searchNextPokemon']
}

function ActionButtons({
  disablePrev,
  disableNext,
  searchNextPokemon,
  searchPrevPokemon,
}: Props) {
  return (
    <Buttons>
      <button
        disabled={disablePrev}
        onClick={searchPrevPokemon}
        className="button btn-prev"
      >
        &lt; Prev
      </button>
      <button
        disabled={disableNext}
        onClick={searchNextPokemon}
        className="button btn-next"
      >
        Next &gt;
      </button>
    </Buttons>
  )
}
export default ActionButtons
