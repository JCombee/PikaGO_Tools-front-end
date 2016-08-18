import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './style.scss'

import configureStore from './redux/configureStore'
import Routes from './routes';

injectTapEventPlugin()

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

const reactApp = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
, reactApp)
