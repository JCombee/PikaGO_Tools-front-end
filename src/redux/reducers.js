import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import { pokemon } from './pokemon/reducers'
import { bag } from './bag/reducers'

const rootReducer = combineReducers({
    routing: routerReducer,
    pokemon,
    bag
})

export default rootReducer
