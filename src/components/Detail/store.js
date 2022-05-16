import create from 'zustand'

import { POKEMON_API_URL } from 'constants/url'

export const useStore = create((set) => ({
  pokemonData: {},
  fetchPokemon: async(pokemon) => {
    await fetch(`${POKEMON_API_URL}/${pokemon}`)
      .then(response => {
        response.json()
          .then(response => {
            console.log(response)
            set({
              pokemonData: response,
            })
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