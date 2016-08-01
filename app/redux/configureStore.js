import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'

const loggerMiddleware = createLogger();

export default function configureStore(history) {
    const routerCreatedMiddleware = routerMiddleware(history);
    return createStore(
        rootReducer,
        undefined,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            routerCreatedMiddleware
        )
    );
}
