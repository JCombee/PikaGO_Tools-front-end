import React, { Component, PropTypes } from 'react'

class PokemonList extends Component {

    componentDidMount() {
      this.props.componentDidMount()
    }

    render() {
        return (<div>
            <h1>List of Pokemon</h1>
            {this.props.pokemon.keySeq(
              (pokemon, index) => (<Pokemon key={pokemon.get('index')}/>)
            )}
        </div>)
    }

}

PokemonList.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonList
