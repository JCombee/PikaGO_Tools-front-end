import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class PokemonList extends Component {

    render() {
        let pokemon = []
        this.props.pokemon.forEach(p => {
            pokemon.push(<Pokemon key={p.get('index')}/>)
        })
        return (<div>
            <h1>List of Pokemon</h1>
            {pokemon}
        </div>)
    }

}

PokemonList.propTypes = {
  pokemon: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {pokemon} = state
  return {
    pokemon: pokemon.get('data')
  }
}

export default connect(mapStateToProps)(PokemonList)
