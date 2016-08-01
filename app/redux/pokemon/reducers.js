import Immutable from 'immutable'

import {POKEMON} from './actions'

const initialState = Immutable.Map({
    'isFetching': false,
    'data': Immutable.Map()
})

export function pokemon(state = initialState, action) {
    switch (action.type) {
        case POKEMON.REQUEST :
            return state.set('isFetching', true)
        case POKEMON.RECEIVE :
            let data = Immutable.Map()
            action.payload.forEach(pokemon => {
                data = data.push(Immutable.Map(pokemon))
            })
            return state.merge({
                'isFetching': false,
                data
            })
        default :
            return state
    }
}
