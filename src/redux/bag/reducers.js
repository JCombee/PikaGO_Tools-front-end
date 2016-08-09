import Immutable from 'immutable'

import { BAG } from './actions'

const initialState = Immutable.Map()

export function bag(state = initialState, { payload, type }) {
  switch (type) {
    case BAG.ADD :
      return state.set(pokemonId, Immutable.Map({
        ammount: 0
      }))
    case BAG.SET :
      return state.set(pokemonId, Immutable.Map({
        ammount: payload.ammount
      }))
    case BAG.REMOVE :
      return state.delete(payload.pokemonId)
    default :
      return state
  }
}
