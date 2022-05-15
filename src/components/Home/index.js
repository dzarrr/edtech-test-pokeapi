import InfiniteScroll from 'react-infinite-scroller'

import { useStore } from 'components/Home/store'

export const Home = () => {
  const { fetchPokemon, pokemonList, url } = useStore(state => ({
    pokemonList: state.pokemonList,
    fetchPokemon: state.fetchPokemon,
    url: state.url
  }))

  return (
    <>
    <h1>
      Pokédex
    </h1>
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {
          fetchPokemon(url)
        }}
        hasMore={url !== null}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        {
          pokemonList.map(pokemon => (
            <h1>{pokemon.name}</h1>
          ))
        }
      </InfiniteScroll>
    </div>
    </>
  )
}