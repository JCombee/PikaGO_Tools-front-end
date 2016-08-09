import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Routes from './routes';

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
        <Routes history={history}/>
    </Provider>
), document.getElementById('app'))