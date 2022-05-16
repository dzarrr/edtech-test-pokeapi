import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/global/Header'
import ListItem  from 'components/global/ListItem'
 
export const Bookmark = () => {
  const [ pokemonList, setPokemonList ] = useState([])

  useEffect(() => {
    window.addEventListener('online', () => {
      console.log('anda terdeteksi online!!')
    })

    setPokemonList(JSON.parse(localStorage.getItem('bookmark')))
  }, [])


  return (
    <main>
      <div className="container home">
        <Header>
          Bookmarked Pokédex
        </Header>
        <div className='content'>
          {
            pokemonList.map((pokemon, key) => (
              <ListItem key={key}>
                <Link to={`/detail/${pokemon.name}`}>
                  <h4>
                  {pokemon.name}
                  </h4>
                </Link>
              </ListItem>
            ))
          }
        </div>
      </div>
    </main>
  )
}