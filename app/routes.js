import React, {Component, PropTypes} from 'react'
import {Router, Route} from 'react-router'

import App from './components/app/index'
import Pokemon from './components/pokemon'
import PowerLevelCalculator from './components/power-level-calculator'

export default class Routes extends Component {

    render() {
        return (
            <Router history={this.props.history}>
                <Route component={App}>
                    <Route path="/" component={Pokemon}/>
                </Route>
            </Router>
        )
    }

}

Routes.propTypes = {
    history: PropTypes.object.isRequired,
}
