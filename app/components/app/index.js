import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {fetchPokemonIfNeeded} from './../../redux/pokemon/actions'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.props.dispatch(fetchPokemonIfNeeded())
    }

    render() {
      return this.props.children
    }

}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(App);
