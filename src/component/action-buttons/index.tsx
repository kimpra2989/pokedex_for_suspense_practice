import Buttons from './styles'

interface Props {
  disablePrev?: boolean
  disableNext?: boolean
  searchPrevPokemon: () => void
  searchNextPokemon: () => void
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
