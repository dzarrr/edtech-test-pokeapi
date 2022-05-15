import { useEffect  } from 'react'

import { useStore } from 'components/Home/store'

export const Home = () => {
  const { fetchPokemon, pokemonList } = useStore(state => ({
    pokemonList: state.pokemonList,
    fetchPokemon: state.fetchPokemon
  }))

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <>
    <h1>
      Pokédex
    </h1>
    <div>
      {pokemonList.map(pokemon => (
        <h1>{pokemon.name}</h1>
      ))}
    </div>
    </>
  )
}