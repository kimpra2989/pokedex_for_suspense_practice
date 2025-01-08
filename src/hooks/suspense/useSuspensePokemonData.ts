const cache = new Map()

const useSuspensePokemonData = (pokemonId: number) => {
  if (cache.has(pokemonId)) return cache.get(pokemonId)

  throw fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((res) => res.json())
    .then((res) => {
      // 에러 조건 처리
      // if (pokemonId === 111) throw new Error(`에러 실험용`)
      // if (Math.random() < 0.2) throw new Error('랜덤으로 뜨는 에러')

      const { name, id } = res

      cache.set(pokemonId, {
        name,
        id,
        image:
          res['sprites']['versions']['generation-v']['black-white']['animated'][
            'front_default'
          ],
      })
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export type FetchPokemonHookReturnType = ReturnType<
  typeof useSuspensePokemonData
>

export default useSuspensePokemonData
