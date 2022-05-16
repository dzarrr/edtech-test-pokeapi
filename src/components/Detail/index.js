import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { POKEMON_API_URL } from 'constants/url'
import Header from 'components/global/Header'
import Button from 'components/global/Button'

export const Detail = () => {
  const [ isOffline, setIsOffline ] = useState(false)
  const { pokemon } = useParams()
  const [ isLoading, setIsLoading ] = useState(true)
  const [ pokemonData, setPokemonData ] = useState({})


  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${POKEMON_API_URL}/${pokemon}`)
        .then(response => {
          response.json()
            .then(response => {
              setPokemonData(response)
              setIsLoading(false)
            })
            .catch(error => {
              console.log('failed to fetch data')
            })
        })
        .catch(error => {
          console.log('failed to fetch data')
        })
    }

    fetchData()
  }, [pokemon])

  useEffect(() => {
    window.addEventListener('offline', () => {
      setIsOffline(true)
    })
  })

  const handleClick = () => {
    //perlu cari cara supaya ga dobel2 itemnya
    let bookmarkedList = (localStorage.getItem('bookmark') === null) ? [] : JSON.parse(localStorage.getItem('bookmark'))
    bookmarkedList.push({
      name: pokemon
    })
    localStorage.setItem('bookmark', JSON.stringify(bookmarkedList))
  }

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
            isLoading ? 
              <div className="loader" key={0}>Loading ...</div>
              : (
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

                  <Button 
                    handleClick={handleClick}
                    text={'Add to Bookmark'}
                  >
                  </Button>
                </div>
              )
          }
        </div>
      </div>
    </main>
  )
}