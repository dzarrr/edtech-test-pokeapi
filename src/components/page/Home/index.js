import InfiniteScroll from 'react-infinite-scroller'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/global/Header'
import ListItem  from 'components/global/ListItem'
import Toast from 'components/global/Toast'
import { useStore } from 'components/page/Home/store'

export const Home = () => {
  const { fetchPokemon, pokemonList, url } = useStore(state => ({
    pokemonList: state.pokemonList,
    fetchPokemon: state.fetchPokemon,
    url: state.url
  }))
  const [ isPopupActive, setIsPopupActive ] = useState(false)

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsPopupActive(true)
      setTimeout(() => {
        setIsPopupActive(false)
      }, 10000)
    })

  }, [])

  return (
    <main>
      <div className="container home">
        <Header>
          Pokédex
        </Header>
        <Toast active={isPopupActive}>
          <p>
            Anda terdeteksi offline
          </p>
          <Link to="/bookmark">
            Ke halaman bookmark
          </Link>
        </Toast>
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
                  <Link to={`detail/${pokemon.name}`}>
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