import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

import {pokemon} from './pokemon/reducers'

const rootReducer = combineReducers({
    routing: routerReducer,
    pokemon
})

export default rootReducer
