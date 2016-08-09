import React, {Component, PropTypes} from 'react'
import {Router, Route} from 'react-router'

import App from './components/app/index'
import PokemonList from './components/pokemon/PokemonListContainer'
import PowerLevelCalculator from './components/power-level-calculator'

export default class Routes extends Component {

    render() {
        return (
            <Router history={this.props.history}>
                <Route component={App}>
                    <Route path="/" component={PokemonList}/>
                </Route>
            </Router>
        )
    }

}

Routes.propTypes = {
    history: PropTypes.object.isRequired,
}
