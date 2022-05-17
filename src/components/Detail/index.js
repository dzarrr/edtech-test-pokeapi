import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { POKEMON_API_URL } from 'constants/url'
import Header from 'components/global/Header'
import Button from 'components/global/Button'
import Card from 'components/global/Card'

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

  const addToBookmark = () => {
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
              <div className='loader' key={0}>Loading ...</div>
              : (
                <>
                  <Card className='card--pokemon'>
                    <h2>{pokemon}</h2>
                    <img src={pokemonData.sprites?.front_default} alt={`${pokemon} sprite`} />
                    <div className='type'>
                      {
                        pokemonData.types.map(type => (
                          <h4>{type.type.name}</h4>
                        ))
                      }
                    </div>
                    <div className='stats'>
                      {
                        pokemonData.stats.map((stat, index) => (
                          <div className='stats--item' key={index}>
                            <p>{stat.stat.name}</p>
                            <p>{stat.base_stat}</p>
                          </div>
                        ))
                      }
                    </div>
                  </Card>
                  <Button 
                    handleClick={addToBookmark}
                    text={'Add to Bookmark'}
                  >
                  </Button>
                </>
              )
          }
        </div>
      </div>
    </main>
  )
}