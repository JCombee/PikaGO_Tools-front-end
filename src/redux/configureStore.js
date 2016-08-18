import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(history, initialState = {}) {
  const routerCreatedMiddleware = routerMiddleware(history)
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerCreatedMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
