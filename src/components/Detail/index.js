import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { isEmpty } from 'functions/isEmpty'
import { useStore } from 'components/Detail/store'
import Header from 'components/global/Header'

export const Detail = () => {
  const [ isOffline, setIsOffline ] = useState(false)
  const { pokemon } = useParams()
  const { fetchPokemon, pokemonData } = useStore(state => ({
    pokemonData: state.pokemonData,
    fetchPokemon: state.fetchPokemon,
  }))

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsOffline(true)
    })

    fetchPokemon(pokemon)
  }, [])

  console.log(pokemonData)
  return (
    <main>
      <div className="container detail">
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
          {
            isEmpty(pokemonData) &&
            <div className="loader" key={0}>Loading ...</div>
          }
          {
            !isEmpty(pokemonData) &&
            <div className="card">
              <h2>{pokemon}</h2>
          
              <img src={pokemonData.sprites?.front_default} alt={`${pokemon} sprite`} />
              {
                pokemonData.types.map(type => (
                  <h3>{type.type.name}</h3>
                ))
              }
                         {
                pokemonData.stats.map(stat => (
                  <>
                    <h3>{stat.stat.name}</h3>
                    <h3>{stat.base_stat}</h3>
                  </>
                ))
              }
            </div>
          }
        </div>
      </div>
    </main>
  )
}