import {CONFIG} from './../../config'

export const POKEMON = {
    REQUEST: 'POKEMON.REQUEST',
    RECEIVE: 'POKEMON.RECEIVE',
}

function requestPokemon() {
    return {
        type: POKEMON.REQUEST
    }
}

function receivePokemon(pokemon) {
    return {
        type: POKEMON.RECEIVE,
        payload: pokemon
    }
}

function fetchPokemon() {
    return dispatch => {
        dispatch(requestPokemon())
        fetch(CONFIG.ENDPOINT)
          .then(json => json.json())
          .then(r => dispatch(receivePokemon(r.results)))
    }
}

function shouldFetchPokemon(state) {
    if (!state.pokemon.get('isFetching')) {
        return true
    }
    return state.pokemon.get('data').length <= 0
}

export function fetchPokemonIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPokemon(getState())) {
      return dispatch(fetchPokemon())
    }
  }
}
