import create from 'zustand'

import { POKEMON_API_URL } from 'constants/url'

export const useStore = create((set, get) => ({
  pokemonList: [],
  url: `${POKEMON_API_URL}?limit=100&offset=1`,
  fetchPokemon: async(url) => {
    await fetch(url)
      .then(response => {
        response.json()
          .then(response => {
            set(state => ({
              pokemonList: state.pokemonList.concat(response.results),
              url: response.next
            }))
          })
          .catch(error => {
            console.log('failed to fetch data')
          })
      })
      .catch(error => {
        console.log('failed to fetch data')
      })
  }
}))