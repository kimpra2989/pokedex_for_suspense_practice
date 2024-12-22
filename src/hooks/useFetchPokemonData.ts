import { PokemonDataType } from '@/types'
import { useEffect, useState } from 'react'

/**
 * 포켓몬 이름, 번호, 사진 주소를 불러오는 커스텀 훅
 * 
 * 20% 확률로 아무 이유 없이 에러가 남
 */
const useFetchPokemonData = (pokemonId: number) => {
  const [data, setData] = useState<PokemonDataType>()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        )

        if (Math.random() < 0.2) throw new Error('랜덤으로 뜨는 에러')

        if (!res.ok) throw new Error(`네트워크 에러`)

        const result = await res.json()
        const { name, id } = result

        setData({
          name,
          id,
          image:
            result['sprites']['versions']['generation-v']['black-white'][
              'animated'
            ]['front_default'],
        })
      } catch (err) {
        setError((err as Error).message || 'An unknown error occurred.')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [pokemonId])

  return {
    pokemonId,
    PokemonData: data,
    isLoading,
    error,
  }
}

export default useFetchPokemonData
