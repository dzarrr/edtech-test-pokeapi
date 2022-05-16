import InfiniteScroll from 'react-infinite-scroller'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/global/Header'
import ListItem  from 'components/global/ListItem'
import { useStore } from 'components/Home/store'

export const Home = () => {
  const { fetchPokemon, pokemonList, url } = useStore(state => ({
    pokemonList: state.pokemonList,
    fetchPokemon: state.fetchPokemon,
    url: state.url
  }))
  const [ isOffline, setIsOffline ] = useState(false)

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsOffline(true)
    })

  }, [])

  return (
    <main>
      <div className="container home">
        <Header>
          Pokédex
        </Header>
        {
          isOffline &&
            <div>
              Anda terdeteksi offline
              <Link to="/bookmark">
                Load halaman bookmark
              </Link>
            </div>
        }
        <div className='content'>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              fetchPokemon(url)
            }}
            hasMore={url !== null}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {
              pokemonList.map((pokemon, key) => (
                <ListItem key={key}>
                  <Link to="/bookmark">
                    <h4>
                    {pokemon.name}
                    </h4>
                  </Link>
                </ListItem>
              ))
            }
          </InfiniteScroll>
        </div>
      </div>
    </main>
  )
}