import create from 'zustand'

import { POKEMON_API_URL } from 'constants/url'

export const useStore = create((set) => ({
  pokemonList: [],
  fetchPokemon: async() => {
    await fetch(`${POKEMON_API_URL}?limit=100&offset=1`).then(response => {
      response.json().then(response => {
        set(state => ({
          pokemonList: state.pokemonList.concat(response.results),
        }))
      })
    })
  }
}))