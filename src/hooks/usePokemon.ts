import { useEffect, useState } from 'react'

interface PokemonDataType {
  name: string
  id: number
  image: string
}

const usePokemon = (pokemonId: string) => {
  const [pokemonData, setPokemonData] = useState<PokemonDataType>()

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      const result = await res.json()
      const { name, id } = result
      console.log('d', result)
      setPokemonData({
        name,
        id,
        image:
          result['sprites']['versions']['generation-v']['black-white'][
            'animated'
          ]['front_default'],
      })

      return result
    }
    fetchPokemon()
  }, [pokemonId])

  return {
    pokemonData,
  }
}

export default usePokemon
